/* ===== Oefenvragen deel 1 =====
   t: mc = meerkeuze, calc = rekenen, open = open antwoord
   lvl: 1 = herkenbaar, 2 = toepassen, 3 = complex / meerstaps
   o: [antwoord, score 0-100, feedback]  (meerdere redelijke antwoorden krijgen elk een eigen score)
   keys (open): [kernpunt, zoekpatroon] — helpt bij de beoordeling zonder AI */

const ITEMS = [];
const I = (x) => ITEMS.push(x);

/* ---------------- STRATEGIE ---------------- */
I({ id: 'st1', t: 'mc', topic: 'strat', c: ['verdienmodel'], lvl: 1, kind: 'begrip',
  q: 'Een directeur zegt: “We willen ons verdienmodel aanpassen.” Wat bedoelt hij waarschijnlijk?',
  o: [
    ['Hij wil veranderen hoe en waarvoor klanten betalen, bijvoorbeeld van eenmalige verkoop naar een abonnement.', 100, 'Precies. Het gaat om de manier waarop geld binnenkomt: wie betaalt, waarvoor en hoe vaak.'],
    ['Hij wil een nieuw product ontwikkelen.', 30, 'Een nieuw product kán onderdeel zijn, maar het verdienmodel gaat over hoe je aan iets verdient, niet over wat je maakt.'],
    ['Hij wil de kosten verlagen.', 20, 'Kostenverlaging verbetert de winst, maar verandert niet hoe je geld verdient.'],
    ['Hij wil de prijzen verhogen.', 40, 'Prijs hoort bij het verdienmodel, maar een prijsverhoging alleen is meestal geen aanpassing van het model zelf.']
  ],
  hint: 'Denk aan de vraag: wie betaalt waarvoor, en hoe vaak?',
  why: 'Een verdienmodel beschrijft de logica van de inkomsten. Voorbeelden: verkoop, abonnement, licentie, lease, provisie of advertenties.' });

I({ id: 'st2', t: 'mc', topic: 'strat', c: ['generieke-strategie'], lvl: 1, kind: 'begrip',
  ctx: 'Fietsfabriek Ronda (fictief) maakt handgemaakte stadsfietsen van €2.400, ruim boven het marktgemiddelde. Klanten noemen het design en de levenslange garantie als reden om te kopen.',
  q: 'Welke strategische keuze past het best bij Ronda?',
  o: [
    ['Differentiatie: klanten betalen meer voor iets onderscheidends.', 100, 'Juist. Ronda wint niet op prijs maar op design en garantie, waarvoor klanten een premie betalen.'],
    ['Kostenleiderschap: zo efficiënt mogelijk produceren.', 0, 'Met een prijs ruim boven het gemiddelde is Ronda duidelijk niet de goedkoopste.'],
    ['Focus op een niche met differentiatie.', 80, 'Goed gezien: als Ronda zich op een specifieke doelgroep richt, is “gedifferentieerde focus” ook een redelijk antwoord. De kern blijft differentiatie.'],
    ['Geen duidelijke keuze.', 10, 'De casus laat juist een duidelijke keuze zien: onderscheidend vermogen tegen een hogere prijs.']
  ],
  hint: 'Waarom betalen klanten meer dan gemiddeld?',
  why: 'Porter onderscheidt kostenleiderschap, differentiatie en focus. Wie differentieert moet blijven investeren in waar klanten voor betalen, hier design en garantie.' });

I({ id: 'st3', t: 'mc', topic: 'strat', c: ['vijf-krachten'], lvl: 2, kind: 'toepassing',
  ctx: 'Groenewoud Kwekerijen (fictief) levert 70% van haar planten aan twee grote bouwmarktketens. De ketens eisen elk jaar lagere prijzen.',
  q: 'Welke van de vijf krachten van Porter verklaart de margedruk vooral?',
  o: [
    ['De onderhandelingsmacht van afnemers.', 100, 'Ja. Twee klanten nemen 70% af; dat geeft hen veel macht over prijs en voorwaarden.'],
    ['De dreiging van nieuwe toetreders.', 20, 'Nieuwkomers kunnen druk geven, maar de casus noemt vooral de afhankelijkheid van twee klanten.'],
    ['De onderhandelingsmacht van leveranciers.', 0, 'Leveranciers zijn hier niet het probleem: het gaat om de kopers.'],
    ['De dreiging van vervangende producten.', 10, 'Kunstplanten zijn een denkbaar substituut, maar dat verklaart de jaarlijkse prijsdruk van de ketens niet.']
  ],
  hint: 'Wie heeft hier de sterkste positie aan de onderhandelingstafel?',
  why: 'Klantconcentratie vergroot de macht van afnemers. Een logische vervolgvraag in de boardroom: hoe spreiden we onze afzet, of maken we ons moeilijker vervangbaar?' });

I({ id: 'st4', t: 'mc', topic: 'strat', c: ['concurrentievoordeel'], lvl: 2, kind: 'situatie',
  ctx: 'De directeur van Brouwer Installatietechniek (fictief) zegt: “Ons concurrentievoordeel is onze kwaliteit en klantgerichtheid.”',
  q: 'Welke reactie helpt het gesprek het meest vooruit?',
  o: [
    ['“Hoe merken klanten dat concreet, en waarom kunnen concurrenten dat niet makkelijk nadoen?”', 100, 'Sterk: je vraagt door op bewijs én duurzaamheid, zonder het idee af te schieten.'],
    ['“Dat zegt iedereen; dat is geen concurrentievoordeel.”', 30, 'Inhoudelijk heb je een punt, maar de formulering roept weerstand op. Een open vraag bereikt hetzelfde constructiever.'],
    ['“Goed om te horen, dan zitten we goed.”', 0, 'Je bevestigt een bewering die je niet hebt getoetst; je voegt niets toe.'],
    ['“Zouden we niet beter op prijs kunnen concurreren?”', 20, 'Je springt naar een oplossing zonder eerst te begrijpen waar het voordeel echt zit.']
  ],
  hint: 'Een concurrentievoordeel moet zichtbaar zijn voor de klant én moeilijk te kopiëren.',
  why: 'Een duurzaam concurrentievoordeel is waardevol voor de klant, zeldzaam en moeilijk na te bootsen. Met een open, toetsende vraag help je de directeur dat scherp te krijgen.' });

I({ id: 'st5', t: 'mc', topic: 'strat', c: ['swot'], lvl: 1, kind: 'begrip',
  q: 'Welke van deze punten hoort in een SWOT-analyse bij de bedreigingen (threats)?',
  o: [
    ['Een nieuwe wet die de inzet van onze belangrijkste grondstof beperkt.', 100, 'Juist: een externe ontwikkeling die schade kan doen.'],
    ['Ons verouderde ERP-systeem.', 10, 'Dit is een interne zwakte (weakness), geen externe bedreiging.'],
    ['Een sterk merk in de regio.', 0, 'Dit is een interne sterkte.'],
    ['Groeiende vraag naar duurzame producten.', 10, 'Dit is een externe kans, geen bedreiging.']
  ],
  hint: 'Sterktes en zwaktes zijn intern; kansen en bedreigingen komen van buiten.',
  why: 'Gebruik de SWOT niet als lijstje, maar verbind de vakjes: welke sterkte helpt tegen deze bedreiging?' });

I({ id: 'st6', t: 'mc', topic: 'strat', c: ['schaalvoordelen', 'break-even'], lvl: 2, kind: 'toepassing',
  ctx: 'Bakkerij Ten Hove (fictief) overweegt een tweede productielocatie om een grote supermarktketen te beleveren. De vaste kosten stijgen met €400.000 per jaar.',
  q: 'Welke vraag is het belangrijkst om te beoordelen of dit schaalvoordeel oplevert?',
  o: [
    ['Hoeveel extra volume is zeker, en tegen welke marge per eenheid, zodat die extra vaste kosten gedekt worden?', 100, 'Sterk. Schaalvoordeel ontstaat pas als het extra volume de extra vaste kosten ruim dekt.'],
    ['Hoeveel nieuwe medewerkers we nodig hebben.', 40, 'Relevant voor de uitvoering, maar het beantwoordt niet of de investering zich via volume terugverdient.'],
    ['Of de nieuwe locatie dichter bij de klant ligt.', 30, 'Logistiek telt mee, maar de kern is volume tegenover vaste kosten.'],
    ['Of de concurrent ook uitbreidt.', 20, 'Interessant voor de marktinschatting, maar niet de kern van het schaalvoordeel.']
  ],
  hint: 'Schaalvoordeel = vaste kosten verdelen over meer eenheden.',
  why: 'Bij uitbreiding stijgen de vaste kosten eerst. Het voordeel ontstaat pas boven een nieuw break-evenpunt. Let ook op afhankelijkheid van één grote klant.' });

I({ id: 'st7', t: 'open', topic: 'strat', c: ['verdienmodel', 'cashflow'], lvl: 3, kind: 'case',
  ctx: 'Lumina Software (fictief) verkoopt planningssoftware als eenmalige licentie van €30.000. De directie wil overstappen op een abonnement van €900 per maand (SaaS).',
  q: 'Welke twee vragen zou jij in het MT stellen om de gevolgen van deze overstap te begrijpen? Licht kort toe waarom.',
  keys: [
    ['Cashflow of omzet daalt tijdelijk in de overgang', 'cash|kasstroom|tijdelijk|overgang|eerste jaren|dip|later binnen|financier'],
    ['Klantbehoud of churn bepaalt de waarde', 'churn|opzeg|blijven|behoud|retentie|looptijd|loyal'],
    ['Terugverdienen: na hoeveel maanden is het abonnement meer waard', 'maanden|33|34|break.?even|terugverd|lifetime|clv'],
    ['Wat vinden klanten ervan / prijsbeleid', 'klant|markt|concurrent|prijs|bereid']
  ],
  model: '1) “Hoe overbruggen we de overgangsperiode? Een licentie levert direct €30.000 op, een abonnement pas na ruim 33 maanden evenveel. Hebben we genoeg cash of financiering voor die dip?” 2) “Hoe lang blijven klanten gemiddeld? Het abonnement is pas aantrekkelijker als klanten langer dan circa drie jaar blijven, dus churn wordt een kern-KPI.”',
  alt: 'Andere sterke invalshoeken: hoe reageren bestaande licentieklanten, welke extra service rechtvaardigt het abonnement, en wat doet het met de waardering van het bedrijf (terugkerende omzet wordt vaak hoger gewaardeerd).',
  why: 'Een overstap naar abonnementen maakt de omzet voorspelbaarder, maar verschuift inkomsten naar de toekomst. Cashflow en klantbehoud worden dan cruciaal.' });

I({ id: 'st8', t: 'open', topic: 'strat', c: ['generieke-strategie', 'concurrentievoordeel'], lvl: 2, kind: 'situatie',
  ctx: 'De directeur van Koster Logistiek (fictief) zegt: “We gaan de goedkoopste vervoerder van Nederland worden én de beste service bieden.”',
  q: 'Hoe reageer je constructief? Schrijf in twee of drie zinnen wat je zou zeggen.',
  keys: [
    ['Benoemt spanning tussen laagste prijs en beste service', 'spanning|tegelijk|allebei|beide|keuze|kiezen|stuck|middle|botst|lastig'],
    ['Vraagt waar de klant voor betaalt / doelgroep', 'klant|segment|doelgroep|waarvoor|betalen'],
    ['Constructieve, open vraag in plaats van afwijzing', '\\?'],
    ['Verwijst naar kosten of marge', 'kosten|marge|winst|investering']
  ],
  model: '“Ik snap de ambitie. Tegelijk vragen de laagste prijs en de beste service vaak tegengestelde investeringen. Voor welke klanten willen we het verschil maken, en waar betalen zij voor: de laagste prijs of de service? Dan weten we waar we in investeren en waar we bewust níet de beste in hoeven te zijn.”',
  alt: 'Je kunt ook voorstellen beide te toetsen: “Is er een segment waar we met slimme processen goedkoop én goed kunnen zijn? Dan is dat onze focus.”',
  why: 'Porter waarschuwt voor stuck in the middle. Je helpt de directeur door de keuze zichtbaar te maken, niet door de ambitie af te wijzen.' });

/* ---------------- FINANCIËN ---------------- */
I({ id: 'fi1', t: 'mc', topic: 'fin', c: ['omzet-winst', 'cashflow'], lvl: 1, kind: 'begrip',
  q: 'Een bedrijf maakt winst, maar kan zijn leveranciers niet op tijd betalen. Hoe kan dat?',
  o: [
    ['Winst is niet hetzelfde als geld op de bank: klanten betalen bijvoorbeeld later, of er zit veel geld in voorraad.', 100, 'Precies. Winst is een boekhoudkundig resultaat; cash is wat er daadwerkelijk binnen is.'],
    ['De winst is verkeerd berekend.', 10, 'Dat kan, maar het hoeft niet: dit verschijnsel komt bij gezonde bedrijven heel vaak voor.'],
    ['Het bedrijf heeft te veel omzet.', 20, 'Snelle groei kan inderdaad cash kosten, maar “te veel omzet” verklaart het mechanisme niet.'],
    ['Dat kan niet; wie winst maakt, heeft geld.', 0, 'Helaas wel. Dit is een van de belangrijkste lessen van bedrijfsfinanciën.']
  ],
  hint: 'Denk aan het moment waarop een verkoop als omzet telt en het moment waarop het geld binnenkomt.',
  why: 'Omzet en winst worden geboekt bij levering; het geld komt soms maanden later. Cashflow en werkkapitaal verklaren dat verschil.' });

I({ id: 'fi2', t: 'calc', topic: 'fin', c: ['brutomarge'], lvl: 1, kind: 'cijfers',
  ctx: 'Hofstede Interieur (fictief) had vorig jaar €2.000.000 omzet. De inkoop van de verkochte meubels kostte €1.200.000.',
  q: 'Wat is de brutomarge in procenten?',
  ans: 40, tol: 0.5, unit: '%',
  hint: 'Brutomarge % = (omzet − inkoopkosten) ÷ omzet × 100.',
  steps: '(2.000.000 − 1.200.000) ÷ 2.000.000 = 800.000 ÷ 2.000.000 = 0,40 → 40%.',
  why: 'Van elke euro omzet blijft 40 cent over om de overige kosten (personeel, huur, marketing) en de winst te dekken.' });

I({ id: 'fi3', t: 'mc', topic: 'fin', c: ['ebitda', 'cashflow'], lvl: 2, kind: 'toepassing',
  q: 'Een directeur presenteert trots een EBITDA-stijging van 25%. Welke vervolgvraag is het meest waardevol?',
  o: [
    ['“Mooi. Hoe ontwikkelt de kasstroom zich als we investeringen en werkkapitaal meenemen?”', 100, 'Sterk: EBITDA laat investeringen, rente en werkkapitaal buiten beeld. Je vraagt naar wat er echt overblijft.'],
    ['“Wat betekent EBITDA precies?”', 30, 'Eerlijk vragen is prima als je het niet weet, maar je voegt nog geen inzicht toe.'],
    ['“Hoe verhoudt dit zich tot de concurrent?”', 60, 'Benchmarken is nuttig en redelijk, maar je mist de belangrijkste blinde vlek van EBITDA.'],
    ['“Dus de winst is ook 25% gestegen?”', 10, 'Niet per se: afschrijvingen, rente en belastingen kunnen dat beeld flink veranderen.']
  ],
  hint: 'Waar zegt EBITDA níets over?',
  why: 'EBITDA is handig om operationele prestaties te vergelijken, maar geen cash. Investeringen (capex) en werkkapitaal bepalen hoeveel geld er werkelijk vrijkomt.' });

I({ id: 'fi4', t: 'calc', topic: 'fin', c: ['werkkapitaal'], lvl: 2, kind: 'cijfers',
  ctx: 'Koster Logistiek (fictief) heeft €500.000 aan voorraad, €900.000 aan openstaande facturen bij klanten (debiteuren) en €600.000 aan nog te betalen rekeningen bij leveranciers (crediteuren).',
  q: 'Hoeveel werkkapitaal zit er vast in de bedrijfsvoering (in euro’s)?',
  ans: 800000, tol: 1000, unit: '€',
  hint: 'Werkkapitaal ≈ voorraad + debiteuren − crediteuren.',
  steps: '500.000 + 900.000 − 600.000 = 800.000.',
  why: 'Dat is €800.000 die niet vrij beschikbaar is. Snellere betaling door klanten of minder voorraad maakt geld vrij zonder te lenen.' });

I({ id: 'fi5', t: 'mc', topic: 'fin', c: ['werkkapitaal', 'cashflow'], lvl: 2, kind: 'situatie',
  ctx: 'Een snelgroeiende groothandel groeit 40% per jaar, maar de bank wil het krediet niet verder verhogen.',
  q: 'Welk voorstel maakt het snelst geld vrij voor verdere groei?',
  o: [
    ['De betaaltermijn van klanten verkorten en de voorraad verlagen.', 100, 'Ja: zo verklein je het werkkapitaal en komt er direct cash vrij.'],
    ['Meer marketing om de omzet sneller te laten groeien.', 0, 'Meer groei vraagt juist méér werkkapitaal; dit verergert het probleem op korte termijn.'],
    ['Leveranciers vragen om een langere betaaltermijn.', 80, 'Ook een goede werkkapitaalmaatregel. Let wel op de relatie met leveranciers en eventuele kortingen voor snel betalen.'],
    ['De prijzen verlagen om klanten te binden.', 10, 'Dat drukt de marge en lost het cashprobleem niet op.']
  ],
  hint: 'Waar zit het geld van een groeiende groothandel vast?',
  why: 'Groei slurpt werkkapitaal: meer voorraad en meer openstaande facturen. Werkkapitaalbeheer is daarom vaak de goedkoopste financieringsbron.' });

I({ id: 'fi6', t: 'calc', topic: 'fin', c: ['break-even'], lvl: 2, kind: 'cijfers',
  ctx: 'Een fictieve koffiebranderij verkoopt zakken koffie voor €12. De variabele kosten zijn €7 per zak. De vaste kosten zijn €150.000 per jaar.',
  q: 'Hoeveel zakken moet de branderij per jaar verkopen om break-even te draaien?',
  ans: 30000, tol: 0, unit: 'zakken',
  hint: 'Deel de vaste kosten door wat elke zak bijdraagt (prijs min variabele kosten).',
  steps: 'Bijdrage per zak = 12 − 7 = €5. Break-even = 150.000 ÷ 5 = 30.000 zakken.',
  why: 'Elke zak draagt €5 bij aan de vaste kosten. Boven de 30.000 zakken begint de winst.' });

I({ id: 'fi7', t: 'mc', topic: 'fin', c: ['solvabiliteit-liquiditeit'], lvl: 2, kind: 'begrip',
  ctx: 'Een fictief bouwbedrijf heeft veel eigen vermogen (solvabiliteit 45%), maar de kas is bijna leeg en de rekening-courant zit tegen de limiet.',
  q: 'Hoe vat je de financiële positie het best samen?',
  o: [
    ['Solvabel, maar met een liquiditeitsprobleem op korte termijn.', 100, 'Precies: op lange termijn gezond, maar de korte termijn verdient directe aandacht.'],
    ['Financieel ongezond.', 20, 'Te grof: de solvabiliteit is juist goed. Het probleem zit specifiek in de liquiditeit.'],
    ['Liquide, maar niet solvabel.', 0, 'Andersom: veel eigen vermogen (solvabel), weinig direct beschikbaar geld (niet liquide).'],
    ['Geen probleem, want het eigen vermogen is hoog.', 10, 'Eigen vermogen betaalt geen rekeningen als het vastzit in materieel of grond.']
  ],
  hint: 'Lange termijn versus korte termijn.',
  why: 'Solvabiliteit gaat over de lange termijn, liquiditeit over de korte termijn. Een sterke balans kan alsnog krap bij kas zitten.' });

I({ id: 'fi8', t: 'open', topic: 'fin', c: ['brutomarge', 'omzet-winst'], lvl: 2, kind: 'cijfers',
  ctx: 'Hofstede Interieur (fictief): de omzet steeg van €2,0 mln naar €2,4 mln (+20%). De brutomarge daalde van 40% naar 33%. De directeur zegt: “Een topjaar!”',
  q: 'Klopt dat? Leg in eigen woorden uit wat de cijfers laten zien en welke vraag je zou stellen.',
  keys: [
    ['Rekent of benoemt brutowinst: ca. €800k naar ca. €792k', '79\\d|800|ongeveer gelijk|gelijk gebleven|gedaald|lager|minder brutowinst|niet gestegen|nauwelijks'],
    ['Margedaling verklaard (korting, inkoopprijs, mix)', 'korting|inkoop|mix|prijs|kosten'],
    ['Omzetgroei is niet hetzelfde als beter resultaat', 'omzet.*(niet|geen)|winst|marge'],
    ['Stelt een concrete vervolgvraag', '\\?']
  ],
  model: '“De omzet groeit met 20%, maar de brutowinst blijft vrijwel gelijk: €800.000 vorig jaar (40% van 2,0 mln) tegen ongeveer €792.000 nu (33% van 2,4 mln). We verkopen dus meer voor hetzelfde resultaat. Komt de margedaling door kortingen, hogere inkoopprijzen of een andere productmix?”',
  alt: 'Je kunt ook positief openen (“mooi dat we meer klanten bereiken”) en dan doorvragen. Of benoemen dat de hogere omzet ook meer werk en werkkapitaal kost.',
  why: 'Omzetgroei met dalende marge kan betekenen dat groei wordt “gekocht”. Reken de brutowinst in euro’s uit; dat maakt het verhaal direct helder.' });

/* ---------------- KPI's & RAPPORTAGES ---------------- */
I({ id: 'kp1', t: 'mc', topic: 'kpi', c: ['kpi'], lvl: 1, kind: 'begrip',
  q: 'Welke van deze is het beste voorbeeld van een KPI voor een zorginstelling die de wachttijd voor cliënten wil verkorten?',
  o: [
    ['Gemiddelde wachttijd in dagen tussen aanmelding en eerste afspraak.', 100, 'Ja: meetbaar en direct gekoppeld aan het doel.'],
    ['Aantal medewerkers.', 10, 'Dat is een gegeven, geen prestatie-indicator voor wachttijd.'],
    ['Klanttevredenheid in het algemeen.', 40, 'Relevant, maar niet specifiek genoeg voor het doel “wachttijd verkorten”.'],
    ['Aantal vergaderingen over wachttijden.', 0, 'Activiteit is geen resultaat.']
  ],
  hint: 'Een KPI hoort direct aan het doel te hangen en meetbaar te zijn.',
  why: 'Een goede KPI is gekoppeld aan een doel, meetbaar, beïnvloedbaar en heeft een norm of streefwaarde.' });

I({ id: 'kp2', t: 'mc', topic: 'kpi', c: ['leading-lagging'], lvl: 2, kind: 'begrip',
  q: 'Welke indicator is voorlopend (leading) voor de omzet van een installatiebedrijf?',
  o: [
    ['De waarde van uitgebrachte offertes en de orderportefeuille.', 100, 'Juist: die voorspellen de omzet van de komende maanden.'],
    ['De nettowinst over het afgelopen kwartaal.', 0, 'Dat is een achterlopend resultaat.'],
    ['De omzet van vorig jaar.', 0, 'Historisch, dus achterlopend.'],
    ['Het ziekteverzuim.', 40, 'Verzuim kan wel vooruitlopen op capaciteitsproblemen, en dus indirect op omzet. Een redelijke gedachte, maar minder direct.']
  ],
  hint: 'Welk getal zie je bewegen vóórdat de omzet beweegt?',
  why: 'Stuur je alleen op achterlopende cijfers, dan reageer je te laat. Combineer daarom beide soorten in een dashboard.' });

I({ id: 'kp3', t: 'calc', topic: 'kpi', c: ['begroting-afwijking'], lvl: 2, kind: 'cijfers',
  ctx: 'Begroot: 1.000 verkochte apparaten à €500 = €500.000. Werkelijk: 1.100 apparaten à €450 = €495.000.',
  q: 'Hoe groot is het prijseffect (in euro’s, negatief als het nadelig is)? Gebruik werkelijk volume × prijsverschil.',
  ans: -55000, tol: 500, unit: '€',
  hint: 'Prijsverschil = €450 − €500. Vermenigvuldig met het werkelijke volume van 1.100.',
  steps: 'Prijseffect = 1.100 × (450 − 500) = −55.000. Volume-effect = (1.100 − 1.000) × 500 = +50.000. Samen −5.000 = 495.000 − 500.000.',
  why: 'Het totaal (−€5.000) lijkt klein, maar verbergt twee grote bewegingen: meer volume en flink lagere prijzen. De vraag is dus: waarom verkochten we goedkoper?' });

I({ id: 'kp4', t: 'mc', topic: 'kpi', c: ['ytd-forecast'], lvl: 2, kind: 'toepassing',
  ctx: 'Een fictieve skischool heeft in december en januari €900.000 omzet gemaakt. De sales-manager zegt: “Onze run rate is €5,4 miljoen per jaar!”',
  q: 'Wat is de beste reactie?',
  o: [
    ['“Dat klopt waarschijnlijk niet, want dit bedrijf is sterk seizoensgebonden. Wat zegt de prognose op basis van vorige jaren?”', 100, 'Sterk: run rate werkt slecht bij seizoensbedrijven. Je vraagt naar een realistischer alternatief.'],
    ['“Geweldig, dan verhogen we de begroting.”', 0, 'Je neemt een vertekend getal over en bouwt er een besluit op.'],
    ['“Hoe is die €5,4 miljoen berekend?”', 60, 'Goede vraag: zo ontdek je vanzelf dat het 2 maanden × 6 is. Nog sterker als je het seizoenseffect zelf benoemt.'],
    ['“Wat is YTD?”', 20, 'Mag je altijd vragen, maar het helpt hier niet om de fout in de run rate te zien.']
  ],
  hint: 'Wat gebeurt er met de omzet van een skischool in juli?',
  why: 'Run rate = huidige periode doorgetrokken naar een jaar. Bij seizoenspatronen gebruik je liever een prognose die het seizoen meeneemt.' });

I({ id: 'kp5', t: 'open', topic: 'kpi', c: ['kpi', 'leading-lagging'], lvl: 3, kind: 'case',
  ctx: 'Veldkamp Zorggroep (fictief) heeft een strategie gekozen: “Meer zorg thuis, minder opnames.” Het MT-dashboard bevat nu 24 indicatoren, vooral financieel.',
  q: 'Stel drie KPI’s voor die passen bij deze strategie. Geef bij minstens één KPI aan waarom hij voorlopend is.',
  keys: [
    ['KPI over zorg thuis (aantal/aandeel cliënten thuis)', 'thuis|wijk|ambulant|aandeel|percentage'],
    ['KPI over opnames of heropnames', 'opname|heropname|bedden|ligduur'],
    ['Benoemt voorlopend versus achterlopend', 'voorlopend|leading|voorspel|vroeg|signaal|vooruit'],
    ['Meetbaar met norm of streefwaarde', '\\d|%|procent|streef|norm|doel']
  ],
  model: '1) Aandeel cliënten dat zorg thuis ontvangt (streef: van 55% naar 65%). 2) Aantal heropnames binnen 30 dagen per 100 cliënten. 3) Aantal cliënten met een actueel thuisplan of preventief huisbezoek; dit is voorlopend, want het voorspelt toekomstige opnames. Advies: liever 5 tot 8 KPI’s die de strategie volgen dan 24 losse cijfers.',
  alt: 'Ook verdedigbaar: medewerkerscapaciteit in de wijk, cliënttevredenheid over zorg thuis, of kosten per cliënttraject.',
  why: 'KPI’s horen de strategie te volgen. Combineer resultaat (achterlopend) met indicatoren die vroeg waarschuwen (voorlopend).' });

I({ id: 'kp6', t: 'mc', topic: 'kpi', c: ['kpi'], lvl: 3, kind: 'situatie',
  ctx: 'Een fictief callcenter stuurt op de KPI “gemiddelde gespreksduur onder 4 minuten”. Het aantal klachten stijgt, en klanten bellen vaker terug.',
  q: 'Wat is de meest waarschijnlijke verklaring en de beste reactie?',
  o: [
    ['De KPI stimuleert ongewenst gedrag: medewerkers ronden gesprekken af zonder het probleem op te lossen. Vul aan met “opgelost bij eerste contact”.', 100, 'Sterk: je ziet de perverse prikkel en stelt een tegenwicht-KPI voor.'],
    ['Medewerkers moeten beter getraind worden.', 40, 'Kan helpen, maar je mist dat de KPI zelf het gedrag stuurt.'],
    ['De norm moet strenger: 3 minuten.', 0, 'Dat versterkt het probleem.'],
    ['De KPI afschaffen.', 50, 'Begrijpelijk, maar gespreksduur zegt nog steeds iets over capaciteit. Beter: in balans brengen met een kwaliteits-KPI.']
  ],
  hint: 'Wat doen mensen als ze worden afgerekend op één getal?',
  why: 'Wet van Goodhart: wanneer een maatstaf een doel wordt, is het geen goede maatstaf meer. Combineer daarom efficiëntie met kwaliteit.' });

I({ id: 'kp7', t: 'open', topic: 'kpi', c: ['begroting-afwijking'], lvl: 2, kind: 'situatie',
  ctx: 'In de maandrapportage van Brouwer Installatietechniek (fictief) staat: personeelskosten €120.000 boven begroting (+8%). De controller zegt: “Dit komt door inhuur.”',
  q: 'Welke vragen stel je om te bepalen of dit een probleem is?',
  keys: [
    ['Vraagt naar oorzaak van de inhuur (ziekte, vacatures, drukte)', 'waarom|oorzaak|ziek|verzuim|vacature|druk|piek'],
    ['Koppelt aan omzet of productie (staat er meer omzet tegenover?)', 'omzet|productie|uren|declar|opbrengst|tegenover'],
    ['Tijdelijk of structureel', 'tijdelijk|structureel|blijvend|eenmalig|rest van het jaar|prognose|forecast'],
    ['Vraagt naar actie of maatregel', 'actie|maatregel|plan|bijsturen|vast|werven']
  ],
  model: '“Staat er extra omzet tegenover, omdat we meer projecten draaien? Of vangen we ziekte of vacatures op? En is dit tijdelijk of verwachten we dit de rest van het jaar? Dan bepalen we of we vaste mensen werven of juist de inhuur afbouwen.”',
  alt: 'Je kunt ook vragen naar het tarief: inhuur is per uur vaak 30 tot 60% duurder dan vast personeel.',
  why: 'Een afwijking is pas een probleem als je de oorzaak kent. Hogere kosten met hogere omzet kunnen juist gezond zijn.' });

/* ---------------- KLANT & MARKT ---------------- */
I({ id: 'mk1', t: 'mc', topic: 'mkt', c: ['churn'], lvl: 1, kind: 'begrip',
  q: 'Een SaaS-bedrijf heeft een maandelijkse churn van 3%. Wat betekent dat?',
  o: [
    ['Elke maand zegt ongeveer 3% van de klanten het abonnement op.', 100, 'Juist. Op jaarbasis is dat ruim 30% van de klanten.'],
    ['De omzet groeit 3% per maand.', 0, 'Churn gaat over vertrek, niet over groei.'],
    ['3% van de klanten klaagt.', 10, 'Klachten kunnen voorafgaan aan churn, maar churn is het daadwerkelijke vertrek.'],
    ['De prijzen dalen 3% per maand.', 0, 'Churn gaat niet over prijs.']
  ],
  hint: 'Churn komt van “churning”: het draaien van het klantenbestand.',
  why: '3% per maand klinkt klein, maar na een jaar is ongeveer 31% vertrokken (1 − 0,97¹² ≈ 0,31). Daarom kijken directies kritisch naar churn.' });

I({ id: 'mk2', t: 'calc', topic: 'mkt', c: ['clv-cac'], lvl: 2, kind: 'cijfers',
  ctx: 'Een klant van Lumina Software (fictief) betaalt €900 per maand. De brutomarge op het abonnement is 80%. Een klant blijft gemiddeld 30 maanden.',
  q: 'Wat is de CLV op basis van marge (in euro’s)?',
  ans: 21600, tol: 50, unit: '€',
  hint: 'Maandmarge = €900 × 0,8. Vermenigvuldig met de gemiddelde looptijd.',
  steps: '900 × 0,8 = €720 marge per maand × 30 maanden = €21.600.',
  why: 'Vergelijk de CLV met de CAC. Een vuistregel is een CLV van minstens drie keer de CAC, maar dat hangt sterk af van de sector.' });

I({ id: 'mk3', t: 'mc', topic: 'mkt', c: ['clv-cac', 'churn'], lvl: 3, kind: 'situatie',
  ctx: 'De commercieel directeur wil het marketingbudget verdubbelen om sneller te groeien. De CAC is het afgelopen jaar gestegen van €2.000 naar €4.500; de churn is gestegen van 1,5% naar 3% per maand.',
  q: 'Welk advies is het sterkst?',
  o: [
    ['Eerst de churn aanpakken: klanten blijven korter, dus de CLV daalt terwijl de CAC stijgt. Meer budget vergroot dan vooral het verlies per klant.', 100, 'Sterk: je combineert beide trends tot één conclusie over de rentabiliteit van groei.'],
    ['Het budget verdubbelen; groei is belangrijker dan winst.', 10, 'Dat kan in sommige groeistrategieën bewust gekozen worden, maar hier verslechtert de economie per klant aan twee kanten.'],
    ['Een goedkoper marketingkanaal zoeken.', 50, 'Redelijk: dat verlaagt de CAC. Maar zonder aandacht voor churn blijft de emmer lekken.'],
    ['Prijzen verhogen.', 30, 'Dat verhoogt de marge per klant, maar kan de churn verder opdrijven.']
  ],
  hint: 'Wat gebeurt er met de waarde van een klant als hij korter blijft?',
  why: 'Bij een verdubbeling van churn halveert de gemiddelde looptijd ongeveer, en daarmee de CLV. Tegelijk verdubbelt de CAC. Groei wordt zo snel onrendabel.' });

I({ id: 'mk4', t: 'mc', topic: 'mkt', c: ['waardepropositie'], lvl: 1, kind: 'begrip',
  q: 'Welke zin is de sterkste waardepropositie voor een fictief schoonmaakbedrijf voor ziekenhuizen?',
  o: [
    ['“Wij verlagen het infectierisico op uw afdelingen aantoonbaar, met gecertificeerde teams die 24/7 beschikbaar zijn.”', 100, 'Sterk: het benoemt het probleem van de klant en de concrete waarde.'],
    ['“Wij zijn al 40 jaar een betrouwbaar familiebedrijf.”', 30, 'Betrouwbaarheid telt, maar dit zegt weinig over wat de klant eraan heeft.'],
    ['“Wij gebruiken de nieuwste schoonmaakmachines.”', 20, 'Een productkenmerk, geen klantwaarde.'],
    ['“Wij zijn de goedkoopste.”', 40, 'Kan een propositie zijn, maar in een ziekenhuis is prijs zelden de belangrijkste waarde.']
  ],
  hint: 'Wat is het probleem van het ziekenhuis?',
  why: 'Een waardepropositie vertrekt vanuit het probleem en de winst van de klant, niet vanuit wat je zelf hebt of doet.' });

I({ id: 'mk5', t: 'calc', topic: 'mkt', c: ['salesfunnel'], lvl: 2, kind: 'cijfers',
  ctx: 'De pijplijn van een fictief adviesbureau: €400.000 in fase “eerste gesprek” (kans 10%), €300.000 in fase “offerte” (kans 40%), €200.000 in fase “onderhandeling” (kans 70%).',
  q: 'Wat is de gewogen waarde van de pijplijn (in euro’s)?',
  ans: 300000, tol: 500, unit: '€',
  hint: 'Vermenigvuldig elke fase met de slagingskans en tel op.',
  steps: '400.000 × 0,1 = 40.000; 300.000 × 0,4 = 120.000; 200.000 × 0,7 = 140.000. Totaal €300.000.',
  why: 'De “totale pijplijn” van €900.000 geeft een te rooskleurig beeld. De gewogen pijplijn is een realistischere voorspeller van omzet.' });

I({ id: 'mk6', t: 'mc', topic: 'mkt', c: ['segmentatie'], lvl: 2, kind: 'toepassing',
  ctx: 'Een fictieve drukkerij bedient 800 klanten. 15% van de klanten levert 70% van de brutowinst. Een groot deel van de kleine klanten kost veel tijd aan maatwerk.',
  q: 'Welke vervolgstap ligt het meest voor de hand?',
  o: [
    ['Klanten segmenteren naar winstgevendheid en per segment een passende aanpak kiezen (bijvoorbeeld een standaard online bestelproces voor kleine klanten).', 100, 'Sterk: je gebruikt segmentatie om bewust verschillende bedieningsmodellen te kiezen.'],
    ['Alle kleine klanten opzeggen.', 20, 'Te rigoureus: kleine klanten kunnen groeien of bijdragen aan de vaste kosten. Een andere aanpak is vaak beter.'],
    ['Alle klanten dezelfde korting geven.', 0, 'Dat negeert de verschillen juist.'],
    ['Meer verkopers aannemen.', 20, 'Zonder keuze voor welke klanten je bedient, vergroot dit de inefficiëntie.']
  ],
  hint: 'Niet elke klant is even waardevol, en niet elke klant heeft dezelfde aanpak nodig.',
  why: 'Segmentatie maakt keuzes mogelijk: waar investeren we, en welke klanten bedienen we efficiënter?' });

I({ id: 'mk7', t: 'open', topic: 'mkt', c: ['churn', 'waardepropositie'], lvl: 3, kind: 'case',
  ctx: 'Een fictieve energiecoöperatie verliest jaarlijks 18% van haar leden aan goedkopere aanbieders. Het bestuur wil de tarieven verlagen.',
  q: 'Wat zou jij het bestuur adviseren of vragen voordat ze dat besluit nemen?',
  keys: [
    ['Eerst onderzoeken waarom leden vertrekken', 'waarom|oorzaak|onderzo|vragen|exit|enquête|interview|data'],
    ['Waardepropositie / onderscheid naast prijs', 'waarde|onderscheid|lokaal|duurzaam|coöperat|gemeenschap|propositie|service'],
    ['Effect op marge / betaalbaarheid', 'marge|kosten|verlies|betaalbaar|winst|rendement'],
    ['Segmenten / welke leden vertrekken', 'segment|welke leden|groep|type']
  ],
  model: '“Voordat we de prijs verlagen: weten we waarom leden vertrekken? Als het echt om prijs gaat, wat kost een verlaging aan marge, en houden we die vol? Misschien is ons onderscheid juist lokaal en duurzaam. Dan is het sterker om die waarde zichtbaarder te maken voor de leden die daarvoor gekozen hebben, en te accepteren dat prijsjagers vertrekken.”',
  alt: 'Ook sterk: een kleine pilot met een loyaliteitskorting voor bestaande leden, en meten wat dat met de churn doet.',
  why: 'Een prijsverlaging is duur en makkelijk na te doen. Begrijp eerst de oorzaak van vertrek en de eigen waardepropositie.' });
