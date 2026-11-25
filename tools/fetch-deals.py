#!/usr/bin/env python3
"""Haalt elke nacht de supermarktaanbiedingen voor Prepmaat-ingredienten op.
Bron: PrijsProfeet (https://www.prijsprofeet.nl), gratis, met naamsvermelding.
Schrijft deals.json: alleen de beste aanbieding per ingredient per winkel."""
import json, re, sys, time, urllib.request, urllib.parse, datetime

API = "https://www.prijsprofeet.nl/api/v1/search"
UA = "PrepmaatDeals/1.0 (https://sembaten.github.io/PrepMaat/)"
STORES = {"albert_heijn": "ah", "jumbo": "jumbo", "plus": "plus", "vomar": "vomar", "dirk": "dirk", "lidl": "lidl", "aldi": "aldi"}
# Woorden die bijna altijd een ander product betekenen (kant-en-klaar, beleg, snack)
JUNK = r"ovenschotel|maaltijd|meals|salade|soep|beleg|broodbeleg|flinterdun|gerookt|gebraden|ovengebakken|gegrild|vegan|vegetari|plantaardig|snack|chips|spread|smeerkaas|kroket|nugget|schnitzel|cordon|gemarineerd|marinade|kruiden(?!thee)|saus(?!ijs)|wrap(?!s?\b)|pizza|lasagne|pasta(?!saus)|spies|satestokjes|hamburger|burger|worst|kids|baby|diervoeding|kat|hond|high protein|protein meals|bowl|stoommaaltijd|focaccia|to-go|kruidenboter|notenmix|vivera|garde|beyond|croma|ready meal|ovenschotel|blokjes|\&"
# key: (zoekterm, moet-matchen regex, extra uitsluiten regex of None, eenheid "g"/"ml"/"stuk")
Q = {
 "kipfilet": ("kipfilet", r"\bkip(pen)?filet", r"dij|blokjes|reepjes|haasjes|drumstick|vleugel", "g"),
 "kipdij": ("kippendijfilet", r"dij", r"bout|vleugel", "g"),
 "gehakt": ("rundergehakt", r"rundergehakt", r"half om half|varken", "g"),
 "biefstuk": ("biefstuk", r"biefstuk", r"reepjes|carpaccio|ree|hert|hollandse? biefstuk van", "g"),
 "varkenshaas": ("varkenshaas", r"varkenshaas", r"medaillon", "g"),
 "varkensreepjes": ("varkensreepjes", r"varkens.*reepjes|shoarma", None, "g"),
 "runderreepjes": ("runderreepjes", r"rund.*reepjes|biefstukreepjes", None, "g"),
 "stoofvlees": ("runderstoofvlees", r"stoofvlees|sukade|riblappen", r"kant", "g"),
 "kalkoen": ("kalkoenfilet", r"kalkoenfilet", None, "g"),
 "kipgehakt": ("kipgehakt", r"kipgehakt", r"cheddar|jalap|kaas", "g"),
 "zalm": ("zalmfilet", r"zalm", r"gerookt|salade|spread", "g"),
 "kabeljauw": ("kabeljauwfilet", r"kabeljauw", r"gepaneerd|lekkerbek|kibbeling", "g"),
 "garnalen": ("garnalen", r"garnal", r"cocktail|kroepoek|salade|knoflook|pittig|look", "g"),
 "koolvis": ("koolvis", r"koolvis|pangasius|witvis", r"gepaneerd|lekkerbek|kibbeling", "g"),
 "tonijn": ("tonijn in water", r"tonijn", r"salade|olie", "g"),
 "gerooktezalm": ("gerookte zalm", r"gerookte zalm", None, "g"),
 "ei": ("eieren", r"\beieren\b|\bei\b", r"chocola|paas|salade|gekookt", "stuk"),
 "kwark": ("magere kwark", r"kwark", r"vla|fruit|griekse|aardbei|vanille|stracciatella|protein pudding", "g"),
 "skyr": ("skyr naturel", r"skyr.*(naturel|natuur|original|0%)|(naturel|natuur).*skyr", r"aardbei|vanille|framboos|blauwe|perzik|mango|drink|lemon|cheesecake|stracciatella|kers|citroen|honing|kokos|bes", "g"),
 "huttenkase": ("huttenkase", r"h[uü]ttenk[aä]se|cottage", None, "g"),
 "kaas": ("geraspte kaas", r"geraspt", r"parmezaan|mozzarella", "g"),
 "kaasplak": ("kaas plakken 30+", r"plak", r"rookvlees|ham|cervelaat|worst|komijn|smeer", "g"),
 "melk": ("halfvolle melk", r"halfvolle melk", r"chocola|lactosevrij|karnemelk", "ml"),
 "feta": ("feta", r"feta", None, "g"),
 "mozzarella": ("mozzarella", r"mozzarella", r"pizza|sticks|valess|tomaat", "g"),
 "whey": ("whey eiwitpoeder", r"whey|eiwitpoeder|protein powder", r"reep|bar|pudding|drink|shake\b", "g"),
 "rijst": ("basmati rijst", r"basmati|zilvervlies|rijst", r"pap|wafel|noedel|kook in zak|ongekookt\?|risotto|maaltijd", "g"),
 "pasta": ("volkoren penne", r"penne|fusilli|macaroni", r"saus|kant|groente|ham", "g"),
 "spaghetti": ("spaghetti", r"spaghetti", r"saus|kant|groente|bolognese|ham", "g"),
 "mie": ("mie", r"\bmie\b|mienestjes|eiermie", r"kant|maaltijd", "g"),
 "couscous": ("couscous", r"couscous", r"maaltijd", "g"),
 "havermout": ("havermout", r"havermout|havervlokken", r"reep|koek|drink|appel|kaneel|choco|banaan|ontbijt", "g"),
 "krieltjes": ("krieltjes", r"kriel", None, "g"),
 "aardappel": ("kruimige aardappelen", r"aardappel", r"puree|chips|friet|krokett|rosti|wedges|schijfjes|partjes", "g"),
 "zoeteaardappel": ("zoete aardappel", r"zoete aardappel", r"friet|chips|fruit|knijp|puree", "g"),
 "broccoli": ("broccoli", r"broccoli", None, "g"),
 "sperziebonen": ("sperziebonen", r"sperzieboon|sperziebonen", None, "g"),
 "paprika": ("paprika", r"paprika", r"poeder|chips|saus|hummus|spread|gevuld", "stuk"),
 "champignons": ("champignons", r"champignon", r"soep|saus|room", "g"),
 "spinazie": ("spinazie", r"spinazie", r"diepvries|a la creme|crème|hak|kaas|pot|cracker", "g"),
 "wokgroente": ("wokgroente", r"wok", r"saus|noedel", "g"),
 "avocado": ("avocado", r"avocado", r"guacamole|spread|olie", "stuk"),
 "banaan": ("bananen", r"banan", r"chips|brood|drink", "stuk"),
 "appel": ("appels", r"appel", r"sap|moes|taart|flap|stroop|chips|azijn|siroop", "stuk"),
 "roodfruit": ("rood fruit diepvries", r"rood fruit|bosvruchten|frambo|aardbei", r"yoghurt|kwark|jam|sap|taart|smoothie|ijs|noten|chocola|koek", "g"),
 "kidney": ("kidneybonen", r"kidney", None, "g"),
 "tomblokjes": ("tomatenblokjes", r"tomatenblokjes|gepelde tomaten", None, "g"),
 "passata": ("passata", r"passata", None, "g"),
 "kokosmelk": ("kokosmelk", r"kokosmelk", r"drink", "ml"),
 "pindakaas": ("pindakaas", r"pindakaas", None, "g"),
 "olie": ("olijfolie", r"olijfolie", r"met olijfolie|spray", "ml"),
 "pindas": ("ongezouten pinda's", r"pinda", r"kaas|saus|koek|reep|chocola", "g"),
 "edamame": ("edamame", r"edamame", None, "g"),
 "tofu": ("tofu", r"tofu", None, "g"),
}
JUNK_RE = re.compile(JUNK)
# Kleine verpakkingen vlees/vis zijn bijna altijd beleg
MINAMT = {k: 150 for k in ["kipfilet","kipdij","gehakt","biefstuk","varkenshaas","varkensreepjes","runderreepjes","stoofvlees","kalkoen","kipgehakt","zalm","kabeljauw","koolvis"]}

def qty(q):
    """'2 x 250 g' -> (500,'g'); '1 kg' -> (1000,'g'); '6 stuks' -> (6,'stuk')"""
    if not q: return None
    s = q.lower().replace(",", ".")
    m = re.search(r"(\d+)\s*x\s*(\d+(?:\.\d+)?)\s*(kg|g|gr|gram|ml|cl|l|liter|stuks?|st)\b", s)
    mult = 1
    if m: mult = float(m.group(1)); n, u = float(m.group(2)), m.group(3)
    else:
        m = re.search(r"(\d+(?:\.\d+)?)\s*(kg|g|gr|gram|ml|cl|l|liter|stuks?|st)\b", s)
        if not m: return None
        n, u = float(m.group(1)), m.group(2)
    n *= mult
    if u in ("kg",): return (n * 1000, "g")
    if u in ("g", "gr", "gram"): return (n, "g")
    if u == "l" or u == "liter": return (n * 1000, "ml")
    if u == "cl": return (n * 10, "ml")
    if u == "ml": return (n, "ml")
    return (n, "stuk")

def search(term):
    url = API + "?" + urllib.parse.urlencode({"q": term, "page_size": 100})
    for i in range(4):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
            with urllib.request.urlopen(req, timeout=30) as r: return json.load(r).get("results", [])
        except Exception as e:
            print("retry", term, e, file=sys.stderr); time.sleep(5 * (i + 1))
    return []

def main(out):
    today = datetime.date.today().isoformat()
    deals = {}
    for key, (term, inc, exc, unit) in Q.items():
        res = search(term); time.sleep(0.7)
        best = {}
        for r in res:
            st = STORES.get(r.get("retailer"))
            if not st or not r.get("is_promotional") or not r.get("price"): continue
            if (r.get("valid_until") or "9999") < today: continue
            name = (r.get("name") or "").lower()
            if not re.search(inc, name): continue
            if exc and re.search(exc, name): continue
            # junkwoord in de naam (kant-en-klaar, beleg, vegan...): overslaan, tenzij de zoekterm het woord zelf bevat
            jm = JUNK_RE.search(name)
            if jm and jm.group(0) not in term.lower(): continue
            q = qty(r.get("quantity") or r.get("name"))
            if not q or q[1] != unit or q[0] <= 0: continue
            up = r["price"] / q[0]
            if unit == "g" and (q[0] < MINAMT.get(key, 80) or q[0] > 5000): continue
            d = {"s": st, "n": r.get("name")[:80], "p": r["price"], "o": r.get("original_price"), "q": r.get("quantity"),
                 "amt": q[0], "up": round(up * (1000 if unit != "stuk" else 1), 3), "from": r.get("valid_from"), "to": r.get("valid_until"),
                 "multi": r.get("multi_buy_quantity"), "mp": r.get("multi_buy_price"), "type": r.get("promotion_type")}
            if st not in best or d["up"] < best[st]["up"]: best[st] = d
        if best: deals[key] = sorted(best.values(), key=lambda d: d["up"])
        print(key, len(best), file=sys.stderr)
    json.dump({"updated": datetime.datetime.utcnow().strftime("%Y-%m-%dT%H:%MZ"), "source": "PrijsProfeet", "url": "https://www.prijsprofeet.nl", "deals": deals},
              open(out, "w"), ensure_ascii=False, separators=(",", ":"))

if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "deals.json")
