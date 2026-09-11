# Marine Corail – Catalogue Sea-Doo & Can-Am

Web-app statique (HTML/CSS/JS natif, sans build) présentant les unités Sea-Doo et Can-Am
disponibles chez Marine Corail : fiches techniques, prix indicatifs, statut de stock et
comparateur jusqu'à 3 modèles. Hébergée sur GitHub Pages.

Version : **0.2** – comparateur complet et double identité visuelle Sea-Doo / Can-Am.
Voir `PROJECT-HANDOFF.md` pour le cahier des charges complet.

## Variantes

| URL | Usage |
|---|---|
| `/` (`index.html`) | PC vendeur, navigation libre |
| `/kiosk.html` | Borne / tablette 21,5" (redirige vers `index.html?kiosk=1`) |
| `/app.html` | Version installable / PWA (redirige vers `index.html?app=1`) |

Le reset automatique après inactivité et le service worker (hors-ligne) sont prévus
pour une version ultérieure ; `app.js` expose déjà `window.MC_RESET()` qui remet
l'application à zéro (filtres, comparaison, fiche ouverte, marque).

## Fichiers de données (seuls fichiers à modifier au quotidien)

| Fichier | Contenu | Quand le modifier |
|---|---|---|
| `brands.js` | `window.MC_BRANDS` – onglets, textes du bandeau, univers visuel ; `window.MC_FAMILIES` – familles de comparaison | nouvelle marque, retouche d'un thème |
| `vehicles.js` | `window.MC_VEHICLES` – caractéristiques techniques issues des fiches BRP | nouveau modèle, masquage (`active: false`) |
| `prices.js` | `window.MC_PRICES` – prix TTC en F CFP (entier, `null` = prix sur demande) | changement de prix — de préférence via le tableau Excel, voir ci-dessous |
| `inventory.js` | `window.MC_INVENTORY` – statut de stock, quantité (interne), coloris | arrivage, vente, réservation |

Le moteur (`app.js`) et la mise en page (`styles.css`) n'ont pas besoin d'être touchés
pour ajouter, retirer ou modifier un produit.

### Ajouter un véhicule

1. Déposer le visuel officiel dans `assets/images/<id>.webp` (fond neutre, ≤ 300 Ko).
2. Dupliquer une entrée de `vehicles.js`, lui donner un `id` unique au format
   `<marque>-<modele>-<variante>-<annee>`, renseigner `brand`, `family`, `category`,
   `seats`, `highlights` et les sections `specs`.
   **Ne jamais inventer une donnée absente de la fiche BRP** : omettre la ligne.
3. Ajouter l'`id` dans `prices.js` et `inventory.js`.
4. Ouvrir le comparateur avec le nouveau modèle pour vérifier l'alignement des lignes :
   les libellés identiques (ex. `Puissance`, `Poids à sec`) s'alignent automatiquement.

### Masquer temporairement un véhicule

Dans `vehicles.js` : `"active": false`. Le modèle disparaît du catalogue et du comparateur.

### Statuts de stock

`stock` · `arrivage` · `precommande` · `reserve` · `rupture` (les anciens codes `arrival`,
`reserved`, `out` restent acceptés).

## Tarifs

Les prix se saisissent dans `_sources/tarifs-marine-corail.xlsx`, onglet **Tarifs**,
colonne « Prix TTC » (fond jaune) : une ligne par modèle, nombre entier en F CFP,
case vide = « Prix sur demande ». Le fichier n'est pas publié (dossier `_sources/` ignoré
par Git).

Pour reporter les prix dans le catalogue :

```
python3 tools/maj-prix.py _sources/tarifs-marine-corail.xlsx
```

Le script réécrit `prices.js`, signale les identifiants inconnus et les modèles absents du
tableau. Il ne touche à rien d'autre.

## Comparateur

- 3 modèles maximum, sélection depuis les cartes ou la fiche, barre de sélection en bas d'écran.
- Les lignes sont regroupées par section et alignées sur les libellés identiques ;
  une valeur absente s'affiche « Non renseigné ».
- Option « Afficher uniquement les différences ».
- La comparaison se fait au sein d'une même famille (`family` : `pwc`, `atv`, `ssv`, `rib`)
  pour éviter des tableaux sans rapport entre motomarines, quads et semi-rigides.

## Marques et identité visuelle

Les onglets et les thèmes sont **générés au chargement à partir de `brands.js`** : ajouter
une marque ne demande aucune modification de `index.html`, `styles.css` ou `app.js`.
Chaque entrée décrit l'onglet, le texte du bandeau, la couleur d'accent, le fond des visuels
et les jetons d'interface (`ui`), avec `dark: true` pour un univers sombre.

Marques actuelles : **Sea-Doo** (clair, nautique), **Can-Am** (sombre, off-road) et
**Highfield** (clair, accent orange — palette provisoire à ajuster sur les logos officiels).
Chaque carte et chaque fiche porte l'univers de sa marque, même dans la vue « Tous ».

Les logos vont dans `assets/logos/` ; `marine-corail.svg` est repris automatiquement dans la
barre supérieure s'il existe.

### Ajouter une marque

1. Ajouter une entrée dans `window.MC_BRANDS` (`brands.js`).
2. Si la marque introduit un nouveau type de produit, ajouter sa famille dans
   `window.MC_FAMILIES` — les modèles ne se comparent qu'au sein d'une même famille.
3. Renseigner les véhicules dans `vehicles.js` avec ce `brand` et cette `family`.

Tant qu'aucun modèle n'est renseigné, l'onglet reste utilisable et affiche le message
défini par `empty`.

## Sources

Les fiches techniques BRP (PDF) et les logos d'origine sont dans `_sources/`, ignoré par Git.
Les visuels produit de `assets/images/` en sont extraits : ne pas les remplacer par des images
générées. Les fiches 2027 fournies sont des versions basse définition (≈ 550 px de large) :
si un visuel paraît trop doux sur la borne 21,5", demander à BRP les fiches haute définition
ou les visuels du kit presse.

## Déploiement

GitHub Pages → *Deploy from a branch* → `main` → `/ (root)`. Aucun build.
Lors d'une modification de `styles.css` ou `app.js`, incrémenter le paramètre `?v=` dans
`index.html` pour contourner le cache des navigateurs.
