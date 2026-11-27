// Controleert alle recepten in index.html op fouten en vreemde hoeveelheden.
// Gebruik: node tools/check-recipes.js   (na python3 src/build.py)
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + path.resolve(__dirname, '..', 'index.html')); await p.waitForTimeout(300);
  const out = await p.evaluate(() => {
    const issues = [];
    const add = (r, sev, msg) => issues.push(`${sev} ${r.id}: ${msg}`);
    const ids = new Set(), names = new Set(), sigs = {};
    const CUIS = new Set(CUISINES.map(c => c[0]));
    const per = (r, k) => { const it = r.items.find(x => x[0] === k); return it ? it[1] / r.serves : 0; };
    const sumG = (r, keys) => keys.reduce((a, k) => a + grams(k, (r.items.find(x => x[0] === k) || [0, 0])[1]), 0) / r.serves;
    const MEAT = ["kipfilet","kipdij","gehakt","biefstuk","varkenshaas","varkensreepjes","runderreepjes","stoofvlees","zalm","kabeljauw","garnalen","tonijn","kalkoen","kipgehakt","tofu"];
    const STARCH_RICE = ["rijst","risottorijst"], STARCH_PASTA = ["pasta","spaghetti","mie","couscous","bulgur","orzo","rijstnoedels","lasagne"];
    for (const r of R){
      if (ids.has(r.id)) add(r, "FOUT", "dubbele id"); ids.add(r.id);
      if (names.has(r.name)) add(r, "FOUT", "dubbele naam"); names.add(r.name);
      const sig = r.type + ":" + r.items.map(x => x[0]).filter(k => !["zout","peper","olie","water"].includes(k)).sort().join(",");
      if (sigs[sig]) add(r, "LET OP", "zelfde ingrediënten als " + sigs[sig]); else sigs[sig] = r.id;
      const want = { lunch: 5, diner: 2, ontbijt: 1 }[r.type];
      if (r.serves !== want) add(r, "FOUT", `serves ${r.serves}, verwacht ${want}`);
      if (!r.meat || !CUIS.has(r.cuisine) || ![0,1,2].includes(r.spice)) add(r, "FOUT", "labels ontbreken of onbekende keuken: " + [r.meat, r.cuisine, r.spice]);
      if (r.type === "lunch" && !["koud","magnetron","koud of warm"].includes(r.heat)) add(r, "FOUT", "heat ontbreekt: " + r.heat);
      for (const [k] of r.items) if (!DB[k]) add(r, "FOUT", "onbekend ingrediënt " + k);
      if (new Set(r.items.map(x => x[0])).size !== r.items.length) add(r, "FOUT", "ingrediënt dubbel in lijst");
      // dieetlabel klopt met ingrediënten
      const hasC = c => r.items.some(([k]) => DB[k] && DB[k].c === c);
      if (["vega","geen"].includes(r.meat) && (hasC("vlees") || hasC("vis") || r.items.some(([k]) => ["bouillon","runderbouillon","vissaus","oestersaus"].includes(k)))) add(r, "FOUT", "vegetarisch label maar vlees, vis of dierlijke bouillon/saus");
      if (r.meat === "vis" && hasC("vlees")) add(r, "FOUT", "vis-label maar vlees in de lijst");
      if (["kip","rund","varken"].includes(r.meat) && !hasC("vlees")) add(r, "FOUT", "vleeslabel maar geen vlees");
      if (r.meat === "vis" && !hasC("vis")) add(r, "FOUT", "vis-label maar geen vis");
      // placeholders
      for (const s of allSteps(r, 1)){ const t = renderText(r, s.t, 1); if (/\{/.test(t)) add(r, "FOUT", "placeholder niet opgelost: " + t.slice(0, 60)); }
      const part = {}, full = new Set(), used = new Set();
      for (const s of r.steps){ const t = Array.isArray(s) ? s[0] : s;
        for (const m of t.matchAll(/\{(\w+):([\d.]+)\}/g)){ part[m[1]] = (part[m[1]] || 0) + parseFloat(m[2]); used.add(m[1]); }
        for (const m of t.matchAll(/\{(\w+)\}/g)){ full.add(m[1]); used.add(m[1]); } }
      const tot = Object.fromEntries(r.items);
      for (const k in part) if (!full.has(k) && Math.abs(part[k] - tot[k]) > 0.01) add(r, "FOUT", `deelhoeveelheden ${k}: ${part[k]} ≠ ${tot[k]}`);
      for (const k in part) if (full.has(k)) add(r, "LET OP", `${k} zowel heel als in delen genoemd`);
      for (const [k] of r.items) if (!used.has(k)) add(r, "FOUT", "ingrediënt nergens in de stappen: " + k);
      // voeding per portie
      const m = macros(r);
      const kmin = { lunch: 300, diner: 350, ontbijt: 250 }[r.type], kmax = { lunch: 950, diner: 1050, ontbijt: 650 }[r.type];
      if (m.kr < kmin || m.kr > kmax) add(r, "LET OP", `kcal per portie ${Math.round(m.kr)}`);
      if (m.pr < (r.type === "ontbijt" ? 20 : 25)) add(r, "LET OP", `weinig eiwit: ${Math.round(m.pr)} g`);
      // zout, olie, pit per portie
      // zout in kookwater van pasta/aardappels gaat grotendeels weg met het water: tel 20%
      let kookZout = 0;
      for (const s of r.steps){ const t = Array.isArray(s) ? s[0] : s;
        if (/water|aardappel/.test(t) && /kook|zet op/i.test(t) && !/rijst|bouillon|saus|passata|room/.test(t)) for (const m of t.matchAll(/\{zout:([\d.]+)\}/g)) kookZout += parseFloat(m[1]); }
      const zout = per(r, "zout") - kookZout * 0.8 / r.serves; if (zout > 0.5) add(r, "LET OP", `veel zout: ${zout.toFixed(2)} tl per portie`);
      const salty = per(r, "sojasaus") + per(r, "vissaus") + per(r, "ketjap") * 0.5 + per(r, "oestersaus") * 0.5;
      if (zout > 0.3 && salty >= 1) add(r, "LET OP", `zout + zoute sauzen (${zout.toFixed(2)} tl + ${salty.toFixed(1)} el)`);
      if (salty > 2.5) add(r, "LET OP", `veel zoute saus: ${salty.toFixed(1)} el per portie`);
      const bouillon = per(r, "bouillon") + per(r, "runderbouillon") + per(r, "groentebouillon");
      if (bouillon > 0.6) add(r, "LET OP", `veel bouillonblokjes: ${bouillon.toFixed(2)} per portie`);
      const olie = per(r, "olie"); if (olie > 1.25) add(r, "LET OP", `veel olie: ${olie.toFixed(2)} el per portie`);
      const chili = per(r, "chili") + per(r, "cayenne") * 2 + per(r, "sambal") * 0.5; if (chili > 0.31) add(r, "LET OP", `veel pit: ${chili.toFixed(2)} tl chili per portie`);
      if (r.spice === 0 && (per(r, "chili") + per(r, "cayenne")) > 0.13) add(r, "LET OP", "chili in een gerecht dat als mild staat");
      // zetmeel en vlees per portie
      const rice = sumG(r, STARCH_RICE), pasta = sumG(r, STARCH_PASTA);
      const LIGHT = ["thaisoep","garnalenwok"]; // bewust lichte gerechten met veel groente
      if (rice && !LIGHT.includes(r.id) && (rice < 40 || rice > 100)) add(r, "LET OP", `rijst per portie ${Math.round(rice)} g`);
      if (pasta && !LIGHT.includes(r.id) && (pasta < 40 || pasta > 120)) add(r, "LET OP", `pasta/mie per portie ${Math.round(pasta)} g`);
      const meat = sumG(r, MEAT); if (meat > 300) add(r, "LET OP", `veel vlees/vis per portie: ${Math.round(meat)} g`);
      // rijst: water 1,5× rijst
      if (tot.rijst && r.steps.some(s => (Array.isArray(s) ? s[0] : s).includes("Kook de rijst. Spoel"))){
        const t = r.steps.map(s => Array.isArray(s) ? s[0] : s).join(" "); const w = t.match(/Spoel \{rijst\}[^.]*?\{water:([\d.]+)\}/);
        if (w && Math.abs(parseFloat(w[1]) - tot.rijst * 1.5) > 1) add(r, "FOUT", `rijstwater ${w[1]} ml bij ${tot.rijst} g rijst (verwacht ${tot.rijst * 1.5})`);
      }
      // veiligheid en duidelijkheid
      const all = r.steps.map(s => Array.isArray(s) ? s[0] : s).join(" ");
      if (r.items.some(([k]) => ["kipfilet","kipdij","kipgehakt","kalkoen"].includes(k)) && !/gaar|wit is|helemaal wit|kip wit|geen roze|niet meer roze/i.test(all)) add(r, "LET OP", "kip zonder gaarcheck");
      if (/(^|[^a-z])oven/i.test(all) && !/°C|graden/.test(all) && !/airfryer/i.test(all)) add(r, "LET OP", "oven zonder temperatuur");
      if (/naar smaak|snufje|scheutje|beetje (zout|peper)/i.test(all)) add(r, "FOUT", "vage hoeveelheid in tekst");
      const timed = r.steps.filter(Array.isArray).reduce((a, s) => a + s[1], 0);
      const parallel = /ondertussen|tegelijk|intussen/i.test(all);
      if (timed > r.time * (parallel ? 1.6 : 1.05)) add(r, "LET OP", `timers samen ${timed} min, maar recept zegt ${r.time} min`);
      if (r.time < timed * 0.5 && timed > 10) add(r, "LET OP", "tijd lijkt te kort");
      // extra controles (v44)
      if (r.steps.length < 2 || (r.type !== "ontbijt" && r.steps.length < 3)) add(r, "LET OP", "erg weinig stappen");
      for (const st of r.steps){ const t = Array.isArray(st) ? st[0] : st, mn = Array.isArray(st) ? st[1] : null;
        if (mn !== null && (mn <= 0 || mn > 240)) add(r, "FOUT", `vreemde timer: ${mn} min`);
        if (t.length > 420) add(r, "LET OP", `lange stap (${t.length} tekens), lastig te lezen tijdens het koken`);
        for (const m of t.matchAll(/(\d+) ?°C/g)) if (+m[1] < 140 || +m[1] > 250) add(r, "LET OP", `oventemperatuur ${m[1]} °C`); }
      const meatG = r.items.filter(([k]) => DB[k] && ["vlees","vis"].includes(DB[k].c)).reduce((a, [k, q]) => a + grams(k, q), 0) / r.serves; if (r.type !== "ontbijt" && ["kip","rund","varken","vis"].includes(r.meat) && meatG < 45) add(r, "LET OP", `weinig vlees/vis per portie: ${Math.round(meatG)} g`);
      const veg = r.items.filter(([k]) => DB[k] && DB[k].c === "groente" && !["aardappel","krieltjes","zoeteaardappel"].includes(k)).reduce((a, [k, q]) => a + grams(k, q), 0) / r.serves;
      if (r.type !== "ontbijt" && veg > 550) add(r, "LET OP", `heel veel groente per portie: ${Math.round(veg)} g`);
      if (typeof costOf === "function" && costOf(r) > 6) add(r, "LET OP", `duur: ±€${costOf(r).toFixed(2)} per portie`);
      if (typeof cookSteps === "function"){ const keep = S.equip; S.equip = { oven: false, airfryer: true }; if (equipFit(r) === "air") for (const x of cookSteps(r)) if (/bakplaat|\boven\b/i.test(x.t) && !/^Aangepast/.test(x.t)) add(r, "LET OP", "airfryer-stap noemt nog oven/bakplaat: " + x.t.slice(0, 60)); S.equip = keep; }
    }
    return { n: R.length, issues };
  });
  console.log(out.n + " recepten");
  console.log(out.issues.length ? out.issues.join("\n") : "Geen problemen gevonden");
  if (errs.length) console.log("Paginafouten:", errs);
  await b.close();
})();
