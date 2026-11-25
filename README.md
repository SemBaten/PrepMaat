# Prepmaat

Gratis meal-prep web-app: kies wat je deze week eet, krijg een boodschappenlijst in winkelvolgorde en kook stap voor stap met precieze hoeveelheden.

**Open de app:** https://sembaten.github.io/PrepMaat/
Op de iPhone: open de link in Safari, tik op Delen en kies "Zet op beginscherm".

## Hoe het werkt
- `src/app.html` is de broncode. Na een wijziging: `python3 src/build.py`. Dat maakt `index.html` opnieuw.
- Verhoog bij elke nieuwe versie `CACHE` in `sw.js`, anders blijven telefoons de oude versie tonen.
- Gedeelde sterren, foto's en feedback lopen via Firebase (gratis Spark-plan). De beveiligingsregels staan in `firestore.rules`.
- Profiel, gewicht, planning en wat iemand eet blijven alleen op de eigen telefoon (localStorage).
