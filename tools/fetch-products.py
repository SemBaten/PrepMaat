#!/usr/bin/env python3
"""Zoekt per ingrediënt een productfoto op Open Food Facts (CC BY-SA), bij voorkeur een huismerk.
Gebruik: python3 tools/fetch-products.py items.json products.json   (houdt zich aan 10 zoekopdrachten per minuut)"""
import json, sys, time, re, unicodedata, urllib.request, urllib.parse
ITEMS = json.load(open(sys.argv[1])); OUT = sys.argv[2]
try: RES = json.load(open(OUT))
except Exception: RES = {}
TERM = { "gehakt":"rundergehakt", "kaas":"geraspte kaas", "kookroom":"kookroom", "rijst":"basmati rijst", "pasta":"volkoren penne", "spaghetti":"volkoren spaghetti",
  "kidney":"kidneybonen", "mais":"mais", "kokosmelk":"kokosmelk", "pindakaas":"pindakaas", "olie":"olijfolie", "bouillon":"kippenbouillon", "komijn":"komijn",
  "koriander":"koriander", "gember":"gember", "chili":"chilivlokken", "oregano":"oregano", "tijm":"tijm", "rozemarijn":"rozemarijn", "dille":"dille",
  "varkensreepjes":"varkensreepjes", "runderreepjes":"runderreepjes", "stoofvlees":"sukadelappen", "garnalen":"garnalen", "tonijn":"tonijn", "melk":"halfvolle melk",
  "pesto":"pesto", "currypasta":"rode curry", "ananas":"ananas stukjes", "runderbouillon":"runderbouillon", "laurier":"laurier", "nootmuskaat":"nootmuskaat",
  "rijstnoedels":"rijstnoedels", "zwartebonen":"zwarte bonen", "kikkererwten":"kikkererwten", "feta":"feta", "mozzarella":"mozzarella", "bbqsaus":"barbecue saus",
  "gochujang":"gochujang", "groenecurry":"groene curry", "pindas":"pinda", "doperwten":"doperwten", "edamame":"edamame", "bulgur":"bulgur", "orzo":"orzo",
  "risottorijst":"risotto rijst", "gnocchi":"gnocchi", "tofu":"tofu", "linzen":"rode linzen", "groentebouillon":"groentebouillon", "roodfruit":"rood fruit",
  "brood":"volkoren brood", "kaasplak":"kaas plakken", "kipbeleg":"kipfilet", "skyr":"skyr", "whey":"whey", "rookworst":"rookworst", "olijven":"zwarte olijven",
  "wittebonen":"witte bonen", "gerooktezalm":"gerookte zalm", "spekreepjes":"spekreepjes", "huttenkase":"huttenkase", "parmezaan":"parmigiano",
  "zoetechili":"sweet chili", "sambal":"sambal oelek", "koolvis":"koolvis", "bietjes":"rode bieten", "sla":"sla", "kipdij":"kippendij", "kwark":"magere kwark",
  "ei":"eieren", "mie":"mie", "couscous":"couscous", "wraps":"wraps", "pita":"pita", "burgerbol":"hamburger broodjes", "krieltjes":"krieltjes", "spinazie":"spinazie",
  "tomblokjes":"tomatenblokjes", "tompuree":"tomatenpuree", "ketjap":"ketjap", "maizena":"maizena", "sesam":"sesamzaad", "kerrie":"kerrie", "kurkuma":"kurkuma",
  "garam":"garam masala", "italiaans":"italiaanse kruiden", "kaneel":"kaneel", "lasagne":"lasagne", "paneermeel":"paneermeel", "azijn":"azijn", "kruidnagel":"kruidnagel",
  "kalkoen":"kalkoenfilet", "kipgehakt":"kipgehakt", "oestersaus":"oestersaus", "vissaus":"vissaus", "zuurkool":"zuurkool", "hummus":"hummus", "havermout":"havermout",
  "hamblokjes":"hamblokjes", "sugarsnaps":"sugarsnaps", "quinoa":"quinoa", "rucola":"rucola", "tauge":"tauge", "wokgroente":"wokgroente", "zalm":"zalmfilet",
  "kabeljauw":"kabeljauw", "paprikapoeder":"paprikapoeder", "knoflookpoeder":"knoflookpoeder", "uienpoeder":"uienpoeder", "cayenne":"cayennepeper" }
def norm(x): return "".join(c for c in unicodedata.normalize("NFD", (x or "").lower()) if unicodedata.category(c) != "Mn")
HOUSE = ["ah", "albert heijn", "jumbo", "plus", "lidl", "aldi", "1 de beste", "g'woon", "vomar", "dirk"]
def search(q, brand=None):
  p = {"search_terms": q, "search_simple": 1, "json": 1, "page_size": 40, "countries_tags_en": "netherlands", "fields": "code,product_name,product_name_nl,brands,image_front_small_url,image_front_url"}
  if brand: p.update({"tagtype_0": "brands", "tag_contains_0": "contains", "tag_0": brand})
  url = "https://world.openfoodfacts.org/cgi/search.pl?" + urllib.parse.urlencode(p)
  req = urllib.request.Request(url, headers={"User-Agent": "PrepMaat-build/1.0"})
  for a in range(3):
    try: return json.load(urllib.request.urlopen(req, timeout=40)).get("products", [])
    except Exception as e: time.sleep(10)
  return []
def best(prods, q):
  words = [w for w in norm(q).split() if len(w) > 2]
  ok = []
  for p in prods:
    nm = norm(p.get("product_name_nl") or p.get("product_name"))
    if not p.get("image_front_small_url") or not nm or not all(w in nm for w in words): continue
    b = norm(p.get("brands")); score = (2 if any(h == x.strip() or x.strip().startswith(h) for x in b.split(",") for h in HOUSE) else 0) - len(nm) / 100
    ok.append((score, p))
  ok.sort(key=lambda x: -x[0]); return ok[0][1] if ok else None
for k, v in ITEMS.items():
  if k in RES: continue
  q = TERM.get(k, re.sub(r"\(.*?\)", "", v["n"]).strip())
  p = best(search(q, "ah"), q); time.sleep(6.5)
  if not p: p = best(search(q), q); time.sleep(6.5)
  RES[k] = {"img": p["image_front_small_url"], "big": p.get("image_front_url"), "name": p.get("product_name_nl") or p.get("product_name"), "brand": (p.get("brands") or "").split(",")[0].strip(), "code": p["code"]} if p else None
  print(k, "->", RES[k] and (RES[k]["brand"], RES[k]["name"]), flush=True)
  json.dump(RES, open(OUT, "w"), ensure_ascii=False, indent=0)
