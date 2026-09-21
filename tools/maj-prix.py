#!/usr/bin/env python3
"""Régénère prices.js à partir du tableau de tarifs Excel.

Usage :
    python3 tools/maj-prix.py _sources/tarifs-marine-corail.xlsx

Lit l'onglet « Tarifs » : colonne A = identifiant, colonne L = prix TTC en F CFP.
Une cellule vide, "Sur demande" ou non reconnue donne null (le catalogue
affiche « Prix sur demande »).
Une cellule au format "À partir de <n>M<d>" (ex. "À partir de 4M5" = 4 500 000)
est acceptée pour les modèles fabriqués/livrés à la commande dont le prix
varie selon la motorisation/les options ; stockée dans prices.js comme
{ "from": <montant> } au lieu d'un nombre, pour que le site affiche
« À partir de X F CFP TTC » plutôt qu'un prix ferme.
Les identifiants absents de vehicles.js sont signalés et ignorés.
Les identifiants qui apparaissent plusieurs fois dans le tableau sont
signalés (le dernier trouvé l'emporte) plutôt que d'être fusionnés en
silence.
Nécessite openpyxl :  pip install openpyxl
"""
import json, sys, re
from pathlib import Path
from openpyxl import load_workbook

RACINE = Path(__file__).resolve().parent.parent

# "À partir de 4M5" -> 4500000 ; "À partir de 8M" -> 8000000
RE_A_PARTIR_DE = re.compile(r"^\s*à\s*partir\s*de\s*(\d+)\s*[mM]\s*(\d)?\s*$", re.IGNORECASE)

def ids_du_catalogue():
    s = (RACINE / "vehicles.js").read_text(encoding="utf-8")
    data = json.loads(s[s.index("[", s.index("window.")): s.rindex(";")])
    return [v["id"] for v in data]

def parse_prix(valeur):
    """Retourne (montant_ou_None, est_a_partir_de, illisible)."""
    if isinstance(valeur, (int, float)) and valeur > 0:
        return int(valeur), False, False
    if isinstance(valeur, str):
        m = RE_A_PARTIR_DE.match(valeur)
        if m:
            millions, dixiemes = m.group(1), m.group(2)
            montant = int(millions) * 1_000_000 + (int(dixiemes) * 100_000 if dixiemes else 0)
            return montant, True, False
        if valeur.strip().lower() in ("", "sur demande"):
            return None, False, False
        return None, False, True  # texte non reconnu
    return None, False, False

def main(xlsx):
    connus = ids_du_catalogue()
    ws = load_workbook(xlsx, data_only=True)["Tarifs"]
    prix, inconnus, doublons, a_partir_de, illisibles = {}, [], {}, [], []
    vus = {}
    for n_ligne, ligne in enumerate(ws.iter_rows(min_row=5, values_only=True), start=5):
        ident, valeur = ligne[0], ligne[11]
        if not ident or not isinstance(ident, str):
            continue
        ident = ident.strip()
        if not re.match(r"^[A-Za-z0-9-]+$", ident):
            continue
        if ident not in connus:
            inconnus.append((n_ligne, ident)); continue

        if ident in vus:
            doublons.setdefault(ident, [vus[ident]]).append((n_ligne, valeur))
        vus[ident] = (n_ligne, valeur)

        montant, est_a_partir_de, illisible = parse_prix(valeur)
        if illisible:
            illisibles.append((n_ligne, ident, valeur))
        if est_a_partir_de:
            a_partir_de.append((ident, montant))
            prix[ident] = {"from": montant}
        else:
            prix[ident] = montant

    manquants = [i for i in connus if i not in prix]
    for i in manquants:
        prix[i] = None
    prix = {i: prix[i] for i in connus}          # ordre du catalogue

    (RACINE / "prices.js").write_text(
        "// Prix Marine Corail en F CFP TTC.\n"
        "// - nombre entier : prix ferme.\n"
        "// - null : prix non renseigné (affiche « Prix sur demande »).\n"
        "// - { \"from\": <nombre> } : prix indicatif (affiche « À partir de X F CFP TTC »),\n"
        "//   pour les modèles fabriqués/livrés à la commande dont le tarif dépend de la\n"
        "//   motorisation/des options.\n"
        "// Fichier généré par tools/maj-prix.py à partir de _sources/tarifs-marine-corail.xlsx.\n\n"
        "window.MC_PRICES = " + json.dumps(prix, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8")

    renseignes = sum(1 for v in prix.values() if v is not None)
    print(f"prices.js mis à jour : {renseignes}/{len(prix)} modèles tarifés")

    if a_partir_de:
        print(f"Prix « à partir de » (affichés comme tels sur le site, {len(a_partir_de)}) :")
        for ident, montant in a_partir_de:
            print(f"  - {ident} : à partir de {montant}")

    if doublons:
        print("Identifiants présents plusieurs fois dans le tableau (dernière valeur conservée) :")
        for ident, occ in doublons.items():
            print(f"  - {ident} :", ", ".join(f"ligne {n} = {v!r}" for n, v in occ))

    if illisibles:
        print("Valeurs de prix non reconnues (traitées comme « Prix sur demande ») :")
        for n_ligne, ident, valeur in illisibles:
            print(f"  - ligne {n_ligne} ({ident}) : {valeur!r}")

    if inconnus:
        print("Identifiants du tableau absents du catalogue (ignorés) :")
        for n_ligne, i in inconnus:
            print(f"  - ligne {n_ligne} : {i}")

    if manquants:
        print("Modèles du catalogue absents du tableau (prix vidé) :")
        for i in manquants: print("  -", i)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
