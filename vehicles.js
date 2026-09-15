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
  },
  {
    "id": "highfield-classic-260",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Classic 260",
    "category": "Classic",
    "seats": 3,
    "image": "assets/images/highfield-classic-260.webp",
    "highlights": [
      "260 cm",
      "3 places",
      "jusqu'à 15 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "260 cm",
        "Longueur intérieure": "176 cm",
        "Largeur hors-tout": "170 cm",
        "Largeur intérieure": "79 cm",
        "V de carène": "10.5°",
        "Poids du bateau": "54 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "44 cm",
        "Compartiments à air": "3"
      },
      "Capacité": {
        "Charge maximale": "360 kg",
        "Personnes maximum": "3+1"
      },
      "Motorisation": {
        "Puissance maximale": "15 hp",
        "Arbre moteur": "Court (S)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Coffre avant (réservoir 24 L)": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Banquette amovible": "Oui",
        "· Coussin de pointe avant": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille sur toute la longueur": "Oui",
        "· Sangles de réservoir": "Oui",
        "· Sacoche sous banquette": "Oui"
      },
      "Options": {
        "· Marche d'étrave FRP": "En option",
        "· Taquet d'étrave moulé": "En option",
        "· Taud de bateau": "En option",
        "· Console Jockey Classic": "En option"
      }
    }
  },
  {
    "id": "highfield-classic-290",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Classic 290",
    "category": "Classic",
    "seats": 4,
    "image": "assets/images/highfield-classic-290.webp",
    "highlights": [
      "290 cm",
      "4 places",
      "jusqu'à 20 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "290 cm",
        "Longueur intérieure": "206 cm",
        "Largeur hors-tout": "170 cm",
        "Largeur intérieure": "79 cm",
        "V de carène": "15°",
        "Poids du bateau": "59 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "44 cm",
        "Compartiments à air": "3"
      },
      "Capacité": {
        "Charge maximale": "480 kg",
        "Personnes maximum": "4"
      },
      "Motorisation": {
        "Puissance maximale": "20 hp",
        "Arbre moteur": "Court (S)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Coffre avant (réservoir 24 L)": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Banquette amovible": "Oui",
        "· Coussin de pointe avant": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille sur toute la longueur": "Oui",
        "· Sangles de réservoir": "Oui",
        "· Sacoche sous banquette": "Oui"
      },
      "Options": {
        "· Marche d'étrave FRP": "En option",
        "· Taquet d'étrave moulé": "En option",
        "· Taud de bateau": "En option",
        "· Console Jockey Classic": "En option"
      }
    }
  },
  {
    "id": "highfield-classic-310",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Classic 310",
    "category": "Classic",
    "seats": 5,
    "image": "assets/images/highfield-classic-310.webp",
    "highlights": [
      "310 cm",
      "5 places",
      "jusqu'à 20 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "310 cm",
        "Longueur intérieure": "226 cm",
        "Largeur hors-tout": "170 cm",
        "Largeur intérieure": "79 cm",
        "V de carène": "15°",
        "Poids du bateau": "62 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "44 cm",
        "Compartiments à air": "3"
      },
      "Capacité": {
        "Charge maximale": "511 kg",
        "Personnes maximum": "5"
      },
      "Motorisation": {
        "Puissance maximale": "20 hp",
        "Arbre moteur": "Court (S)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Coffre avant (réservoir 24 L)": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Banquette amovible": "Oui",
        "· Coussin de pointe avant": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille sur toute la longueur": "Oui",
        "· Sangles de réservoir": "Oui",
        "· Sacoche sous banquette": "Oui"
      },
      "Options": {
        "· Options de console": "En option",
        "· Marche d'étrave FRP/Nylon": "En option",
        "· Taquet d'étrave moulé": "En option",
        "· Taud de bateau": "En option"
      }
    }
  },
  {
    "id": "highfield-classic-340",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Classic 340",
    "category": "Classic",
    "seats": 6,
    "image": "assets/images/highfield-classic-340.webp",
    "highlights": [
      "340 cm",
      "6 places",
      "jusqu'à 25 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "340 cm",
        "Longueur intérieure": "247 cm",
        "Largeur hors-tout": "170 cm",
        "Largeur intérieure": "79 cm",
        "V de carène": "15°",
        "Poids du bateau": "71 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "44 cm",
        "Compartiments à air": "3"
      },
      "Capacité": {
        "Charge maximale": "551 kg",
        "Personnes maximum": "6"
      },
      "Motorisation": {
        "Puissance maximale": "25 hp",
        "Arbre moteur": "Court (S)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Coffre avant (réservoir 24 L)": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Banquette amovible": "Oui",
        "· Coussin de pointe avant": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille sur toute la longueur": "Oui",
        "· Sangles de réservoir": "Oui",
        "· Sacoche sous banquette": "Oui"
      },
      "Options": {
        "· Options de console": "En option",
        "· Marche d'étrave FRP/Nylon": "En option",
        "· Taquet d'étrave moulé": "En option",
        "· Taud de bateau": "En option"
      }
    }
  },
  {
    "id": "highfield-classic-360",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Classic 360",
    "category": "Classic",
    "seats": 6,
    "image": "assets/images/highfield-classic-360.webp",
    "highlights": [
      "360 cm",
      "6 places",
      "jusqu'à 30 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "360 cm",
        "Longueur intérieure": "267 cm",
        "Largeur hors-tout": "170 cm",
        "Largeur intérieure": "79 cm",
        "V de carène": "15°",
        "Poids du bateau": "75 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "44 cm",
        "Compartiments à air": "3"
      },
      "Capacité": {
        "Charge maximale": "561 kg",
        "Personnes maximum": "6"
      },
      "Motorisation": {
        "Puissance maximale": "30 hp",
        "Arbre moteur": "Court (S)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Coffre avant (réservoir 24 L)": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Banquette amovible": "Oui",
        "· Coussin de pointe avant": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille sur toute la longueur": "Oui",
        "· Sangles de réservoir": "Oui",
        "· Sacoche sous banquette": "Oui"
      },
      "Options": {
        "· Options de console": "En option",
        "· Marche d'étrave FRP/Nylon": "En option",
        "· Taquet d'étrave moulé": "En option",
        "· Taud de bateau": "En option"
      }
    }
  },
  {
    "id": "highfield-classic-380",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Classic 380",
    "category": "Classic",
    "seats": 7,
    "image": "assets/images/highfield-classic-380.webp",
    "highlights": [
      "380 cm",
      "7 places",
      "jusqu'à 30 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "380 cm",
        "Longueur intérieure": "287 cm",
        "Largeur hors-tout": "170 cm",
        "Largeur intérieure": "79 cm",
        "V de carène": "15°",
        "Poids du bateau": "83 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "44 cm",
        "Compartiments à air": "3"
      },
      "Capacité": {
        "Charge maximale": "637 kg",
        "Personnes maximum": "7"
      },
      "Motorisation": {
        "Puissance maximale": "30 hp",
        "Arbre moteur": "Court (S)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Coffre avant (réservoir 24 L)": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Banquette amovible": "Oui",
        "· Coussin de pointe avant": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille sur toute la longueur": "Oui",
        "· Sangles de réservoir": "Oui",
        "· Sacoche sous banquette": "Oui"
      },
      "Options": {
        "· Options de console": "En option",
        "· Marche d'étrave FRP/Nylon": "En option",
        "· Taquet d'étrave moulé": "En option",
        "· Taud de bateau": "En option"
      }
    }
  },
  {
    "id": "highfield-classic-400",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Classic 400",
    "category": "Classic",
    "seats": 8,
    "image": "assets/images/highfield-classic-400.webp",
    "highlights": [
      "396 cm",
      "8 places",
      "jusqu'à 50 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "396 cm",
        "Longueur intérieure": "291 cm",
        "Largeur hors-tout": "197 cm",
        "Largeur intérieure": "91 cm",
        "V de carène": "20°",
        "Poids du bateau": "147 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "47 cm",
        "Compartiments à air": "4"
      },
      "Capacité": {
        "Charge maximale": "878 kg",
        "Personnes maximum": "8"
      },
      "Motorisation": {
        "Puissance maximale": "50 hp",
        "Arbre moteur": "Court (S)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Coffre avant (réservoir 24 L)": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Banquette amovible": "Oui",
        "· Coussin de pointe avant": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille sur toute la longueur": "Oui",
        "· Sangles de réservoir": "Oui",
        "· Sacoche sous banquette": "Oui"
      },
      "Options": {
        "· Options de console": "En option",
        "· Marche d'étrave FRP/Nylon": "En option",
        "· Taquet d'étrave moulé": "En option"
      }
    }
  },
  {
    "id": "highfield-classic-420",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Classic 420",
    "category": "Classic",
    "seats": 8,
    "image": "assets/images/highfield-classic-420.webp",
    "highlights": [
      "421 cm",
      "8 places",
      "jusqu'à 60 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "421 cm",
        "Longueur intérieure": "317 cm",
        "Largeur hors-tout": "210 cm",
        "Largeur intérieure": "105 cm",
        "V de carène": "20°",
        "Poids du bateau": "204 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "47 cm",
        "Compartiments à air": "4"
      },
      "Capacité": {
        "Charge maximale": "823 kg",
        "Personnes maximum": "8"
      },
      "Motorisation": {
        "Puissance maximale": "60 hp",
        "Arbre moteur": "Long (L)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Pont auto-videur": "Oui",
        "· Coffre avant": "Oui",
        "· Options de console et de banquette": "Oui",
        "· Platine carbone pour console": "Oui",
        "· Marche d'étrave FRP et coussin avant": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille sur toute la longueur": "Oui"
      },
      "Options": {
        "· Arceau": "En option"
      }
    }
  },
  {
    "id": "highfield-classic-460",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Classic 460",
    "category": "Classic",
    "seats": 9,
    "image": "assets/images/highfield-classic-460.webp",
    "highlights": [
      "459 cm",
      "9 places",
      "jusqu'à 80 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "459 cm",
        "Longueur intérieure": "353 cm",
        "Largeur hors-tout": "211 cm",
        "Largeur intérieure": "105 cm",
        "V de carène": "20°",
        "Poids du bateau": "238 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "47 cm",
        "Compartiments à air": "5"
      },
      "Capacité": {
        "Charge maximale": "944 kg",
        "Personnes maximum": "9"
      },
      "Motorisation": {
        "Puissance maximale": "80 hp",
        "Arbre moteur": "Long (L)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Pont auto-videur": "Oui",
        "· Coffre avant": "Oui",
        "· Options de console et de banquette": "Oui",
        "· Platine carbone pour console": "Oui",
        "· Marche d'étrave FRP et coussin avant": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille sur toute la longueur": "Oui"
      },
      "Options": {
        "· Arceau": "En option"
      }
    }
  },
  {
    "id": "highfield-patrol-420",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Patrol 420",
    "category": "Patrol",
    "seats": 8,
    "image": "assets/images/highfield-patrol-420.webp",
    "highlights": [
      "421 cm",
      "8 places",
      "jusqu'à 60 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "421 cm",
        "Longueur intérieure": "317 cm",
        "Largeur hors-tout": "210 cm",
        "Largeur intérieure": "105 cm",
        "V de carène": "20°",
        "Poids du bateau": "252 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "47 cm",
        "Compartiments à air": "4"
      },
      "Capacité": {
        "Charge maximale": "885 kg",
        "Personnes maximum": "8"
      },
      "Motorisation": {
        "Puissance maximale": "60 hp",
        "Arbre moteur": "Long (L)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Pont auto-videur": "Oui",
        "· Direction mécanique": "Oui",
        "· Volant": "Oui",
        "· Réservoir sous plancher intégré": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont antidérapant": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui"
      },
      "Options": {
        "· Options de console et de banquette": "En option",
        "· Mât de ski arrière": "En option"
      }
    }
  },
  {
    "id": "highfield-patrol-460",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Patrol 460",
    "category": "Patrol",
    "seats": 9,
    "image": "assets/images/highfield-patrol-460.webp",
    "highlights": [
      "459 cm",
      "9 places",
      "jusqu'à 80 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "459 cm",
        "Longueur intérieure": "353 cm",
        "Largeur hors-tout": "211 cm",
        "Largeur intérieure": "105 cm",
        "V de carène": "20°",
        "Poids du bateau": "290 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "47 cm",
        "Compartiments à air": "5"
      },
      "Capacité": {
        "Charge maximale": "1040 kg",
        "Personnes maximum": "9"
      },
      "Motorisation": {
        "Puissance maximale": "80 hp",
        "Arbre moteur": "Long (L)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Pont auto-videur": "Oui",
        "· Direction mécanique": "Oui",
        "· Volant": "Oui",
        "· Réservoir sous plancher intégré": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont antidérapant": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui"
      },
      "Options": {
        "· Options de console et de banquette": "En option",
        "· Mât de ski arrière": "En option"
      }
    }
  },
  {
    "id": "highfield-patrol-500",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Patrol 500",
    "category": "Patrol",
    "seats": 10,
    "image": "assets/images/highfield-patrol-500.webp",
    "highlights": [
      "500 cm",
      "10 places",
      "jusqu'à 100 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "500 cm",
        "Longueur intérieure": "416 cm",
        "Largeur hors-tout": "228 cm",
        "Largeur intérieure": "120 cm",
        "V de carène": "24°",
        "Poids du bateau": "441 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "52 cm",
        "Compartiments à air": "6"
      },
      "Capacité": {
        "Charge maximale": "1135 kg",
        "Personnes maximum": "10"
      },
      "Motorisation": {
        "Puissance maximale": "100 hp",
        "Arbre moteur": "Long (L)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Pont auto-videur": "Oui",
        "· Direction mécanique": "Oui",
        "· Volant": "Oui",
        "· Réservoir sous plancher intégré": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont antidérapant": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui"
      },
      "Options": {
        "· Options de console et de banquette": "En option",
        "· Mât de ski arrière": "En option"
      }
    }
  },
  {
    "id": "highfield-patrol-540",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Patrol 540",
    "category": "Patrol",
    "seats": 12,
    "image": "assets/images/highfield-patrol-540.webp",
    "highlights": [
      "540 cm",
      "12 places",
      "jusqu'à 115 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "540 cm",
        "Longueur intérieure": "430 cm",
        "Largeur hors-tout": "248 cm",
        "Largeur intérieure": "133 cm",
        "V de carène": "24°",
        "Poids du bateau": "573.5 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "52 cm",
        "Compartiments à air": "6"
      },
      "Capacité": {
        "Charge maximale": "1375 kg",
        "Personnes maximum": "12"
      },
      "Motorisation": {
        "Puissance maximale": "115 hp",
        "Arbre moteur": "Extra-long (XL)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Pont auto-videur": "Oui",
        "· Direction mécanique": "Oui",
        "· Volant": "Oui",
        "· Réservoir sous plancher intégré": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont antidérapant": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui"
      },
      "Options": {
        "· Options de console et de banquette": "En option",
        "· Arceau": "En option"
      }
    }
  },
  {
    "id": "highfield-patrol-600",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Patrol 600",
    "category": "Patrol",
    "seats": 14,
    "image": "assets/images/highfield-patrol-600.webp",
    "highlights": [
      "617 cm",
      "14 places",
      "jusqu'à 150 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "617 cm",
        "Longueur intérieure": "449 cm",
        "Largeur hors-tout": "258 cm",
        "Largeur intérieure": "132 cm",
        "V de carène": "26°",
        "Poids du bateau": "752 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "54 cm",
        "Compartiments à air": "6"
      },
      "Capacité": {
        "Charge maximale": "1580 kg",
        "Personnes maximum": "14"
      },
      "Motorisation": {
        "Puissance maximale": "150 hp",
        "Arbre moteur": "Extra-long (XL)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Pont auto-videur": "Oui",
        "· Volant": "Oui",
        "· Réservoir sous plancher intégré": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont antidérapant": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui"
      },
      "Options": {
        "· Options de console et de banquette": "En option",
        "· Arceau": "En option",
        "· Siège suspendu à amortisseur": "En option"
      }
    }
  },
  {
    "id": "highfield-patrol-660",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Patrol 660",
    "category": "Patrol",
    "seats": 13,
    "image": "assets/images/highfield-patrol-660.webp",
    "highlights": [
      "651 cm",
      "13 places",
      "jusqu'à 200 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "651 cm",
        "Longueur intérieure": "475 cm",
        "Largeur hors-tout": "259 cm",
        "Largeur intérieure": "135 cm",
        "V de carène": "26°",
        "Poids du bateau": "781 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "54 cm",
        "Compartiments à air": "6"
      },
      "Capacité": {
        "Charge maximale": "1535 kg",
        "Personnes maximum": "13"
      },
      "Motorisation": {
        "Puissance maximale": "200 hp",
        "Arbre moteur": "Extra-long (XL)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Pont auto-videur": "Oui",
        "· Volant": "Oui",
        "· Réservoir sous plancher intégré": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont antidérapant": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui"
      },
      "Options": {
        "· Options de console et de banquette": "En option",
        "· Arceau avec échelle": "En option",
        "· Siège suspendu à amortisseur": "En option",
        "· Douchette de pont": "En option",
        "· Direction hydraulique": "En option"
      }
    }
  },
  {
    "id": "highfield-patrol-700",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Patrol 700",
    "category": "Patrol",
    "seats": 14,
    "image": "assets/images/highfield-patrol-700.webp",
    "highlights": [
      "699 cm",
      "14 places",
      "jusqu'à 250 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "699 cm",
        "Longueur intérieure": "523 cm",
        "Largeur hors-tout": "283 cm",
        "Largeur intérieure": "164 cm",
        "V de carène": "26°",
        "Poids du bateau": "958 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "54 cm",
        "Compartiments à air": "6"
      },
      "Capacité": {
        "Charge maximale": "1630 kg",
        "Personnes maximum": "14"
      },
      "Motorisation": {
        "Puissance maximale": "250 hp",
        "Arbre moteur": "Extra-long (XL)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Pont auto-videur": "Oui",
        "· Volant": "Oui",
        "· Réservoir sous plancher intégré": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont antidérapant": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui",
        "· Coussin de pointe avant": "Oui"
      },
      "Options": {
        "· Options de console et de banquette": "En option",
        "· Arceau": "En option",
        "· Siège suspendu à amortisseur": "En option",
        "· Râtelier de plongée": "En option"
      }
    }
  },
  {
    "id": "highfield-patrol-760",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Patrol 760",
    "category": "Patrol",
    "seats": 16,
    "image": "assets/images/highfield-patrol-760.webp",
    "highlights": [
      "764 cm",
      "16 places",
      "jusqu'à 300 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "764 cm",
        "Longueur intérieure": "583 cm",
        "Largeur hors-tout": "282 cm",
        "Largeur intérieure": "165 cm",
        "V de carène": "26°",
        "Poids du bateau": "1020 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "54 cm",
        "Compartiments à air": "6"
      },
      "Capacité": {
        "Charge maximale": "1820 kg",
        "Personnes maximum": "16"
      },
      "Motorisation": {
        "Puissance maximale": "300 hp",
        "Arbre moteur": "Extra-long (XL)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Pont auto-videur": "Oui",
        "· Volant": "Oui",
        "· Réservoir sous plancher intégré": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont antidérapant": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui",
        "· Coussin de pointe avant": "Oui"
      },
      "Options": {
        "· Options de console et de banquette": "En option",
        "· Arceau": "En option",
        "· Siège suspendu à amortisseur": "En option",
        "· Râtelier de plongée": "En option"
      }
    }
  },
  {
    "id": "highfield-patrol-860",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Patrol 860",
    "category": "Patrol",
    "seats": 19,
    "image": "assets/images/highfield-patrol-860.webp",
    "highlights": [
      "870 cm",
      "19 places",
      "jusqu'à 2 x 300hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "870 cm",
        "Longueur intérieure": "631 cm",
        "Largeur hors-tout": "310 cm",
        "Largeur intérieure": "184 cm",
        "V de carène": "26°",
        "Poids du bateau": "1156 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "58 cm",
        "Compartiments à air": "6"
      },
      "Capacité": {
        "Charge maximale": "2270 kg",
        "Personnes maximum": "19"
      },
      "Motorisation": {
        "Puissance maximale": "2 x 300hp",
        "Arbre moteur": "UL"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Pont auto-videur": "Oui",
        "· Volant": "Oui",
        "· Réservoir sous plancher intégré": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont antidérapant": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui",
        "· Coussin de pointe avant": "Oui"
      },
      "Options": {
        "· Options de console et de banquette": "En option",
        "· Arceau": "En option",
        "· Siège suspendu à amortisseur": "En option",
        "· Râtelier de plongée": "En option"
      }
    }
  },
  {
    "id": "highfield-sport-300",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Sport 300",
    "category": "Sport",
    "seats": 4,
    "image": "assets/images/highfield-sport-300.webp",
    "highlights": [
      "300 cm",
      "4 places",
      "jusqu'à 30 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "300 cm",
        "Longueur intérieure": "180 cm",
        "Largeur hors-tout": "183 cm",
        "Largeur intérieure": "84 cm",
        "V de carène": "20°",
        "Poids du bateau": "175 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "43 cm",
        "Compartiments à air": "3"
      },
      "Capacité": {
        "Charge maximale": "464 kg",
        "Personnes maximum": "4"
      },
      "Motorisation": {
        "Puissance maximale": "30 hp",
        "Arbre moteur": "Long (L)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Banquette arrière intégrée avec coussin": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui",
        "· Faisceau électrique bateau et console": "Oui",
        "· Platine carbone pour console": "Oui",
        "· Volant": "Oui"
      },
      "Options": {
        "· Taud de bateau": "En option",
        "· Bain de soleil": "En option"
      }
    }
  },
  {
    "id": "highfield-sport-330",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Sport 330",
    "category": "Sport",
    "seats": 5,
    "image": "assets/images/highfield-sport-330.webp",
    "highlights": [
      "336 cm",
      "5 places",
      "jusqu'à 30 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "336 cm",
        "Longueur intérieure": "204 cm",
        "Largeur hors-tout": "182 cm",
        "Largeur intérieure": "90 cm",
        "V de carène": "20°",
        "Poids du bateau": "199 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "43 cm",
        "Compartiments à air": "3"
      },
      "Capacité": {
        "Charge maximale": "549 kg",
        "Personnes maximum": "5"
      },
      "Motorisation": {
        "Puissance maximale": "30 hp",
        "Arbre moteur": "Long (L)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Banquette arrière intégrée avec coussin": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui",
        "· Faisceau électrique bateau et console": "Oui",
        "· Platine carbone pour console": "Oui",
        "· Volant": "Oui"
      },
      "Options": {
        "· Taud de bateau": "En option",
        "· Bain de soleil": "En option"
      }
    }
  },
  {
    "id": "highfield-sport-360",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Sport 360",
    "category": "Sport",
    "seats": 6,
    "image": "assets/images/highfield-sport-360.webp",
    "highlights": [
      "362 cm",
      "6 places",
      "jusqu'à 40 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "362 cm",
        "Longueur intérieure": "236 cm",
        "Largeur hors-tout": "184 cm",
        "Largeur intérieure": "92 cm",
        "V de carène": "20°",
        "Poids du bateau": "215 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "43 cm",
        "Compartiments à air": "3"
      },
      "Capacité": {
        "Charge maximale": "634 kg",
        "Personnes maximum": "6"
      },
      "Motorisation": {
        "Puissance maximale": "40 hp",
        "Arbre moteur": "Long (L)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Banquette arrière intégrée avec coussin": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui",
        "· Faisceau électrique bateau et console": "Oui",
        "· Platine carbone pour console": "Oui",
        "· Volant": "Oui"
      },
      "Options": {
        "· Taud de bateau": "En option",
        "· Bain de soleil": "En option"
      }
    }
  },
  {
    "id": "highfield-sport-420",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Sport 420",
    "category": "Sport",
    "seats": 8,
    "image": "assets/images/highfield-sport-420.webp",
    "highlights": [
      "424 cm",
      "8 places",
      "jusqu'à 70 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "424 cm",
        "Longueur intérieure": "272 cm",
        "Largeur hors-tout": "205 cm",
        "Largeur intérieure": "108 cm",
        "V de carène": "20°",
        "Poids du bateau": "309 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "47 cm",
        "Compartiments à air": "4"
      },
      "Capacité": {
        "Charge maximale": "791 kg",
        "Personnes maximum": "8"
      },
      "Motorisation": {
        "Puissance maximale": "70 hp",
        "Arbre moteur": "Long (L)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Pont auto-videur": "Oui",
        "· Banquette arrière intégrée avec coussin": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied et kit de réparation": "Oui",
        "· Faisceau électrique bateau et console": "Oui",
        "· Platine carbone pour console": "Oui"
      },
      "Options": {
        "· Taud de bateau": "En option",
        "· Bain de soleil": "En option",
        "· Mât de ski": "En option",
        "· Arceau": "En option",
        "· Arceau avant": "En option"
      }
    }
  },
  {
    "id": "highfield-sport-460",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Sport 460",
    "category": "Sport",
    "seats": 9,
    "image": "assets/images/highfield-sport-460.webp",
    "highlights": [
      "460 cm",
      "9 places",
      "jusqu'à 70 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "460 cm",
        "Longueur intérieure": "291 cm",
        "Largeur hors-tout": "209 cm",
        "Largeur intérieure": "108 cm",
        "V de carène": "20°",
        "Poids du bateau": "332 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "47 cm",
        "Compartiments à air": "5"
      },
      "Capacité": {
        "Charge maximale": "912 kg",
        "Personnes maximum": "9"
      },
      "Motorisation": {
        "Puissance maximale": "70 hp",
        "Arbre moteur": "Long (L)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Pont auto-videur": "Oui",
        "· Banquette arrière intégrée avec coussin": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied et kit de réparation": "Oui",
        "· Faisceau électrique bateau et console": "Oui",
        "· Platine carbone pour console": "Oui"
      },
      "Options": {
        "· Taud de bateau": "En option",
        "· Bain de soleil": "En option",
        "· Mât de ski": "En option",
        "· Arceau": "En option",
        "· Arceau avant": "En option"
      }
    }
  },
  {
    "id": "highfield-sport-520",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Sport 520",
    "category": "Sport",
    "seats": 10,
    "image": "assets/images/highfield-sport-520.webp",
    "highlights": [
      "523 cm",
      "10 places",
      "jusqu'à 100 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "523 cm",
        "Longueur intérieure": "343 cm",
        "Largeur hors-tout": "246 cm",
        "Largeur intérieure": "130 cm",
        "V de carène": "24°",
        "Poids du bateau": "516 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "52 cm",
        "Compartiments à air": "6"
      },
      "Capacité": {
        "Charge maximale": "1058 kg",
        "Personnes maximum": "10"
      },
      "Motorisation": {
        "Puissance maximale": "100 hp",
        "Arbre moteur": "Long (L)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Pont auto-videur": "Oui",
        "· Banquette arrière intégrée avec coussin": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied et kit de réparation": "Oui",
        "· Faisceau électrique bateau et console": "Oui",
        "· Platine carbone pour console": "Oui"
      },
      "Options": {
        "· Taud de bateau": "En option",
        "· Bain de soleil": "En option",
        "· Mât de ski": "En option",
        "· Arceau": "En option"
      }
    }
  },
  {
    "id": "highfield-sport-560",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Sport 560",
    "category": "Sport",
    "seats": 12,
    "image": "assets/images/highfield-sport-560.webp",
    "highlights": [
      "586 cm",
      "12 places",
      "jusqu'à 115 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "586 cm",
        "Longueur intérieure": "397 cm",
        "Largeur hors-tout": "250 cm",
        "Largeur intérieure": "131 cm",
        "V de carène": "24°",
        "Poids du bateau": "682 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "52 cm",
        "Compartiments à air": "6"
      },
      "Capacité": {
        "Charge maximale": "1375 kg",
        "Personnes maximum": "12"
      },
      "Motorisation": {
        "Puissance maximale": "115 hp",
        "Arbre moteur": "Extra-long (XL)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Direction hydraulique": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Pont auto-videur": "Oui",
        "· Banquette arrière intégrée avec coussin": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied et kit de réparation": "Oui",
        "· Faisceau électrique bateau et console": "Oui"
      },
      "Options": {
        "· Taud de bateau": "En option"
      }
    }
  },
  {
    "id": "highfield-sport-600",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Sport 600",
    "category": "Sport",
    "seats": 14,
    "image": "assets/images/highfield-sport-600.webp",
    "highlights": [
      "626 cm",
      "14 places",
      "jusqu'à 150 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "626 cm",
        "Longueur intérieure": "445 cm",
        "Largeur hors-tout": "249 cm",
        "Largeur intérieure": "129 cm",
        "V de carène": "26°",
        "Poids du bateau": "630 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "40-56 cm",
        "Compartiments à air": "6"
      },
      "Capacité": {
        "Charge maximale": "1580 kg",
        "Personnes maximum": "14"
      },
      "Motorisation": {
        "Puissance maximale": "150 hp",
        "Arbre moteur": "Extra-long (XL)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Direction hydraulique": "Oui",
        "· Pont auto-videur": "Oui",
        "· Banquette arrière intégrée avec coussin": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied et kit de réparation": "Oui",
        "· Faisceau électrique bateau et console": "Oui"
      }
    }
  },
  {
    "id": "highfield-sport-660",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Sport 660",
    "category": "Sport",
    "seats": 14,
    "image": "assets/images/highfield-sport-660.webp",
    "highlights": [
      "665 cm",
      "14 places",
      "jusqu'à 200 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "665 cm",
        "Longueur intérieure": "475 cm",
        "Largeur hors-tout": "256 cm",
        "Largeur intérieure": "132 cm",
        "V de carène": "26°",
        "Poids du bateau": "781 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "40-56 cm",
        "Compartiments à air": "6"
      },
      "Capacité": {
        "Charge maximale": "1630 kg",
        "Personnes maximum": "14"
      },
      "Motorisation": {
        "Puissance maximale": "200 hp",
        "Arbre moteur": "Extra-long (XL)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Direction hydraulique": "Oui",
        "· Pont auto-videur": "Oui",
        "· Banquette arrière intégrée avec coussin": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied et kit de réparation": "Oui",
        "· Faisceau électrique bateau et console": "Oui"
      }
    }
  },
  {
    "id": "highfield-sport-760",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Sport 760",
    "category": "Sport",
    "seats": 16,
    "image": "assets/images/highfield-sport-760.webp",
    "highlights": [
      "777 cm",
      "16 places",
      "jusqu'à 300 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "777 cm",
        "Longueur intérieure": "590 cm",
        "Largeur hors-tout": "295 cm",
        "Largeur intérieure": "169 cm",
        "V de carène": "26°",
        "Poids du bateau": "1108 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "58 cm",
        "Compartiments à air": "6"
      },
      "Capacité": {
        "Charge maximale": "1820 kg",
        "Personnes maximum": "16"
      },
      "Motorisation": {
        "Puissance maximale": "300 hp",
        "Arbre moteur": "Extra-long (XL)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Pont auto-videur": "Oui",
        "· Direction hydraulique": "Oui",
        "· Banquette arrière intégrée avec coussin": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied et kit de réparation": "Oui",
        "· Faisceau électrique bateau et console": "Oui"
      }
    }
  },
  {
    "id": "highfield-sport-800",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Sport 800",
    "category": "Sport",
    "seats": 15,
    "image": "assets/images/highfield-sport-800.webp",
    "highlights": [
      "812 cm",
      "15 places",
      "jusqu'à 2*200hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "812 cm",
        "Longueur intérieure": "635 cm",
        "Largeur hors-tout": "291 cm",
        "Largeur intérieure": "169 cm",
        "V de carène": "26°",
        "Poids du bateau": "1120 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "58 cm",
        "Compartiments à air": "6"
      },
      "Capacité": {
        "Charge maximale": "2025 kg",
        "Personnes maximum": "15"
      },
      "Motorisation": {
        "Puissance maximale": "2*200hp",
        "Arbre moteur": "Extra-long (XL)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Pont auto-videur": "Oui",
        "· Volant": "Oui",
        "· Banquette arrière intégrée avec coussin": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied et kit de réparation": "Oui",
        "· Faisceau électrique bateau et console": "Oui"
      }
    }
  },
  {
    "id": "highfield-sport-900",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Sport 900",
    "category": "Sport",
    "seats": 19,
    "image": "assets/images/highfield-sport-900.webp",
    "highlights": [
      "912 cm",
      "19 places",
      "jusqu'à 2 x 300hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "912 cm",
        "Longueur intérieure": "699 cm",
        "Largeur hors-tout": "310 cm",
        "Largeur intérieure": "184 cm",
        "V de carène": "26°",
        "Poids du bateau": "1780 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "58 cm",
        "Compartiments à air": "6"
      },
      "Capacité": {
        "Charge maximale": "2405 kg",
        "Personnes maximum": "19"
      },
      "Motorisation": {
        "Puissance maximale": "2 x 300hp",
        "Arbre moteur": "Extra-long (XL)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Pont auto-videur": "Oui",
        "· Volant": "Oui",
        "· Banquette arrière intégrée avec coussin": "Oui",
        "· Supports de tableau arrière intégrés": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Pont finition teck moussé brossé": "Oui",
        "· Liston renforcé": "Oui",
        "· Protection de quille": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied et kit de réparation": "Oui",
        "· Faisceau électrique bateau et console": "Oui"
      }
    }
  },
  {
    "id": "highfield-ultralite-220",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Ultralite 220",
    "category": "Ultralite",
    "seats": 3,
    "image": "assets/images/highfield-ultralite-220.webp",
    "highlights": [
      "220 cm",
      "3 places",
      "jusqu'à 5 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "220 cm",
        "Longueur intérieure": "145 cm",
        "Largeur hors-tout": "152 cm",
        "Largeur intérieure": "75 cm",
        "V de carène": "10.5°",
        "Poids du bateau": "30 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "38 cm",
        "Compartiments à air": "3"
      },
      "Capacité": {
        "Charge maximale": "296 kg",
        "Personnes maximum": "3"
      },
      "Motorisation": {
        "Puissance maximale": "5 hp",
        "Arbre moteur": "Court (S)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Banquette amovible": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont antidérapant": "Oui",
        "· Liston allégé": "Oui",
        "· Protection de quille sur toute la longueur": "Oui",
        "· Sacoche sous banquette": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui"
      },
      "Options": {
        "· Banquette supplémentaire": "En option",
        "· Taud de bateau": "En option"
      }
    }
  },
  {
    "id": "highfield-ultralite-240",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Ultralite 240",
    "category": "Ultralite",
    "seats": 3,
    "image": "assets/images/highfield-ultralite-240.webp",
    "highlights": [
      "240 cm",
      "3 places",
      "jusqu'à 6 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "240 cm",
        "Longueur intérieure": "164 cm",
        "Largeur hors-tout": "154 cm",
        "Largeur intérieure": "78 cm",
        "V de carène": "10.5°",
        "Poids du bateau": "33 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "38 cm",
        "Compartiments à air": "3"
      },
      "Capacité": {
        "Charge maximale": "296 kg",
        "Personnes maximum": "3"
      },
      "Motorisation": {
        "Puissance maximale": "6 hp",
        "Arbre moteur": "Court (S)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Banquette amovible": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont antidérapant": "Oui",
        "· Liston allégé": "Oui",
        "· Protection de quille sur toute la longueur": "Oui",
        "· Sacoche sous banquette": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui"
      },
      "Options": {
        "· Banquette supplémentaire": "En option",
        "· Taud de bateau": "En option"
      }
    }
  },
  {
    "id": "highfield-ultralite-260",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Ultralite 260",
    "category": "Ultralite",
    "seats": 3,
    "image": "assets/images/highfield-ultralite-260.webp",
    "highlights": [
      "260 cm",
      "3 places",
      "jusqu'à 6 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "260 cm",
        "Longueur intérieure": "184 cm",
        "Largeur hors-tout": "154 cm",
        "Largeur intérieure": "77 cm",
        "V de carène": "10.5°",
        "Poids du bateau": "35 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "38 cm",
        "Compartiments à air": "3"
      },
      "Capacité": {
        "Charge maximale": "340 kg",
        "Personnes maximum": "3+1"
      },
      "Motorisation": {
        "Puissance maximale": "6 hp",
        "Arbre moteur": "Court (S)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Banquette amovible": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont antidérapant": "Oui",
        "· Liston allégé": "Oui",
        "· Protection de quille sur toute la longueur": "Oui",
        "· Sacoche sous banquette": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui"
      },
      "Options": {
        "· Banquette supplémentaire": "En option"
      }
    }
  },
  {
    "id": "highfield-ultralite-290",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Ultralite 290",
    "category": "Ultralite",
    "seats": 4,
    "image": "assets/images/highfield-ultralite-290.webp",
    "highlights": [
      "290 cm",
      "4 places",
      "jusqu'à 10 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "290 cm",
        "Longueur intérieure": "214 cm",
        "Largeur hors-tout": "154 cm",
        "Largeur intérieure": "77 cm",
        "V de carène": "15°",
        "Poids du bateau": "39 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "38 cm",
        "Compartiments à air": "3"
      },
      "Capacité": {
        "Charge maximale": "375 kg",
        "Personnes maximum": "4"
      },
      "Motorisation": {
        "Puissance maximale": "10 hp",
        "Arbre moteur": "Court (S)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Banquette amovible": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont antidérapant": "Oui",
        "· Liston allégé": "Oui",
        "· Protection de quille sur toute la longueur": "Oui",
        "· Sacoche sous banquette": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui"
      },
      "Options": {
        "· Banquette supplémentaire": "En option",
        "· Taud de bateau": "En option"
      }
    }
  },
  {
    "id": "highfield-ultralite-310",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Ultralite 310",
    "category": "Ultralite",
    "seats": 5,
    "image": "assets/images/highfield-ultralite-310.webp",
    "highlights": [
      "313 cm",
      "5 places",
      "jusqu'à 15 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "313 cm",
        "Longueur intérieure": "224 cm",
        "Largeur hors-tout": "172 cm",
        "Largeur intérieure": "79 cm",
        "V de carène": "15°",
        "Poids du bateau": "50 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "44 cm",
        "Compartiments à air": "3"
      },
      "Capacité": {
        "Charge maximale": "585 kg",
        "Personnes maximum": "5"
      },
      "Motorisation": {
        "Puissance maximale": "15 hp",
        "Arbre moteur": "Court (S)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Banquette amovible": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont antidérapant": "Oui",
        "· Liston allégé": "Oui",
        "· Protection de quille sur toute la longueur": "Oui",
        "· Sacoche sous banquette": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui"
      },
      "Options": {
        "· Banquette supplémentaire": "En option",
        "· Taud de bateau": "En option"
      }
    }
  },
  {
    "id": "highfield-ultralite-340",
    "active": true,
    "brand": "highfield",
    "brandLabel": "Highfield",
    "family": "rib",
    "model": "Ultralite 340",
    "category": "Ultralite",
    "seats": 5,
    "image": "assets/images/highfield-ultralite-340.webp",
    "highlights": [
      "337 cm",
      "5 places",
      "jusqu'à 20 hp",
      "Coque aluminium"
    ],
    "specs": {
      "Dimensions": {
        "Longueur hors-tout": "337 cm",
        "Longueur intérieure": "243 cm",
        "Largeur hors-tout": "172 cm",
        "Largeur intérieure": "79 cm",
        "V de carène": "15°",
        "Poids du bateau": "53 kg"
      },
      "Flotteurs": {
        "Diamètre des boudins": "44 cm",
        "Compartiments à air": "3"
      },
      "Capacité": {
        "Charge maximale": "663 kg",
        "Personnes maximum": "5+1"
      },
      "Motorisation": {
        "Puissance maximale": "20 hp",
        "Arbre moteur": "Court (S)"
      },
      "Construction": {
        "Coque": "Aluminium haute résistance chromaté et thermolaqué",
        "Boudins": "ORCA Hypalon ou PVC"
      },
      "Équipements de série": {
        "· Boudins ORCA Hypalon ou PVC": "Oui",
        "· Clapets anti-retour affleurants": "Oui",
        "· Coque aluminium haute résistance, chromatée et thermolaquée": "Oui",
        "· Banquette amovible": "Oui",
        "· Points de levage et anneaux de remorquage": "Oui",
        "· Points de remorquage en patte d'oie": "Oui",
        "· Pont antidérapant": "Oui",
        "· Liston allégé": "Oui",
        "· Protection de quille sur toute la longueur": "Oui",
        "· Sacoche sous banquette": "Oui",
        "· Sac étanche Highfield": "Oui",
        "· Pompe à pied, avirons et kit de réparation": "Oui"
      },
      "Options": {
        "· Banquette supplémentaire": "En option",
        "· Taud de bateau": "En option"
      }
    }
  }
];
