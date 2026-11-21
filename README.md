# gespreksopeners

- `index.html`: 10 gespreksopeners voor managers.
- `boardroomcoach/`: **Boardroomcoach**, een Nederlandstalige, adaptieve leerapp om bedrijfskunde te leren en zelfverzekerder mee te praten met directeuren en bestuurders. Open `boardroomcoach/index.html` in een browser (of via GitHub Pages op `/boardroomcoach/`).

## Boardroomcoach

- Nulmeting (profiel + 10 adaptieve vragen) met startprofiel.
- Dagelijkse oefening, snelle lessen, quiz per onderwerp, praktijksimulaties en gespreide herhaling.
- Feedback per antwoord met uitleg van de score op vier criteria: begrip, redenering, toepasbaarheid en helderheid.
- Voortgang per onderwerp, ontwikkeling in de tijd, badges en een logboek met eerdere feedback.
- Binnen Claude geopend: open antwoorden en vrije oefengesprekken worden door Claude beoordeeld, en voortgang wordt in je account bewaard. Daarbuiten werkt alles lokaal met een indicatieve score en zelfcontrole.

Broncode staat in `boardroomcoach/src/`. Na wijzigingen: `python3 boardroomcoach/build.py`.
Alle bedrijven en cijfers in de oefeningen zijn fictief. De app is een leercoach, geen advies.

## Android-app (APK)

`boardroomcoach/android/Boardroomcoach.apk` is een installeerbare Android-app (Android 7.0 of nieuwer). Je voortgang blijft op je telefoon bewaard, ook na afsluiten of herstarten, en de app werkt zonder internet.

**Installeren:** download de APK op je telefoon (op GitHub: open het bestand en tik op *Download raw file*), open het bestand en sta zo nodig *Installeren uit onbekende bronnen* toe voor je browser of bestandsbeheer. Google Play Protect kan een waarschuwing geven omdat de app niet uit de Play Store komt; kies dan *Toch installeren*.

**Bouwen:** `python3 boardroomcoach/android/build_apk.py --tools <map met jars> --keystore <sleutel.p12> --storepass <wachtwoord> --version-code N`. Zie de toelichting bovenin het script. Gebruik voor updates altijd dezelfde sleutel; anders moet je de app eerst verwijderen (zet dan eerst je voortgang veilig via *Voortgang → Profiel en instellingen → Kopieer reservecode*).
