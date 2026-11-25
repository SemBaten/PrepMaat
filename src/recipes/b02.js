,
/* ============ Ontbijt b02: eieren ============ */
{ id:"gekookteeieren", type:"ontbijt", serves:1, time:12, t:["geen","hollands",0],
  name:"Gekookte eieren met brood, komkommer en tomaat", short:"Simpel, voedzaam en snel.",
  items:[["ei",3],["brood",2],["zout",0.1],["peper",0.1],["komkommer",0.25],["tomaat",1]],
  steps:[
    EGGS({}),
    "Rooster {brood}. Snijd de eieren in plakjes en leg ze op het brood met {zout} en {peper}.",
    "Eet {komkommer} en {tomaat} in plakjes erbij."
  ]},
{ id:"spiegeleispinazie", type:"ontbijt", serves:1, time:10, t:["geen","hollands",0],
  name:"Spiegeleieren op toast met spinazie", short:"Groen ontbijt in 10 minuten.",
  items:[["olie",0.5],["spinazie",75],["knoflook",0.5],["ei",2],["zout",0.1],["peper",0.1],["brood",2],["kaas",15]],
  steps:[
    ["Laat {spinazie} met geperste {knoflook} in {olie:0.25} 1 minuut slinken. Schep op een bord.",1],
    ["Bak {ei} in {olie:0.25} 3 minuten tot het eiwit gestold is. Bestrooi met {zout} en {peper}.",3],
    "Rooster {brood}. Leg spinazie, {kaas} en de eieren erop."
  ]},
{ id:"roereizalm", type:"ontbijt", serves:1, time:10, t:["vis","hollands",0],
  name:"Roerei met gerookte zalm op toast", short:"Zondagsontbijt, maar ook op dinsdag te doen.",
  items:[["ei",2],["melk",20],["peper",0.1],["olie",0.25],["brood",2],["gerooktezalm",50],["dille",0.25]],
  steps:[
    "Klop {ei} met {melk} en {peper}.",
    ["Verhit {olie} op laag vuur. Roer het ei rustig 3 minuten tot het net gestold is.",3],
    "Rooster {brood}. Leg {gerooktezalm} en het roerei erop en strooi {dille} erover."
  ]},
{ id:"omelethamkaas", type:"ontbijt", serves:1, time:10, t:["varken","hollands",0],
  name:"Omelet met ham, kaas en een snee brood", short:"Klassiek en vullend.",
  items:[["ei",3],["melk",20],["peper",0.1],["olie",0.25],["hamblokjes",40],["kaas",20],["brood",1],["tomaat",1]],
  steps:[
    "Klop {ei} met {melk} en {peper}.",
    ["Bak {hamblokjes} 1 minuut in {olie}. Giet het ei erover en bak 3 minuten op laag vuur met deksel.",4],
    "Strooi {kaas} erover, vouw dubbel en serveer met {brood} en {tomaat}."
  ]},
{ id:"omelettomaat", type:"ontbijt", serves:1, time:10, t:["geen","frans",0],
  name:"Omelet met tomaat, ui en peterselie", short:"Frans ontbijt met verse kruiden.",
  items:[["ei",3],["zout",0.1],["peper",0.1],["olie",0.5],["rodeui",0.25],["tomaat",1],["peterselie",5],["brood",1],["huttenkase",50]],
  steps:[
    "Klop {ei} met {zout}, {peper} en fijngehakte {peterselie}. Snijd {rodeui} fijn en {tomaat} in blokjes.",
    ["Bak ui en tomaat 2 minuten in {olie}. Giet het ei erover en bak 3 minuten op laag vuur met deksel.",5],
    "Vouw dubbel en serveer met {brood} met {huttenkase}."
  ]},
{ id:"eiinmok", type:"ontbijt", serves:1, time:5, t:["geen","hollands",0],
  name:"Ei in een mok uit de magnetron met spinazie en kaas", short:"Twee minuten, één mok, klaar.",
  items:[["ei",3],["melk",20],["spinazie",30],["kaas",20],["peper",0.1],["brood",1]],
  steps:[
    "Klop {ei} met {melk} en {peper} in een grote mok. Roer grof gehakte {spinazie} en {kaas} erdoor.",
    ["Verwarm 1 minuut in de magnetron, roer, en nog 45 seconden tot het ei helemaal gestold is.",2],
    "Eet met {brood}."
  ]},
{ id:"minifrittata", type:"ontbijt", serves:1, time:15, t:["geen","italiaans",0],
  name:"Mini-frittata met courgette en feta uit de pan", short:"Een klein Italiaans eierkoekje.",
  items:[["courgette",0.25],["olie",0.5],["ei",3],["feta",25],["oregano",0.25],["peper",0.1],["brood",1]],
  steps:[
    ["Rasp {courgette} en bak 3 minuten in {olie} in een kleine pan.",3],
    ["Klop {ei} met {oregano} en {peper}, giet erover en verkruimel {feta} erop. Bak 5 minuten op laag vuur met deksel tot het ei gestold is.",5],
    "Eet met {brood}."
  ]},
{ id:"eggsbenedict", type:"ontbijt", serves:1, time:15, t:["varken","amerikaans",0],
  name:"Eggs benedict light: gepocheerd ei op toast met ham", short:"Hotelontbijt met een kwark-mosterdsaus.",
  items:[["azijn",1],["ei",2],["brood",2],["hamblokjes",40],["kwark",50],["mosterd",0.5],["citroen",0.25],["spinazie",30]],
  steps:[
    ["Breng een pan water met {azijn} aan de kook en zet het vuur laag. Breek {ei} één voor één in het water en laat 4 minuten trekken.",4],
    "Saus: meng {kwark}, {mosterd} en het sap van {citroen}.",
    ["Rooster {brood} en bak {hamblokjes} 1 minuut in een droge pan.",1],
    "Leg {spinazie}, ham en de eieren op het brood en schep de saus erover."
  ]},
{ id:"avocadopocheer", type:"ontbijt", serves:1, time:12, t:["geen","amerikaans",0],
  name:"Gepocheerd ei op avocadotoast met chili", short:"Zacht eitje op romige avocado.",
  items:[["azijn",1],["ei",2],["brood",2],["avocado",0.5],["citroen",0.25],["zout",0.1],["chili",0.1],["huttenkase",75]],
  steps:[
    ["Breng een pan water met {azijn} aan de kook en zet het vuur laag. Breek {ei} één voor één in het water en laat 4 minuten trekken.",4],
    "Prak {avocado} met het sap van {citroen} en {zout}.",
    "Rooster {brood}, smeer {huttenkase} en de avocado erop, leg de eieren erop en strooi {chili} erover."
  ]},
{ id:"kipontbijtburrito", type:"ontbijt", serves:1, time:10, t:["kip","mexicaans",0],
  name:"Ontbijtburrito met kipbeleg, ei en zwarte bonen", short:"Stevig ontbijt in een wrap.",
  items:[["ei",2],["olie",0.25],["zwartebonen",40],["kipbeleg",40],["wraps",1],["kaas",15],["tomaat",0.5],["paprikapoeder",0.25]],
  steps:[
    "Klop {ei} met {paprikapoeder}. Spoel {zwartebonen} af.",
    ["Bak het ei roerend in {olie} 2 minuten. Doe de bonen erbij om warm te worden.",2],
    "Leg {kipbeleg}, het roerei, {kaas} en blokjes {tomaat} op {wraps}. Vouw de zijkanten in en rol op."
  ]},
{ id:"roereichampignon", type:"ontbijt", serves:1, time:10, t:["geen","hollands",0],
  name:"Roerei met champignons en peterselie op brood", short:"Hartig en romig.",
  items:[["champignons",75],["olie",0.5],["ei",3],["melk",20],["zout",0.1],["peper",0.1],["peterselie",5],["brood",2]],
  steps:[
    ["Bak {champignons} in plakjes 3 minuten in {olie}.",3],
    ["Klop {ei} met {melk}, {zout} en {peper}. Giet bij de champignons en roer rustig 3 minuten op laag vuur.",3],
    "Strooi gehakte {peterselie} erover en serveer op geroosterd {brood}."
  ]},
{ id:"ontbijtpitaei", type:"ontbijt", serves:1, time:12, t:["geen","midden-oosten",0],
  name:"Ontbijtpita met ei, hummus en tomaat", short:"Midden-Oosters ontbijt om mee te nemen.",
  items:[["ei",2],["pita",1],["hummus",40],["tomaat",1],["komkommer",0.25],["paprikapoeder",0.25],["kwark",75]],
  steps:[
    EGGS({}),
    "Warm {pita} 2 minuten in de broodrooster. Smeer {hummus} en {kwark} erin.",
    "Vul met de eieren in plakjes, {tomaat} en {komkommer}. Bestrooi met {paprikapoeder}."
  ]},
{ id:"eiersaladebrood", type:"ontbijt", serves:1, time:12, t:["geen","hollands",0],
  name:"Eiersalade op brood met komkommer", short:"Maak 's avonds, smeer 's ochtends.",
  items:[["ei",3],["kwark",50],["mosterd",0.5],["zout",0.1],["peper",0.1],["brood",2],["komkommer",0.25]],
  steps:[
    EGGS({}),
    "Prak de eieren met {kwark}, {mosterd}, {zout} en {peper}.",
    "Smeer op {brood} en leg plakjes {komkommer} erop."
  ]},
{ id:"boerenontbijt", type:"ontbijt", serves:1, time:20, t:["geen","hollands",0],
  name:"Boerenontbijt: gebakken krieltjes met ei en paprika", short:"Voor een lange dag of na de training.",
  items:[["krieltjes",150],["olie",0.75],["ui",0.25],["paprika",0.5],["ei",3],["zout",0.1],["peper",0.1],["kaas",15]],
  steps:[
    ["Snijd {krieltjes} in plakjes en bak met deksel in {olie} 10 minuten. Doe {ui} en {paprika} in blokjes erbij en bak 3 minuten zonder deksel.",13],
    ["Klop {ei} met {zout} en {peper}, giet erover, strooi {kaas} erop en bak 4 minuten met deksel tot het ei gestold is.",4]
  ]},
{ id:"wrappizzaei", type:"ontbijt", serves:1, time:10, t:["geen","italiaans",0],
  name:"Ontbijt-wrappizza met ei, tomaat en kaas", short:"Pizza als ontbijt, uit de koekenpan.",
  items:[["wraps",1],["olie",0.25],["ei",2],["tomaat",1],["kaas",25],["oregano",0.25],["spinazie",20]],
  steps:[
    ["Leg {wraps} in een koekenpan met {olie}. Klop {ei} met {oregano} en giet over de wrap. Bak 2 minuten op laag vuur.",2],
    ["Leg plakjes {tomaat}, {spinazie} en {kaas} erop, deksel erop, en bak 3 minuten tot het ei gestold en de kaas gesmolten is.",3]
  ]},
{ id:"menemen", type:"ontbijt", serves:1, time:15, t:["geen","turks",1],
  name:"Menemen: Turks roerei met tomaat en paprika", short:"Zacht roerei in een tomatensaus.",
  items:[["olie",0.5],["paprika",0.5],["ui",0.25],["tomaat",2],["paprikapoeder",0.25],["chili",0.1],["zout",0.1],["ei",3],["brood",1],["feta",20]],
  steps:[
    ["Bak {paprika} en {ui} in blokjes 4 minuten in {olie}. Doe {tomaat} in blokjes, {paprikapoeder}, {chili} en {zout} erbij en laat 4 minuten pruttelen.",8],
    ["Klop {ei} los, giet erbij en roer rustig 2 minuten tot het net gestold is.",2],
    "Verkruimel {feta} erover en eet met {brood}."
  ]},
{ id:"tofuroereitoast", type:"ontbijt", serves:1, time:10, t:["geen","aziatisch",0],
  name:"Tofu-roerei op toast met tomaat", short:"Plantaardig roerei met kurkuma.",
  items:[["tofu",200],["olie",0.5],["kurkuma",0.25],["paprikapoeder",0.25],["sojasaus",0.5],["peper",0.1],["brood",2],["tomaat",1]],
  steps:[
    ["Verkruimel {tofu} in een pan met {olie}. Bak 4 minuten met {kurkuma}, {paprikapoeder}, {sojasaus} en {peper}.",4],
    "Rooster {brood}, schep het tofu-roerei erop en leg plakjes {tomaat} erbij."
  ]},
{ id:"omeletwraponderweg", type:"ontbijt", serves:1, time:10, t:["geen","grieks",0],
  name:"Omeletwrap met spinazie en feta voor onderweg", short:"Oprollen, in folie en gaan.",
  items:[["ei",2],["spinazie",40],["olie",0.25],["wraps",1],["feta",25],["kwark",50],["tomaat",0.5]],
  steps:[
    ["Klop {ei} los met grof gehakte {spinazie}. Bak in {olie} als dunne omelet, 3 minuten.",3],
    "Smeer {kwark} op {wraps}, leg de omelet erop met verkruimelde {feta} en blokjes {tomaat}. Rol strak op."
  ]},
{ id:"paprikaringei", type:"ontbijt", serves:1, time:10, t:["geen","hollands",0],
  name:"Eitjes in paprikaringen met brood en hüttenkäse", short:"Leuk om te zien, snel om te maken.",
  items:[["paprika",0.5],["olie",0.5],["ei",2],["zout",0.1],["peper",0.1],["brood",2],["huttenkase",75]],
  steps:[
    "Snijd {paprika} in 2 dikke ringen van 1,5 cm.",
    ["Leg de ringen in een koekenpan met {olie}. Breek in elke ring 1 van {ei}. Bak 4 minuten met deksel tot het eiwit gestold is.",4],
    "Bestrooi met {zout} en {peper}. Eet met {brood} met {huttenkase}."
  ]},
{ id:"engelsontbijt", type:"ontbijt", serves:1, time:15, t:["geen","amerikaans",0],
  name:"Engels ontbijt light: ei, bonen, champignons en toast", short:"Full English, maar dan lichter.",
  items:[["wittebonen",80],["passata",60],["paprikapoeder",0.25],["olie",0.5],["champignons",60],["tomaat",1],["ei",2],["brood",1]],
  steps:[
    ["Warm {wittebonen} met {passata} en {paprikapoeder} 4 minuten op in een steelpannetje.",4],
    ["Bak {champignons} en gehalveerde {tomaat} 4 minuten in {olie:0.25}.",4],
    ["Bak {ei} in {olie:0.25} 3 minuten tot het eiwit gestold is.",3],
    "Serveer alles met geroosterd {brood}."
  ]},
{ id:"hartigewentelteef", type:"ontbijt", serves:1, time:10, t:["varken","frans",0],
  name:"Hartige wentelteefjes met ham en kaas", short:"Croque-achtig ontbijt uit de pan.",
  items:[["ei",2],["melk",50],["peper",0.1],["brood",2],["hamblokjes",30],["kaasplak",20],["olie",0.5],["tomaat",1]],
  steps:[
    "Klop {ei} met {melk} en {peper} in een diep bord.",
    "Beleg 1 snee van {brood} met {hamblokjes} en {kaasplak} en leg de andere snee erop. Haal door het ei.",
    ["Bak in {olie} 3 minuten per kant tot het goudbruin is en de kaas smelt.",6],
    "Eet met {tomaat}."
  ]},
{ id:"ontbijtsalade", type:"ontbijt", serves:1, time:12, t:["geen","amerikaans",0],
  name:"Ontbijtsalade met ei, avocado en spinazie", short:"Fris begin van de dag.",
  items:[["ei",2],["spinazie",50],["avocado",0.5],["cherrytomaat",75],["huttenkase",100],["citroen",0.25],["olie",0.25],["zout",0.1],["brood",1]],
  steps:[
    EGGS({m:7}),
    "Meng {spinazie}, {avocado} in blokjes en gehalveerde {cherrytomaat} met {olie}, het sap van {citroen} en {zout}.",
    "Leg de gehalveerde eieren en {huttenkase} erop. Eet met {brood}."
  ]},
{ id:"kipomeletbroodje", type:"ontbijt", serves:1, time:10, t:["kip","hollands",0],
  name:"Omeletbroodje met kipbeleg en sla", short:"Warm broodje om mee te nemen.",
  items:[["ei",2],["olie",0.25],["peper",0.1],["burgerbol",1],["kipbeleg",40],["sla",15],["tomaat",0.5],["mosterd",0.5]],
  steps:[
    ["Klop {ei} met {peper} en bak in {olie} als kleine dikke omelet, 3 minuten. Vouw dubbel.",3],
    "Snijd {burgerbol} open, smeer {mosterd} erop en beleg met {sla}, {kipbeleg}, de omelet en plakjes {tomaat}."
  ]},
{ id:"huevosfrijoles", type:"ontbijt", serves:1, time:10, t:["geen","mexicaans",1],
  name:"Huevos con frijoles: ei met zwarte bonen en wrap", short:"Mexicaans ontbijt met een beetje pit.",
  items:[["zwartebonen",80],["komijn",0.25],["chili",0.1],["olie",0.5],["ei",2],["wraps",1],["tomaat",0.5],["kwark",50]],
  steps:[
    ["Warm afgespoelde {zwartebonen} met {komijn} en {chili} in {olie:0.25} 3 minuten en prak grof.",3],
    ["Bak {ei} in {olie:0.25} 3 minuten tot het eiwit gestold is.",3],
    "Smeer de bonen op {wraps}, leg de eieren erop met blokjes {tomaat} en {kwark}."
  ]},
{ id:"masalaomelet", type:"ontbijt", serves:1, time:10, t:["geen","indiaas",1],
  name:"Masala-omelet met tomaat, ui en raita", short:"Indiaas straatontbijt.",
  items:[["ei",3],["rodeui",0.25],["tomaat",0.5],["kurkuma",0.1],["garam",0.25],["chili",0.1],["zout",0.1],["olie",0.5],["kwark",75],["brood",1]],
  steps:[
    "Klop {ei} met fijne {rodeui}, blokjes {tomaat}, {kurkuma}, {garam}, {chili} en {zout}.",
    ["Bak in {olie} 4 minuten op laag vuur met deksel tot het ei gestold is.",4],
    "Eet met {kwark} en geroosterd {brood}."
  ]}
