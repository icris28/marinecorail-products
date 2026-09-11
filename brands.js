// Marques du catalogue : onglets, textes du bandeau et univers visuel.
// Ajouter une marque = ajouter une entrée ici. Aucune modification de app.js,
// styles.css ou index.html n'est nécessaire : les onglets et les thèmes sont
// générés à partir de ce fichier.
//
// Champs :
//   id           valeur du champ "brand" dans vehicles.js ("all" = onglet Tous)
//   label        libellé de l'onglet
//   dark         true = univers sombre (ombres et statuts adaptés)
//   accent       couleur d'accent de la marque (liseré des cartes, badges)
//   accentInk    couleur du texte posé sur l'accent
//   tab          apparence de l'onglet actif { bg, ink, underline }
//   hero         { eyebrow, title, sub } texte du bandeau
//   empty        message affiché quand la marque n'a encore aucun modèle
//   visual       fond des zones d'image (cartes, fiches, comparateur)
//   ui           jetons de couleur de l'interface pour cette marque

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
    tab: { bg: "#0b1f33", ink: "#ffffff", underline: "#00a3e0" },
    hero: {
      eyebrow: "Motomarines",
      title: "Sea-Doo",
      sub: "Plaisance, pêche, location et performance : retrouvez les unités disponibles chez Marine Corail."
    },
    empty: "Aucune motomarine Sea-Doo n’est actuellement au catalogue.",
    visual: "linear-gradient(180deg, #ffffff 0%, #dceff9 100%)",
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
    accent: "#ffcb05",
    accentInk: "#121416",
    tab: { bg: "#ffcb05", ink: "#121416" },
    hero: {
      eyebrow: "Quads & SSV",
      title: "Can-Am",
      sub: "Robustes, techniques, prêts pour le terrain : les Outlander et SSV disponibles chez Marine Corail."
    },
    empty: "Aucun véhicule Can-Am n’est actuellement au catalogue.",
    visual: "linear-gradient(180deg, #2a2e33 0%, #1a1d20 100%)",
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
      focus: "#ffcb05",
      eyebrow: "#ffcb05"
    }
  },

  {
    // Palette provisoire, à ajuster dès réception des logos Highfield.
    id: "highfield",
    label: "Highfield",
    dark: false,
    accent: "#f2701f",
    accentInk: "#ffffff",
    tab: { bg: "#26333d", ink: "#ffffff", underline: "#f2701f" },
    hero: {
      eyebrow: "Semi-rigides",
      title: "Highfield",
      sub: "Coques aluminium et flotteurs Hypalon : les semi-rigides disponibles chez Marine Corail."
    },
    empty: "Les modèles Highfield seront ajoutés dès réception des fiches techniques.",
    visual: "linear-gradient(180deg, #ffffff 0%, #e6ecf0 100%)",
    ui: {
      bg: "#f2f4f6",
      bgHero: "linear-gradient(160deg, #ffffff 0%, #e7ecf0 60%, #d8e0e6 100%)",
      surface: "#ffffff",
      surface2: "#f1f4f6",
      ink: "#1b252d",
      muted: "#5a6873",
      line: "#d5dde3",
      accentSoft: "#fde3d2",
      chip: "#eef2f5",
      chipInk: "#27333d",
      focus: "#f2701f",
      eyebrow: "#c0530c"
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
