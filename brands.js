// Marques du catalogue : onglets, bandeau et univers visuel.
// Ajouter une marque = ajouter une entrée ici. Aucune modification de app.js,
// styles.css ou index.html n'est nécessaire.
//
// Les couleurs sont relevées sur les logos officiels déposés dans assets/logos/ :
//   Sea-Doo        bleu #00A3E0, logotype noir
//   Can-Am         jaune #FFC72C, rouge #E03C31, logotype noir (blanc sur fond sombre)
//   Highfield      bleu pétrole #15496B, gris acier #9BA0A2
//   Marine Corail  rouge #CD0921, bleu #003087
//
// Champs :
//   id           valeur du champ "brand" dans vehicles.js ("all" = onglet Tous)
//   label        libellé de l'onglet
//   dark         true = univers sombre
//   accent       couleur d'accent (liseré de carte, badge de marque)
//   accentInk    couleur du texte posé sur l'accent
//   logo         logotype affiché dans le bandeau
//   tab          apparence de l'onglet actif { bg, ink, underline }
//   hero         { eyebrow, title, sub } ; le titre reste lu par les lecteurs d'écran
//   empty        message affiché quand la marque n'a encore aucun modèle
//   visual       fond des zones d'image
//   imageFit     "contain" = visuel affiché en entier (par défaut)
//                "cover"   = visuel recadré pour remplir le cadre
//   ui           jetons de couleur de l'interface

window.MC_BRANDS = [
  {
    id: "all",
    label: "Tous",
    dark: false,
    accent: "#0f1419",
    accentInk: "#ffffff",
    tab: { bg: "#0f1419", ink: "#ffffff" },
    hero: {
      eyebrow: "Catalogue Marine Corail",
      title: "Sea-Doo, Can-Am & Highfield",
      sub: "Caractéristiques techniques, prix indicatifs et comparaison jusqu’à 3 modèles."
    },
    visual: "linear-gradient(180deg, #f7f8fa 0%, #e8edf2 100%)",
    imageFit: "contain",
    ui: {
      bg: "#f1f3f6",
      bgHero: "linear-gradient(180deg, #ffffff 0%, #e9eef4 100%)",
      surface: "#ffffff",
      surface2: "#f3f5f8",
      ink: "#0f1419",
      muted: "#5f6b78",
      line: "#d8dee6",
      accentSoft: "#e6e9ee",
      chip: "#eef1f5",
      chipInk: "#2b333d",
      focus: "#1677ff"
    }
  },

  {
    id: "sea-doo",
    label: "Sea-Doo",
    dark: false,
    accent: "#00a3e0",
    accentInk: "#ffffff",
    logo: "assets/logos/sea-doo.webp",
    tab: { bg: "#0b1f33", ink: "#ffffff", underline: "#00a3e0" },
    hero: {
      eyebrow: "Motomarines",
      title: "Sea-Doo",
      sub: "Plaisance, pêche, location et performance : les unités disponibles chez Marine Corail."
    },
    empty: "Aucune motomarine Sea-Doo n’est actuellement au catalogue.",
    visual: "linear-gradient(180deg, #ffffff 0%, #dceff9 100%)",
    imageFit: "contain",
    ui: {
      bg: "#eef5fa",
      bgHero: "linear-gradient(160deg, #ffffff 0%, #dceff9 55%, #bfe3f4 100%)",
      surface: "#ffffff",
      surface2: "#f2f8fc",
      ink: "#0b1f33",
      muted: "#53657a",
      line: "#cfe0ec",
      accentSoft: "#d9eefa",
      chip: "#e3f2fb",
      chipInk: "#0b3350",
      focus: "#00a3e0",
      eyebrow: "#0077a8"
    }
  },

  {
    id: "can-am",
    label: "Can-Am",
    dark: true,
    accent: "#ffc72c",
    accentInk: "#121416",
    logo: "assets/logos/can-am-blanc.webp",
    tab: { bg: "#ffc72c", ink: "#121416" },
    hero: {
      eyebrow: "Quads & SSV",
      title: "Can-Am",
      sub: "Robustes, techniques, prêts pour le terrain : les Outlander disponibles chez Marine Corail."
    },
    empty: "Aucun véhicule Can-Am n’est actuellement au catalogue.",
    visual: "linear-gradient(180deg, #2a2e33 0%, #1a1d20 100%)",
    imageFit: "contain",
    texture: "repeating-linear-gradient(45deg, rgba(255,255,255,.015) 0 2px, transparent 2px 8px)",
    ui: {
      bg: "#121416",
      bgHero: "linear-gradient(160deg, #1e2124 0%, #121416 70%)",
      surface: "#1c1f23",
      surface2: "#24282d",
      ink: "#f3f4f5",
      muted: "#a3acb6",
      line: "#33393f",
      accentSoft: "#3a3410",
      chip: "#2a2e33",
      chipInk: "#e6e9ec",
      focus: "#ffc72c",
      eyebrow: "#ffc72c"
    }
  },

  {
    id: "highfield",
    label: "Highfield",
    dark: false,
    accent: "#15496b",
    accentInk: "#ffffff",
    logo: "assets/logos/highfield.webp",
    tab: { bg: "#15496b", ink: "#ffffff" },
    hero: {
      eyebrow: "Semi-rigides aluminium",
      title: "Highfield",
      sub: "Coques aluminium et flotteurs ORCA Hypalon, du Ultralite au Patrol."
    },
    empty: "Aucun semi-rigide Highfield n’est actuellement au catalogue.",
    visual: "linear-gradient(180deg, #f4f8fa 0%, #dde7ee 100%)",
    // Les photos Highfield sont des vues d'ambiance quasi carrées : on les
    // affiche entières plutôt que de les rogner dans un cadre 4/3.
    imageFit: "contain",
    ui: {
      bg: "#f1f5f8",
      bgHero: "linear-gradient(160deg, #ffffff 0%, #e9f0f5 55%, #d5e2ea 100%)",
      surface: "#ffffff",
      surface2: "#f1f5f8",
      ink: "#14293a",
      muted: "#5b6b7a",
      line: "#d3dde5",
      accentSoft: "#dce9f2",
      chip: "#e9f1f6",
      chipInk: "#15496b",
      focus: "#15496b",
      eyebrow: "#15496b"
    }
  }
];

// Familles de produits : seuls les modèles d'une même famille se comparent.
window.MC_FAMILIES = {
  pwc: "motomarines",
  atv: "quads",
  ssv: "SSV",
  rib: "semi-rigides"
};
