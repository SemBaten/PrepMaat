,
/* ============ Avondeten d06: vegetarisch en vis ============ */
{ id:"halloumibowl", type:"diner", serves:2, time:30, t:["vega","midden-oosten",0],
  name:"Quinoabowl met geroosterde groente, feta en ei", short:"Kleurrijke vegetarische bowl uit de oven.",
  items:[["quinoa",130],["water",260],["zout",0.75],["paprika",1],["courgette",1],["rodeui",1],["kikkererwten",240],["olie",1.5],["komijn",1],["paprikapoeder",1],["ei",2],["feta",75],["citroen",0.5],["kwark",100]],
  steps:[
    "Zet de oven aan op 220 °C (hetelucht 200 °C). Leg bakpapier op een bakplaat.",
    "Snijd {paprika}, {courgette} en {rodeui} in stukken. Spoel {kikkererwten} af. Hussel alles met {olie:1}, {komijn}, {paprikapoeder} en {zout:0.25}.",
    ["Rooster 25 minuten.",25],
    ["Spoel ondertussen {quinoa} af en kook met {water} en {zout:0.25} 15 minuten met deksel. Laat 5 minuten staan.",15],
    EGGS({m:8}),
    "Meng de quinoa met {olie:0.5}, het sap van {citroen} en {zout:0.25}. Verdeel met de groente, gehalveerde eieren, {feta} en {kwark} over 2 kommen."
  ]},
{ id:"linzenburger", type:"diner", serves:2, time:35, t:["vega","amerikaans",0],
  name:"Bonenburgers met zoete-aardappelpartjes", short:"Zelfgemaakte vegaburgers van zwarte bonen.",
  items:[["zoeteaardappel",400],["olie",1.5],["zout",0.75],["paprikapoeder",1.5],["zwartebonen",240],["paneermeel",40],["ei",1],["komijn",1],["ui",0.5],["burgerbol",2],["kaasplak",40],["sla",50],["tomaat",1],["kwark",100],["mosterd",1]],
  steps:[
    "Zet de oven aan op 220 °C (hetelucht 200 °C). Leg bakpapier op een bakplaat.",
    ["Snijd {zoeteaardappel} in partjes, hussel met {olie:1}, {paprikapoeder:1} en {zout:0.25} en bak 25 minuten.",25],
    "Spoel {zwartebonen} af en prak ze fijn. Meng met {paneermeel}, {ei}, {komijn}, {paprikapoeder:0.5}, {ui} (heel fijn) en {zout:0.25}. Vorm 2 burgers.",
    ["Bak de burgers in {olie:0.5} 4 minuten per kant op middelhoog vuur. Leg {kaasplak} erop de laatste minuut.",8],
    "Saus: meng {kwark}, {mosterd} en {zout:0.25}. Bouw: {burgerbol}, saus, {sla}, burger, {tomaat} in plakjes."
  ]},
{ id:"tofuroerbak", type:"diner", serves:2, time:25, t:["vega","aziatisch",1],
  name:"Roerbak met tofu, broccoli en pindasaus", short:"Snelle vegetarische wok met mie.",
  items:[["mie",125],["tofu",375],["maizena",1],["olie",1.5],["broccoli",300],["paprika",1],["pindakaas",2],["sojasaus",2],["honing",0.5],["limoen",0.5],["sambal",0.5],["water",80]],
  steps:[
    "Breng een pan water aan de kook. Dep {tofu} droog, snijd in blokjes en hussel met {maizena}.",
    ["Kook {mie} zo lang als op de verpakking staat (meestal 4 minuten). Giet af.",4],
    ["Verhit {olie:1} in een wok. Bak de tofu 8 minuten tot hij goudbruin is. Schep op een bord.",8],
    ["Bak {broccoli} (kleine roosjes) en {paprika} (reepjes) in {olie:0.5} 4 minuten.",4],
    "Saus: roer {pindakaas}, {sojasaus}, {honing}, het sap van {limoen}, {sambal} en {water} (heet) glad.",
    "Doe mie, tofu en saus bij de groente en schep 1 minuut om."
  ]},
{ id:"spinazieomeletwrap", type:"diner", serves:2, time:20, t:["vega","frans",0],
  name:"Omeletwraps met spinazie, champignons en kaas", short:"Snel vegetarisch avondeten in 20 minuten.",
  items:[["ei",6],["melk",50],["zout",0.5],["peper",0.25],["olie",1],["champignons",200],["spinazie",200],["kaas",60],["wraps",2],["cherrytomaat",200],["sla",75]],
  steps:[
    "Klop {ei} los met {melk}, {zout:0.25} en {peper}.",
    ["Bak {champignons} (plakjes) in {olie:0.5} 4 minuten. Doe {spinazie} erbij tot hij slinkt. Bestrooi met {zout:0.25} en schep op een bord.",5],
    ["Bak in {olie:0.5} de helft van het ei 3 minuten tot een omelet. Leg een van de {wraps} erop, druk aan en draai om. Bak 1 minuut. Herhaal met de rest.",8],
    "Verdeel groente en {kaas} over de wraps en rol op. Eet met {cherrytomaat} en {sla}."
  ]},
{ id:"pastaboursin", type:"diner", serves:2, time:25, t:["vega","italiaans",0],
  name:"Pasta met hüttenkäse, tomaat en spinazie", short:"Romige vegetarische pasta vol eiwit.",
  items:[["zout",1.25],["pasta",180],["olie",0.5],["knoflook",2],["cherrytomaat",250],["spinazie",200],["huttenkase",200],["parmezaan",30],["peper",0.25],["basilicum",10]],
  steps:[
    ...PASTA({s:1, w:1}),
    ["Bak {knoflook} (fijn) en {cherrytomaat} (gehalveerd) in {olie} 4 minuten. Doe {spinazie} erbij tot hij slinkt.",5],
    "Zet het vuur uit. Roer {huttenkase}, {parmezaan}, {zout:0.25}, {peper} en 4 el kookwater erdoor. Meng met de pasta en strooi {basilicum} erover."
  ]},
{ id:"bonenstoofei", type:"diner", serves:2, time:30, t:["vega","spaans",1],
  name:"Witte bonen in tomatensaus met eieren en brood", short:"Spaanse stoof met gerookte paprika. Vegetarisch.",
  items:[["olie",1],["ui",1],["knoflook",2],["paprika",1],["paprikapoeder",2],["chili",0.25],["tomblokjes",400],["wittebonen",480],["spinazie",150],["zout",0.5],["ei",4],["brood",3],["peterselie",15]],
  steps:[
    "Snijd {ui}, {knoflook} en {paprika} fijn. Spoel {wittebonen} af.",
    ["Verhit {olie} in een koekenpan met deksel. Bak ui, knoflook en paprika 5 minuten. Roer {paprikapoeder} en {chili} erdoor.",5],
    ["Doe {tomblokjes}, bonen en {zout:0.25} erbij en laat 8 minuten pruttelen. Roer {spinazie} erdoor.",8],
    ["Maak 4 kuiltjes, breek er {ei} in en bestrooi met {zout:0.25}. Deksel erop en laat 6 minuten garen.",6],
    "Strooi {peterselie} erover en eet met {brood}."
  ]},
{ id:"vegachili", type:"diner", serves:2, time:35, t:["vega","mexicaans",1],
  name:"Linzenchili met rijst en avocado", short:"Rode linzen maken deze chili dik en vullend.",
  items:[["rijst",120],["water",680],["zout",0.75],["olie",1],["ui",1],["paprika",1],["knoflook",2],["komijn",1],["paprikapoeder",1.5],["chili",0.25],["linzen",100],["tomblokjes",400],["kidney",250],["groentebouillon",0.5],["avocado",1],["kwark",150]],
  steps:[
    ...RICE({w:180,s:0.25}),
    "Snijd {ui}, {paprika} en {knoflook} fijn. Spoel {linzen} af.",
    ["Verhit {olie} in een pan. Bak de groente 5 minuten. Roer {komijn}, {paprikapoeder} en {chili} erdoor.",5],
    ["Doe linzen, {tomblokjes}, {kidney} (afgespoeld), {water:500}, {groentebouillon} en {zout:0.5} erbij. Laat 18 minuten zachtjes koken, af en toe roeren.",18],
    "Eet met de rijst, {avocado} in plakjes en {kwark}."
  ]},
{ id:"zalmbroccolioven", type:"diner", serves:2, time:30, t:["vis","hollands",0],
  name:"Zalm met broccoli en krieltjes van de bakplaat", short:"Simpel en gezond: alles in één keer de oven in.",
  items:[["krieltjes",500],["broccoli",400],["olie",1.5],["zout",0.75],["peper",0.25],["zalm",250],["citroen",1],["dille",0.5],["kwark",100],["mosterd",1]],
  steps:[
    "Zet de oven aan op 220 °C (hetelucht 200 °C). Leg bakpapier op een bakplaat.",
    ["Halveer {krieltjes}, hussel met {olie:1} en {zout:0.25} en bak 15 minuten.",15],
    "Snijd {broccoli} in roosjes en hussel met {olie:0.5} en {zout:0.25}. Bestrooi {zalm} met {zout:0.25}, {peper} en {dille} en leg er plakjes {citroen:0.5} op.",
    ["Leg broccoli en zalm bij de krieltjes en bak alles nog 12 minuten. Zalm is gaar als hij niet meer glazig is.",12],
    "Saus: meng {kwark}, {mosterd} en het sap van {citroen:0.5}."
  ]},
{ id:"kabeljauwcurry2", type:"diner", serves:2, time:25, t:["vis","aziatisch",1],
  name:"Witvis in groene curry met sperziebonen", short:"Snel Thais: vis gaart in de curry.",
  items:[["rijst",150],["water",225],["zout",0.25],["olie",0.5],["groenecurry",1.5],["kokosmelk",400],["sperziebonen",250],["koolvis",350],["vissaus",1],["limoen",0.5],["basilicum",10]],
  steps:[
    ...RICE({w:225,s:0.25}),
    ["Bak {groenecurry} 1 minuut in {olie}. Giet {kokosmelk} erbij en doe {sperziebonen} (gehalveerd) erin. Laat 6 minuten koken.",7],
    ["Leg {koolvis} in stukken erin, deksel erop en laat 6 minuten zachtjes garen.",6],
    "Vis is gaar als hij wit is en uit elkaar valt. Roer voorzichtig {vissaus} en het sap van {limoen} erdoor. Strooi {basilicum} erover."
  ]},
{ id:"tonijnquinoa", type:"diner", serves:2, time:25, t:["vis","grieks",0],
  name:"Quinoasalade met tonijn, ei en olijven", short:"Koude maaltijdsalade, ook lekker voor de volgende dag.",
  items:[["quinoa",130],["water",260],["zout",0.5],["ei",2],["tonijn",224],["cherrytomaat",250],["komkommer",0.5],["rodeui",0.5],["olijven",50],["feta",50],["olie",1],["citroen",1],["oregano",0.5]],
  steps:[
    ["Spoel {quinoa} af en kook met {water} en {zout:0.25} 15 minuten met deksel. Laat afkoelen.",15],
    EGGS({}),
    "Snijd {cherrytomaat}, {komkommer} en {rodeui} klein. Laat {tonijn} uitlekken.",
    "Dressing: {olie}, het sap van {citroen}, {oregano} en {zout:0.25}.",
    "Meng alles met {olijven} en verkruimel {feta} erover. Leg de gehalveerde eieren erop."
  ]},
{ id:"garnalenspies", type:"diner", serves:2, time:30, t:["vis","aziatisch",1],
  name:"Sateh van garnalen met pindasaus en rijst", short:"Garnalen in een zoete marinade, met warme pindasaus.",
  items:[["rijst",150],["water",325],["zout",0.25],["garnalen",300],["ketjap",1],["knoflook",1],["olie",0.5],["pindakaas",2],["sambal",0.5],["sojasaus",1],["limoen",0.5],["komkommer",0.5],["sperziebonen",250]],
  steps:[
    ...RICE({w:225,s:0.25}),
    "Meng {garnalen} met {ketjap} en {knoflook} (geperst).",
    ["Kook {sperziebonen} 7 minuten. Giet af.",7],
    ["Bak de garnalen in {olie} 3 minuten tot ze roze zijn.",3],
    ["Pindasaus: verwarm {pindakaas}, {sambal}, {sojasaus}, het sap van {limoen} en {water:100} in een steelpan 2 minuten.",2],
    "Eet met rijst, bonen en {komkommer} in plakjes."
  ]},
{ id:"vistaco", type:"diner", serves:2, time:25, t:["vis","mexicaans",1],
  name:"Vistaco's met witvis, rode kool en limoensaus", short:"Knapperige rode kool en zachte vis in een wrap.",
  items:[["koolvis",350],["paprikapoeder",1],["komijn",0.5],["zout",0.5],["olie",1],["rodekool",150],["limoen",1],["kwark",100],["chili",0.25],["wraps",4],["avocado",1],["mais",140]],
  steps:[
    "Bestrooi {koolvis} met {paprikapoeder}, {komijn} en {zout:0.25}.",
    ["Bak de vis in {olie} 3 minuten per kant. Vis is gaar als hij wit is en uit elkaar valt.",6],
    "Meng {rodekool} met het sap van een halve {limoen} en {zout:0.25}. Meng {kwark} met {chili} en het sap van de rest van de limoen.",
    ["Verwarm {wraps} 30 seconden per stuk in een droge pan.",2],
    "Vul met vis in stukken, kool, {mais} (afgespoeld), {avocado} en saus."
  ]},
{ id:"zalmteriyakinoedel", type:"diner", serves:2, time:25, t:["vis","japans",0],
  name:"Teriyaki-zalm met mie en paksoi", short:"Glanzende zalm met noedels in 25 minuten.",
  items:[["mie",125],["zalm",250],["sojasaus",2],["honing",1],["gember",0.5],["knoflook",1],["maizena",0.5],["olie",0.5],["paksoi",300],["sesam",1],["lenteui",2]],
  steps:[
    "Breng een pan water aan de kook. Saus: meng {sojasaus}, {honing}, {gember}, {knoflook} (geperst), {maizena} en 3 el water.",
    ["Kook {mie} 4 minuten. Doe {paksoi} (in stukken) de laatste minuut erbij. Giet af.",4],
    ["Bak {zalm} in {olie} 4 minuten op het vel en 2 minuten op de andere kant.",6],
    "Giet de saus erbij en laat 1 minuut borrelen terwijl je de zalm ermee bedruipt.",
    "Verdeel mie en paksoi over 2 kommen, leg de zalm erop en strooi {sesam} en {lenteui} erover."
  ]},
{ id:"vissticksoven", type:"diner", serves:2, time:35, t:["vis","hollands",0],
  name:"Zelfgemaakte vissticks met erwtenpuree", short:"Krokant van buiten, zacht van binnen. Kinderen vinden het ook lekker.",
  items:[["aardappel",500],["doperwten",200],["zout",0.75],["melk",75],["koolvis",350],["ei",1],["paneermeel",50],["paprikapoeder",0.5],["olie",1],["kwark",75],["citroen",0.5],["dille",0.5]],
  steps:[
    "Zet de oven aan op 220 °C (hetelucht 200 °C). Leg bakpapier op een bakplaat.",
    "Snijd {koolvis} in vingerdikke repen en bestrooi met {zout:0.25}. Klop {ei} los. Meng {paneermeel} met {paprikapoeder}.",
    ["Haal de repen door ei en paneermeel. Leg ze op de bakplaat, druppel {olie} erover en bak 15 minuten, na 8 minuten draaien.",15],
    ["Kook ondertussen {aardappel} (geschild, in vieren) 18 minuten in water met {zout:0.25}. Doe {doperwten} de laatste 4 minuten erbij.",18],
    "Stamp aardappels en erwten met {melk} en {zout:0.25}. Saus: {kwark} met het sap van {citroen} en {dille}."
  ]},
{ id:"kabeljauwchorizo", type:"diner", serves:2, time:30, t:["vis","spaans",0],
  name:"Kabeljauw met witte bonen en paprika", short:"Spaanse stoofpan met vis en bonen.",
  items:[["olie",1],["ui",1],["knoflook",2],["paprika",1],["paprikapoeder",2],["tomblokjes",400],["wittebonen",240],["spinazie",150],["kabeljauw",350],["zout",0.75],["peterselie",15],["brood",2]],
  steps:[
    "Snijd {ui}, {knoflook} en {paprika} fijn.",
    ["Bak de groente in {olie} 5 minuten. Roer {paprikapoeder} erdoor. Doe {tomblokjes}, {wittebonen} (afgespoeld) en {zout:0.5} erbij en laat 5 minuten pruttelen.",10],
    "Roer {spinazie} erdoor. Leg {kabeljauw} in stukken op de saus en bestrooi met {zout:0.25}.",
    ["Deksel erop en laat 7 minuten zachtjes garen. Vis is gaar als hij wit is en uit elkaar valt.",7],
    "Strooi {peterselie} erover en eet met {brood}."
  ]},
{ id:"garnalenorzo", type:"diner", serves:2, time:25, t:["vis","grieks",0],
  name:"Orzo met garnalen, tomaat en feta", short:"Griekse one-pot met citroen en dille.",
  items:[["olie",1],["ui",1],["knoflook",2],["orzo",160],["tomblokjes",400],["water",350],["groentebouillon",0.5],["garnalen",250],["spinazie",100],["feta",75],["citroen",0.5],["dille",0.5],["zout",0.25]],
  steps:[
    ["Bak {ui} en {knoflook} (fijn) 3 minuten in {olie}. Doe {orzo} erbij en roer 1 minuut.",4],
    ["Doe {tomblokjes}, {water}, {groentebouillon} en {zout} erbij. Laat 10 minuten zachtjes koken met deksel, af en toe roeren.",10],
    ["Doe {garnalen} en {spinazie} erbij en laat 3 minuten garen tot de garnalen roze zijn.",3],
    "Verkruimel {feta} erover, knijp {citroen} erboven uit en strooi {dille} erover."
  ]},
{ id:"zalmcurry", type:"diner", serves:2, time:30, t:["vis","indiaas",1],
  name:"Zalm-tikka met spinazierijst", short:"Kruidige zalm uit de oven met groene rijst.",
  items:[["rijst",150],["water",225],["zout",0.75],["zalm",250],["kwark",150],["garam",1],["paprikapoeder",1],["kurkuma",0.25],["knoflook",1],["citroen",0.5],["spinazie",200],["komkommer",0.5]],
  steps:[
    "Zet de oven aan op 220 °C (hetelucht 200 °C).",
    ...RICE({w:225,s:0.25}),
    "Meng {kwark:50} met {garam}, {paprikapoeder}, {kurkuma}, {knoflook} (geperst) en {zout:0.25}. Smeer over {zalm}.",
    ["Bak de zalm 12 minuten op bakpapier. Gaar als hij niet meer glazig is.",12],
    "Roer {spinazie} door de hete rijst tot hij slinkt.",
    "Raita: rasp {komkommer}, knijp uit en meng met {kwark:100}, het sap van {citroen} en {zout:0.25}."
  ]},
{ id:"tofuburrito", type:"diner", serves:2, time:25, t:["vega","mexicaans",1],
  name:"Burrito's met gekruide tofu en bonen", short:"Vegetarisch, met tofu als 'gehakt'.",
  items:[["tofu",375],["olie",1],["komijn",1],["paprikapoeder",1.5],["chili",0.25],["sojasaus",1],["ui",1],["paprika",1],["zwartebonen",240],["wraps",4],["kaas",40],["sla",50],["kwark",100],["tomaat",1]],
  steps:[
    "Dep {tofu} droog en verkruimel met je handen. Snijd {ui} en {paprika} fijn.",
    ["Bak tofu in {olie} 6 minuten op hoog vuur tot hij goudbruin is. Doe ui en paprika erbij en bak 4 minuten.",10],
    ["Roer {komijn}, {paprikapoeder}, {chili}, {sojasaus} en {zwartebonen} (afgespoeld) erdoor en bak 2 minuten.",2],
    ["Verwarm {wraps} 30 seconden per stuk.",2],
    "Vul met tofu, {sla}, {tomaat}, {kaas} en {kwark} en rol op."
  ]},
{ id:"groentelasagne", type:"diner", serves:2, time:55, t:["vega","italiaans",0],
  name:"Groentelasagne met courgette en hüttenkäse", short:"Vegetarische lasagne met hüttenkäse.",
  items:[["olie",1],["ui",1],["knoflook",2],["courgette",1],["paprika",1],["champignons",200],["passata",500],["italiaans",1],["zout",0.5],["huttenkase",200],["ei",1],["spinazie",150],["lasagne",125],["mozzarella",125]],
  steps:[
    "Zet de oven aan op 200 °C (hetelucht 180 °C). Snijd {ui}, {knoflook}, {courgette}, {paprika} en {champignons} klein.",
    ["Bak de groente in {olie} 8 minuten. Roer {passata}, {italiaans} en {zout:0.25} erdoor en laat 5 minuten pruttelen.",13],
    "Witte laag: meng {huttenkase}, {ei}, {spinazie} (fijngesneden) en {zout:0.25}.",
    "Bouw in een ovenschaal: saus, {lasagne}, witte laag. Herhaal en eindig met saus. Leg {mozzarella} in stukjes erop.",
    ["Bak 30 minuten. Prik met een mes: gaat het makkelijk door de bladen, dan is hij klaar.",30]
  ]},
{ id:"zoeteaardappelcurry", type:"diner", serves:2, time:35, t:["vega","indiaas",1],
  name:"Zoete aardappel-spinaziecurry met kikkererwten", short:"Romige vegetarische curry met kokos.",
  items:[["rijst",120],["water",180],["zout",0.75],["olie",1],["ui",1],["knoflook",2],["gember",1],["kerrie",2],["zoeteaardappel",300],["kikkererwten",480],["kokosmelk",200],["tomblokjes",200],["spinazie",150],["kwark",150]],
  steps:[
    ...RICE({w:180,s:0.25}),
    "Snijd {ui} en {knoflook} fijn. Schil {zoeteaardappel} en snijd in blokjes van 1,5 cm. Spoel {kikkererwten} af.",
    ["Bak ui in {olie} 3 minuten. Doe knoflook, {gember} en {kerrie} erbij en bak 1 minuut.",4],
    ["Doe zoete aardappel, kikkererwten, {kokosmelk}, {tomblokjes} en {zout:0.5} erbij. Deksel erop en laat 15 minuten zachtjes koken.",15],
    "Roer {spinazie} erdoor tot hij slinkt. Eet met de rijst en {kwark}."
  ]},
{ id:"eiernoedels", type:"diner", serves:2, time:20, t:["vega","aziatisch",1],
  name:"Mie met ei, edamame en sesam", short:"Klaar in 20 minuten, vegetarisch en vol eiwit.",
  items:[["mie",150],["edamame",200],["ei",4],["olie",1],["knoflook",2],["wokgroente",400],["sojasaus",2],["ketjap",1],["sambal",0.5],["sesam",1],["lenteui",2]],
  steps:[
    "Breng een pan water aan de kook.",
    ["Kook {mie} en {edamame} samen 4 minuten. Giet af.",4],
    ["Klop {ei} los. Bak in {olie:0.5} in een wok al roerend 2 minuten tot roerei. Schep op een bord.",2],
    ["Bak {knoflook} (fijn) en {wokgroente} in {olie:0.5} 4 minuten op hoog vuur.",4],
    "Doe mie, edamame, ei, {sojasaus}, {ketjap} en {sambal} erbij en schep 1 minuut om. Strooi {sesam} en {lenteui} erover."
  ]},
{ id:"risottopaddestoel", type:"diner", serves:2, time:40, t:["vega","italiaans",0],
  name:"Champignonrisotto met witte bonen en Parmezaan", short:"Romige vegetarische risotto met extra eiwit.",
  items:[["groentebouillon",1],["water",800],["ui",1],["knoflook",2],["champignons",300],["olie",1],["tijm",0.5],["risottorijst",160],["wittebonen",240],["spinazie",100],["parmezaan",40],["peper",0.25]],
  steps:[
    "Los {groentebouillon} op in {water} (heet) en houd warm. Snijd {ui} en {knoflook} fijn en {champignons} in plakjes.",
    ["Bak ui, knoflook, champignons en {tijm} 5 minuten in {olie}. Doe {risottorijst} erbij en roer 1 minuut.",6],
    ["Giet een soeplepel bouillon erbij. Roer tot het bijna weg is, dan de volgende lepel. Zo 18 tot 20 minuten door tot de rijst zacht is.",19],
    "Roer {wittebonen} (afgespoeld), {spinazie}, {parmezaan} en {peper} erdoor. Deksel erop en 2 minuten laten staan."
  ]},
{ id:"spinaziequiche", type:"diner", serves:2, time:45, t:["vega","frans",0],
  name:"Hartige taart zonder bodem met spinazie en feta", short:"Vegetarisch, met een salade en brood.",
  items:[["olie",0.5],["ui",1],["spinazie",300],["ei",5],["melk",100],["feta",100],["nootmuskaat",0.25],["peper",0.25],["cherrytomaat",150],["sla",100],["brood",2]],
  steps:[
    "Zet de oven aan op 190 °C (hetelucht 170 °C). Vet een ovenschaal of taartvorm (±22 cm) in met een beetje van de {olie}.",
    ["Bak {ui} (fijn) 3 minuten in de rest van de olie. Laat {spinazie} erin slinken en knijp het vocht eruit.",5],
    "Klop {ei} met {melk}, {nootmuskaat} en {peper} los. Roer spinazie en {feta} (verkruimeld) erdoor. Giet in de vorm en leg {cherrytomaat} (gehalveerd) erop.",
    ["Bak 30 minuten tot de taart in het midden stevig is.",30],
    "Eet met {sla} en {brood}."
  ]},
{ id:"makreelbiet", type:"diner", serves:2, time:25, t:["vis","hollands",0],
  name:"Gerookte zalm met bietjessalade en krieltjes", short:"Frisse, koude schotel met een mosterd-dillesaus.",
  items:[["krieltjes",500],["zout",0.5],["bietjes",250],["appel",1],["rodeui",0.5],["azijn",1],["gerooktezalm",200],["kwark",150],["mosterd",2],["dille",0.5],["sla",75]],
  steps:[
    ["Halveer {krieltjes} en kook 15 minuten in water met {zout:0.25}. Giet af.",15],
    "Snijd {bietjes} en {appel} in blokjes en {rodeui} heel fijn. Meng met {azijn} en {zout:0.25}.",
    "Saus: meng {kwark}, {mosterd} en {dille}.",
    "Verdeel {sla}, krieltjes, bietjessalade en {gerooktezalm} over 2 borden. Schep de saus erbij."
  ]},
{ id:"tonijnwraps", type:"diner", serves:2, time:15, t:["vis","amerikaans",0],
  name:"Warme tonijn-melts in een wrap", short:"Tonijn met kaas, krokant gebakken. Klaar in 15 minuten.",
  items:[["tonijn",224],["kwark",75],["mosterd",1],["rodeui",0.5],["mais",140],["peper",0.25],["wraps",4],["kaas",60],["sla",100],["tomaat",2],["komkommer",0.5]],
  steps:[
    "Meng uitgelekte {tonijn} met {kwark}, {mosterd}, {rodeui} (heel fijn), {mais} (afgespoeld) en {peper}.",
    "Verdeel over de helft van de {wraps}, strooi {kaas} erover en vouw dicht.",
    ["Bak ze 2 voor 2 in een droge koekenpan, 3 minuten per kant.",12],
    "Eet met {sla}, {tomaat} en {komkommer} in stukjes."
  ]},
{ id:"kikkerpasta", type:"diner", serves:2, time:25, t:["vega","italiaans",1],
  name:"Pasta arrabbiata met kikkererwten en mozzarella", short:"Pittig, vegetarisch en lekker vullend.",
  items:[["zout",1.25],["pasta",160],["olie",0.5],["knoflook",3],["chili",0.25],["tompuree",35],["tomblokjes",400],["kikkererwten",240],["italiaans",1],["mozzarella",125],["basilicum",10]],
  steps:[
    ...PASTA({s:1}),
    ["Bak {knoflook} (plakjes) en {chili} 1 minuut in {olie}. Roer {tompuree} erdoor.",1],
    ["Doe {tomblokjes}, {kikkererwten} (afgespoeld), {italiaans} en {zout:0.25} erbij en laat 10 minuten pruttelen.",10],
    "Meng met de pasta. Scheur {mozzarella} erover en strooi {basilicum} erop."
  ]},
{ id:"bloemkoolsteak", type:"diner", serves:2, time:40, t:["vega","midden-oosten",0],
  name:"Geroosterde bloemkool met linzen en knoflooksaus", short:"Vegetarisch feestje: geroosterde bloemkool met linzen.",
  items:[["bloemkool",600],["olie",1.5],["komijn",1],["paprikapoeder",1],["zout",0.75],["linzen",120],["groentebouillon",0.5],["water",350],["kwark",150],["pindakaas",1],["citroen",1],["knoflook",1],["peterselie",15],["feta",50]],
  steps:[
    "Zet de oven aan op 220 °C (hetelucht 200 °C). Leg bakpapier op een bakplaat.",
    ["Snijd {bloemkool} in dikke plakken en roosjes. Hussel met {olie:1}, {komijn}, {paprikapoeder} en {zout:0.25}. Rooster 30 minuten.",30],
    ["Kook ondertussen {linzen} (afgespoeld) 12 minuten in {water} met {groentebouillon} tot ze zacht maar nog heel zijn. Giet af.",12],
    "Meng de linzen met {olie:0.5}, het sap van een halve {citroen}, {peterselie} en {zout:0.25}.",
    "Saus: meng {kwark}, {pindakaas}, {knoflook} (geperst), het sap van de rest van de citroen en {zout:0.25}.",
    "Leg de bloemkool op de linzen, schep de saus erover en verkruimel {feta} erop."
  ]}
