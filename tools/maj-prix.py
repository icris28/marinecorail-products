#!/usr/bin/env python3
"""Régénère prices.js à partir du tableau de tarifs Excel.

Usage :
    python3 tools/maj-prix.py _sources/tarifs-marine-corail.xlsx

Lit l'onglet « Tarifs » : colonne A = identifiant, colonne I = prix TTC en F CFP.
Une cellule vide donne null (le catalogue affiche « Prix sur demande »).
Les identifiants absents de vehicles.js sont signalés et ignorés.
Nécessite openpyxl :  pip install openpyxl
"""
import json, sys, re
from pathlib import Path
from openpyxl import load_workbook

RACINE = Path(__file__).resolve().parent.parent

def ids_du_catalogue():
    s = (RACINE / "vehicles.js").read_text(encoding="utf-8")
    data = json.loads(s[s.index("[", s.index("window.")): s.rindex(";")])
    return [v["id"] for v in data]

def main(xlsx):
    connus = ids_du_catalogue()
    ws = load_workbook(xlsx, data_only=True)["Tarifs"]
    prix, inconnus = {}, []
    for ligne in ws.iter_rows(min_row=5, values_only=True):
        ident, valeur = ligne[0], ligne[8]
        if not ident or not isinstance(ident, str) or not re.match(r"^[a-z0-9-]+$", ident):
            continue
        if ident not in connus:
            inconnus.append(ident); continue
        prix[ident] = int(valeur) if isinstance(valeur, (int, float)) and valeur > 0 else None

    manquants = [i for i in connus if i not in prix]
    for i in manquants:
        prix[i] = None
    prix = {i: prix[i] for i in connus}          # ordre du catalogue

    (RACINE / "prices.js").write_text(
        "// Prix Marine Corail en F CFP TTC : nombre entier, sans espace ni symbole.\n"
        "// null = prix non renseigné (affiche « Prix sur demande »).\n"
        "// Fichier généré par tools/maj-prix.py à partir de _sources/tarifs-marine-corail.xlsx.\n\n"
        "window.MC_PRICES = " + json.dumps(prix, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8")

    renseignes = sum(1 for v in prix.values() if v is not None)
    print(f"prices.js mis à jour : {renseignes}/{len(prix)} modèles tarifés")
    if inconnus:
        print("Identifiants du tableau absents du catalogue (ignorés) :")
        for i in inconnus: print("  -", i)
    if manquants:
        print("Modèles du catalogue absents du tableau (prix vidé) :")
        for i in manquants: print("  -", i)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
