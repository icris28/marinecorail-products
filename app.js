/* =====================================================================
   Marine Corail – Catalogue Sea-Doo / Can-Am
   Moteur d'affichage v0.2
   - Aucune donnée produit ici : tout vient de vehicles.js, prices.js,
     inventory.js. Un ajout de véhicule ne nécessite aucune modification
     de ce fichier.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- Données ------------------------------------------------ */
  const VEHICLES = (window.MC_VEHICLES || window.VEHICLES || []).filter(v => v.active !== false);
  const PRICES = window.MC_PRICES || window.PRICES || {};
  const INVENTORY = window.MC_INVENTORY || window.INVENTORY || {};

  const STATUS_LABELS = { stock: "En stock", arrivage: "Arrivage", precommande: "Pré-commande",
                          commande: "Sur commande", reserve: "Réservé", rupture: "Rupture" };
  // Compatibilité avec les anciens codes de statut (v0.1).
  const STATUS_ALIASES = { arrival: "arrivage", reserved: "reserve", out: "rupture" };

  const BRANDS = window.MC_BRANDS || [];
  const FAMILY_LABELS = window.MC_FAMILIES || {};
  const brandById = id => BRANDS.find(b => b.id === id) || BRANDS[0] || { id: "all", label: "Tous", ui: {} };

  const MAX_COMPARE = 3;

  // Priorité d'affichage : les unités en stock remontent en tête de liste,
  // le reste garde l'ordre du catalogue (tri stable) à l'intérieur de
  // chaque statut.
  const STATUS_PRIORITY = { stock: 0, arrivage: 1, precommande: 2, commande: 3, reserve: 4, rupture: 5 };
  const PRICE_NOTE = "Les prix affichés sont donnés à titre indicatif et n’ont pas de valeur contractuelle. Ils peuvent être modifiés à tout moment. Seuls les prix affichés en magasin par Marine Corail font foi.";

  /* ---------- État ---------------------------------------------------- */
  const state = {
    brand: "all",
    category: "all",
    status: "all",
    seats: "all",
    query: "",
    compare: [],          // ids, dans l'ordre de sélection
    diffOnly: false,
    colorChoice: {}       // id -> index choisi dans v.colors (coloris à 2 choix, précommande)
  };

  const params = new URLSearchParams(location.search);
  document.body.dataset.mode = params.has("kiosk") ? "kiosk" : params.has("app") ? "app" : "web";

  // Mode borne : plein écran dès le premier contact (l'API l'exige) ; le
  // bouton retour Android ferme les panneaux au lieu de quitter la page
  // (cf. modalOpen/modalClose plus bas).
  if (document.body.dataset.mode === "kiosk") {
    const goFullscreen = () => {
      const root = document.documentElement;
      if (!document.fullscreenElement && root.requestFullscreen) {
        root.requestFullscreen()
          .then(() => {
            // Verrouille l'orientation portrait : la borne reste
            // volontairement montée en vertical (confirmé par Christophe le
            // 22/09, après une tentative précédente erronée de forcer le
            // paysage — cf. doc de suivi). Ce verrou évite juste qu'une
            // rotation auto Android accidentelle ne fasse basculer l'écran
            // en paysage. L'API Screen Orientation n'est utilisable qu'en
            // plein écran sur la plupart des navigateurs, d'où l'enchaînement
            // ici. Best-effort : pas supportée partout, échoue en silence si
            // indisponible.
            if (screen.orientation && screen.orientation.lock) {
              screen.orientation.lock("portrait").catch(() => {});
            }
          })
          .catch(() => {});
      }
      window.removeEventListener("pointerdown", goFullscreen);
    };
    window.addEventListener("pointerdown", goFullscreen, { once: true });
  }

  // Diagnostic embarqué (?debug=1, en plus de ?kiosk=1) : petit badge en
  // surimpression affichant le viewport réel et l'état des media queries
  // borne, pour diagnostiquer le bug récurrent "2 colonnes au lieu de 3"
  // sans dépendre d'un réglage Android externe. N'a aucun effet sans le
  // paramètre debug=1 (jamais affiché en usage normal en boutique).
  if (params.has("debug")) {
    const mqPortraitFallback = window.matchMedia(
      "(pointer: coarse) and (orientation: portrait) and (min-width: 500px) and (max-width: 900px)"
    );
    const mqLandscape3col = window.matchMedia(
      "(pointer: coarse) and (orientation: landscape) and (min-width: 860px) and (max-width: 1279px)"
    );
    const mqPointerCoarse = window.matchMedia("(pointer: coarse)");
    const mqPortrait = window.matchMedia("(orientation: portrait)");

    const badge = document.createElement("div");
    badge.id = "mcDebugBadge";
    badge.style.cssText = [
      "position:fixed", "top:4px", "left:4px", "z-index:999999",
      "background:rgba(0,0,0,.82)", "color:#0f0", "font:11px/1.4 monospace",
      "padding:6px 8px", "border-radius:6px", "pointer-events:none",
      "white-space:pre", "max-width:70vw", "overflow:auto"
    ].join(";");
    document.documentElement.appendChild(badge);

    const refresh = () => {
      const catalogEl = document.querySelector(".catalog");
      const catalogCols = catalogEl ? getComputedStyle(catalogEl).gridTemplateColumns : "(pas de .catalog)";
      const bodyTransform = getComputedStyle(document.body).transform;
      const lines = [
        `innerWidth x innerHeight: ${window.innerWidth} x ${window.innerHeight}`,
        `screen.width x height: ${screen.width} x ${screen.height}`,
        `devicePixelRatio: ${window.devicePixelRatio}`,
        `screen.orientation.type: ${(screen.orientation && screen.orientation.type) || "n/a"}`,
        `matchMedia orientation:portrait: ${mqPortrait.matches}`,
        `matchMedia pointer:coarse: ${mqPointerCoarse.matches}`,
        `matchMedia fallback-portrait-css (v018): ${mqPortraitFallback.matches}`,
        `matchMedia landscape-3col-css: ${mqLandscape3col.matches}`,
        `body transform (calculé): ${bodyTransform}`,
        `.catalog grid-template-columns (calculé): ${catalogCols}`,
        `data-mode: ${document.body.dataset.mode}`
      ];
      badge.textContent = lines.join("\n");
    };
    refresh();
    window.addEventListener("resize", refresh);
    window.addEventListener("orientationchange", refresh);
    setInterval(refresh, 500);
  }

  /* ---------- Utilitaires -------------------------------------------- */
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

  function esc(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // 1495000 -> "1 495 000 F CFP"
  function formatXPF(value) {
    if (value == null || isNaN(value)) return null;
    const grouped = Math.round(Number(value)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return grouped + " F CFP";
  }
  window.formatXPF = formatXPF;

  function priceHTML(id, cls) {
    // PRICES[id] est soit un nombre (prix ferme), soit null (prix sur
    // demande), soit { from: <nombre> } pour un prix indicatif "à partir de"
    // (modèles fabriqués/livrés à la commande dont le tarif dépend de la
    // motorisation/des options).
    const entry = PRICES[id];
    const estApprox = entry != null && typeof entry === "object";
    const montant = estApprox ? entry.from : entry;
    const formatted = formatXPF(montant);
    if (!formatted) return `<div class="${cls} na">Prix sur demande</div>`;
    const prefixe = estApprox ? `<span class="price-approx-label">À partir de</span>` : "";
    return `<div class="${cls}">${prefixe}${esc(formatted)}<small>TTC</small></div>`;
  }

  // Coloris affiché sous la fiche/carte :
  // - inv.color (inventory.js) = coloris réel d'une unité précise en stock,
  //   affiché tel quel (aucun choix possible, c'est un fait).
  // - v.colors (vehicles.js) = coloris proposés par le constructeur pour un
  //   modèle en précommande. Un seul coloris -> affiché tel quel. Deux
  //   coloris ou plus -> sélecteur cliquable (data-color-pick), pour que la
  //   personne qui consulte le catalogue choisisse lequel afficher.
  function colorHTML(v, cls) {
    const inv = inventoryOf(v.id);
    if (inv.color) return `<div class="${cls}">Coloris : ${esc(inv.color)}</div>`;

    const colors = v.colors || [];
    if (colors.length === 0) return "";
    if (colors.length === 1) return `<div class="${cls}">Coloris : ${esc(colors[0].name)}</div>`;

    const idx = state.colorChoice[v.id] ?? 0;
    const options = colors.map((c, i) => `
      <button type="button" class="color-swatch ${i === idx ? "is-active" : ""}"
              data-color-pick="${esc(v.id)}:${i}" aria-pressed="${i === idx}">${esc(c.name)}</button>`
    ).join("");
    return `<div class="${cls} has-color-picker">
      <span class="color-picker-label">Coloris :</span>
      <div class="color-picker">${options}</div>
    </div>`;
  }

  function inventoryOf(id) {
    const inv = INVENTORY[id] || {};
    const status = STATUS_ALIASES[inv.status] || inv.status || "";
    return { ...inv, status };
  }

  function statusHTML(id, extra = "") {
    const { status } = inventoryOf(id);
    if (!status || !STATUS_LABELS[status]) return "";
    return `<span class="status ${esc(status)} ${extra}">${esc(STATUS_LABELS[status])}</span>`;
  }

  function vehicleById(id) { return VEHICLES.find(v => v.id === id); }

  // Ligne « année · catégorie · places ». L'année est facultative : les fiches
  // Highfield ne portent pas de millésime, on n'en invente pas.
  function metaLigne(v, court) {
    const bouts = [];
    if (v.year) bouts.push(String(v.year));
    if (v.category) bouts.push(v.category);
    if (v.seats != null) bouts.push(v.seats + (court ? " pl." : (v.seats > 1 ? " places" : " place")));
    return bouts.join(" · ");
  }

  // Silhouette neutre par famille de produit, en attendant le visuel officiel.
  const SHAPES = {
    pwc: '<path d="M8 50 C 30 40, 60 30, 112 44 L 118 54 H 12 Z" fill="currentColor"/><path d="M56 40 l 14 -22 h 18 l 8 22" fill="currentColor" opacity=".6"/>',
    atv: '<path d="M16 48 h 88 l -10 -18 h -68 z" fill="currentColor"/><circle cx="34" cy="54" r="11" fill="currentColor"/><circle cx="86" cy="54" r="11" fill="currentColor"/><path d="M40 30 l 12 -14 h 18 l 10 14" fill="currentColor" opacity=".6"/>',
    rib: '<path d="M6 40 h 108 a 10 10 0 0 1 -6 16 H 14 a 10 10 0 0 1 -8 -16 z" fill="currentColor"/><path d="M30 40 v -12 h 46 v 12 z" fill="currentColor" opacity=".6"/><path d="M84 38 l 6 -16 h 8 l -4 16 z" fill="currentColor" opacity=".45"/>',
    outboard: '<rect x="58" y="6" width="34" height="22" rx="8" fill="currentColor"/><path d="M58 14 L20 19 a4 4 0 0 0 0 8 L58 22 Z" fill="currentColor" opacity=".6"/><rect x="69" y="28" width="12" height="30" fill="currentColor" opacity=".6"/><path d="M64 58 h22 l-4 9 a13 13 0 0 1 -14 0 z" fill="currentColor" opacity=".45"/>'
  };
  SHAPES.ssv = SHAPES.atv;

  function placeholderHTML(v) {
    const shape = SHAPES[v.family] || SHAPES.pwc;
    return `<div class="placeholder" aria-hidden="true"><svg viewBox="0 0 120 72">${shape}</svg><small>Visuel à venir</small></div>`;
  }

  // Photo à afficher pour ce véhicule : celle du coloris choisi si un
  // sélecteur de coloris est actif (v.colors à 2+ entrées avec image, et pas
  // de coloris d'unité réelle déjà fixé dans l'inventaire), sinon la photo
  // principale de la fiche.
  function currentImage(v) {
    const inv = inventoryOf(v.id);
    if (!inv.color) {
      const colors = v.colors || [];
      if (colors.length > 1) {
        const chosen = colors[state.colorChoice[v.id] ?? 0];
        if (chosen && chosen.image) return chosen.image;
      }
    }
    return v.image;
  }

  // Image officielle si présente, sinon placeholder de marque (sans erreur visible).
  function visualHTML(v) {
    const img = currentImage(v);
    if (!img) return placeholderHTML(v);
    return `<img src="${esc(img)}" alt="${esc(v.brandLabel + " " + v.model)}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{innerHTML:this.dataset.fallback}).firstChild)" data-fallback="${esc(placeholderHTML(v))}">`;
  }

  // Carrousel photo pour la fiche détaillée (v.gallery, ex. gamme Highfield
  // Sport) : null si le modèle n'a pas de galerie, pour que l'appelant
  // retombe sur visualHTML(v) (une seule photo, comme avant).
  function galleryHTML(v) {
    const gallery = v.gallery || [];
    if (gallery.length === 0) return null;
    const slides = gallery.map((src, i) => `
      <div class="gallery-slide">
        <img src="${esc(src)}" alt="${esc(v.brandLabel + " " + v.model)} – photo ${i + 1}/${gallery.length}" loading="${i === 0 ? "eager" : "lazy"}">
      </div>`).join("");
    const dots = gallery.map((_, i) => `
      <button type="button" class="gallery-dot ${i === 0 ? "is-active" : ""}" data-gallery-dot="${i}" aria-label="Photo ${i + 1}"></button>`).join("");
    return `<div class="detail-gallery">
      <div class="gallery-track">${slides}</div>
      <button type="button" class="gallery-nav gallery-prev" data-gallery-prev aria-label="Photo précédente">‹</button>
      <button type="button" class="gallery-nav gallery-next" data-gallery-next aria-label="Photo suivante">›</button>
      <div class="gallery-dots">${dots}</div>
    </div>`;
  }

  /* ---------- Panneaux modaux (sans <dialog>) ------------------------ */
  // Mode borne : un seul état d'historique pour la session « panneau ouvert »
  // (même si openDetail() est rappelée plusieurs fois sur le panneau déjà
  // ouvert, par ex. en basculant la sélection comparateur) : le bouton retour
  // Android ferme le panneau plutôt que de quitter la borne.
  let kioskHistoryPushed = false;
  function modalOpen(el) {
    el.hidden = false;
    document.body.classList.add("modal-open");
    el.querySelector(".dialog-shell").scrollTop = 0;
    if (document.body.dataset.mode === "kiosk" && !kioskHistoryPushed) {
      history.pushState({ mcModal: true }, "");
      kioskHistoryPushed = true;
    }
  }
  function modalClose(el, opts) {
    if (el.hidden) return;
    el.hidden = true;
    const stillOpen = !!$(".modal:not([hidden])");
    if (!stillOpen) document.body.classList.remove("modal-open");
    const fromPopstate = opts && opts.fromPopstate;
    if (!stillOpen && document.body.dataset.mode === "kiosk" && kioskHistoryPushed) {
      kioskHistoryPushed = false;
      if (!fromPopstate) history.back();
    }
  }
  function modalIsOpen(el) { return !el.hidden; }

  // Bouton retour Android en mode borne : ferme le panneau ouvert.
  window.addEventListener("popstate", () => {
    const open = $(".modal:not([hidden])");
    if (open) modalClose(open, { fromPopstate: true });
  });

  let toastTimer = null;
  function toast(message) {
    const el = $("#toast");
    el.textContent = message;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 3200);
  }

  /* ---------- Thèmes générés depuis brands.js ------------------------ */
  // Statuts par défaut selon la luminosité de l'univers.
  const DARK_STATUS = { ok: "#4fd18a", info: "#6cb1ff", warn: "#f0b64a", danger: "#ff6b5b", precommande: "#c9a3ff" };

  function brandThemeCSS(b) {
    const ui = b.ui || {};
    const status = b.status || (b.dark ? DARK_STATUS : null);
    const page = [
      `--bg: ${ui.bg}`,
      `--bg-hero: ${ui.bgHero}`,
      `--surface: ${ui.surface}`,
      `--surface-2: ${ui.surface2}`,
      `--ink: ${ui.ink}`,
      `--muted: ${ui.muted}`,
      `--line: ${ui.line}`,
      `--accent: ${b.dark ? b.accent : ui.accent || ui.ink}`,
      `--accent-ink: ${b.dark ? b.accentInk : ui.accentInk || ui.surface}`,
      `--accent-soft: ${ui.accentSoft}`,
      `--chip: ${ui.chip}`,
      `--chip-ink: ${ui.chipInk}`,
      `--focus: ${ui.focus}`,
      ui.eyebrow ? `--eyebrow: ${ui.eyebrow}` : "",
      b.texture ? `--bg-texture: ${b.texture}` : "",
      b.dark ? "--shadow: 0 8px 28px rgba(0,0,0,.45)" : "",
      status ? `--ok: ${status.ok}; --info: ${status.info}; --warn: ${status.warn}; --danger: ${status.danger}` + (status.precommande ? `; --precommande: ${status.precommande}` : "") : ""
    ].filter(Boolean).join("; ");

    const rules = [`body[data-brand="${b.id}"] { ${page}; }`];
    if (b.id === "all") return rules.join("\n");

    const card = [
      `--card-accent: ${b.accent}`,
      `--card-accent-ink: ${b.accentInk}`,
      `--card-ink: ${ui.ink}`,
      `--card-muted: ${ui.muted}`,
      `--card-chip: ${ui.chip}`,
      `--card-chip-ink: ${ui.chipInk}`,
      `--card-surface: ${ui.surface}`,
      `--card-line: ${ui.line}`,
      `--card-visual: ${b.visual}`,
      `--img-fit: ${b.imageFit || "contain"}`,
      `--img-pad: ${b.imageFit === "cover" ? "0" : "18px"}`,
      b.dark ? `--card-btn: ${b.accent}; --card-btn-ink: ${b.accentInk}; --card-selected-ink: ${b.accentInk}` : "",
      status ? `--card-ok: ${status.ok}; --card-info: ${status.info}; --card-warn: ${status.warn}; --card-danger: ${status.danger}` + (status.precommande ? `; --card-precommande: ${status.precommande}` : "") : ""
    ].filter(Boolean).join("; ");

    rules.push(`.vehicle-card.${b.id} { ${card}; }`);
    rules.push(`.dialog-shell.${b.id} { ${page}; ${card}; background: ${ui.surface}; color: ${ui.ink}; }`);
    rules.push(`.cmp-visual.${b.id} { background: ${b.visual}; color: ${ui.muted}; }`);
    const tab = b.tab || {};
    rules.push(`.brand-tab[data-brand="${b.id}"].is-active { background: ${tab.bg || b.accent}; color: ${tab.ink || b.accentInk};` +
      (tab.underline ? ` box-shadow: inset 0 -3px 0 ${tab.underline};` : "") + ` }`);
    return rules.join("\n");
  }

  function injectBrandStyles() {
    const style = document.createElement("style");
    style.id = "mc-brand-themes";
    style.textContent = BRANDS.map(brandThemeCSS).join("\n");
    document.head.appendChild(style);
  }

  function buildBrandTabs() {
    $("#brandTabs").innerHTML = BRANDS.map(b =>
      `<button class="brand-tab ${b.id === state.brand ? "is-active" : ""}" type="button" data-brand="${esc(b.id)}" aria-pressed="${b.id === state.brand}">${esc(b.label)}</button>`
    ).join("");
    $$(".brand-tab").forEach(t => t.addEventListener("click", () => applyBrand(t.dataset.brand)));
  }

  /* ---------- Thème & bandeau ---------------------------------------- */
  function applyBrand(brand) {
    state.brand = brand;
    document.body.dataset.brand = brand;
    // Sert au cartouche blanc du logo Marine Corail sur les univers sombres.
    document.body.dataset.tone = brandById(brand).dark ? "dark" : "light";
    $$(".brand-tab").forEach(b => {
      const active = b.dataset.brand === brand;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });
    const marque = brandById(brand);
    const meta = marque.hero || {};
    $("#heroEyebrow").textContent = meta.eyebrow || "";
    $("#heroTitle").textContent = meta.title || "";
    // Logotype officiel quand la marque en a un ; le titre reste dans le DOM
    // pour les lecteurs d'écran et le référencement.
    const logo = $("#heroLogo");
    if (marque.logo) {
      logo.src = marque.logo; logo.alt = meta.title || marque.label; logo.hidden = false;
      $("#heroTitle").classList.add("visually-hidden");
    } else {
      logo.hidden = true; logo.removeAttribute("src");
      $("#heroTitle").classList.remove("visually-hidden");
    }
    $("#heroSub").textContent = meta.sub || "";
    const themeMeta = $('meta[name="theme-color"]');
    if (themeMeta) themeMeta.content = (brandById(brand).ui || {}).bg || "#0b1f33";
    state.category = "all";
    buildCategoryFilters();
    render();
  }

  /* ---------- Filtres générés depuis les données --------------------- */
  function brandScoped() {
    return VEHICLES.filter(v => state.brand === "all" || v.brand === state.brand);
  }

  function buildCategoryFilters() {
    const cats = [...new Set(brandScoped().map(v => v.category).filter(Boolean))];
    const row = $("#categoryFilters");
    if (cats.length < 2) { row.innerHTML = ""; return; }
    row.innerHTML = [`<button class="filter-chip ${state.category === "all" ? "is-active" : ""}" data-category="all" type="button">Toutes catégories</button>`]
      .concat(cats.map(c => `<button class="filter-chip ${state.category === c ? "is-active" : ""}" data-category="${esc(c)}" type="button">${esc(c)}</button>`))
      .join("");
    $$("[data-category]", row).forEach(b => b.addEventListener("click", () => {
      state.category = b.dataset.category;
      $$("[data-category]", row).forEach(x => x.classList.toggle("is-active", x === b));
      render();
    }));
  }

  function buildSeatsFilter() {
    const seats = [...new Set(VEHICLES.map(v => v.seats).filter(n => n != null))].sort((a, b) => a - b);
    const sel = $("#seatsFilter");
    sel.innerHTML = '<option value="all">Toutes</option>' +
      seats.map(n => `<option value="${n}">${n} ${n > 1 ? "places" : "place"}</option>`).join("");
    const boite = sel.closest(".select-box");
    boite.hidden = seats.length < 2;
    boite.style.display = boite.hidden ? "none" : "";
  }

  function matches(v) {
    const inv = inventoryOf(v.id);
    if (state.brand !== "all" && v.brand !== state.brand) return false;
    if (state.category !== "all" && v.category !== state.category) return false;
    if (state.status !== "all" && inv.status !== state.status) return false;
    if (state.seats !== "all" && String(v.seats) !== state.seats) return false;
    if (state.query) {
      const hay = [v.brandLabel, v.model, v.year, v.category, inv.color, ...(v.colors || []).map(c => c.name), ...(v.highlights || [])]
        .concat(Object.values(v.specs || {}).flatMap(sec => Object.values(sec)))
        .join(" ").toLowerCase();
      if (!hay.includes(state.query)) return false;
    }
    return true;
  }

  /* ---------- Cartes catalogue ---------------------------------------- */
  function cardHTML(v) {
    const inv = inventoryOf(v.id);
    const selected = state.compare.includes(v.id);
    const otherFamily = state.compare.length > 0 && vehicleById(state.compare[0]).family !== v.family;
    return `
<article class="vehicle-card ${esc(v.brand)}" data-id="${esc(v.id)}">
  <div class="vehicle-visual">${visualHTML(v)}</div>
  <div class="vehicle-body">
    <div class="vehicle-meta">
      <span class="brand-badge">${esc(v.brandLabel)}</span>
      ${statusHTML(v.id)}
    </div>
    <div class="vehicle-title">${esc(v.model)}</div>
    <div class="vehicle-sub">${esc(metaLigne(v))}</div>
    <div class="spec-chips">${(v.highlights || []).map(h => `<span class="chip">${esc(h)}</span>`).join("")}</div>
    ${colorHTML(v, "vehicle-sub")}
    <div class="price-row">${priceHTML(v.id, "price")}</div>
    <div class="card-actions">
      <button class="btn primary" type="button" data-detail="${esc(v.id)}">Voir la fiche</button>
      <button class="btn secondary ${selected ? "selected" : ""} ${otherFamily && !selected ? "is-disabled" : ""}" type="button"
              data-compare="${esc(v.id)}" aria-pressed="${selected}">${selected ? "✓ Sélectionné" : "Comparer"}</button>
    </div>
  </div>
</article>`;
  }

  // Marque sans aucun modèle actif : message dédié plutôt que « aucun résultat ».
  function emptyMessage() {
    const b = brandById(state.brand);
    const noneAtAll = state.brand !== "all" && !VEHICLES.some(v => v.brand === state.brand);
    if (noneAtAll) return b.empty || `Aucun modèle ${b.label} n'est actuellement au catalogue.`;
    return "Aucun modèle ne correspond à ces critères.";
  }

  function render() {
    const rows = VEHICLES.filter(matches).sort((a, b) => {
      const pa = STATUS_PRIORITY[inventoryOf(a.id).status] ?? 6;
      const pb = STATUS_PRIORITY[inventoryOf(b.id).status] ?? 6;
      return pa - pb;
    });
    const catalog = $("#catalog");
    catalog.innerHTML = rows.length
      ? rows.map(cardHTML).join("")
      : `<p class="empty">${esc(emptyMessage())}</p>`;
    $("#resultCount").textContent = rows.length
      ? `${rows.length} modèle${rows.length > 1 ? "s" : ""}`
      : "";
    $$("[data-detail]", catalog).forEach(b => b.addEventListener("click", () => openDetail(b.dataset.detail)));
    $$("[data-compare]", catalog).forEach(b => b.addEventListener("click", () => toggleCompare(b.dataset.compare)));
    $$("[data-color-pick]", catalog).forEach(b => b.addEventListener("click", () => {
      const [id, idx] = b.dataset.colorPick.split(":");
      state.colorChoice[id] = Number(idx);
      render();
    }));
    renderTray();
  }

  /* ---------- Fiche détaillée ------------------------------------------ */
  function openDetail(id) {
    const v = vehicleById(id);
    if (!v) return;
    const inv = inventoryOf(id);
    const selected = state.compare.includes(id);

    const sections = Object.entries(v.specs || {}).map(([title, rows]) => `
<section class="spec-section">
  <h3>${esc(title)}</h3>
  <div class="spec-table">
    ${Object.entries(rows).map(([k, val]) => `<div class="spec-row"><span>${esc(k)}</span><b>${esc(val)}</b></div>`).join("")}
  </div>
</section>`).join("");

    $("#detailShell").className = `dialog-shell ${v.brand}`;
    $("#detailContent").innerHTML = `
<div class="detail-head">
  <div class="detail-visual ${(v.gallery && v.gallery.length) ? "has-gallery" : ""}">${galleryHTML(v) || visualHTML(v)}</div>
  <div>
    <span class="brand-badge">${esc(v.brandLabel)}</span>
    <h2 class="detail-title" id="detailTitle">${esc(v.model)}</h2>
    <p class="detail-sub">${esc(metaLigne(v))}</p>
    ${colorHTML(v, "detail-color")}
    ${priceHTML(id, "detail-price")}
    <div class="detail-status">${statusHTML(id)}</div>
    <div class="detail-actions">
      <button class="btn ${selected ? "selected" : "secondary"}" type="button" data-compare-detail="${esc(id)}">${selected ? "✓ Dans la comparaison" : "Ajouter à la comparaison"}</button>
    </div>
    <div class="detail-highlights">${(v.highlights || []).map(h => `<span class="chip">${esc(h)}</span>`).join("")}</div>
  </div>
</div>
${sections}
<p class="price-note inline">${PRICE_NOTE}</p>`;

    $("[data-compare-detail]", $("#detailContent")).addEventListener("click", () => {
      toggleCompare(id);
      openDetail(id); // rafraîchit le bouton
    });
    $$("[data-color-pick]", $("#detailContent")).forEach(b => b.addEventListener("click", () => {
      const [cid, idx] = b.dataset.colorPick.split(":");
      state.colorChoice[cid] = Number(idx);
      openDetail(id); // rafraîchit la fiche avec le coloris choisi
    }));

    // Carrousel photo (v.gallery) : boutons préc/suivant + puces cliquables,
    // et les puces suivent aussi un balayage tactile manuel sur la piste.
    const galleryEl = $(".detail-gallery", $("#detailContent"));
    if (galleryEl) {
      const track = $(".gallery-track", galleryEl);
      const slides = $$(".gallery-slide", galleryEl);
      const dots = $$(".gallery-dot", galleryEl);
      let idx = 0;
      const setActive = i => { idx = i; dots.forEach((d, di) => d.classList.toggle("is-active", di === idx)); };
      const goTo = i => {
        setActive(Math.max(0, Math.min(slides.length - 1, i)));
        slides[idx].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      };
      $(".gallery-prev", galleryEl).addEventListener("click", () => goTo(idx - 1));
      $(".gallery-next", galleryEl).addEventListener("click", () => goTo(idx + 1));
      dots.forEach((d, i) => d.addEventListener("click", () => goTo(i)));
      let scrollTimer;
      track.addEventListener("scroll", () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          let closest = 0, closestDist = Infinity;
          slides.forEach((s, i) => {
            const dist = Math.abs(s.offsetLeft - track.scrollLeft);
            if (dist < closestDist) { closestDist = dist; closest = i; }
          });
          setActive(closest);
        }, 100);
      });
    }

    modalOpen($("#detailDialog"));
  }

  /* ---------- Sélection pour comparaison ------------------------------- */
  function toggleCompare(id) {
    const v = vehicleById(id);
    if (!v) return;
    const idx = state.compare.indexOf(id);
    if (idx >= 0) {
      state.compare.splice(idx, 1);
    } else {
      if (state.compare.length >= MAX_COMPARE) {
        toast(`Vous pouvez comparer ${MAX_COMPARE} modèles au maximum. Retirez-en un pour continuer.`);
        return;
      }
      const first = state.compare.length ? vehicleById(state.compare[0]) : null;
      if (first && first.family !== v.family) {
        toast(`Le comparateur ne mélange pas ${FAMILY_LABELS[first.family] || first.family} et ${FAMILY_LABELS[v.family] || v.family}. Videz la sélection pour comparer ce modèle.`);
        return;
      }
      state.compare.push(id);
    }
    updateCompareUI();
  }

  function clearCompare() {
    state.compare = [];
    updateCompareUI();
    if (modalIsOpen($("#compareDialog"))) renderCompare();
  }

  function updateCompareUI() {
    const n = state.compare.length;
    $("#compareCount").textContent = n;
    $("#compareOpen").classList.toggle("is-ready", n >= 2);
    render();
  }

  // La barre est en position fixe : on réserve exactement sa hauteur en bas
  // de page, sinon elle recouvre les boutons de la dernière rangée de cartes.
  function reserverPlaceBarre() {
    const tray = $("#compareTray");
    document.body.style.paddingBottom = tray.hidden ? "" : (tray.offsetHeight + 16) + "px";
  }

  function renderTray() {
    const tray = $("#compareTray");
    const n = state.compare.length;
    tray.hidden = n === 0;
    document.body.classList.toggle("has-tray", n > 0);
    if (n === 0) { reserverPlaceBarre(); return; }
    const items = state.compare.map(id => {
      const v = vehicleById(id);
      return `<span class="tray-item"><span class="dot" style="background:${esc(brandById(v.brand).accent || "currentColor")}"></span>${esc(v.model)} <button type="button" data-tray-remove="${esc(id)}" aria-label="Retirer ${esc(v.model)}">&times;</button></span>`;
    });
    for (let i = n; i < MAX_COMPARE; i++) items.push(`<span class="tray-slot">${i === n ? "Ajoutez un modèle" : "—"}</span>`);
    $("#trayItems").innerHTML = items.join("");
    $$("[data-tray-remove]", tray).forEach(b => b.addEventListener("click", () => toggleCompare(b.dataset.trayRemove)));
    const cmp = $("#trayCompare");
    cmp.disabled = n < 2;
    cmp.classList.toggle("is-disabled", n < 2);
    cmp.textContent = n < 2 ? "Comparer (2 min.)" : `Comparer ${n} modèles`;
    reserverPlaceBarre();
  }

  /* ---------- Comparateur ----------------------------------------------- */
  function openCompare() {
    if (state.compare.length < 2) {
      toast("Sélectionnez au moins 2 modèles à comparer.");
      return;
    }
    renderCompare();
    modalOpen($("#compareDialog"));
  }

  // Normalisation pour détecter les valeurs identiques.
  function norm(val) {
    return val == null ? "" : String(val).trim().toLowerCase().replace(/\s+/g, " ");
  }

  function renderCompare() {
    const vs = state.compare.map(vehicleById).filter(Boolean);
    const box = $("#compareContent");
    const shell = $(".compare-shell");
    const brands = new Set(vs.map(v => v.brand));
    shell.className = `dialog-shell compare-shell ${brands.size === 1 ? [...brands][0] : ""}`;

    if (vs.length < 2) {
      box.innerHTML = `<h2 id="compareTitle" class="visually-hidden">Comparaison</h2><p class="compare-empty">Sélectionnez au moins 2 modèles pour lancer une comparaison.</p>`;
      return;
    }

    // Sections et lignes dans l'ordre d'apparition, sans doublons.
    const sections = [];
    const rowsBySection = new Map();
    vs.forEach(v => {
      Object.entries(v.specs || {}).forEach(([sec, rows]) => {
        if (!rowsBySection.has(sec)) { sections.push(sec); rowsBySection.set(sec, []); }
        const list = rowsBySection.get(sec);
        Object.keys(rows).forEach(k => { if (!list.includes(k)) list.push(k); });
      });
    });

    let hiddenCount = 0;
    const body = sections.map(sec => {
      const lines = rowsBySection.get(sec).map(key => {
        const values = vs.map(v => (v.specs && v.specs[sec]) ? v.specs[sec][key] : undefined);
        const present = values.filter(x => x != null && x !== "");
        const identical = present.length === values.length && new Set(values.map(norm)).size === 1;
        if (state.diffOnly && (identical || present.length === 0)) { hiddenCount++; return ""; }
        return `<tr class="${identical ? "" : "is-diff"}"><td>${esc(key)}</td>${values.map(x => x == null || x === "" ? `<td class="missing">Non renseigné</td>` : `<td>${esc(x)}</td>`).join("")}</tr>`;
      }).filter(Boolean);
      if (!lines.length) return "";
      return `<tr class="section-row"><td colspan="${vs.length + 1}">${esc(sec)}</td></tr>${lines.join("")}`;
    }).join("");

    const head = vs.map(v => {
      return `<th scope="col">
<div class="cmp-col">
  <div class="cmp-visual ${esc(v.brand)}">${visualHTML(v)}</div>
  <span class="cmp-sub">${esc(v.brandLabel)} · ${esc(metaLigne(v, true))}</span>
  <span class="cmp-model">${esc(v.model)}</span>
  ${priceHTML(v.id, "cmp-price")}
  ${statusHTML(v.id)}
  <button class="btn ghost small cmp-remove" type="button" data-cmp-remove="${esc(v.id)}">Retirer</button>
</div></th>`;
    }).join("");

    box.innerHTML = `
<div class="compare-head">
  <h2 id="compareTitle">Comparaison</h2>
  <div class="compare-tools">
    <label class="switch"><input type="checkbox" id="diffOnly" ${state.diffOnly ? "checked" : ""}><span class="track"></span>Afficher uniquement les différences</label>
    <button class="btn ghost small" type="button" id="cmpClear">Vider la comparaison</button>
  </div>
</div>
<div class="compare-scroll">
<table class="compare-table">
  <thead><tr><th scope="col">Caractéristique</th>${head}</tr></thead>
  <tbody>${body || `<tr><td colspan="${vs.length + 1}" class="compare-empty">Aucune différence entre ces modèles sur les caractéristiques renseignées.</td></tr>`}</tbody>
</table>
</div>
${state.diffOnly && hiddenCount ? `<p class="compare-note">${hiddenCount} ligne${hiddenCount > 1 ? "s" : ""} identique${hiddenCount > 1 ? "s" : ""} masquée${hiddenCount > 1 ? "s" : ""}.</p>` : ""}
<p class="price-note inline">${PRICE_NOTE}</p>`;

    $("#diffOnly").addEventListener("change", e => { state.diffOnly = e.target.checked; renderCompare(); });
    $("#cmpClear").addEventListener("click", () => { clearCompare(); modalClose($("#compareDialog")); });
    $$("[data-cmp-remove]", box).forEach(b => b.addEventListener("click", () => {
      toggleCompare(b.dataset.cmpRemove);
      if (state.compare.length < 2) modalClose($("#compareDialog")); else renderCompare();
    }));
  }

  /* ---------- Réinitialisation (utilisée aussi par le mode borne) ------- */
  function resetAll() {
    state.category = "all"; state.status = "all"; state.seats = "all"; state.query = "";
    $("#search").value = ""; $("#statusFilter").value = "all"; $("#seatsFilter").value = "all";
    $$(".modal").forEach(modalClose);
    state.compare = [];
    state.diffOnly = false;
    applyBrand("all");
    window.scrollTo({ top: 0 });
  }
  window.MC_RESET = resetAll;

  /* ---------- Câblage ----------------------------------------------------- */
  $("#search").addEventListener("input", e => { state.query = e.target.value.trim().toLowerCase(); render(); });
  $("#statusFilter").addEventListener("change", e => { state.status = e.target.value; render(); });
  $("#seatsFilter").addEventListener("change", e => { state.seats = e.target.value; render(); });
  $("#resetFilters").addEventListener("click", () => {
    state.category = "all"; state.status = "all"; state.seats = "all"; state.query = "";
    $("#search").value = ""; $("#statusFilter").value = "all"; $("#seatsFilter").value = "all";
    buildCategoryFilters(); render();
  });
  $("#compareOpen").addEventListener("click", openCompare);
  $("#trayCompare").addEventListener("click", openCompare);
  $("#trayClear").addEventListener("click", clearCompare);
  // Fermeture : bouton de fermeture, fond assombri, touche Échap.
  $$("[data-close]").forEach(b => b.addEventListener("click", () => modalClose(b.closest(".modal"))));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" || e.key === "Esc") {
      const ouvert = $(".modal:not([hidden])");
      if (ouvert) modalClose(ouvert);
    }
  });

  window.addEventListener("resize", reserverPlaceBarre);
  window.addEventListener("orientationchange", () => setTimeout(reserverPlaceBarre, 250));

  injectBrandStyles();
  buildBrandTabs();
  buildSeatsFilter();
  applyBrand("all");
})();
