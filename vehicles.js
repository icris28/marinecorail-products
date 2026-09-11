// Données techniques des produits (source : fiches BRP fournies par Marine Corail).
// Ne jamais inventer une caractéristique manquante : laisser le champ absent.
// Pour masquer un produit : active: false. Prix -> prices.js, stock -> inventory.js.
//
// Champs :
//   id          identifiant unique <marque>-<modele>-<variante>-<annee>
//   active      true/false (false = masqué du catalogue et du comparateur)
//   brand       "sea-doo" | "can-am"   (pilote le thème visuel)
//   family      "pwc" (motomarine) | "atv" | "ssv"  (seuls les modèles d'une même famille se comparent)
//   category    libellé libre affiché et utilisé comme filtre
//   seats       nombre de places (filtre)
//   image       chemin du visuel officiel (placeholder si le fichier est absent)
//   highlights  3-4 points clés affichés sur la carte
//   specs       sections -> lignes ; les libellés identiques s alignent dans le comparateur

window.MC_VEHICLES = [
  {
    "id": "seadoo-fishpro-sport-170-2026",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "FishPro Sport 170",
    "year": 2026,
    "category": "Sport Fishing",
    "seats": 3,
    "image": "assets/images/seadoo-fishpro-sport-170-2026.webp",
    "highlights": [
      "170 ch",
      "3 places",
      "Coque ST3",
      "GPS Garmin 7”"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE - 170",
        "Puissance": "170 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Aspiration naturelle",
        "Carburant": "Octane 95",
        "Refroidissement": "CLCS",
        "Marche arrière": "iBR électronique"
      },
      "Capacité": {
        "Places": "3",
        "Charge maximale": "273 kg",
        "Carburant": "70 L",
        "Rangement total": "149,9 L",
        "Glacière LinQ": "51 L"
      },
      "Dimensions": {
        "Longueur": "373 cm",
        "Largeur": "126 cm",
        "Hauteur": "115 cm",
        "Poids à sec": "386 kg"
      },
      "Coque": {
        "Type": "ST3",
        "Matériau": "Fibre de verre"
      },
      "Équipements": {
        "iDF": "Oui",
        "GPS": "Garmin 7” + détecteur de poissons",
        "Porte-cannes": "5",
        "Extension pont arrière": "Oui",
        "VTS": "Oui",
        "Audio BRP Premium": "Option"
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
      "Pièces renforcées"
    ],
    "specs": {
      "Moteur": {
        "Moteur": "Rotax 1630 ACE - 130",
        "Puissance": "130 ch",
        "Cylindrée": "1 630 cm³",
        "Admission": "Atmosphérique",
        "Carburant": "87 octane",
        "Refroidissement": "CLCS",
        "Marche arrière": "iBR électronique (option selon fiche)"
      },
      "Capacité": {
        "Places": "3",
        "Charge maximale": "273 kg",
        "Carburant": "70 L",
        "Rangement total": "98,9 L"
      },
      "Dimensions": {
        "Longueur": "345,1 cm",
        "Largeur": "125 cm",
        "Hauteur": "114 cm",
        "Poids à sec": "356 kg"
      },
      "Coque": {
        "Type": "ST3",
        "Matériau": "Fibre de verre"
      },
      "Équipements": {
        "LinQ": "Oui",
        "Échelle embarquement": "Oui",
        "Rangement avant accès direct": "Oui",
        "Pièces renforcées": "Harnais, bague d’usure, siège, poignées, arbre d’entraînement",
        "Mode ECO": "Oui",
        "Mode Sport": "Oui"
      }
    }
  },
  {
    "id": "seadoo-spark-trixx-3up-2024",
    "active": true,
    "brand": "sea-doo",
    "brandLabel": "Sea-Doo",
    "family": "pwc",
    "model": "Spark Trixx 3up 90",
    "year": 2024,
    "category": "Plaisance",
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
        "Moteur": "Rotax 900 ACE - 90",
        "Puissance": "90 ch",
        "Cylindrée": "899 cm³",
        "Admission": "Aspiration naturelle",
        "Carburant": "Octane 95",
        "Refroidissement": "CLCS",
        "Marche arrière": "iBR électronique"
      },
      "Capacité": {
        "Places": "3",
        "Charge maximale": "205 kg",
        "Carburant": "30 L",
        "Boîte à gants": "2,68 L",
        "Compartiment avant": "42 L (option)"
      },
      "Dimensions": {
        "Longueur": "305 cm",
        "Largeur": "117 cm",
        "Hauteur": "107 cm",
        "Poids à sec": "203 kg"
      },
      "Coque": {
        "Type": "Spark nouvelle génération",
        "Matériau": "Polytec"
      },
      "Équipements": {
        "Mode Trixx": "Oui",
        "VTS étendu": "Oui",
        "LinQ": "Oui",
        "LinQ Lite": "Oui",
        "Guidon réglable": "Oui",
        "Audio portatif BRP": "Option"
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
