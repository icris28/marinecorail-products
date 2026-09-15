# Handoff — Catalogue Marine Corail (Sea-Doo / Can-Am / Highfield)

Document de reprise destiné à un assistant qui découvre le projet (ChatGPT ou autre).
Rédigé le 15 septembre 2026. Il est autoportant : tu n'as pas accès au dépôt, donc tout ce
qui est nécessaire pour reprendre est décrit ici. Demande à Christophe de te coller les
fichiers dont tu as besoin.

---

## 1. Ce qu'est le projet

Une web-app **statique** (HTML/CSS/JavaScript natif, aucun build, aucun framework) qui
présente les motomarines Sea-Doo, les quads Can-Am et les semi-rigides Highfield
disponibles chez **Marine Corail**, un ship-chandler de Nouméa (Nouvelle-Calédonie).

Elle sert de catalogue de consultation dans l'espace de vente : caractéristiques
techniques, prix indicatifs, statut de stock, et un comparateur de trois modèles.
Ce n'est **pas** un site e-commerce : pas de panier, pas de bouton « Acheter », pas de ton
promotionnel.

Trois usages visés :

- PC vendeur (`index.html`) ;
- borne tactile 21,5" en libre-service (`kiosk.html`) ;
- application installable / PWA (`app.html`).

Christophe consulte aussi la page sur **iPad / Safari**, ce qui a déjà causé des bugs
d'affichage (voir § 6).

**Dépôt :** `https://github.com/icris28/marinecorail-products`
**Publication :** GitHub Pages, branche `main`, racine. Aucune étape de build.
**Clone local de Christophe :** `D:\Github\marinecorail-products` (Windows, GitHub Desktop).

---

## 2. Principe d'architecture — le point à ne pas casser

**Les données sont séparées du moteur.** Ajouter un produit, changer un prix ou masquer un
modèle ne doit jamais demander de toucher à `app.js`, `styles.css` ou `index.html`.

| Fichier | Contenu | Quand on le modifie |
|---|---|---|
| `brands.js` | `window.MC_BRANDS` : onglets, textes du bandeau, thème visuel de chaque marque. `window.MC_FAMILIES` : familles de comparaison | nouvelle marque, retouche d'un thème |
| `vehicles.js` | `window.MC_VEHICLES` : les fiches techniques | nouveau modèle, masquage |
| `prices.js` | `window.MC_PRICES` : prix TTC en F CFP | changement de prix |
| `inventory.js` | `window.MC_INVENTORY` : statut, quantité interne, coloris de l'unité | arrivage, vente, réservation |
| `app.js` | moteur : génération des thèmes, catalogue, fiches, comparateur | évolution fonctionnelle |
| `styles.css` | mise en page. **Aucune règle propre à une marque** : elles sont générées | évolution visuelle |
| `tools/maj-prix.py` | régénère `prices.js` depuis le tableau Excel des tarifs | — |

Les thèmes de marque (`body[data-brand="…"]`, `.vehicle-card.<marque>`,
`.dialog-shell.<marque>`, l'onglet actif) sont **produits au chargement par `app.js`** à
partir de `brands.js`, et injectés dans une balise `<style>`. C'est pour cela que
`styles.css` ne contient aucune couleur de marque : ajouter Zodiac ou Suzuki demain se fait
par une entrée dans `brands.js`, rien d'autre.

### Structure d'une entrée de `vehicles.js`

```js
{
  "id": "seadoo-gtx-170-2027",        // <marque>-<modele>-<variante>-<annee>, unique
  "active": true,                      // false = masqué du catalogue et du comparateur
  "brand": "sea-doo",                  // "sea-doo" | "can-am" | "highfield"
  "brandLabel": "Sea-Doo",
  "family": "pwc",                     // "pwc" | "atv" | "ssv" | "rib"
  "model": "GTX 170",
  "year": 2027,
  "category": "Touring",               // libellé affiché, sert aussi de filtre
  "seats": 3,
  "image": "assets/images/seadoo-gtx-170-2027.webp",
  "highlights": ["170 ch", "3 places", "Coque ST3", "Écran tactile 10,25 po"],
  "specs": {
    "Moteur":     { "Moteur": "Rotax 1630 ACE – 170", "Puissance": "170 ch", … },
    "Capacité":   { "Places": "3", "Capacité de poids": "273 kg", … },
    "Dimensions": { "Longueur": "345 cm", …, "Poids à sec": "361 kg" },
    "Coque":      { "Type": "Coque ST3", "Matériau": "Fibre de verre" },
    "Indicateur": { … }, "Équipements": { … }, "Coloris": { … }, "Garantie": { … }
  }
}
```

**Les libellés de `specs` doivent rester rigoureusement identiques d'une fiche à l'autre** :
c'est sur eux que le comparateur aligne ses lignes. Si un modèle dit « Puissance » et un
autre « Puissance max », les deux valeurs s'affichent sur deux lignes séparées au lieu de se
faire face.

### Statuts de stock

`stock` · `arrivage` · `precommande` · `reserve` · `rupture`
(les anciens codes `arrival`, `reserved`, `out` de la v0.1 restent acceptés).

### Familles de comparaison

`pwc` (motomarines) · `atv` (quads) · `ssv` · `rib` (semi-rigides).
**On ne compare que dans une même famille** : aligner les caractéristiques d'un jet-ski et
d'un quad produit un tableau absurde. Le catalogue affiche un message d'explication si
l'utilisateur essaie de mélanger.

---

## 3. Contenu au 15 septembre 2026

**20 fiches**, toutes issues des fiches techniques PDF officielles BRP fournies par
Marine Corail :

- **Sea-Doo en stock (3)** : FishPro Sport 170 (2026), GTX Pro 130 (2026, modèle de
  location), Spark Trixx pour 3 (2024).
- **Sea-Doo en pré-commande 2027 (15)** : GTR-X 300, RXP-X 350, RXP-X Senna 350, RXT-X 350,
  Spark X Trixx pour 1, Spark X Trixx pour 3, Explorer Pro 170, Explorer Pro 230,
  FishPro Sport 170, FishPro Trophy 170, GTX Limited 350, GTX 170, GTX 230, GTX 300,
  Wake Pro 230.
- **Can-Am (2)** : Outlander Electric 2027, Outlander MAX Electric 2027.
- **Highfield** : l'onglet existe et fonctionne, aucun modèle renseigné — les fiches PDF et
  les logos sont attendus.

Chaque déclinaison de puissance a **sa propre fiche** (GTX 170, GTX 230 et GTX 300 sont
trois cartes distinctes), pour que le comparateur puisse les opposer et que chacune porte
son prix.

**Prix :** un seul est renseigné, le Spark Trixx 3up 2024 à 1 495 000 F CFP. Tous les autres
sont à `null`, ce qui affiche « Prix sur demande ».

**Visuels :** extraits des PDF puis détourés (fond transparent), 18 fichiers WebP pour
environ 400 Ko au total. Les deux Can-Am n'ont pas d'image, faute de PDF fourni : un
pictogramme de remplacement s'affiche.

---

## 4. Règles de contenu — impératives

1. **Ne jamais inventer une caractéristique technique absente d'une fiche BRP.** Si la
   donnée n'y est pas, on omet la ligne ; le comparateur affichera « Non renseigné ». Ne pas
   la chercher ailleurs sans le dire, ne pas extrapoler depuis une autre année modèle, ne
   pas supposer que deux variantes partagent une valeur.
2. **Pas d'image générée par IA pour représenter un modèle réel.** Uniquement des visuels
   officiels BRP.
3. **Respecter strictement les variantes** : année modèle, nombre de places, motorisation,
   version MAX / Pro / Trixx / FishPro. Deux variantes = deux entrées.
4. **Le disclaimer de prix est obligatoire** partout où un prix apparaît :
   « Les prix affichés sont donnés à titre indicatif et n'ont pas de valeur contractuelle.
   Ils peuvent être modifiés à tout moment. Seuls les prix affichés en magasin par
   Marine Corail font foi. »

---

## 5. Gestion des tarifs

Les prix se saisissent dans `_sources/tarifs-marine-corail.xlsx`, onglet **Tarifs**, colonne
« Prix TTC » (fond jaune) : une ligne par modèle, nombre entier en F CFP, sans espace ni
symbole. Une case vide affiche « Prix sur demande ».

Le report vers le catalogue se fait par :

```
python3 tools/maj-prix.py _sources/tarifs-marine-corail.xlsx
```

Le script réécrit `prices.js`, signale les identifiants inconnus et les modèles absents du
tableau, et ne touche à rien d'autre. Il a besoin d'`openpyxl`.

Le dossier `_sources/` (fiches PDF, logos d'origine, tableau de tarifs) est **ignoré par
Git** : il ne part pas sur GitHub Pages.

---

## 6. Pièges déjà rencontrés — ne pas les réintroduire

**Safari / iPad.** Ces trois-là ont réellement cassé l'affichage :

- **Pas d'élément `<dialog>`.** Safari ne l'accepte qu'à partir d'iPadOS 15.4 ; en dessous,
  les panneaux s'affichent en permanence en bas de page. Les fiches et le comparateur sont
  donc des `<div class="modal" hidden>` ordinaires, avec un fond assombri séparé et une
  gestion maison de l'ouverture, de la touche Échap et du clic extérieur.
- **Pas d'unité `vh` pour dimensionner un panneau.** Sur iOS, `1vh` se rapporte à la fenêtre
  barre d'adresse dépliée : un panneau en `94vh` déborde sous l'écran visible. On utilise
  `max-height: 100%` à l'intérieur d'un conteneur en `position: fixed`.
- **La barre du haut doit passer à deux rangées dès 1180 px.** Avec quatre onglets de
  marque, elle déborde en paysage iPad (1024 px) : le bouton « Comparer » chevauche le champ
  de recherche et les libellés se coupent. Si tu ajoutes un cinquième onglet, revérifie.

**Autres points acquis :**

- La grille du catalogue est en `repeat(auto-fill, minmax(300px, 1fr))`. Le `gap` compte
  dans le calcul : à 320 px, l'iPad en paysage retombait à deux colonnes au lieu de trois.
- Un `<input>` en flex a besoin de `min-width: 0`, sinon il refuse de se réduire et fait
  déborder la page horizontalement.
- La barre de comparaison est en `position: fixed` ; `app.js` réserve dynamiquement sa
  hauteur exacte en bas de page, sinon elle masque les boutons de la dernière rangée.
- `color-mix()` et `backdrop-filter` ont un repli (`@supports`, préfixe `-webkit-`).
- Les listes déroulantes ont `appearance: none` et leur propre chevron, sinon Safari impose
  son rendu natif dans la pastille.

**Git, sur le poste de Christophe.** L'environnement laisse des fichiers de verrou
(`.git/index.lock`, `.git/HEAD.lock`) qu'un assistant ne peut pas supprimer. Il faut les
déplacer dans `_to_delete/` avant chaque commande git. Le push se fait toujours depuis
GitHub Desktop, par Christophe.

---

## 7. Ce qui reste à faire

1. **Mode borne** : remise à zéro après environ 5 minutes d'inactivité, avec un
   avertissement 30 secondes avant, et retour à l'écran d'accueil. `app.js` expose déjà
   `window.MC_RESET()` qui réinitialise filtres, comparaison, fiche ouverte et marque — il
   ne reste qu'à le brancher sur un minuteur d'inactivité. Ne pas réinitialiser pendant une
   interaction active.
2. **PWA** : service worker versionné, fonctionnement hors ligne après le premier
   chargement, suppression des anciens caches à l'`activate`.
3. **Highfield** : intégrer les fiches PDF et les logos quand ils arrivent ; la palette
   actuelle (gris ardoise et orange) est provisoire et doit être ajustée sur les logos
   officiels.
4. **Logos** Sea-Doo, Can-Am et Marine Corail dans `assets/logos/`. Le fichier
   `marine-corail.svg` est repris automatiquement dans la barre du haut s'il existe.
5. **Prix** à saisir dans le tableau Excel.
6. **Visuels haute définition** : les fiches 2027 fournies sont les versions « LR » de BRP,
   dont les photos ne font que 550 px de large environ. Correct sur les cartes, un peu doux
   en plein écran sur une borne 21,5". Demander à BRP les fiches HR ou le kit presse ; les
   noms de fichiers sont déjà les bons, il suffit de remplacer.

---

## 8. Comment travailler avec Christophe

Il est associé-gérant de Marine Corail, à l'aise techniquement, et il pilote le projet
lui-même. Échanges **en français**.

- Il valide les choix structurants avant qu'on les code (une fiche par puissance ou une
  fiche groupée, statut dédié ou non pour les pré-commandes, etc.). Proposer une
  recommandation argumentée plutôt qu'une question ouverte.
- Il attend qu'on signale les incohérences plutôt qu'on les corrige en silence — par
  exemple deux fiches BRP qui emploient un vocabulaire différent pour la même chose.
- Le déploiement passe par son poste : lui livrer les fichiers et lui dire ce qu'il reste à
  faire, sans supposer un accès en écriture au dépôt.
- Ne pas alourdir : il préfère une réponse courte qui dit ce qui a changé et ce qui reste
  en suspens.

---

## 9. Pour démarrer

Demande à Christophe de te coller, selon la tâche :

- une évolution du moteur ou du style → `app.js`, `styles.css`, `index.html` ;
- un ajout de produit → `vehicles.js` (ou seulement une entrée existante comme modèle),
  plus la fiche PDF du nouveau modèle ;
- une nouvelle marque → `brands.js` ;
- un changement de prix ou de stock → `prices.js` et `inventory.js`.

Le `README.md` du dépôt documente les procédures courantes, et `PROJECT-HANDOFF.md`
contient le cahier des charges d'origine.
