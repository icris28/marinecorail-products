# PROJECT-HANDOFF.md

## Projet

**Marine Corail – Catalogue interactif Sea-Doo / Can-Am**

Ce dépôt contient une web-app statique HTML/CSS/JavaScript destinée à présenter les unités Sea-Doo et Can-Am disponibles chez Marine Corail, avec leurs caractéristiques techniques, leurs prix, leur statut de stock et un outil de comparaison.

Le projet est conçu pour être :

- hébergé sur **GitHub Pages** ;
- consulté sur **PC** ;
- utilisé sur une **tablette tactile 21,5"** ;
- utilisé en **mode borne** dans un espace de vente ;
- utilisé comme **application installable/PWA** selon la variante déployée.

L'application doit rester simple à maintenir, sans backend ni dépendance à WooCommerce.

---

## Dépôt GitHub

Dépôt principal :

`https://github.com/icris28/marinecorail-products`

URL GitHub Pages prévue :

`https://icris28.github.io/marinecorail-products/`

Variantes :

- version normale : `/`
- mode borne : `/kiosk.html`
- version application/PWA : `/app.html`

---

## Objectifs fonctionnels

L'application doit permettre de :

1. parcourir les produits **Sea-Doo** et **Can-Am** ;
2. filtrer les produits par marque et, si pertinent, par catégorie/statut ;
3. rechercher rapidement un modèle ;
4. ouvrir une **fiche produit détaillée** ;
5. afficher le **prix TTC** ;
6. afficher le **statut de stock** ;
7. afficher les caractéristiques techniques importantes ;
8. comparer jusqu'à **3 modèles** ;
9. proposer un mode **« Afficher uniquement les différences »** dans le comparateur ;
10. rester confortable à utiliser au tactile sur une tablette/borne de 21,5" ;
11. rester pleinement utilisable sur PC ;
12. permettre l'ajout ou la suppression d'un modèle sans modifier le moteur principal de l'application.

---

## Principes d'architecture

Le projet doit rester **100 % statique**.

### Contraintes techniques

- pas de backend ;
- pas de PHP ;
- pas de base de données serveur ;
- pas de WooCommerce ;
- pas de framework lourd nécessaire ;
- compatible GitHub Pages ;
- HTML/CSS/JavaScript natif de préférence ;
- aucune dépendance à un environnement Node en production ;
- aucune logique métier de catalogue codée en dur dans le HTML ;
- les données doivent être centralisées dans des fichiers JS/JSON séparés.

---

## Structure recommandée du dépôt

```text
/
├── index.html
├── kiosk.html
├── app.html
├── styles.css
├── app.js
├── vehicles.js
├── prices.js
├── inventory.js
├── manifest.webmanifest
├── service-worker.js
├── PROJECT-HANDOFF.md
├── README.md
└── assets/
    ├── images/
    ├── icons/
    └── logos/
```

### Rôle des fichiers

#### `index.html`

Version normale de l'application.

Usage principal :

- PC vendeur ;
- navigateur classique ;
- navigation libre ;
- pas de remise à zéro automatique obligatoire.

#### `kiosk.html`

Version borne/tablette.

Doit idéalement :

- fonctionner en plein écran lorsque le navigateur le permet ;
- être adaptée au tactile ;
- proposer de grandes zones cliquables ;
- remettre automatiquement l'application à zéro après une période d'inactivité ;
- afficher un avertissement avant reset ;
- retourner à l'écran d'accueil après reset.

Référence utilisée sur les autres projets Marine Corail :

- reset après environ **5 minutes d'inactivité** ;
- avertissement environ **30 secondes avant**.

#### `app.html`

Version installable/PWA.

Doit :

- conserver les mêmes fonctionnalités catalogue/comparaison ;
- pouvoir être installée si la plateforme le permet ;
- être utilisable hors ligne après un premier chargement si le service worker le permet ;
- inclure la même remise à zéro automatique que le mode borne si elle est utilisée en libre-service.

#### `vehicles.js`

Contient les **données techniques des produits**.

Aucune caractéristique technique ne doit être saisie directement dans le HTML.

Exemple conceptuel :

```js
{
  id: "canam-outlander-electric-2027",
  active: true,
  brand: "can-am",
  model: "Outlander Electric",
  year: 2027,
  category: "ATV",
  image: "assets/images/canam-outlander-electric-2027.webp",

  highlights: [
    "47 ch",
    "8,9 kWh",
    "jusqu'à 80 km"
  ],

  specs: {
    moteur: {
      type: "ROTAX E-POWER",
      puissanceMax: "47 ch (35 kW)",
      puissanceContinue: "27 ch (20 kW)",
      coupleMax: "72 Nm"
    },

    batterie: {
      capacite: "8,9 kWh",
      autonomieWMTC: "80 km",
      rechargeNiveau2: "1 h 30 de 0 à 100 %"
    },

    dimensions: {
      longueur: "...",
      largeur: "...",
      hauteur: "...",
      poids: "..."
    }
  }
}
```

La structure réelle peut évoluer, mais elle doit rester :

- lisible ;
- extensible ;
- modifiable sans toucher au moteur principal ;
- capable de gérer des champs différents selon Sea-Doo et Can-Am.

#### `prices.js`

Contient uniquement les prix Marine Corail.

Exemple :

```js
window.MC_PRICES = {
  "seadoo-spark-trixx-3up-2024": 1495000,
  "seadoo-fishpro-sport-170-2026": null,
  "canam-outlander-electric-2027": null
};
```

Conventions :

- prix en F CFP ;
- nombre entier ;
- pas d'espace ;
- pas de symbole monétaire dans la valeur ;
- `null` signifie prix non renseigné ;
- le formatage visuel est géré dans l'application.

#### `inventory.js`

Contient les informations de stock et variantes locales.

Exemple :

```js
window.MC_INVENTORY = {
  "seadoo-spark-trixx-3up-2024": {
    status: "stock",
    quantity: 1,
    color: "Bleu vapeur / Jaune néon"
  }
};
```

Statuts possibles à prévoir :

- `stock`
- `arrivage`
- `reserve`
- `rupture`

Il est préférable de gérer l'affichage par `active: false` dans `vehicles.js` pour masquer complètement un produit du catalogue.

---

## Règles de maintenance

### Ajouter un produit

1. ajouter son image dans `assets/images/` ;
2. ajouter une entrée complète dans `vehicles.js` ;
3. ajouter son prix dans `prices.js` ;
4. ajouter son statut de stock dans `inventory.js` ;
5. vérifier que le comparateur affiche correctement les champs.

Le moteur principal ne doit pas nécessiter de modification pour un simple ajout de véhicule.

### Retirer temporairement un produit

Option recommandée :

```js
active: false
```

Le produit ne doit plus apparaître dans le catalogue ni dans le comparateur.

### Modifier un prix

Modifier uniquement `prices.js`.

### Modifier le stock ou la couleur

Modifier uniquement `inventory.js`.

---

## Sources techniques déjà disponibles

Le projet a été amorcé à partir de fiches techniques BRP officielles fournies par Marine Corail.

### Can-Am

- 2027 Outlander Electric
- 2027 Outlander MAX Electric

### Sea-Doo

- 2026 FishPro Sport 170
- 2026 GTX Pro 130
- 2024 Spark Trixx

### Règle impérative

**Ne jamais inventer une caractéristique technique manquante.**

Si une donnée n'est pas dans la fiche fournie :

- laisser le champ absent ;
- afficher éventuellement `Non renseigné` si nécessaire ;
- ou attendre une source supplémentaire.

Ne pas corriger silencieusement une fiche BRP avec des données externes sans instruction explicite.

---

## Données techniques de référence

Cette section sert uniquement de repère de cohérence.

### Can-Am Outlander Electric 2027

- ROTAX E-POWER ;
- puissance maximale : 47 ch / 35 kW ;
- puissance continue : 27 ch / 20 kW ;
- couple maximal : 72 Nm ;
- batterie lithium-ion intégrée 8,9 kWh ;
- autonomie WMTC annoncée : jusqu'à 80 km ;
- autonomie utilitaire moyenne indiquée : 50 km ;
- chargeur embarqué 6,6 kW ;
- recharge niveau 2 : 20 à 80 % en 50 min ;
- recharge niveau 2 : 0 à 100 % en 1 h 30 ;
- recharge niveau 1 : 0 à 100 % en 5 h 15 ;
- 2x4 / 4x4 ;
- DPS Tri-Mode ;
- capacité de remorquage : 830 kg.

### Can-Am Outlander MAX Electric 2027

Même groupe motopropulseur électrique général que l'Outlander Electric 2027, avec différences de dimensions, empattement, poids et configuration.

### Sea-Doo FishPro Sport 170 2026

- Rotax 1630 ACE – 170 ;
- 170 ch ;
- cylindrée 1 630 cm³ ;
- coque ST3 ;
- iDF ;
- GPS Garmin 7" et détecteur de poissons ;
- 5 porte-cannes ;
- glacière LinQ 51 L ;
- réservoir 70 L ;
- rangement total 149,9 L ;
- longueur 373 cm ;
- largeur 126 cm ;
- poids à sec 386 kg.

### Sea-Doo GTX Pro 130 2026

- modèle location ;
- Rotax 1630 ACE – 130 ;
- 130 ch ;
- coque ST3 ;
- réservoir 70 L ;
- rangement total 98,9 L ;
- longueur 345,1 cm ;
- largeur 125 cm ;
- poids à sec 356 kg ;
- ensemble de pièces renforcées pour usage intensif.

### Sea-Doo Spark Trixx 2024

Le projet utilise principalement la variante 3up lorsque nécessaire.

- Rotax 900 ACE – 90 ;
- 90 ch ;
- 899 cm³ ;
- coque Spark en Polytec ;
- mode Trixx ;
- VTS étendu ;
- 3 places pour la variante 3up ;
- poids à sec 203 kg pour la variante 3up ;
- longueur 305 cm pour la variante 3up ;
- réservoir 30 L.

Un prix de **1 495 000 F CFP TTC** figurait sur la fiche fournie pour la version Spark 3up Trixx 90.

Les prix doivent toutefois rester gérés dans `prices.js`.

---

## Prix

Les prix sont des données locales Marine Corail et ne font pas partie des caractéristiques techniques BRP.

### Disclaimer obligatoire

Afficher de manière discrète mais lisible :

> Les prix affichés sur cette page sont donnés à titre indicatif et n’ont pas de valeur contractuelle. Ils peuvent être modifiés à tout moment. Seuls les prix affichés en magasin par Marine Corail font foi.

Le disclaimer doit être présent dans les vues où des prix sont affichés.

---

## Design et identité visuelle

L'application doit utiliser deux univers visuels clairement distincts.

### Sea-Doo

Direction souhaitée :

- claire ;
- moderne ;
- nautique ;
- énergique ;
- premium ;
- grandes photos produit ;
- interface aérée ;
- inspiration des codes visuels officiels Sea-Doo.

### Can-Am

Direction souhaitée :

- plus sombre ;
- robuste ;
- off-road ;
- technique ;
- contrastée ;
- mécanique / aventure.

### Marine Corail

L'identité Marine Corail doit rester discrète.

L'application est un outil de consultation, pas une landing page marketing.

Éviter :

- appels commerciaux agressifs ;
- boutons « Acheter maintenant » ;
- contenus promotionnels inutiles.

Les fonctions principales doivent être :

- consulter ;
- filtrer ;
- comparer ;
- lire une fiche ;
- voir prix et stock.

---

## Ergonomie PC

L'application doit rester totalement fonctionnelle sur PC.

Sur grand écran :

- grille de plusieurs cartes ;
- navigation à la souris ;
- hover states discrets ;
- fiches détaillées lisibles ;
- tableau de comparaison horizontal ;
- possibilité d'utiliser la largeur disponible.

L'expérience PC ne doit pas être sacrifiée au profit du tactile.

---

## Ergonomie tablette / borne 21,5"

Cible matérielle principale à terme :

- tablette/écran tactile environ 21,5" ;
- Android 13 possible ;
- usage sur pied/roulette ;
- libre-service en magasin.

L'interface doit prévoir :

- grandes zones tactiles ;
- boutons suffisamment espacés ;
- pas de contrôles minuscules ;
- textes lisibles à distance courte ;
- défilement fluide ;
- interactions sans hover obligatoire ;
- comparaison facilement lisible.

Si la borne est utilisée en orientation portrait, l'interface doit rester exploitable autour de 1080 × 1920.

Si elle est en paysage, elle doit exploiter l'espace sans étirer excessivement les fiches.

---

## Mode borne

Le mode borne doit :

- démarrer sur la page principale du catalogue ;
- permettre la consultation complète ;
- permettre la comparaison ;
- réinitialiser les filtres, comparaison et fiche ouverte après inactivité ;
- afficher un avertissement avant reset si possible ;
- remettre l'utilisateur suivant dans un état propre.

Référence souhaitée :

- reset à environ 5 minutes ;
- avertissement 30 secondes avant.

Éviter de supprimer ou réinitialiser une session pendant une interaction active.

---

## Mode application / PWA

La version `app.html` doit rester compatible avec une PWA installable.

Objectifs :

- icône application ;
- affichage standalone lorsque possible ;
- fonctionnement hors ligne après premier chargement lorsque possible ;
- même catalogue que la version web ;
- même logique de reset que la borne si utilisée en libre-service.

Le service worker doit être versionné proprement pour éviter les problèmes de cache.

---

## Catalogue

### Carte produit

Une carte doit idéalement afficher :

- photo ;
- marque ;
- modèle ;
- année ;
- couleur principale si utile ;
- quelques caractéristiques clés ;
- statut de stock ;
- prix TTC ;
- action `Voir la fiche` ;
- case/bouton `Comparer`.

Ne pas surcharger les cartes avec toutes les caractéristiques.

### Fiche détaillée

La fiche doit être structurée par sections.

Exemples Sea-Doo :

- moteur ;
- capacité ;
- dimensions ;
- coque ;
- indicateur ;
- modes de conduite ;
- rangement ;
- caractéristiques clés ;
- équipements ;
- garantie.

Exemples Can-Am :

- moteur ;
- batterie/recharge pour électrique ;
- transmission ;
- rouage d'entraînement ;
- modes de conduite ;
- suspension ;
- pneus/jantes ;
- freins ;
- dimensions/capacités ;
- remorquage ;
- instrumentation ;
- équipements ;
- garantie.

Ne pas forcer une structure unique si cela rend les fiches artificielles.

---

## Comparateur

Le comparateur est une fonctionnalité centrale.

### Nombre de modèles

Maximum recommandé : **3 modèles simultanément**.

### Comportement

Le comparateur doit :

- aligner les modèles en colonnes ;
- aligner les caractéristiques équivalentes par ligne ;
- afficher le prix et le statut de stock en tête ;
- gérer les champs manquants sans erreur ;
- permettre de retirer un modèle de la comparaison ;
- permettre de vider la comparaison.

### Afficher uniquement les différences

Ajouter une option :

`Afficher uniquement les différences`

Lorsqu'elle est activée :

- masquer les lignes où toutes les valeurs visibles sont identiques ;
- garder les données essentielles d'identification ;
- gérer proprement les valeurs absentes.

### Comparaison inter-marques

Sea-Doo et Can-Am ont des architectures très différentes.

Deux approches acceptables :

1. autoriser la comparaison inter-marques mais n'afficher que les champs comparables ;
2. limiter la comparaison à une même famille produit.

Choisir l'approche qui produit la meilleure UX.

Ne pas afficher des tableaux absurdes où des caractéristiques sans rapport sont artificiellement alignées.

---

## Recherche et filtres

Prévoir au minimum :

- recherche texte ;
- filtre Sea-Doo ;
- filtre Can-Am ;
- filtre statut de stock.

Filtres supplémentaires possibles si la base grandit.

### Sea-Doo

- plaisance ;
- pêche ;
- location ;
- sport/performance ;
- nombre de places ;
- puissance.

### Can-Am

- ATV ;
- SSV ;
- électrique ;
- utilitaire ;
- loisirs ;
- nombre de places.

Les filtres doivent être générés à partir des données autant que possible.

---

## Images

Utiliser de vraies images produit propres.

Ordre de préférence :

1. visuels officiels fournis par Marine Corail / BRP ;
2. visuels officiels extraits des ressources fournies ;
3. visuels officiels téléchargés avec autorisation/usage approprié.

Ne pas utiliser d'images générées par IA pour représenter un modèle réel.

Convention de nommage conseillée :

```text
assets/images/
  seadoo-fishpro-sport-170-2026.webp
  seadoo-gtx-pro-130-2026.webp
  seadoo-spark-trixx-3up-2024.webp
  canam-outlander-electric-2027.webp
  canam-outlander-max-electric-2027.webp
```

---

## Sources et fiabilité

Les caractéristiques techniques doivent être basées sur les fiches BRP fournies.

### Ne pas :

- inventer une donnée manquante ;
- extrapoler d'une autre année modèle ;
- mélanger des variantes sans l'indiquer ;
- supposer qu'une caractéristique est identique entre deux versions ;
- remplacer silencieusement une valeur BRP par une valeur trouvée ailleurs.

### Si une donnée externe est utilisée

Elle doit être :

- clairement identifiée ;
- issue d'une source officielle si possible ;
- distinguée des données fournies dans les fiches locales.

---

## Millésimes et variantes

Respecter strictement :

- année modèle ;
- nombre de places ;
- motorisation ;
- couleur ;
- version MAX/non-MAX ;
- version Pro/Trixx/FishPro/etc.

Ne pas fusionner deux variantes dans une seule fiche sans structure explicite.

Exemple :

Spark Trixx 1up et Spark Trixx 3up ont des poids, longueurs et capacités différents.

Si les deux sont commercialisés, créer deux entrées distinctes.

---

## Stock

Le catalogue représente les unités disponibles ou pertinentes pour Marine Corail.

Le statut de stock doit rester modifiable sans modifier la fiche technique.

Exemple de libellés visibles :

- En stock
- Arrivage
- Réservé
- Rupture

Éviter d'afficher une quantité si Marine Corail ne souhaite pas communiquer publiquement le nombre exact.

---

## Performance

Le catalogue doit rester rapide sur une tablette Android milieu de gamme.

Éviter :

- bibliothèques JS lourdes inutiles ;
- images non compressées de plusieurs Mo ;
- animations gourmandes ;
- vidéos en autoplay ;
- chargements externes inutiles.

Préférer :

- images WebP optimisées ;
- lazy loading ;
- CSS simple ;
- JavaScript léger.

---

## Accessibilité et tactile

Minimum attendu :

- boutons suffisamment grands ;
- contraste correct ;
- texte lisible ;
- focus clavier visible sur PC ;
- navigation possible au clavier autant que raisonnable ;
- labels explicites ;
- aucune fonction critique uniquement accessible au hover.

---

## Ce que Claude doit faire lors d'une reprise

Avant toute refonte importante :

1. lire ce fichier ;
2. lire `README.md` ;
3. inspecter `vehicles.js`, `prices.js` et `inventory.js` ;
4. auditer `app.js` ;
5. vérifier les trois variantes `index.html`, `kiosk.html`, `app.html` ;
6. tester le comparateur ;
7. vérifier la publication GitHub Pages ;
8. ne pas casser les URLs existantes sans nécessité.

---

## Priorités actuelles

### 1. Fiabiliser l'architecture dynamique

Vérifier que :

- l'ajout d'un véhicule se fait uniquement par données ;
- la suppression se fait via `active:false` ;
- les cartes et fiches sont générées automatiquement ;
- les prix et stocks sont séparés.

### 2. Fiabiliser le comparateur

Ajouter ou améliorer :

- comparaison jusqu'à 3 produits ;
- lignes dynamiques ;
- gestion des champs absents ;
- option `Afficher uniquement les différences`.

### 3. Améliorer le design

Mettre en place :

- identité Sea-Doo claire ;
- identité Can-Am distincte ;
- excellente lisibilité PC ;
- excellente ergonomie tactile.

### 4. Enrichir progressivement la base

De nouvelles fiches techniques seront fournies au fur et à mesure.

Le système doit absorber facilement :

- nouveaux Sea-Doo ;
- nouveaux Can-Am ;
- nouveaux millésimes ;
- variantes différentes.

---

## Convention pour les IDs

Format conseillé :

```text
<marque>-<modele>-<variante>-<annee>
```

Exemples :

```text
seadoo-fishpro-sport-170-2026
seadoo-gtx-pro-130-2026
seadoo-spark-trixx-3up-2024
canam-outlander-electric-2027
canam-outlander-max-electric-2027
```

Ne pas réutiliser le même ID pour une autre variante.

---

## Formatage des prix

Fonction attendue :

```js
formatXPF(1495000)
// 1 495 000 F CFP
```

Le formatage doit utiliser des espaces de milliers lisibles.

---

## Gestion du cache

Attention particulière pour GitHub Pages et les PWA.

Bonnes pratiques :

- versionner le service worker ;
- changer le nom du cache à chaque release importante ;
- éventuellement ajouter des paramètres de version aux assets principaux ;
- supprimer les anciens caches dans l'événement `activate` ;
- privilégier une stratégie qui permet de récupérer rapidement les nouvelles versions.

---

## Déploiement GitHub Pages

Le site doit être publiable via :

```text
Settings
→ Pages
→ Deploy from a branch
→ main
→ /(root)
```

Le fichier `index.html` doit rester à la racine du dépôt.

Aucune étape de build ne doit être obligatoire pour publier une simple mise à jour de données.

---

## Processus de mise à jour recommandé

### Mise à jour de prix

1. modifier `prices.js` ;
2. commit ;
3. GitHub Pages se redéploie.

### Changement de stock

1. modifier `inventory.js` ;
2. commit.

### Nouveau produit

1. ajouter image ;
2. ajouter fiche dans `vehicles.js` ;
3. ajouter prix ;
4. ajouter stock ;
5. tester comparateur ;
6. commit.

---

## Principe directeur

Le projet doit rester un **outil de consultation technique dynamique**, pas un mini-site e-commerce.

La priorité est :

1. exactitude ;
2. lisibilité ;
3. comparaison ;
4. facilité de maintenance ;
5. ergonomie PC et tactile ;
6. rapidité.

Toute modification doit être jugée par rapport à ces critères.
