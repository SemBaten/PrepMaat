,
/* ============ Avondeten d07: doordeweekse vleesgerechten ============ */
{ id:"honingmosterdkip", type:"diner", serves:2, time:35, t:["kip","hollands",0],
  name:"Honing-mosterdkip met krieltjes en sperziebonen", short:"Zoet-hartige saus die iedereen lekker vindt.",
  items:[["krieltjes",500],["olie",1.5],["zout",0.75],["kipfilet",350],["peper",0.25],["honing",1],["mosterd",3],["kookroom",100],["sperziebonen",300]],
  steps:[
    ["Halveer {krieltjes}. Bak in {olie:1} met {zout:0.25} in een pan met deksel 10 minuten, daarna 10 minuten zonder.",20],
    ["Kook ondertussen {sperziebonen} 7 minuten in water met {zout:0.25}. Giet af.",7],
    "Snijd {kipfilet} in repen. Bestrooi met {zout:0.25} en {peper}.",
    ["Bak de kip in {olie:0.5} 6 minuten. Roer {honing}, {mosterd} en {kookroom} erdoor en laat 2 minuten pruttelen.",8],
    GAAR
  ]},
{ id:"gehaktschotelbroc", type:"diner", serves:2, time:40, t:["rund","hollands",0],
  name:"Broccoli-gehaktschotel met krieltjes en kaas", short:"Makkelijke ovenschotel voor doordeweeks.",
  items:[["krieltjes",500],["olie",1],["zout",0.75],["gehakt",250],["ui",1],["paprikapoeder",1],["broccoli",400],["kookroom",150],["nootmuskaat",0.25],["kaas",50]],
  steps:[
    "Zet de oven aan op 200 °C (hetelucht 180 °C).",
    ["Halveer {krieltjes}, hussel in een ovenschaal met {olie:0.5} en {zout:0.25} en bak 20 minuten.",20],
    ["Bak ondertussen {gehakt} en {ui} (fijn) in {olie:0.5} 6 minuten tot er geen roze meer te zien is. Roer {paprikapoeder} en {zout:0.25} erdoor.",6],
    ["Kook {broccoli} in roosjes 3 minuten. Giet af.",3],
    "Schep gehakt en broccoli door de krieltjes. Meng {kookroom} met {nootmuskaat} en {zout:0.25}, giet erover en strooi {kaas} erop.",
    ["Bak nog 15 minuten.",15]
  ]},
{ id:"varkenshaaspaprika", type:"diner", serves:2, time:30, t:["varken","hollands",0],
  name:"Varkenshaas-reepjes met paprikaroomsaus en rijst", short:"Mals vlees in een romige paprikasaus.",
  items:[["rijst",150],["water",225],["zout",0.75],["varkenshaas",300],["paprikapoeder",2],["olie",1],["ui",1],["paprika",2],["kookroom",150],["tompuree",35],["peper",0.25]],
  steps:[
    ...RICE({w:225,s:0.25}),
    "Snijd {varkenshaas} in reepjes en bestrooi met {paprikapoeder:1} en {zout:0.25}. Snijd {ui} en {paprika} in reepjes.",
    ["Bak het vlees in {olie:0.5} op hoog vuur 3 minuten. Schep op een bord.",3],
    ["Bak ui en paprika in {olie:0.5} 5 minuten. Roer {tompuree} en {paprikapoeder:1} erdoor. Doe {kookroom}, {zout:0.25}, {peper} en het vlees erbij en laat 3 minuten pruttelen.",8],
    "Check: het vlees mag van binnen licht roze zijn, maar niet rood. Eet met de rijst."
  ]},
{ id:"kipsate2", type:"diner", serves:2, time:40, t:["kip","aziatisch",0],
  name:"Kipdij-saté uit de oven met atjar en rijst", short:"Ketjap-gemarineerde kip met frisse komkommer-atjar.",
  items:[["kipdij",400],["ketjap",2],["knoflook",2],["koriander",1],["rijst",150],["water",325],["zout",0.25],["pindakaas",2],["sambal",0.5],["komkommer",1],["azijn",2],["honing",0.5],["sperziebonen",200]],
  steps:[
    "Zet de oven aan op 220 °C (hetelucht 200 °C). Snijd {kipdij} in stukken en meng met {ketjap:1}, {knoflook} (geperst) en {koriander}.",
    ["Bak de kip 20 minuten op bakpapier.",20],
    ...RICE({w:225,s:0.25}),
    "Atjar: snijd {komkommer} in dunne plakjes en meng met {azijn} en {honing}.",
    ["Kook {sperziebonen} 7 minuten. Pindasaus: verwarm {pindakaas}, {ketjap:1}, {sambal} en {water:100} 2 minuten.",7],
    GAAR
  ]},
{ id:"goulashsoep", type:"diner", serves:2, time:50, t:["rund","oost-europees",1],
  name:"Goulashsoep met rundvlees en brood", short:"Dikke Hongaarse soep. Een maaltijd op zich.",
  items:[["stoofvlees",300],["olie",1],["ui",2],["paprika",2],["knoflook",2],["paprikapoeder",3],["komijn",0.5],["tompuree",70],["aardappel",300],["water",800],["runderbouillon",1],["chili",0.25],["brood",4],["kwark",100]],
  steps:[
    "Snijd {stoofvlees} in blokjes van 1,5 cm, {ui} en {paprika} in stukjes, {knoflook} fijn en {aardappel} (geschild) in blokjes.",
    ["Bak het vlees in {olie} 5 minuten bruin. Doe ui en paprika erbij en bak 4 minuten. Roer {paprikapoeder}, {komijn}, {chili} en {tompuree} erdoor.",9],
    ["Doe {water}, {runderbouillon} en knoflook erbij. Deksel erop en laat 25 minuten zachtjes koken.",25],
    ["Doe de aardappel erbij en kook nog 15 minuten tot vlees en aardappel zacht zijn.",15],
    "Eet met {brood} en een schep {kwark}."
  ]},
{ id:"kalkoenkerrie", type:"diner", serves:2, time:30, t:["kip","hollands",0],
  name:"Kalkoen-kerrie met ananas en rijst", short:"Mild en een beetje zoet.",
  items:[["rijst",150],["water",325],["zout",0.75],["kalkoen",350],["olie",1],["ui",1],["paprika",1],["kerrie",2],["ananas",140],["kookroom",100],["maizena",0.5],["bouillon",0.5]],
  steps:[
    ...RICE({w:225,s:0.25}),
    "Snijd {kalkoen} in blokjes en {ui} en {paprika} in stukjes.",
    ["Bak kalkoen in {olie} 5 minuten. Doe ui, paprika en {kerrie} erbij en bak 3 minuten.",8],
    ["Doe {ananas}, {kookroom}, {water:100}, {bouillon} en {zout:0.5} erbij. Roer {maizena} los in 1 el water en roer erdoor. Laat 3 minuten pruttelen.",3],
    "Check of de kalkoen gaar is: snijd een stukje door, het moet helemaal wit zijn. Eet met de rijst."
  ]},
{ id:"stoofpotje", type:"diner", serves:2, time:70, t:["rund","hollands",0],
  name:"Hollands stoofvlees met aardappelen en rode kool", short:"Weekendklassieker: lang stoven, weinig werk.",
  items:[["stoofvlees",350],["olie",1],["ui",2],["laurier",1],["kruidnagel",2],["runderbouillon",1],["water",350],["azijn",1],["honing",1],["mosterd",1],["maizena",1],["aardappel",500],["zout",0.5],["rodekool",350],["appel",1]],
  steps:[
    "Snijd {stoofvlees} in blokjes van 3 cm en {ui} in halve ringen.",
    ["Bak het vlees in {olie} 5 minuten bruin. Doe ui erbij en bak 3 minuten.",8],
    ["Doe {laurier}, {kruidnagel}, {water}, {runderbouillon}, {azijn}, {honing} en {mosterd} erbij. Deksel erop en laat 60 minuten heel zachtjes stoven.",60],
    ["Stoof ondertussen {rodekool} met {appel} (blokjes) en 3 el water 20 minuten. Kook {aardappel} (geschild) 20 minuten in water met {zout}.",20],
    "Haal laurier en kruidnagels eruit. Roer {maizena} los in 2 el water en roer door het vlees tot de jus dik is."
  ]},
{ id:"kipwraps", type:"diner", serves:2, time:20, t:["kip","mexicaans",0],
  name:"Krokante kipwraps met avocado en salsa", short:"Snel avondeten voor een drukke dag.",
  items:[["kipfilet",300],["paprikapoeder",1],["komijn",0.5],["zout",0.5],["olie",1],["wraps",4],["avocado",1],["tomaat",2],["rodeui",0.5],["limoen",0.5],["sla",75],["kaas",40]],
  steps:[
    "Snijd {kipfilet} in reepjes. Bestrooi met {paprikapoeder}, {komijn} en {zout:0.25}.",
    ["Bak in {olie} 6 minuten tot hij helemaal wit is, zonder roze.",6],
    "Salsa: snijd {tomaat} en {rodeui} fijn, meng met het sap van {limoen} en {zout:0.25}.",
    "Vul {wraps} met {sla}, kip, {avocado} in plakjes, salsa en {kaas}. Vouw dicht.",
    ["Bak de wraps 1 minuut per kant in een droge pan tot ze krokant zijn.",4]
  ]},
{ id:"gehaktnasi", type:"diner", serves:2, time:35, t:["rund","aziatisch",1],
  name:"Nasi met gehakt, ei en atjar", short:"Gebakken rijst met kruidig gehakt.",
  items:[["rijst",150],["water",225],["zout",0.25],["gehakt",250],["olie",1],["ui",1],["knoflook",2],["prei",1],["kerrie",1],["sambal",0.5],["ketjap",2],["ei",2],["komkommer",0.5],["azijn",1]],
  steps:[
    ...RICE({w:225,s:0.25}),
    "Laat de rijst afkoelen. Snijd {ui} en {knoflook} fijn en {prei} in ringen.",
    ["Bak {gehakt} in {olie:0.5} 5 minuten los tot er geen roze meer te zien is. Doe ui, knoflook, prei, {kerrie} en {sambal} erbij en bak 4 minuten.",9],
    ["Doe de rijst en {ketjap} erbij en bak 3 minuten.",3],
    ["Bak {ei} in {olie:0.5} tot spiegeleieren.",3],
    "Atjar: {komkommer} in dunne plakjes met {azijn}. Eet de nasi met een ei erop."
  ]},
{ id:"kipcurrywit", type:"diner", serves:2, time:25, t:["kip","indiaas",0],
  name:"Snelle kip-kerrie met bloemkoolrijst en naanwrap", short:"Romige curry met minder koolhydraten.",
  items:[["kipfilet",350],["olie",1],["ui",1],["kerrie",2],["garam",0.5],["tomblokjes",200],["kokosmelk",200],["zout",0.75],["bloemkool",500],["wraps",2],["kwark",100]],
  steps:[
    "Snijd {kipfilet} in blokjes en {ui} fijn. Rasp {bloemkool} grof tot 'rijst'.",
    ["Bak ui in {olie:0.5} 3 minuten. Doe kip, {kerrie} en {garam} erbij en bak 5 minuten.",8],
    ["Doe {tomblokjes}, {kokosmelk} en {zout:0.5} erbij en laat 7 minuten pruttelen.",7],
    ["Bak de bloemkoolrijst in {olie:0.5} met {zout:0.25} 5 minuten.",5],
    ["Verwarm {wraps} 30 seconden per stuk.",1],
    GAAR + " Eet met {kwark}."
  ]},
{ id:"lamskoftekip", type:"diner", serves:2, time:30, t:["kip","midden-oosten",0],
  name:"Kipgehaktballetjes met hummus, couscous en salade", short:"Kruidige balletjes met frisse groente.",
  items:[["kipgehakt",350],["komijn",1],["paprikapoeder",1],["peterselie",15],["zout",0.5],["olie",1],["groentebouillon",0.5],["water",190],["couscous",150],["hummus",80],["tomaat",2],["komkommer",0.5],["citroen",0.5]],
  steps:[
    "Meng {kipgehakt} met {komijn}, {paprikapoeder}, de helft van de {peterselie} (fijn) en {zout:0.25}. Rol er 14 balletjes van.",
    ["Bak de balletjes in {olie} 8 minuten rondom bruin, op middelhoog vuur.",8],
    "Snijd een balletje door: helemaal wit, zonder roze = gaar.",
    COUS({}),
    "Salade: {tomaat} en {komkommer} in blokjes met het sap van {citroen}, de rest van de peterselie en {zout:0.25}. Eet met {hummus}."
  ]},
{ id:"biefstukwok", type:"diner", serves:2, time:25, t:["rund","aziatisch",0],
  name:"Biefstukreepjes met broccoli en oestersaus", short:"Snelle Chinese wok met rijst.",
  items:[["rijst",150],["water",225],["zout",0.25],["runderreepjes",300],["maizena",1],["sojasaus",2],["oestersaus",2],["honing",0.5],["olie",1],["knoflook",2],["broccoli",400]],
  steps:[
    ...RICE({w:225,s:0.25}),
    "Hussel {runderreepjes} met {maizena:0.5} en {sojasaus:1}. Saus: {sojasaus:1}, {oestersaus}, {honing}, {maizena:0.5} en 5 el water.",
    ["Kook {broccoli} in roosjes 3 minuten. Giet af.",3],
    ["Bak het vlees in {olie} op het hoogste vuur 2 minuten. Doe {knoflook} (fijn) en broccoli erbij en bak 1 minuut.",3],
    "Giet de saus erbij en bak 1 minuut tot hij glanst. Eet met de rijst."
  ]},
{ id:"kipfajitarijst", type:"diner", serves:2, time:35, t:["kip","mexicaans",1],
  name:"Mexicaanse kiprijst uit één pan", short:"Rijst, kip, bonen en kaas. Eén pan afwas.",
  items:[["kipfilet",300],["olie",1],["ui",1],["paprika",1],["komijn",1],["paprikapoeder",1.5],["chili",0.25],["rijst",150],["tomblokjes",200],["water",300],["bouillon",0.5],["zwartebonen",240],["kaas",40],["kwark",100],["zout",0.25]],
  steps:[
    "Snijd {kipfilet} in blokjes, {ui} en {paprika} fijn. Spoel {rijst} af.",
    ["Bak kip in {olie} 4 minuten. Doe ui, paprika, {komijn}, {paprikapoeder} en {chili} erbij en bak 2 minuten.",6],
    "Doe rijst, {tomblokjes}, {water}, {bouillon} en {zout} erbij en breng aan de kook.",
    ["Vuur laag, deksel erop, 15 minuten garen. Roer {zwartebonen} (afgespoeld) erdoor en laat 3 minuten staan.",18],
    "Check: rijst zacht en kip helemaal wit. Strooi {kaas} erover en eet met {kwark}."
  ]},
{ id:"gehaktspaghettiveg", type:"diner", serves:2, time:30, t:["rund","italiaans",0],
  name:"Spaghetti met gehakt en verstopte groente", short:"Bolognese met wortel, courgette en paprika erin.",
  items:[["zout",1.25],["spaghetti",160],["olie",0.5],["gehakt",250],["ui",1],["knoflook",2],["wortel",150],["courgette",1],["paprika",1],["tomblokjes",400],["tompuree",35],["italiaans",1.5],["parmezaan",20]],
  steps:[
    ...PASTA({s:1, k:"spaghetti"}),
    "Snijd {ui} en {knoflook} fijn en rasp {wortel}, {courgette} en {paprika} grof.",
    ["Bak {gehakt} in {olie} 5 minuten los tot er geen roze meer te zien is. Doe de groente erbij en bak 5 minuten.",10],
    ["Roer {tompuree}, {tomblokjes}, {italiaans} en {zout:0.25} erdoor. Laat 10 minuten pruttelen.",10],
    "Eet met de spaghetti en {parmezaan}."
  ]},
{ id:"kipdijtraybake", type:"diner", serves:2, time:45, t:["kip","amerikaans",0],
  name:"Kipdijen met pompoen, rode ui en rozemarijn", short:"Herfst op één bakplaat.",
  items:[["kipdij",400],["pompoen",500],["rodeui",1],["krieltjes",300],["olie",1.5],["rozemarijn",1],["knoflook",3],["zout",0.75],["peper",0.25],["honing",0.5],["spinazie",100]],
  steps:[
    "Zet de oven aan op 200 °C (hetelucht 180 °C). Leg bakpapier op een bakplaat.",
    "Schil {pompoen} en snijd in blokken van 3 cm. Halveer {krieltjes}. Snijd {rodeui} in partjes.",
    "Hussel groente, {kipdij} en {knoflook} (heel) met {olie}, {rozemarijn}, {zout} en {peper}.",
    ["Bak 35 minuten. Druppel {honing} over de pompoen de laatste 5 minuten.",35],
    GAAR + " Schep {spinazie} erdoor, die slinkt door de warmte."
  ]},
{ id:"schnitzelstamp", type:"diner", serves:2, time:35, t:["varken","hollands",0],
  name:"Varkensschnitzel met spinaziestamppot", short:"Krokante schnitzel uit de pan op een groene stamppot.",
  items:[["varkenshaas",300],["ei",1],["paneermeel",40],["zout",0.75],["peper",0.25],["olie",1.5],["aardappel",600],["spinazie",200],["melk",75],["nootmuskaat",0.25],["citroen",0.5]],
  steps:[
    ["Schil {aardappel}, snijd in vieren en kook in water met {zout:0.25} 20 minuten.",20],
    "Snijd {varkenshaas} in 4 plakken en sla ze plat tot ½ cm. Bestrooi met {zout:0.25} en {peper}. Haal door losgeklopt {ei} en daarna door {paneermeel}.",
    ["Bak in {olie} op middelhoog vuur 3 minuten per kant tot goudbruin.",6],
    "Snijd een schnitzel door: licht roze mag, rood niet.",
    "Giet de aardappelen af. Stamp met {melk}, {nootmuskaat}, {zout:0.25} en rauwe {spinazie} tot hij slinkt. Eet met partjes {citroen}."
  ]},
{ id:"thaigehaktsla", type:"diner", serves:2, time:25, t:["kip","aziatisch",2],
  name:"Larb: Thaise kipgehaktsalade met rijst", short:"Fris, pittig en licht. Met limoen en verse kruiden.",
  items:[["rijst",150],["water",225],["zout",0.25],["kipgehakt",350],["olie",0.5],["knoflook",2],["vissaus",1.5],["limoen",1],["sambal",1],["honing",0.5],["rodeui",0.5],["basilicum",15],["sla",100],["komkommer",0.5]],
  steps:[
    ...RICE({w:225,s:0.25}),
    ["Bak {kipgehakt} met {knoflook} (fijn) in {olie} 6 minuten los tot het helemaal wit is, zonder roze.",6],
    "Zet het vuur uit. Roer {vissaus}, het sap van {limoen}, {sambal}, {honing}, {rodeui} (heel fijn) en {basilicum} erdoor.",
    "Schep op blaadjes {sla} en eet met de rijst en {komkommer}."
  ]},
{ id:"hamburgerbowl", type:"diner", serves:2, time:30, t:["rund","amerikaans",0],
  name:"Burgerbowl met krieltjes en speciale saus", short:"Alles van een hamburger, zonder broodje.",
  items:[["krieltjes",500],["olie",1],["zout",0.75],["paprikapoeder",1],["gehakt",300],["peper",0.25],["sla",100],["tomaat",2],["rodeui",0.5],["kaas",40],["kwark",100],["mosterd",1],["bbqsaus",1]],
  steps:[
    ["Halveer {krieltjes}. Bak in {olie} met {zout:0.25} en {paprikapoeder} in een pan met deksel 10 minuten, daarna 10 minuten zonder.",20],
    "Vorm van {gehakt} met {zout:0.25} en {peper} 2 burgers.",
    ["Bak de burgers in een droge koekenpan 4 minuten per kant. Snijd een burger door: geen roze meer = gaar.",8],
    "Saus: meng {kwark}, {mosterd}, {bbqsaus} en {zout:0.25}.",
    "Verdeel {sla}, krieltjes, {tomaat}, {rodeui} en de burger in stukken over 2 kommen. Strooi {kaas} erover en schep de saus erop."
  ]},
{ id:"kipcordonbleu", type:"diner", serves:2, time:40, t:["kip","frans",0],
  name:"Kip cordon bleu uit de oven met sperziebonen", short:"Kip gevuld met ham en kaas, krokant gebakken.",
  items:[["kipfilet",350],["hamblokjes",60],["kaasplak",40],["ei",1],["paneermeel",40],["zout",0.75],["olie",1],["aardappel",500],["sperziebonen",300],["melk",50]],
  steps:[
    "Zet de oven aan op 200 °C (hetelucht 180 °C). Leg bakpapier op een bakplaat.",
    "Snijd {kipfilet} aan de zijkant in, zodat je een zakje krijgt. Vul met {kaasplak} en {hamblokjes}. Bestrooi met {zout:0.25}.",
    "Haal de kip door losgeklopt {ei} en daarna door {paneermeel}. Leg op de bakplaat en druppel {olie} erover.",
    ["Bak 25 minuten.",25],
    ["Kook ondertussen {aardappel} (geschild) 20 minuten in water met {zout:0.25}. Kook {sperziebonen} 7 minuten.",20],
    GAAR + " Stamp de aardappelen met {melk} en {zout:0.25}."
  ]},
{ id:"kipgyrosoven", type:"diner", serves:2, time:35, t:["kip","grieks",0],
  name:"Gyros-ovenschotel met kip, tomaat en kaas", short:"Griekse snackbar-favoriet, nu uit de oven.",
  items:[["kipdij",350],["paprikapoeder",1.5],["oregano",1],["knoflookpoeder",0.5],["komijn",0.5],["zout",0.75],["olie",1],["ui",1],["tomaat",2],["kaas",50],["kwark",150],["komkommer",0.5],["knoflook",1],["pita",2]],
  steps:[
    "Zet de oven aan op 200 °C (hetelucht 180 °C).",
    "Snijd {kipdij} in reepjes. Meng met {paprikapoeder}, {oregano}, {knoflookpoeder}, {komijn} en {zout:0.5}.",
    ["Bak de kip met {ui} (halve ringen) in {olie} 7 minuten.",7],
    "Schep in een ovenschaal, leg {tomaat} in plakjes erop en strooi {kaas} erover.",
    ["Bak 12 minuten.",12],
    "Tzatziki: rasp {komkommer}, knijp uit en meng met {kwark}, {knoflook} (geperst) en {zout:0.25}. " + GAAR + " Eet met {pita}."
  ]},
{ id:"ketjapvarkenshaas", type:"diner", serves:2, time:30, t:["varken","aziatisch",0],
  name:"Varkenshaas in ketjap met paksoi en rijst", short:"Mals vlees in een zoete glanzende saus.",
  items:[["rijst",150],["water",225],["zout",0.25],["varkenshaas",300],["olie",1],["knoflook",2],["gember",0.5],["ketjap",2],["sojasaus",1],["paksoi",300],["sesam",1]],
  steps:[
    ...RICE({w:225,s:0.25}),
    "Snijd {varkenshaas} in plakjes van 1 cm.",
    ["Bak het vlees in {olie} op hoog vuur 2 minuten per kant. Doe {knoflook} (fijn) en {gember} erbij.",4],
    ["Doe {ketjap}, {sojasaus} en 3 el water erbij en laat 1 minuut inkoken. Schep op een bord.",1],
    ["Bak {paksoi} (in stukken) 2 minuten in dezelfde pan.",2],
    "Check: licht roze mag, rood niet. Strooi {sesam} erover en eet met de rijst."
  ]},
{ id:"kipsoepvermicelli", type:"diner", serves:2, time:35, t:["kip","hollands",0],
  name:"Stevige kippensoep met mie en groente", short:"Hollandse kippensoep als maaltijd.",
  items:[["kipfilet",300],["water",1000],["bouillon",1],["prei",1],["wortel",150],["champignons",150],["laurier",1],["mie",80],["peterselie",15],["brood",3]],
  steps:[
    "Snijd {prei} in ringen, {wortel} in plakjes en {champignons} in vieren.",
    ["Breng {water} met {bouillon} en {laurier} aan de kook. Leg {kipfilet} erin en laat 12 minuten zachtjes koken.",12],
    GAAR,
    "Haal de kip eruit en trek in draadjes.",
    ["Doe groente en {mie} (in stukjes gebroken) in de soep en kook 5 minuten. Doe de kip terug.",5],
    "Strooi {peterselie} erover en eet met {brood}."
  ]},
{ id:"gyozabowl", type:"diner", serves:2, time:30, t:["varken","japans",0],
  name:"Varkensgehakt-noedelbowl met gember en edamame", short:"De vulling van gyoza, maar dan over noedels.",
  items:[["mie",125],["varkensreepjes",300],["olie",1],["knoflook",2],["gember",1],["spitskool",200],["edamame",150],["sojasaus",2],["azijn",1],["honing",0.5],["sesam",1],["lenteui",2]],
  steps:[
    "Breng een pan water aan de kook. Snijd {varkensreepjes} heel klein (hakken) en {spitskool} in reepjes.",
    ["Kook {mie} en {edamame} 4 minuten. Giet af.",4],
    ["Bak het vlees in {olie} 4 minuten op hoog vuur. Doe {knoflook} (fijn), {gember} en kool erbij en bak 3 minuten.",7],
    "Saus: {sojasaus}, {azijn}, {honing}. Meng alles en strooi {sesam} en {lenteui} erover.",
    "Check: het vlees mag niet meer roze zijn."
  ]},
{ id:"lasagnebroodje", type:"diner", serves:2, time:30, t:["rund","italiaans",0],
  name:"Lasagnesoep met gehakt en hüttenkäse", short:"Alle smaak van lasagne in een kom soep.",
  items:[["gehakt",250],["olie",0.5],["ui",1],["knoflook",2],["tompuree",35],["tomblokjes",400],["water",600],["runderbouillon",1],["italiaans",1.5],["lasagne",100],["spinazie",100],["huttenkase",150],["parmezaan",20]],
  steps:[
    ["Bak {gehakt} in {olie} 5 minuten los tot er geen roze meer te zien is. Doe {ui} en {knoflook} (fijn) erbij en bak 3 minuten. Roer {tompuree} erdoor.",8],
    "Doe {tomblokjes}, {water}, {runderbouillon} en {italiaans} erbij en breng aan de kook.",
    ["Breek {lasagne} in stukken en kook 12 minuten mee tot ze zacht zijn.",12],
    "Roer {spinazie} erdoor. Schep in kommen met een flinke schep {huttenkase} en {parmezaan} erop."
  ]},
{ id:"tikkawraps", type:"diner", serves:2, time:30, t:["kip","indiaas",1],
  name:"Tikka-kipwraps met raita en rode ui", short:"Indiase smaken in een snelle wrap.",
  items:[["kipfilet",350],["kwark",200],["garam",1.5],["paprikapoeder",1],["kurkuma",0.25],["knoflook",2],["zout",0.75],["olie",1],["wraps",4],["komkommer",0.5],["rodeui",0.5],["citroen",0.5],["sla",75],["tomaat",1]],
  steps:[
    "Snijd {kipfilet} in reepjes. Meng met {kwark:75}, {garam}, {paprikapoeder}, {kurkuma}, {knoflook:1} (geperst) en {zout:0.5}.",
    ["Bak de kip in {olie} 7 minuten op hoog vuur.",7],
    GAAR,
    "Raita: rasp {komkommer}, knijp uit en meng met {kwark:125}, {knoflook:1} (geperst) en {zout:0.25}. Snijd {rodeui} in ringen en besprenkel met het sap van {citroen}.",
    "Vul {wraps} met {sla}, {tomaat}, kip, ui en raita."
  ]},
{ id:"risottokip2", type:"diner", serves:2, time:35, t:["kip","italiaans",0],
  name:"Ovenrisotto met kip en doperwten", short:"Risotto zonder roeren: de oven doet het werk.",
  items:[["kipfilet",300],["olie",1],["ui",1],["knoflook",1],["risottorijst",160],["bouillon",1],["water",650],["doperwten",150],["parmezaan",30],["citroen",0.5],["zout",0.25],["peper",0.25]],
  steps:[
    "Zet de oven aan op 200 °C (hetelucht 180 °C).",
    ["Bak {kipfilet} in blokjes in {olie} in een ovenvaste pan 4 minuten. Doe {ui} en {knoflook} (fijn) en {risottorijst} erbij en roer 1 minuut.",5],
    "Giet {water} met {bouillon} erbij en breng aan de kook. Deksel erop (of aluminiumfolie). Geen ovenvaste pan? Schep alles in een ovenschaal.",
    ["Bak 22 minuten in de oven.",22],
    "Roer {doperwten}, {parmezaan}, het sap van {citroen}, {zout} en {peper} erdoor tot het romig is. " + GAAR
  ]},
{ id:"thaiburger", type:"diner", serves:2, time:30, t:["kip","aziatisch",1],
  name:"Thaise kipburgers met komkommersalade", short:"Kipburgers met limoen en zoete chilisaus.",
  items:[["kipgehakt",350],["knoflook",1],["gember",0.5],["sojasaus",1],["paneermeel",20],["olie",1],["burgerbol",2],["zoetechili",2],["komkommer",1],["wortel",100],["azijn",1],["limoen",0.5],["sla",50]],
  steps:[
    "Meng {kipgehakt} met {knoflook} (geperst), {gember}, {sojasaus} en {paneermeel}. Vorm 2 burgers.",
    ["Bak de burgers in {olie} 5 minuten per kant op middelhoog vuur.",10],
    "Snijd een burger door: helemaal wit, zonder roze = gaar.",
    "Salade: snijd {komkommer} in plakjes, rasp {wortel} en meng met {azijn} en het sap van {limoen}.",
    "Bouw: {burgerbol}, {sla}, burger, {zoetechili}. Eet met de salade."
  ]}
