,
/* ============ Ontbijt b03: brood, wraps, hartig en wereld ============ */
{ id:"broodkipavocado", type:"ontbijt", serves:1, time:5, t:["kip","hollands",0],
  name:"Broodjes kipfilet met avocado en tomaat", short:"Romig en vol eiwit, zonder koken.",
  items:[["brood",2],["avocado",0.5],["kipbeleg",60],["tomaat",1],["peper",0.1],["huttenkase",50]],
  steps:[
    "Prak {avocado} met {peper} en smeer het op {brood}.",
    "Leg {kipbeleg} en plakjes {tomaat} erop. Eet {huttenkase} erbij of schep het op het brood."
  ]},
{ id:"pitakiphummus", type:"ontbijt", serves:1, time:6, t:["kip","midden-oosten",0],
  name:"Pita met hummus, kipbeleg en komkommer", short:"Libanees geïnspireerd en snel.",
  items:[["pita",1],["hummus",40],["kipbeleg",80],["komkommer",0.25],["tomaat",0.5],["paprikapoeder",0.1]],
  steps:[
    ["Rooster {pita} 2 minuten in de broodrooster en snijd hem open.",2],
    "Smeer {hummus} erin, bestrooi met {paprikapoeder} en vul met {kipbeleg}, plakjes {komkommer} en {tomaat}."
  ]},
{ id:"zalmtoastkwark", type:"ontbijt", serves:1, time:5, t:["vis","hollands",0],
  name:"Toast met kwark, gerookte zalm en dille", short:"Luxe ontbijt in 5 minuten.",
  items:[["brood",2],["kwark",80],["dille",0.25],["citroen",0.25],["peper",0.1],["gerooktezalm",60],["komkommer",0.25]],
  steps:[
    "Roer {kwark} met {dille}, het sap van {citroen} en {peper}.",
    "Rooster {brood}, smeer de kwark erop en leg {gerooktezalm} en plakjes {komkommer} erop."
  ]},
{ id:"pindabanaantoast", type:"ontbijt", serves:1, time:5, t:["geen","amerikaans",0],
  name:"Pindakaas-banaantoast met skyr", short:"Sportersontbijt met snelle energie.",
  items:[["brood",2],["pindakaas",1],["banaan",1],["kaneel",0.25],["skyr",150]],
  steps:[
    "Rooster {brood} en smeer {pindakaas} erop.",
    "Leg plakjes {banaan} erop en bestrooi met {kaneel}. Eet {skyr} erbij."
  ]},
{ id:"tostihamtomaat", type:"ontbijt", serves:1, time:8, t:["varken","hollands",0],
  name:"Tosti ham, kaas en tomaat", short:"Knapperig, warm en vullend.",
  items:[["brood",2],["kaasplak",30],["hamblokjes",50],["tomaat",0.5],["oregano",0.1],["kwark",100]],
  steps:[
    "Beleg 1 snee {brood} met {kaasplak}, {hamblokjes}, plakjes {tomaat} en {oregano}. Leg de tweede snee erop.",
    ["Bak de tosti 5 minuten in een droge koekenpan op middelhoog vuur, halverwege omdraaien.",5],
    "Eet {kwark} erbij."
  ]},
{ id:"pancontomate", type:"ontbijt", serves:1, time:12, t:["geen","spaans",0],
  name:"Pan con tomate met ei en witte bonen", short:"Spaans ontbijt met geraspte tomaat.",
  items:[["brood",2],["knoflook",0.5],["tomaat",1],["olie",0.5],["zout",0.1],["ei",2],["wittebonen",60]],
  steps:[
    EGGS({}),
    "Rooster {brood} en wrijf de snijkant van {knoflook} over het brood.",
    "Rasp {tomaat} grof en schep het op het brood. Besprenkel met {olie} en bestrooi met {zout}.",
    "Eet de eieren in plakjes en {wittebonen} erbij."
  ]},
{ id:"japansontbijt", type:"ontbijt", serves:1, time:15, t:["vis","japans",0],
  name:"Japans ontbijt met rijst, zalm en edamame", short:"Hartig, licht en vol eiwit.",
  items:[["rijst",50],["water",75],["zalm",90],["sojasaus",0.5],["edamame",50],["komkommer",0.25],["sesam",0.25]],
  steps:[
    ["Breng {rijst} met {water} aan de kook en laat 12 minuten op laag vuur met deksel garen.",12],
    ["Ondertussen: bak {zalm} 4 minuten per kant in een droge koekenpan tot hij in het midden ondoorzichtig is.",8],
    ["Kook {edamame} 3 minuten in kokend water en giet af.",3],
    "Schep de rijst in een kom, leg de zalm en edamame ernaast, besprenkel met {sojasaus} en strooi {sesam} over plakjes {komkommer}."
  ]},
{ id:"mexicaansontbijtwrap", type:"ontbijt", serves:1, time:8, t:["geen","mexicaans",1],
  name:"Wrap met zwarte bonen, kaas en salsa", short:"Mexicaans en zonder ei.",
  items:[["wraps",1],["zwartebonen",80],["komijn",0.25],["kaas",25],["tomaat",0.5],["rodeui",0.1],["limoen",0.25],["skyr",100]],
  steps:[
    "Prak {zwartebonen} met {komijn}. Snijd {tomaat} en {rodeui} fijn en meng met het sap van {limoen}.",
    "Smeer de bonen op {wraps} en strooi {kaas} erover.",
    ["Verwarm de wrap 3 minuten in een droge koekenpan tot de kaas smelt. Schep de salsa erop en rol op.",3],
    "Eet {skyr} erbij of gebruik hem als zure room."
  ]},
{ id:"grieksontbijtbord", type:"ontbijt", serves:1, time:5, t:["geen","grieks",0],
  name:"Grieks ontbijtbord met feta, tomaat en pita", short:"Fris, zout en zonder koken.",
  items:[["pita",1],["feta",50],["tomaat",1],["komkommer",0.25],["olijven",15],["oregano",0.1],["skyr",150]],
  steps:[
    ["Rooster {pita} 2 minuten.",2],
    "Snijd {tomaat} en {komkommer} in stukken en verdeel met {feta} en {olijven} over een bord. Bestrooi met {oregano}.",
    "Eet de pita en {skyr} erbij."
  ]},
{ id:"labnehbrood", type:"ontbijt", serves:1, time:5, t:["geen","midden-oosten",0],
  name:"Libanees ontbijt met skyr-labneh en za'atar-kruiden", short:"Romige dip met kruiden en brood.",
  items:[["skyr",200],["olie",0.5],["tijm",0.25],["sesam",0.25],["zout",0.1],["pita",1],["komkommer",0.25],["tomaat",1]],
  steps:[
    "Smeer {skyr} uit op een bord. Besprenkel met {olie} en bestrooi met {tijm}, {sesam} en {zout}.",
    ["Rooster {pita} 2 minuten en scheur in stukken.",2],
    "Dip de pita en eet {komkommer} en {tomaat} in stukken erbij."
  ]},
{ id:"ontbijtboxprep", type:"ontbijt", serves:1, time:15, t:["geen","hollands",0],
  name:"Meal-prep ontbijtbox met ei, kaas en fruit", short:"Klaarzetten op zondag, pakken door de week.",
  items:[["ei",2],["kaasplak",30],["brood",1],["appel",1],["komkommer",0.25],["kwark",100]],
  steps:[
    EGGS({}),
    "Doe de gepelde eieren, {kaasplak} in blokjes, {brood} in stukken, {appel} en {komkommer} in partjes in een bakje.",
    "Doe {kwark} in een apart potje. Bewaar de box tot 3 dagen in de koelkast."
  ]},
{ id:"proteinepannenkoek", type:"ontbijt", serves:1, time:15, t:["geen","amerikaans",0],
  name:"Proteïnepannenkoekjes met whey en rood fruit", short:"Fluffy pannenkoekjes met extra eiwit.",
  items:[["havermout",40],["whey",25],["ei",1],["melk",80],["kaneel",0.25],["olie",0.25],["roodfruit",80],["skyr",50]],
  steps:[
    "Mix {havermout}, {whey}, {ei}, {melk} en {kaneel} met een staafmixer tot een glad beslag.",
    ["Verhit {olie} in een koekenpan op middelhoog vuur. Bak 4 kleine pannenkoekjes 2 minuten per kant tot ze goudbruin zijn.",8],
    ["Verwarm {roodfruit} 2 minuten in de magnetron.",2],
    "Serveer met het fruit en {skyr}."
  ]},
{ id:"bananenmuffins", type:"ontbijt", serves:1, time:28, t:["geen","amerikaans",0],
  name:"Bananen-havermoutmuffins met kwark", short:"Bak er zes en eet drie dagen lang twee.",
  items:[["banaan",0.5],["havermout",40],["ei",1],["whey",10],["kaneel",0.25],["kwark",150]],
  steps:[
    "Verwarm de oven voor op 180 °C.",
    "Prak {banaan} en meng met {havermout}, {ei}, {whey} en {kaneel}.",
    ["Verdeel over 2 muffinvormpjes en bak 20 minuten op 180 °C tot een satéprikker er droog uitkomt.",20],
    "Eet de muffins met {kwark}. Tip: maak 3 keer deze hoeveelheid voor 3 dagen."
  ]},
{ id:"tonijnsmeerbrood", type:"ontbijt", serves:1, time:5, t:["vis","hollands",0],
  name:"Broodjes tonijnsalade met kwark", short:"Hartig ontbijt vol eiwit.",
  items:[["tonijn",75],["kwark",50],["mosterd",0.5],["rodeui",0.1],["peper",0.1],["brood",2],["tomaat",1]],
  steps:[
    "Meng uitgelekte {tonijn} met {kwark}, {mosterd}, fijngesneden {rodeui} en {peper}.",
    "Smeer op {brood} en leg plakjes {tomaat} erop."
  ]},
{ id:"huttenkasebagel", type:"ontbijt", serves:1, time:5, t:["vis","amerikaans",0],
  name:"Burgerbol met hüttenkäse, zalm en komkommer", short:"Bagelgevoel met wat je in huis hebt.",
  items:[["burgerbol",1],["huttenkase",100],["gerooktezalm",40],["komkommer",0.25],["dille",0.25],["peper",0.1]],
  steps:[
    ["Snijd {burgerbol} open en rooster 2 minuten.",2],
    "Smeer {huttenkase} erop, leg {gerooktezalm} en plakjes {komkommer} erop en bestrooi met {dille} en {peper}."
  ]},
{ id:"kalkoenwrapontbijt", type:"ontbijt", serves:1, time:12, t:["kalkoen","hollands",0],
  name:"Wrap met kalkoen, spinazie en kaas", short:"Warm ontbijt dat je mee kunt nemen.",
  items:[["olie",0.25],["kalkoen",80],["paprikapoeder",0.25],["zout",0.1],["spinazie",40],["wraps",1],["kaas",15]],
  steps:[
    ["Snijd {kalkoen} in reepjes en bak 6 minuten in {olie} met {paprikapoeder} en {zout}.",6],
    GAAR,
    ["Laat {spinazie} 1 minuut meeslinken.",1],
    "Schep op {wraps}, strooi {kaas} erover en rol op."
  ]},
{ id:"hartigekwarkbrood", type:"ontbijt", serves:1, time:5, t:["geen","hollands",0],
  name:"Brood met kruidenkwark, komkommer en tomaat", short:"Fris hartig beleg zonder vlees.",
  items:[["kwark",150],["knoflookpoeder",0.1],["peterselie",5],["zout",0.1],["peper",0.1],["brood",2],["komkommer",0.25],["tomaat",1]],
  steps:[
    "Roer {kwark} met {knoflookpoeder}, fijngehakte {peterselie}, {zout} en {peper}.",
    "Smeer dik op {brood} en leg plakjes {komkommer} en {tomaat} erop."
  ]},
{ id:"tofubanhmi", type:"ontbijt", serves:1, time:12, t:["vega","aziatisch",1],
  name:"Bánh mì-ontbijtbroodje met tofu", short:"Vietnamees broodje met frisse wortel.",
  items:[["tofu",120],["sojasaus",0.5],["olie",0.25],["burgerbol",1],["wortel",40],["azijn",0.5],["komkommer",0.25],["sambal",0.25],["koriander",0.1]],
  steps:[
    "Rasp {wortel} en meng met {azijn}.",
    ["Snijd {tofu} in plakken en bak 6 minuten in {olie} tot goudbruin. Blus af met {sojasaus}.",6],
    "Snijd {burgerbol} open, smeer {sambal} erin en vul met tofu, wortel, plakjes {komkommer} en {koriander}."
  ]},
{ id:"indiaasontbijt", type:"ontbijt", serves:1, time:12, t:["geen","indiaas",1],
  name:"Kikkererwten-curry op toast", short:"Indiaas gekruid en lekker warm.",
  items:[["olie",0.5],["ui",0.25],["kikkererwten",100],["tomblokjes",100],["garam",0.5],["kurkuma",0.25],["zout",0.1],["brood",2],["skyr",100]],
  steps:[
    ["Fruit fijngesneden {ui} 3 minuten in {olie}.",3],
    ["Voeg {garam} en {kurkuma} toe en bak 30 seconden. Voeg {kikkererwten}, {tomblokjes} en {zout} toe en laat 5 minuten pruttelen.",5],
    "Rooster {brood} en schep de curry erop. Eet {skyr} erbij."
  ]},
{ id:"turkseboterham", type:"ontbijt", serves:1, time:14, t:["geen","turks",0],
  name:"Turks broodontbijt met feta, ei en olijven", short:"Klein Turks ontbijtbord.",
  items:[["ei",2],["pita",1],["feta",30],["olijven",15],["komkommer",0.25],["tomaat",1],["honing",0.25]],
  steps:[
    EGGS({}),
    ["Rooster {pita} 2 minuten.",2],
    "Leg de eieren, {feta}, {olijven}, {komkommer} en {tomaat} op een bord en druppel {honing} over de feta."
  ]},
{ id:"caribischbroodje", type:"ontbijt", serves:1, time:10, t:["kip","caribisch",1],
  name:"Broodje kip met ananas en jerk-kruiden", short:"Zoet, pittig en tropisch.",
  items:[["kipfilet",90],["paprikapoeder",0.25],["tijm",0.1],["kaneel",0.1],["cayenne",0.05],["zout",0.1],["olie",0.25],["burgerbol",1],["ananas",40],["sla",15]],
  steps:[
    "Snijd {kipfilet} in dunne plakken en bestrooi met {paprikapoeder}, {tijm}, {kaneel}, {cayenne} en {zout}.",
    ["Bak 6 minuten in {olie}, halverwege omdraaien.",6],
    GAAR,
    "Beleg {burgerbol} met {sla}, de kip en {ananas}."
  ]},
{ id:"franstoastkaas", type:"ontbijt", serves:1, time:10, t:["varken","frans",0],
  name:"Croque monsieur-ontbijt met ham", short:"Franse tosti met een romige laag.",
  items:[["brood",2],["mosterd",0.5],["hamblokjes",40],["kaas",30],["kwark",30],["nootmuskaat",0.05]],
  steps:[
    "Verwarm de oven voor op 220 °C.",
    "Smeer {mosterd} op 1 snee {brood}, leg {hamblokjes} en {kaas:15} erop en dek af met de tweede snee.",
    "Roer {kwark} met {nootmuskaat} en {kaas:15} en smeer het bovenop.",
    ["Bak 7 minuten op 220 °C tot de bovenkant goudbruin is.",7]
  ]},
{ id:"oostbroodje", type:"ontbijt", serves:1, time:5, t:["geen","oost-europees",0],
  name:"Oost-Europees roggebrood-ontbijt met hüttenkäse en bietjes", short:"Pools geïnspireerd: fris en eiwitrijk.",
  items:[["brood",2],["huttenkase",125],["bietjes",50],["dille",0.25],["peper",0.1],["komkommer",0.25]],
  steps:[
    "Meng {huttenkase} met {dille} en {peper}.",
    "Rooster {brood}, smeer de hüttenkäse erop en leg plakjes {bietjes} en {komkommer} erop."
  ]},
{ id:"portugeesontbijt", type:"ontbijt", serves:1, time:8, t:["vis","portugees",0],
  name:"Portugese toast met tonijn, tomaat en citroen", short:"Zonnig visontbijt.",
  items:[["brood",2],["olie",0.5],["tomaat",1],["tonijn",80],["citroen",0.25],["peterselie",5],["peper",0.1]],
  steps:[
    "Rooster {brood} en besprenkel met {olie}.",
    "Leg plakjes {tomaat} erop. Meng {tonijn} met het sap van {citroen}, fijngehakte {peterselie} en {peper} en schep het erop."
  ]},
{ id:"italiaansetoast", type:"ontbijt", serves:1, time:6, t:["geen","italiaans",0],
  name:"Italiaanse toast met mozzarella, tomaat en pesto", short:"Caprese als ontbijt.",
  items:[["brood",2],["pesto",0.5],["mozzarella",60],["tomaat",1],["basilicum",3],["peper",0.1],["skyr",100]],
  steps:[
    "Rooster {brood} en smeer {pesto} erop.",
    "Leg plakjes {mozzarella} en {tomaat} erop met {basilicum} en {peper}.",
    "Eet {skyr} erbij."
  ]}
