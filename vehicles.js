// Données techniques des produits.
// Source : fiches techniques BRP fournies par Marine Corail (dossier _sources/).
// Ne jamais inventer une caractéristique manquante : laisser le champ absent.
// Pour masquer un produit : active: false. Prix -> prices.js, stock -> inventory.js.
//
// Champs :
//   id          identifiant unique <marque>-<modele>-<variante>-<annee>
//   active      true/false (false = masqué du catalogue et du comparateur)
//   brand       "sea-doo" | "can-am" | "highfield"  (pilote le thème visuel)
//   family      "pwc" (motomarine) | "atv" | "ssv" | "rib"
//               (seuls les modèles d'une même famille se comparent)
//   category    libellé affiché, repris de la fiche BRP, et utilisé comme filtre
//   seats       nombre de places (filtre)
//   image       visuel extrait de la fiche technique
//   highlights  3-4 points clés affichés sur la carte
//   specs       sections -> lignes ; les libellés identiques s'alignent dans le comparateur

window.MC_VEHICLES = [
  {
    "id": "seadoo-gtr-x-300-2027",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "GTR-X 300",
    "year": 2027,
    "category": "Performance",
    "seats": 3,
    "image": "assets/images/seadoo-gtr-x-300-2027.webp",
    "highlights": [
      "300 ch",
      "3 places",
      "Coque GTI",
      "Écran tactile 10,25 po"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE – 300",
        "Puissance": "300 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Moteur suralimenté avec refroidisseur intermédiaire externe",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "91 octane (essence premium)",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "3",
        "Capacité de poids": "273 kg",
        "Réservoir de carburant": "70 L",
        "Boîte à gants": "8,8 L",
        "Rangement avant": "144 L",
        "Rangement total": "152,8 L"
      },
      "Dimensions": {
        "Longueur": "332 cm",
        "Largeur": "125 cm",
        "Hauteur": "110 cm",
        "Poids à sec": "369 kg"
      },
      "Coque": {
        "Type": "Coque GTI",
        "Matériau": "Polytec"
      },
      "Indicateur": {
        "Type d'indicateur": "Écran tactile de 10,25 po",
        "Modes de conduite": "ECO, Sport, Régulateur de vitesse, Basse vitesse et système d'optimisation d'accélération"
      },
      "Équipements": {
        "VTS": "Correcteur d'assiette à capacité étendue",
        "Clé RF D.E.S.S.": "Oui",
        "Rétroviseurs à grand angle": "Oui",
        "Poignées": "Rondes",
        "Plateforme d'embarquement": "Grande",
        "Anneau de remorquage": "Oui"
      },
      "Coloris": {
        "Coloris offerts": "Noir éclipse et Marsala profond"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-rxp-x-350-2027",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "RXP-X 350",
    "year": 2027,
    "category": "Performance",
    "seats": 1,
    "image": "assets/images/seadoo-rxp-x-350-2027.webp",
    "highlights": [
      "350 ch",
      "Coque T3-R",
      "Capot carbone",
      "1 place (2 en option)"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE – 350",
        "Puissance": "350 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Moteur suralimenté avec refroidisseur intermédiaire externe",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "91 octane (essence premium)",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "1 (jusqu'à 2 avec le siège en accessoire)",
        "Capacité de poids": "182 kg",
        "Réservoir de carburant": "70 L",
        "Boîte à gants": "10,7 L",
        "Rangement avant": "143 L",
        "Rangement total": "153,7 L"
      },
      "Dimensions": {
        "Longueur": "332 cm",
        "Largeur": "125 cm",
        "Hauteur": "111 cm",
        "Poids à sec": "362 kg"
      },
      "Coque": {
        "Type": "Coque T3-R",
        "Matériau": "Fibre de verre"
      },
      "Indicateur": {
        "Type d'indicateur": "Écran tactile de 10,25 po",
        "Modes de conduite": "ECO, Sport, Régulateur de vitesse, Basse vitesse et système d'optimisation d'accélération"
      },
      "Équipements": {
        "Siège": "Ergolock R de performance",
        "Capot": "Fibre de carbone",
        "VTS": "Correcteur d'assiette à capacité étendue",
        "LinQ": "Oui",
        "Clé RF D.E.S.S.": "Oui",
        "Rétroviseurs à grand angle": "Oui",
        "Compartiment étanche pour téléphone": "Oui",
        "Anneau de remorquage": "Oui"
      },
      "Coloris": {
        "Coloris offerts": "Orange solaire métallique haut de gamme (nouveau), Bleu océan"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-rxp-x-senna-350-2027",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "RXP-X Senna 350",
    "year": 2027,
    "category": "Performance",
    "seats": 1,
    "image": "assets/images/seadoo-rxp-x-senna-350-2027.webp",
    "highlights": [
      "350 ch",
      "Édition Senna",
      "Audio Platinum BRP",
      "353 kg"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE – 350",
        "Puissance": "350 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Moteur suralimenté avec refroidisseur intermédiaire externe",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "91 octane (essence premium)",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "1 (jusqu'à 2 avec le siège passagers)",
        "Capacité de poids": "182 kg",
        "Réservoir de carburant": "70 L",
        "Boîte à gants": "10,7 L",
        "Rangement avant": "143 L",
        "Rangement total": "153,7 L"
      },
      "Dimensions": {
        "Longueur": "332 cm",
        "Largeur": "125 cm",
        "Hauteur": "111 cm",
        "Poids à sec": "353 kg"
      },
      "Coque": {
        "Type": "Coque T3-R",
        "Matériau": "Fibre de verre"
      },
      "Indicateur": {
        "Type d'indicateur": "Écran tactile de 10,25 po",
        "Modes de conduite": "ECO, Sport, Régulateur de vitesse, Basse vitesse et système d'optimisation d'accélération"
      },
      "Équipements": {
        "Système audio": "Platinum BRP",
        "VTS": "Correcteur d'assiette à capacité étendue",
        "LinQ": "Oui",
        "Clé RF D.E.S.S.": "Oui",
        "Rétroviseurs à grand angle": "Oui",
        "Port USB": "Oui",
        "Compartiment étanche pour téléphone": "Oui",
        "Anneau de remorquage": "Oui"
      },
      "Coloris": {
        "Coloris offerts": "Jaune adrénaline et Vert Amazone (nouveau)"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-rxt-x-350-2027",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "RXT-X 350",
    "year": 2027,
    "category": "Performance",
    "seats": 3,
    "image": "assets/images/seadoo-rxt-x-350-2027.webp",
    "highlights": [
      "350 ch",
      "3 places",
      "Coque ST3",
      "Stabilisateurs X"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE – 350",
        "Puissance": "350 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Moteur suralimenté avec refroidisseur intermédiaire externe",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "91 octane (essence premium)",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "3",
        "Capacité de poids": "273 kg",
        "Réservoir de carburant": "70 L",
        "Boîte à gants": "2,9 L",
        "Rangement avant": "96 L",
        "Rangement total": "98,9 L"
      },
      "Dimensions": {
        "Longueur": "345 cm",
        "Largeur": "125 cm",
        "Hauteur": "115 cm",
        "Poids à sec": "382 kg"
      },
      "Coque": {
        "Type": "Coque ST3",
        "Matériau": "Fibre de verre"
      },
      "Indicateur": {
        "Type d'indicateur": "Écran tactile de 10,25 po",
        "Modes de conduite": "ECO, Sport, Régulateur de vitesse, Basse vitesse et système d'optimisation d'accélération"
      },
      "Équipements": {
        "Système audio": "Premium BRP",
        "Stabilisateurs X": "Oui",
        "VTS": "Correcteur d'assiette à capacité étendue",
        "Clé RF D.E.S.S.": "Oui",
        "Rétroviseurs à grand angle": "Oui",
        "Coussinets pour genoux": "Oui",
        "Port USB": "Oui",
        "Œillet de ski": "Oui",
        "Compartiment étanche pour téléphone": "Oui"
      },
      "Coloris": {
        "Coloris offerts": "Orange solaire métallique haut de gamme (nouveau), Bleu océan"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-spark-x-trixx-1up-2027",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "Spark X Trixx pour 1",
    "year": 2027,
    "category": "Récréatif",
    "seats": 1,
    "image": "assets/images/seadoo-spark-x-trixx-1up-2027.webp",
    "highlights": [
      "110 ch",
      "1 place",
      "Polytec",
      "201 kg"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1000 ACE – 110",
        "Puissance": "110 ch",
        "Cylindrée": "1 000 cm³",
        "Admission": "Moteur atmosphérique",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "87 octane",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "1 (jusqu'à 2 avec le siège en accessoire)",
        "Capacité de poids": "160 kg",
        "Réservoir de carburant": "30 L",
        "Boîte à gants": "2,7 L",
        "Rangement avant": "42 L (en accessoire)",
        "Rangement total": "44,7 L"
      },
      "Dimensions": {
        "Longueur": "283 cm",
        "Largeur": "117 cm",
        "Hauteur": "109 cm",
        "Poids à sec": "201 kg (205 kg avec audio)"
      },
      "Équipements": {
        "Siège": "Étroit",
        "LinQ": "LinQ et LinQ Lite",
        "Poignées": "Rondes",
        "Appuie-pieds antidérapants": "Oui",
        "Anneau de remorquage": "Oui"
      },
      "Coque": {
        "Type": "Coque Spark",
        "Matériau": "Polytec"
      },
      "Indicateur": {
        "Type d'indicateur": "Affichage de 4,5 po",
        "Modes de conduite": "ECO, Sport, Régulateur de vitesse et Basse vitesse"
      },
      "Coloris": {
        "Coloris offerts": "Bleu brume et Éclat de corail (nouveau), Bleu océan et Orange crush"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-spark-x-trixx-3up-2027",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "Spark X Trixx pour 3",
    "year": 2027,
    "category": "Récréatif",
    "seats": 3,
    "image": "assets/images/seadoo-spark-x-trixx-3up-2027.webp",
    "highlights": [
      "110 ch",
      "3 places",
      "Polytec",
      "210 kg"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1000 ACE – 110",
        "Puissance": "110 ch",
        "Cylindrée": "1 000 cm³",
        "Admission": "Moteur atmosphérique",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "87 octane",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "3",
        "Capacité de poids": "225 kg",
        "Réservoir de carburant": "30 L",
        "Boîte à gants": "2,7 L",
        "Rangement avant": "42 L (en accessoire)",
        "Rangement total": "44,7 L"
      },
      "Dimensions": {
        "Longueur": "306 cm",
        "Largeur": "117 cm",
        "Hauteur": "109 cm",
        "Poids à sec": "210 kg (214 kg avec audio)"
      },
      "Équipements": {
        "Siège": "Étroit",
        "LinQ": "LinQ et LinQ Lite",
        "Poignées": "Rondes",
        "Appuie-pieds antidérapants": "Oui",
        "Anneau de remorquage": "Oui"
      },
      "Coque": {
        "Type": "Coque Spark",
        "Matériau": "Polytec"
      },
      "Indicateur": {
        "Type d'indicateur": "Affichage de 4,5 po",
        "Modes de conduite": "ECO, Sport, Régulateur de vitesse et Basse vitesse"
      },
      "Coloris": {
        "Coloris offerts": "Bleu brume et Éclat de corail (nouveau), Bleu océan et Orange crush"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-explorer-pro-170-2027",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "Explorer Pro 170",
    "year": 2027,
    "category": "Touring",
    "seats": 3,
    "image": "assets/images/seadoo-explorer-pro-170-2027.webp",
    "highlights": [
      "170 ch",
      "3 places",
      "Sac LinQ 100 L",
      "Coque ST3"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE – 170",
        "Puissance": "170 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Moteur atmosphérique",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "87 octane",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "3",
        "Capacité de poids": "273 kg",
        "Capacité de plateforme arrière": "100 kg (sans passager)",
        "Réservoir de carburant": "70 L",
        "Boîte à gants": "2,9 L",
        "Rangement avant": "96 L",
        "Sac Explorer LinQ": "100 L",
        "Rangement total": "198,9 L (sac Explorer inclus)"
      },
      "Dimensions": {
        "Longueur": "373 cm",
        "Largeur": "126 cm",
        "Hauteur": "140 cm",
        "Poids à sec": "399 kg"
      },
      "Coque": {
        "Type": "Coque ST3",
        "Matériau": "Fibre de verre"
      },
      "Indicateur": {
        "Type d'indicateur": "Écran tactile de 10,25 po",
        "Modes de conduite": "ECO, Sport, Régulateur de vitesse, Basse vitesse et Accessoire"
      },
      "Équipements": {
        "Système audio": "Premium BRP",
        "VTS": "Oui",
        "Échelle d'embarquement": "Oui",
        "LinQ": "Oui, 1 support avant",
        "Rangement avant à accès direct": "Oui",
        "Guidon inclinable": "Oui",
        "Port USB": "Oui",
        "Œillet de ski": "Oui",
        "Compartiment étanche pour téléphone": "Oui",
        "Rétroviseurs à grand angle": "Oui"
      },
      "Coloris": {
        "Coloris offerts": "Gris Islande"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-explorer-pro-230-2027",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "Explorer Pro 230",
    "year": 2027,
    "category": "Touring",
    "seats": 3,
    "image": "assets/images/seadoo-explorer-pro-230-2027.webp",
    "highlights": [
      "230 ch",
      "3 places",
      "Sac LinQ 100 L",
      "Coque ST3"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE – 230",
        "Puissance": "230 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Moteur suralimenté avec refroidisseur intermédiaire externe",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "87 octane",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "3",
        "Capacité de poids": "273 kg",
        "Capacité de plateforme arrière": "100 kg (sans passager)",
        "Réservoir de carburant": "70 L",
        "Boîte à gants": "2,9 L",
        "Rangement avant": "96 L",
        "Sac Explorer LinQ": "100 L",
        "Rangement total": "198,9 L (sac Explorer inclus)"
      },
      "Dimensions": {
        "Longueur": "373 cm",
        "Largeur": "126 cm",
        "Hauteur": "140 cm",
        "Poids à sec": "416 kg"
      },
      "Coque": {
        "Type": "Coque ST3",
        "Matériau": "Fibre de verre"
      },
      "Indicateur": {
        "Type d'indicateur": "Écran tactile de 10,25 po",
        "Modes de conduite": "ECO, Sport, Régulateur de vitesse, Basse vitesse et Accessoire"
      },
      "Équipements": {
        "Système audio": "Premium BRP",
        "VTS": "Oui",
        "Échelle d'embarquement": "Oui",
        "LinQ": "Oui, 1 support avant",
        "Rangement avant à accès direct": "Oui",
        "Guidon inclinable": "Oui",
        "Port USB": "Oui",
        "Œillet de ski": "Oui",
        "Compartiment étanche pour téléphone": "Oui",
        "Rétroviseurs à grand angle": "Oui"
      },
      "Coloris": {
        "Coloris offerts": "Gris Islande"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-fishpro-sport-170-2027",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "FishPro Sport 170",
    "year": 2027,
    "category": "Pêche récréative",
    "seats": 3,
    "image": "assets/images/seadoo-fishpro-sport-170-2027.webp",
    "highlights": [
      "170 ch",
      "3 places",
      "Garmin 7 po",
      "Glacière LinQ 51 L"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE – 170",
        "Puissance": "170 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Moteur atmosphérique",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "87 octane",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "3",
        "Capacité de poids": "273 kg",
        "Capacité de plateforme arrière": "100 kg (sans passager)",
        "Réservoir de carburant": "70 L",
        "Boîte à gants": "2,9 L",
        "Rangement avant": "96 L",
        "Glacière de pêche LinQ": "51 L",
        "Rangement total": "153,9 L (glacière incluse)"
      },
      "Dimensions": {
        "Longueur": "373 cm",
        "Largeur": "126 cm",
        "Hauteur": "115 cm",
        "Poids à sec": "386 kg (395 kg avec audio)"
      },
      "Coque": {
        "Type": "Coque ST3",
        "Matériau": "Fibre de verre"
      },
      "Indicateur": {
        "Type d'indicateur": "Affichage de 7,6 po",
        "Modes de conduite": "ECO, Sport, Pêche à la traîne (régulateur de vitesse), Basse vitesse et Accessoire"
      },
      "Équipements": {
        "GPS et détecteur de poissons": "Garmin 7 po",
        "iDF": "Système de pompe antidébris intelligent",
        "Échelle d'embarquement": "Oui",
        "Clé RF D.E.S.S.": "Oui",
        "Porte-gobelet": "Oui",
        "Port USB": "Oui",
        "Guidon inclinable": "Oui",
        "Œillet de ski": "Oui",
        "Rétroviseurs à grand angle": "Oui",
        "Compartiment étanche pour téléphone": "Oui"
      },
      "Coloris": {
        "Coloris offerts": "Blanc et Bleu océan"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-fishpro-trophy-170-2027",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "FishPro Trophy 170",
    "year": 2027,
    "category": "Pêche récréative",
    "seats": 3,
    "image": "assets/images/seadoo-fishpro-trophy-170-2027.webp",
    "highlights": [
      "170 ch",
      "3 places",
      "Garmin 9 po tactile",
      "5 porte-cannes"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE – 170",
        "Puissance": "170 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Moteur atmosphérique",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "87 octane",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "3",
        "Capacité de poids": "273 kg",
        "Capacité de plateforme arrière": "100 kg (sans passager)",
        "Réservoir de carburant": "70 L",
        "Boîte à gants": "2,9 L",
        "Rangement avant": "96 L",
        "Glacière de pêche LinQ": "51 L",
        "Rangement total": "153,9 L (glacière incluse)"
      },
      "Dimensions": {
        "Longueur": "373 cm",
        "Largeur": "126 cm",
        "Hauteur": "115 cm",
        "Poids à sec": "407 kg"
      },
      "Coque": {
        "Type": "Coque ST3",
        "Matériau": "Fibre de verre"
      },
      "Indicateur": {
        "Type d'indicateur": "Écran tactile de 10,25 po",
        "Modes de conduite": "ECO, Sport, Pêche à la traîne (régulateur de vitesse), Basse vitesse et Accessoire"
      },
      "Équipements": {
        "GPS et détecteur de poissons": "Écran tactile Garmin 9 po",
        "iDF": "Système de pompe antidébris intelligent",
        "VTS": "Oui",
        "Supports de canne à pêche": "5",
        "Supports avant LinQ": "2",
        "Échelle d'embarquement": "Oui",
        "Clé RF D.E.S.S.": "Oui",
        "Rangement avant à accès direct": "Oui",
        "Porte-gobelet": "Oui",
        "Port USB": "Oui",
        "Guidon inclinable": "Oui",
        "Œillet de ski": "Oui",
        "Rétroviseurs à grand angle": "Oui",
        "Compartiment étanche pour téléphone": "Oui"
      },
      "Coloris": {
        "Coloris offerts": "Gris requin et Orange crush"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-gtx-limited-350-2027",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "GTX Limited 350",
    "year": 2027,
    "category": "Touring",
    "seats": 3,
    "image": "assets/images/seadoo-gtx-limited-350-2027.webp",
    "highlights": [
      "350 ch",
      "3 places",
      "iDF",
      "Audio premium BRP"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE – 350",
        "Puissance": "350 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Moteur suralimenté avec refroidisseur intermédiaire externe",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "91 octane (essence premium)",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "3",
        "Capacité de poids": "273 kg",
        "Réservoir de carburant": "70 L",
        "Boîte à gants": "2,9 L",
        "Rangement avant": "96 L",
        "Rangement total": "98,9 L"
      },
      "Dimensions": {
        "Longueur": "345 cm",
        "Largeur": "125 cm",
        "Hauteur": "114 cm",
        "Poids à sec": "385 kg"
      },
      "Coque": {
        "Type": "Coque ST3",
        "Matériau": "Fibre de verre"
      },
      "Indicateur": {
        "Type d'indicateur": "Écran tactile de 10,25 po",
        "Modes de conduite": "ECO, Sport, Régulateur de vitesse et Basse vitesse"
      },
      "Équipements": {
        "Système audio": "Premium BRP",
        "iDF": "Système de pompe antidébris intelligent",
        "Siège": "Divisé (2 pièces) Ergolock au design étagé",
        "VTS": "Oui",
        "Clé RF D.E.S.S.": "Oui",
        "Rétroviseurs à grand angle": "Oui",
        "Guidon inclinable": "Oui",
        "Œillet de ski": "Oui",
        "Compartiment étanche pour téléphone": "Oui"
      },
      "Coloris": {
        "Coloris offerts": "Bleu minéral (nouveau), Blanc perlé haut de gamme"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-gtx-170-2027",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "GTX 170",
    "year": 2027,
    "category": "Touring",
    "seats": 3,
    "image": "assets/images/seadoo-gtx-170-2027.webp",
    "highlights": [
      "170 ch",
      "3 places",
      "Coque ST3",
      "Écran tactile 10,25 po"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE – 170",
        "Puissance": "170 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Moteur atmosphérique",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "87 octane",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "3",
        "Capacité de poids": "273 kg",
        "Réservoir de carburant": "70 L",
        "Boîte à gants": "2,9 L",
        "Rangement avant": "96 L",
        "Rangement total": "98,9 L"
      },
      "Dimensions": {
        "Longueur": "345 cm",
        "Largeur": "125 cm",
        "Hauteur": "114 cm",
        "Poids à sec": "361 kg"
      },
      "Coque": {
        "Type": "Coque ST3",
        "Matériau": "Fibre de verre"
      },
      "Indicateur": {
        "Type d'indicateur": "Écran tactile de 10,25 po",
        "Modes de conduite": "ECO, Sport, Régulateur de vitesse et Basse vitesse"
      },
      "Équipements": {
        "iDF": "Système de pompe antidébris intelligent",
        "Siège": "Divisé (2 pièces) Ergolock au design étagé",
        "VTS": "Oui",
        "LinQ": "Oui",
        "Échelle d'embarquement": "Oui",
        "Rangement avant à accès direct": "Oui",
        "Clé RF D.E.S.S.": "Oui",
        "Rétroviseurs à grand angle": "Oui",
        "Guidon inclinable": "Oui",
        "Œillet de ski": "Oui",
        "Compartiment étanche pour téléphone": "Oui"
      },
      "Coloris": {
        "Coloris offerts": "Bleu abysse et Bleu océan"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-gtx-230-2027",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "GTX 230",
    "year": 2027,
    "category": "Touring",
    "seats": 3,
    "image": "assets/images/seadoo-gtx-230-2027.webp",
    "highlights": [
      "230 ch",
      "3 places",
      "Coque ST3",
      "Écran tactile 10,25 po"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE – 230",
        "Puissance": "230 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Moteur suralimenté avec refroidisseur intermédiaire externe",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "87 octane",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "3",
        "Capacité de poids": "273 kg",
        "Réservoir de carburant": "70 L",
        "Boîte à gants": "2,9 L",
        "Rangement avant": "96 L",
        "Rangement total": "98,9 L"
      },
      "Dimensions": {
        "Longueur": "345 cm",
        "Largeur": "125 cm",
        "Hauteur": "114 cm",
        "Poids à sec": "376 kg"
      },
      "Coque": {
        "Type": "Coque ST3",
        "Matériau": "Fibre de verre"
      },
      "Indicateur": {
        "Type d'indicateur": "Écran tactile de 10,25 po",
        "Modes de conduite": "ECO, Sport, Régulateur de vitesse et Basse vitesse"
      },
      "Équipements": {
        "iDF": "Système de pompe antidébris intelligent",
        "Siège": "Divisé (2 pièces) Ergolock au design étagé",
        "VTS": "Oui",
        "LinQ": "Oui",
        "Échelle d'embarquement": "Oui",
        "Rangement avant à accès direct": "Oui",
        "Clé RF D.E.S.S.": "Oui",
        "Rétroviseurs à grand angle": "Oui",
        "Guidon inclinable": "Oui",
        "Œillet de ski": "Oui",
        "Compartiment étanche pour téléphone": "Oui"
      },
      "Coloris": {
        "Coloris offerts": "Bleu abysse et Bleu océan"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-gtx-300-2027",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "GTX 300",
    "year": 2027,
    "category": "Touring",
    "seats": 3,
    "image": "assets/images/seadoo-gtx-300-2027.webp",
    "highlights": [
      "300 ch",
      "3 places",
      "Coque ST3",
      "Écran tactile 10,25 po"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE – 300",
        "Puissance": "300 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Moteur suralimenté avec refroidisseur intermédiaire externe",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "91 octane (essence premium)",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "3",
        "Capacité de poids": "273 kg",
        "Réservoir de carburant": "70 L",
        "Boîte à gants": "2,9 L",
        "Rangement avant": "96 L",
        "Rangement total": "98,9 L"
      },
      "Dimensions": {
        "Longueur": "345 cm",
        "Largeur": "125 cm",
        "Hauteur": "114 cm",
        "Poids à sec": "385 kg"
      },
      "Coque": {
        "Type": "Coque ST3",
        "Matériau": "Fibre de verre"
      },
      "Indicateur": {
        "Type d'indicateur": "Écran tactile de 10,25 po",
        "Modes de conduite": "ECO, Sport, Régulateur de vitesse et Basse vitesse"
      },
      "Équipements": {
        "iDF": "Système de pompe antidébris intelligent",
        "Siège": "Divisé (2 pièces) Ergolock au design étagé",
        "VTS": "Oui",
        "LinQ": "Oui",
        "Échelle d'embarquement": "Oui",
        "Rangement avant à accès direct": "Oui",
        "Clé RF D.E.S.S.": "Oui",
        "Rétroviseurs à grand angle": "Oui",
        "Guidon inclinable": "Oui",
        "Œillet de ski": "Oui",
        "Compartiment étanche pour téléphone": "Oui"
      },
      "Coloris": {
        "Coloris offerts": "Bleu abysse et Bleu océan"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-wake-pro-230-2027",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "Wake Pro 230",
    "year": 2027,
    "category": "Sports nautiques",
    "seats": 3,
    "image": "assets/images/seadoo-wake-pro-230-2027.webp",
    "highlights": [
      "230 ch",
      "3 places",
      "Mode Ski",
      "Audio premium BRP"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE – 230",
        "Puissance": "230 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Moteur suralimenté avec refroidisseur intermédiaire externe",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "87 octane",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "3",
        "Capacité de poids": "273 kg",
        "Réservoir de carburant": "70 L",
        "Boîte à gants": "2,9 L",
        "Rangement avant": "96 L",
        "Rangement total": "98,9 L"
      },
      "Dimensions": {
        "Longueur": "345 cm",
        "Largeur": "125 cm (sans le support)",
        "Hauteur": "114 cm",
        "Poids à sec": "379 kg"
      },
      "Coque": {
        "Type": "Coque ST3",
        "Matériau": "Fibre de verre"
      },
      "Indicateur": {
        "Type d'indicateur": "Écran tactile de 10,25 po",
        "Modes de conduite": "ECO, Sport, Régulateur de vitesse, Basse vitesse et Ski"
      },
      "Équipements": {
        "Système audio": "Premium BRP",
        "Siège": "2 pièces Ergolock",
        "Clé RF D.E.S.S.": "Oui",
        "Rétroviseurs à grand angle": "Oui",
        "Guidon inclinable": "Oui",
        "Port USB": "Oui",
        "Œillet de ski": "Oui"
      },
      "Coloris": {
        "Coloris offerts": "Bleu turquoise et Vert mante"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-fishpro-sport-170-2026",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "FishPro Sport 170",
    "year": 2026,
    "category": "Pêche récréative",
    "seats": 3,
    "image": "assets/images/seadoo-fishpro-sport-170-2026.webp",
    "highlights": [
      "170 ch",
      "3 places",
      "Garmin 7 po",
      "Glacière LinQ 51 L"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE – 170",
        "Puissance": "170 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Aspiration naturelle",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "Octane 95",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "3",
        "Capacité de poids": "273 kg",
        "Capacité de plateforme arrière": "100 kg (sans passager)",
        "Réservoir de carburant": "70 L",
        "Boîte à gants": "2,9 L",
        "Rangement avant": "96 L",
        "Glacière de pêche LinQ": "51 L",
        "Rangement total": "149,9 L (glacière incluse)"
      },
      "Dimensions": {
        "Longueur": "373 cm",
        "Largeur": "126 cm",
        "Hauteur": "115 cm",
        "Poids à sec": "386 kg"
      },
      "Coque": {
        "Type": "Coque ST3",
        "Matériau": "Fibre de verre"
      },
      "Indicateur": {
        "Type d'indicateur": "Écran numérique 7,6 po",
        "Modes de conduite": "ECO, Sport, Pêche à la traîne (basse vitesse), Régulateur de vitesse et Accessoires"
      },
      "Équipements": {
        "GPS et détecteur de poissons": "Garmin 7 po à clé",
        "iDF": "Système de pompe antidébris intelligent",
        "VTS": "Oui",
        "Supports de canne à pêche": "5",
        "Supports avant LinQ": "2",
        "Extension de pont arrière": "Oui",
        "Échelle d'embarquement": "Oui",
        "Clé RF D.E.S.S.": "Oui",
        "Rangement avant à accès direct": "Oui",
        "Porte-gobelet": "Oui",
        "Port USB": "Oui",
        "Guidon inclinable": "Oui",
        "Rétroviseurs à grand angle": "Oui",
        "Compartiment étanche pour téléphone": "Oui",
        "Système audio Premium BRP": "En option"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-gtx-pro-130-2026",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "GTX Pro 130",
    "year": 2026,
    "category": "Location",
    "seats": 3,
    "image": "assets/images/seadoo-gtx-pro-130-2026.webp",
    "highlights": [
      "130 ch",
      "3 places",
      "Coque ST3",
      "Modèle de location"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE – 130",
        "Puissance": "130 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Moteur atmosphérique",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique (en option)",
        "Carburant": "87 octane",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "3",
        "Capacité de poids": "273 kg",
        "Réservoir de carburant": "70 L",
        "Boîte à gants": "2,9 L",
        "Rangement avant": "96 L",
        "Rangement total": "98,9 L"
      },
      "Dimensions": {
        "Longueur": "345,1 cm",
        "Largeur": "125 cm",
        "Hauteur": "114 cm",
        "Poids à sec": "356 kg (376 kg avec iBR)"
      },
      "Coque": {
        "Type": "Coque ST3",
        "Matériau": "Fibre de verre"
      },
      "Indicateur": {
        "Type d'indicateur": "Affichage numérique de 11,4 cm",
        "Modes de conduite": "ECO et Sport"
      },
      "Équipements": {
        "Siège": "Robuste avec vinyle thermoformé",
        "Courroie de siège": "Oui",
        "Clé RF D.E.S.S.": "Oui",
        "Rétroviseurs à grand angle": "Oui",
        "Plateforme d'embarquement": "Grande, avec tapis",
        "Appuie-pieds antidérapants": "Oui",
        "Anneau de remorquage": "Oui"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "seadoo-spark-trixx-3up-2024",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "Spark Trixx pour 3",
    "year": 2024,
    "category": "Récréatif",
    "seats": 3,
    "image": "assets/images/seadoo-spark-trixx-3up-2024.webp",
    "highlights": [
      "90 ch",
      "3 places",
      "Polytec",
      "Mode Trixx"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 900 ACE – 90",
        "Puissance": "90 ch",
        "Cylindrée": "899 cm³",
        "Admission": "Aspiration naturelle",
        "Refroidissement": "Système de refroidissement en circuit fermé (CLCS)",
        "Marche arrière": "iBR électronique",
        "Carburant": "Octane 95",
        "Accélérateur": "iTC (Système d'accélérateur intelligent)",
        "Échappement": "Système D-Sea-Bel"
      },
      "Capacité": {
        "Places": "3",
        "Capacité de poids": "205 kg",
        "Réservoir de carburant": "30 L",
        "Boîte à gants": "2,68 L",
        "Rangement avant": "42 L (en option)"
      },
      "Dimensions": {
        "Longueur": "305 cm",
        "Largeur": "117 cm",
        "Hauteur": "107 cm",
        "Poids à sec": "203 kg"
      },
      "Coque": {
        "Type": "Coque Spark",
        "Matériau": "Polytec"
      },
      "Indicateur": {
        "Type d'indicateur": "Affichage numérique de 4,5 po",
        "Modes de conduite": "Sport et Trixx"
      },
      "Équipements": {
        "Ensemble Trixx": "Guidon avec bloc d'élévation réglable, VTS à capacité étendue, appuie-pieds arrière",
        "LinQ": "LinQ et LinQ Lite",
        "Siège": "Étroit",
        "Courroie de siège": "Oui",
        "Clé RF D.E.S.S.": "En option",
        "Marchepied antidérapant": "Oui",
        "Anneau de remorquage": "Oui",
        "Gaines de guidon rondes": "Oui"
      },
      "Garantie": {
        "Garantie": "Garantie limitée d'un an de BRP sur la motomarine"
      }
    }
  },
  {
    "id": "canam-outlander-electric-2027",
    "active": true,
    "brand": "can-am",
    "brandLabel": "Can-Am",
    "family": "atv",
    "model": "Outlander Electric",
    "year": 2027,
    "category": "ATV",
    "seats": 1,
    "image": "assets/images/canam-outlander-electric-2027.webp",
    "highlights": [
      "47 ch",
      "8,9 kWh",
      "80 km WMTC",
      "830 kg remorquage"
    ],
    "specs": {
      "Moteur": {
        "Type": "Rotax E-POWER, refroidi par liquide",
        "Puissance max": "47 ch (35 kW)",
        "Puissance continue": "27 ch (20 kW)",
        "Couple max": "72 Nm",
        "Couple continu": "28 Nm",
        "Vitesse max": "80 km/h grande / 45 km/h basse"
      },
      "Batterie & recharge": {
        "Batterie": "Lithium-ion 8,9 kWh",
        "Autonomie WMTC": "80 km",
        "Plage utilitaire moyenne": "50 km",
        "Chargeur embarqué": "6,6 kW",
        "Connecteur": "Type 1 J1772",
        "Niveau 2 20-80 %": "50 min",
        "Niveau 2 0-100 %": "1 h 30",
        "Niveau 1 0-100 %": "5 h 15"
      },
      "Transmission": {
        "Transmission": "Basse / neutre / haute / stationnement",
        "Transmission intégrale": "2x4 / 4x4 Visco-Lok QE",
        "Modes": "Travail / Standard / Sport",
        "Direction assistée": "DPS Tri-Mode"
      },
      "Dimensions & capacités": {
        "Poids à sec": "415 kg",
        "Dimensions": "249 × 122,2 × 142,2 cm",
        "Empattement": "154,2 cm",
        "Garde au sol": "30,5 cm",
        "Rangement": "34 L",
        "Remorquage": "830 kg",
        "Porte-bagages avant": "54,4 kg",
        "Porte-bagages arrière": "109 kg"
      },
      "Équipements": {
        "Écran": "Couleur 5”",
        "USB": "1x USB-A + 1x USB-C",
        "Éclairage": "LED + signature LED + POD LED",
        "Attelage": "Récepteur 2”",
        "Freinage régénératif": "3 niveaux"
      }
    }
  },
  {
    "id": "canam-outlander-max-electric-2027",
    "active": true,
    "brand": "can-am",
    "brandLabel": "Can-Am",
    "family": "atv",
    "model": "Outlander MAX Electric",
    "year": 2027,
    "category": "ATV",
    "seats": 2,
    "image": "assets/images/canam-outlander-max-electric-2027.webp",
    "highlights": [
      "47 ch",
      "8,9 kWh",
      "80 km WMTC",
      "2 places"
    ],
    "specs": {
      "Moteur": {
        "Type": "Rotax E-POWER, refroidi par liquide",
        "Puissance max": "47 ch (35 kW)",
        "Puissance continue": "27 ch (20 kW)",
        "Couple max": "72 Nm",
        "Couple continu": "28 Nm",
        "Vitesse max": "80 km/h grande / 45 km/h basse"
      },
      "Batterie & recharge": {
        "Batterie": "Lithium-ion 8,9 kWh",
        "Autonomie WMTC": "80 km",
        "Plage utilitaire moyenne": "50 km",
        "Chargeur embarqué": "6,6 kW",
        "Connecteur": "Type 1 J1772",
        "Niveau 2 20-80 %": "50 min",
        "Niveau 2 0-100 %": "1 h 30",
        "Niveau 1 0-100 %": "5 h 15"
      },
      "Transmission": {
        "Transmission": "Basse / neutre / haute / stationnement",
        "Transmission intégrale": "2x4 / 4x4 Visco-Lok QE",
        "Modes": "Travail / Standard / Sport",
        "Direction assistée": "DPS Tri-Mode"
      },
      "Dimensions & capacités": {
        "Poids à sec": "398 kg",
        "Dimensions": "228,3 × 122,2 × 126 cm",
        "Empattement": "134,5 cm",
        "Garde au sol": "30,5 cm",
        "Rangement": "34 L",
        "Remorquage": "830 kg",
        "Porte-bagages avant": "54,4 kg",
        "Porte-bagages arrière": "109 kg"
      },
      "Équipements": {
        "Écran": "Couleur 5”",
        "USB": "1x USB-A + 1x USB-C",
        "Éclairage": "LED + signature LED + POD LED",
        "Attelage": "Récepteur 2”",
        "Freinage régénératif": "3 niveaux",
        "Siège": "Standard"
      }
    }
  }
];
