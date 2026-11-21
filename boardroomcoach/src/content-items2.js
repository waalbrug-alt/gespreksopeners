/* ===== Oefenvragen deel 2 ===== */

/* ---------------- PROCESSEN & VERANDERING ---------------- */
I({ id: 'op1', t: 'mc', topic: 'ops', c: ['bottleneck'], lvl: 1, kind: 'begrip',
  ctx: 'Een fictieve fietsenfabriek heeft drie stappen: lassen (40 frames per dag), spuiten (25 per dag) en monteren (35 per dag).',
  q: 'Hoeveel fietsen kan de fabriek maximaal per dag afleveren, en waarom?',
  o: [
    ['25, omdat spuiten de bottleneck is.', 100, 'Juist: de langzaamste stap bepaalt het tempo van het geheel.'],
    ['35, het gemiddelde van de stappen.', 0, 'Een proces is zo snel als zijn traagste stap, niet het gemiddelde.'],
    ['40, want lassen is de eerste stap.', 0, 'Na het lassen stapelen de frames zich op bij het spuiten.'],
    ['100, de som van alle stappen.', 0, 'De stappen volgen elkaar op; ze tellen niet op.']
  ],
  hint: 'Zoek de stap met de laagste capaciteit.',
  why: 'Extra capaciteit bij lassen of monteren levert niets op zolang spuiten de bottleneck is (Theory of Constraints).' });

I({ id: 'op2', t: 'mc', topic: 'ops', c: ['bottleneck'], lvl: 2, kind: 'situatie',
  ctx: 'Dezelfde fietsenfabriek. De productiemanager stelt voor om €200.000 te investeren in een snellere lasrobot.',
  q: 'Wat is de beste reactie?',
  o: [
    ['“Spuiten is onze bottleneck. Zou dezelfde investering daar niet meer opleveren?”', 100, 'Sterk: je koppelt de investering aan de echte beperking.'],
    ['“Prima, sneller is altijd beter.”', 0, 'Sneller lassen vergroot alleen de stapel frames voor de spuiterij.'],
    ['“Wat is de terugverdientijd van de robot?”', 50, 'Goede standaardvraag, maar de berekening zal tegenvallen zolang de output niet stijgt. Benoem de bottleneck.'],
    ['“Kunnen we niet beter een extra ploeg monteurs inzetten?”', 10, 'Montage is ook geen bottleneck.']
  ],
  hint: 'Waar zit de beperking in het proces?',
  why: 'Investeringen buiten de bottleneck verhogen zelden de output. Vraag dus eerst: waar zit onze beperking?' });

I({ id: 'op3', t: 'mc', topic: 'ops', c: ['productiviteit'], lvl: 2, kind: 'toepassing',
  ctx: 'Een fictief ingenieursbureau rapporteert een declarabiliteit (bezettingsgraad) van 97%. Tegelijk lopen projecten uit en is het verzuim gestegen.',
  q: 'Hoe interpreteer je die 97%?',
  o: [
    ['Waarschijnlijk te hoog: er is geen ruimte voor onvoorzien werk, overleg en ontwikkeling, wat vertraging en verzuim kan verklaren.', 100, 'Sterk: je ziet dat een “goede” KPI een signaal van overbelasting kan zijn.'],
    ['Uitstekend, de mensen worden optimaal ingezet.', 10, 'Op papier wel, maar de andere signalen wijzen op overbelasting.'],
    ['Het cijfer is vast fout.', 10, 'Mogelijk, maar je mist het inhoudelijke verband met verzuim en uitloop.'],
    ['Er moeten meer projecten worden binnengehaald.', 0, 'Dat vergroot de druk verder.']
  ],
  hint: 'Wat gebeurt er met wachtrijen als een systeem bijna vol zit?',
  why: 'Boven circa 85% bezetting nemen wachttijden en fouten snel toe. Gezonde bureaus plannen bewust ruimte in.' });

I({ id: 'op4', t: 'mc', topic: 'ops', c: ['verandering'], lvl: 1, kind: 'begrip',
  q: 'Volgens het model van Kotter, wat is de eerste stap bij een grote organisatieverandering?',
  o: [
    ['Een gevoel van urgentie creëren.', 100, 'Juist: zonder gedeelde urgentie ontbreekt de energie om te veranderen.'],
    ['Een nieuw organogram maken.', 10, 'Structuur volgt later; begin bij het waarom.'],
    ['Snel resultaten boeken.', 30, 'Dat is ook een stap van Kotter (korte-termijnsuccessen), maar niet de eerste.'],
    ['De verandering verankeren in de cultuur.', 20, 'Dat is de laatste stap.']
  ],
  hint: 'Waarom zouden mensen willen veranderen?',
  why: 'Kotter: urgentie, coalitie, visie, communicatie, obstakels wegnemen, snelle successen, doorzetten, verankeren.' });

I({ id: 'op5', t: 'open', topic: 'ops', c: ['verandering', 'cultuur'], lvl: 3, kind: 'situatie',
  ctx: 'Bij Veldkamp Zorggroep (fictief) is een nieuw roostersysteem ingevoerd. Na drie maanden gebruikt de helft van de teams het niet; zij plannen nog in Excel. De directeur zegt: “Ze zijn gewoon tegen verandering.”',
  q: 'Hoe reageer je? Geef je inschatting en een concreet voorstel.',
  keys: [
    ['Weerstand als informatie zien / oorzaak onderzoeken', 'waarom|oorzaak|informatie|begrijp|signaal|ophalen|vragen|luisteren|gesprek'],
    ['Mogelijke oorzaken (training, gebruiksgemak, nut)', 'training|uitleg|gebruiks|werkt niet|onhandig|nut|tijd|systeem'],
    ['Betrekken van medewerkers / ambassadeurs', 'betrek|samen|ambassadeur|key.?user|team|medewerker'],
    ['Concreet voorstel met stap of meting', 'voorstel|pilot|stap|meten|evalu|binnen|week']
  ],
  model: '“Ik zou het niet meteen als onwil zien. Als de helft van de teams afhaakt, zegt dat vaak iets over het systeem of de invoering. Zullen we met twee teams die nog in Excel werken in gesprek gaan: wat werkt er niet? Met een paar enthousiaste key-users als aanspreekpunt kunnen we binnen een maand opnieuw meten.”',
  alt: 'Ook sterk: kijken naar wat de teams die het wél gebruiken anders doen, en dat als voorbeeld delen.',
  why: 'Weerstand is vaak informatie. Door de oorzaak te onderzoeken en mensen te betrekken vergroot je draagvlak en verbeter je de oplossing.' });

I({ id: 'op6', t: 'mc', topic: 'ops', c: ['lean'], lvl: 2, kind: 'toepassing',
  ctx: 'In een fictief distributiecentrum wachten orders gemiddeld 2 dagen op goedkeuring door een afdelingshoofd, terwijl het verzamelen zelf 20 minuten duurt.',
  q: 'Welke lean-verbetering ligt het meest voor de hand?',
  o: [
    ['De goedkeuringsstap schrappen of mandateren voor standaardorders, zodat het wachten verdwijnt.', 100, 'Sterk: het wachten is de grootste verspilling en voegt geen waarde toe voor de klant.'],
    ['Sneller leren verzamelen.', 10, 'Het verzamelen is al snel; daar zit de winst niet.'],
    ['Een extra afdelingshoofd aannemen.', 40, 'Kan het wachten verkorten, maar lost de onnodige stap niet op.'],
    ['De orders in batches van een week verwerken.', 0, 'Dat verlengt de doorlooptijd juist.']
  ],
  hint: 'Waar gaat de meeste tijd naartoe?',
  why: 'Lean kijkt naar de hele doorlooptijd. Vaak zit het grootste deel in wachten, niet in werken.' });

/* ---------------- LEIDERSCHAP & BESLUITVORMING ---------------- */
I({ id: 'le1', t: 'mc', topic: 'lead', c: ['besluitvorming'], lvl: 1, kind: 'begrip',
  q: 'In een RACI-matrix: wie is “Accountable”?',
  o: [
    ['De persoon die eindverantwoordelijk is en het besluit neemt; per taak precies één.', 100, 'Juist. Responsible voert uit, Accountable is eindverantwoordelijk.'],
    ['Iedereen die meewerkt aan de taak.', 0, 'Dat zijn de Responsible-rollen.'],
    ['Degene die om advies wordt gevraagd.', 0, 'Dat is Consulted.'],
    ['Degene die op de hoogte wordt gehouden.', 0, 'Dat is Informed.']
  ],
  hint: 'Het is de rol waarvan er maar één mag zijn.',
  why: 'Eén eindverantwoordelijke per besluit voorkomt dat iedereen op elkaar wacht.' });

I({ id: 'le2', t: 'mc', topic: 'lead', c: ['besluitvorming'], lvl: 2, kind: 'situatie',
  ctx: 'Je presenteert een voorstel in een directievergadering. Na tien minuten discussie is onduidelijk wat er nu besloten wordt.',
  q: 'Wat doe je?',
  o: [
    ['Samenvatten wat je hebt gehoord en expliciet vragen: “Kunnen we besluiten om …, of hebben jullie nog informatie nodig om te besluiten?”', 100, 'Sterk: je maakt het type besluit en de volgende stap expliciet, zonder te drammen.'],
    ['Wachten tot de voorzitter iets zegt.', 10, 'Dan loop je het risico dat je zonder besluit vertrekt.'],
    ['Je voorstel nog een keer uitleggen.', 30, 'Soms nodig, maar zonder een expliciete besluitvraag blijft het hangen.'],
    ['Vragen of je het voorstel per mail kunt nasturen.', 40, 'Redelijk als vangnet, maar je laat het moment liggen om helderheid te krijgen.']
  ],
  hint: 'Wat heb je nodig om de vergadering met duidelijkheid te verlaten?',
  why: 'Maak bij elk agendapunt helder of het gaat om informeren, adviseren of besluiten, en sluit af met wie wat doet.' });

I({ id: 'le3', t: 'mc', topic: 'lead', c: ['cultuur'], lvl: 2, kind: 'toepassing',
  ctx: 'Een fictieve verzekeraar heeft “klantgericht” als kernwaarde. Medewerkers krijgen een bonus op het aantal afgehandelde dossiers per uur.',
  q: 'Wat zegt dit over de cultuur?',
  o: [
    ['De beloning stuurt op snelheid, dus de werkelijke cultuur is waarschijnlijk productiegericht, ongeacht de kernwaarde.', 100, 'Sterk: cultuur volgt wat je beloont, niet wat je opschrijft.'],
    ['De cultuur is klantgericht, want dat is de kernwaarde.', 0, 'Kernwaarden op papier zeggen weinig als het gedrag anders wordt beloond.'],
    ['Er is niets aan de hand, snelheid is ook klantgericht.', 40, 'Er zit een kern van waarheid in: snelheid kan klanten helpen. Maar zonder kwaliteitsmaat ontstaat spanning.'],
    ['Medewerkers moeten de kernwaarde beter leren kennen.', 10, 'Training lost niet op dat het beloningssysteem iets anders vraagt.']
  ],
  hint: 'Wat doen mensen werkelijk als je ze op één getal beloont?',
  why: 'Cultuur zie je in gedrag, en gedrag volgt prikkels. Een beloning die botst met de kernwaarde wint bijna altijd.' });

I({ id: 'le4', t: 'mc', topic: 'lead', c: ['leiderschapsstijl'], lvl: 2, kind: 'toepassing',
  ctx: 'Een ervaren, zeer gemotiveerd team krijgt een nieuwe leidinggevende die elke beslissing wil goedkeuren.',
  q: 'Wat is het meest waarschijnlijke effect, volgens situationeel leiderschap?',
  o: [
    ['Frustratie en minder eigenaarschap: een ervaren team heeft vooral ruimte en vertrouwen nodig (delegeren).', 100, 'Juist: de stijl past niet bij de volwassenheid van het team.'],
    ['Betere resultaten door meer controle.', 10, 'Bij een onervaren team misschien; bij een ervaren team meestal niet.'],
    ['Geen effect.', 0, 'Leiderschapsstijl heeft wel degelijk effect op motivatie.'],
    ['Het team leert sneller.', 10, 'Het team is al ervaren; het leert eerder om af te wachten.']
  ],
  hint: 'Wat heeft een ervaren, gemotiveerd team nodig?',
  why: 'Hersey en Blanchard: pas de stijl aan aan bekwaamheid en motivatie. Sturen bij beginners, delegeren bij ervaren professionals.' });

I({ id: 'le5', t: 'open', topic: 'lead', c: ['besluitvorming', 'stakeholders'], lvl: 3, kind: 'situatie',
  ctx: 'De directeur van Groenewoud Kwekerijen (fictief) vraagt je: “Ik wil volgende maand besluiten om de verkoop aan particulieren te stoppen. Wat moet ik nog regelen voordat ik dat besluit neem?”',
  q: 'Wat adviseer je? Noem wat er nodig is voor een goed besluit.',
  keys: [
    ['Onderbouwing met cijfers (marge, omzetaandeel)', 'cijfers|marge|omzet|winst|kosten|data|aandeel'],
    ['Stakeholders betrekken (personeel, klanten, RvC/eigenaar)', 'stakeholder|personeel|medewerker|klant|rvc|commissaris|eigenaar|aandeelhouder|ondernemingsraad|or\\b'],
    ['Gevolgen en risico’s', 'risico|gevolg|impact|afhankelijk|ketens|scenario'],
    ['Alternatieven of gefaseerde aanpak', 'alternatie|optie|afbouw|faseer|stap|pilot|niets doen']
  ],
  model: '“Ik zou drie dingen regelen. Eén: de cijfers. Wat levert de particuliere verkoop op aan marge, en welke kosten vallen echt weg? Twee: de gevolgen. We worden afhankelijker van de bouwmarkten, dus wat betekent dat voor ons risico? Drie: wie we betrekken. Medewerkers, eventueel de ondernemingsraad en de eigenaren of RvC. Leg ook een alternatief naast het voorstel, bijvoorbeeld gefaseerd afbouwen.”',
  alt: 'Ook goed: eerst bepalen wie het besluit formeel neemt en of er goedkeuring van toezichthouders of adviesrecht van de ondernemingsraad nodig is.',
  why: 'Een goed besluit heeft een onderbouwing, zicht op gevolgen en risico’s, een helder besluitvormingsproces en draagvlak bij de belangrijkste stakeholders.' });

/* ---------------- GOVERNANCE & RISICO ---------------- */
I({ id: 'go1', t: 'mc', topic: 'gov', c: ['governance'], lvl: 1, kind: 'begrip',
  q: 'Wat is de belangrijkste rol van een raad van commissarissen (RvC)?',
  o: [
    ['Toezicht houden op het bestuur en de directie adviseren; ook vaak de werkgever van de bestuurders.', 100, 'Juist: de RvC bestuurt niet zelf, maar houdt toezicht en adviseert.'],
    ['Het dagelijks bestuur van het bedrijf.', 0, 'Dat is de taak van de directie of raad van bestuur.'],
    ['De jaarrekening opstellen.', 10, 'Dat doet het bestuur; de accountant controleert, de RvC houdt toezicht.'],
    ['De belangen van de medewerkers vertegenwoordigen.', 10, 'Dat doet vooral de ondernemingsraad. De RvC richt zich op het belang van de organisatie als geheel.']
  ],
  hint: 'Bestuur en toezicht zijn gescheiden.',
  why: 'In het Nederlandse model houdt de RvC (of RvT in de non-profit) toezicht op het beleid en de algemene gang van zaken, en staat het bestuur met raad terzijde.' });

I({ id: 'go2', t: 'mc', topic: 'gov', c: ['risicomanagement'], lvl: 1, kind: 'begrip',
  q: 'Hoe wordt een risico meestal geprioriteerd in een risicomatrix?',
  o: [
    ['Op kans maal impact.', 100, 'Juist: een klein risico met enorme impact kan net zo belangrijk zijn als een groot risico met beperkte impact.'],
    ['Op de kosten van de maatregel.', 10, 'Die bepalen hoe je het risico aanpakt, niet hoe groot het is.'],
    ['Op wie het risico heeft gemeld.', 0, 'Dat zegt niets over de omvang.'],
    ['Op hoe recent het risico is ontdekt.', 0, 'Ook dat zegt niets over de omvang.']
  ],
  hint: 'Twee dimensies.',
  why: 'Kans × impact geeft een prioriteit. Daarna kies je per risico: vermijden, verminderen, overdragen (bijvoorbeeld verzekeren) of accepteren.' });

I({ id: 'go3', t: 'mc', topic: 'gov', c: ['stakeholders'], lvl: 2, kind: 'toepassing',
  ctx: 'Koster Logistiek (fictief) wil een nieuw distributiecentrum bouwen aan de rand van een dorp. Omwonenden zijn bezorgd over verkeer.',
  q: 'Hoe pak je het stakeholdermanagement het best aan?',
  o: [
    ['Vroeg in gesprek gaan met omwonenden en gemeente, zorgen serieus nemen en waar mogelijk meenemen in het ontwerp (bijvoorbeeld de route van vrachtverkeer).', 100, 'Sterk: vroeg betrekken van partijen met invloed en belang voorkomt vertraging en bezwaarprocedures.'],
    ['Eerst de vergunning regelen en daarna informeren.', 10, 'Dat vergroot de kans op bezwaar en verlies van vertrouwen.'],
    ['Alleen de gemeente betrekken, want die beslist.', 40, 'De gemeente is belangrijk, maar omwonenden kunnen via bezwaar en politiek veel invloed uitoefenen.'],
    ['Een persbericht sturen over de banen die het oplevert.', 30, 'Positieve communicatie helpt, maar beantwoordt de zorgen niet.']
  ],
  hint: 'Wie heeft invloed op het slagen van dit project?',
  why: 'Een stakeholderanalyse op macht en belang laat zien wie je nauw moet betrekken. Vroege dialoog is meestal goedkoper dan late weerstand.' });

I({ id: 'go4', t: 'mc', topic: 'gov', c: ['governance', 'besluitvorming'], lvl: 2, kind: 'situatie',
  ctx: 'Een directeur wil een concurrent overnemen voor €8 miljoen. Volgens de statuten zijn investeringen boven €2 miljoen onderworpen aan goedkeuring van de RvC.',
  q: 'Wat is de juiste volgorde?',
  o: [
    ['De directie bereidt het voorstel voor, informeert de RvC tijdig, en sluit pas definitief na goedkeuring van de RvC.', 100, 'Juist. Vroeg informeren voorkomt verrassingen; formeel heeft de RvC hier goedkeuringsrecht.'],
    ['De directie tekent en informeert de RvC achteraf.', 0, 'Dat is in strijd met de statuten en ondermijnt het vertrouwen.'],
    ['De RvC onderhandelt namens het bedrijf.', 0, 'De RvC bestuurt niet; de directie onderhandelt.'],
    ['De directie tekent onder voorbehoud van goedkeuring door de RvC.', 70, 'Kan in de praktijk, mits de RvC al vroeg is meegenomen. Zonder vooroverleg zet je de RvC wel onder druk.']
  ],
  hint: 'Wie heeft hier formeel goedkeuringsrecht?',
  why: 'Statuten leggen vaak vast welke besluiten goedkeuring van de RvC vragen. Goede governance betekent ook: geen verrassingen voor de toezichthouder.' });

I({ id: 'go5', t: 'open', topic: 'gov', c: ['risicomanagement', 'compliance'], lvl: 2, kind: 'situatie',
  ctx: 'Lumina Software (fictief) wil klantdata gebruiken om een nieuwe AI-functie te bouwen. De productmanager zegt: “Dat mag vast, het staat in de voorwaarden.”',
  q: 'Welke risico’s benoem je, en welke vraag stel je?',
  keys: [
    ['Privacy / AVG', 'avg|privacy|persoonsgegeven|gdpr|toestemming|verwerk'],
    ['Reputatie of vertrouwen van klanten', 'reputatie|vertrouwen|imago|klanten.*boos|media'],
    ['Juridisch toetsen / eigenaar aanwijzen', 'jurist|juridisch|legal|toets|functionaris|fg|eigenaar|privacy officer|advies'],
    ['Maatregel (anonimiseren, toestemming, beperken)', 'anonim|pseudonim|toestemming|opt|beperk|minimal']
  ],
  model: '“Ik zie twee risico’s: privacy, want onder de AVG moeten we een geldige grondslag hebben voor dit nieuwe gebruik, en vertrouwen: klanten verwachten misschien niet dat hun data hiervoor wordt gebruikt. Kunnen we dit laten toetsen door onze privacyjurist en kijken of het met geanonimiseerde data kan?”',
  alt: 'Ook relevant: contractuele afspraken met klanten (verwerkersovereenkomst) en informatiebeveiliging.',
  why: 'Compliance is meer dan de voorwaarden: het gaat om wetgeving, contracten en vertrouwen. Benoem het risico, de eigenaar en een beheersmaatregel.' });

I({ id: 'go6', t: 'mc', topic: 'gov', c: ['risicomanagement'], lvl: 3, kind: 'toepassing',
  ctx: 'Een fictieve voedselproducent haalt 80% van een kritieke grondstof bij één leverancier in het buitenland. Kans op uitval: laag. Impact: productie ligt stil.',
  q: 'Welke reactie op dit risico is het meest passend?',
  o: [
    ['Het risico verminderen met een tweede leverancier of een buffervoorraad, afgewogen tegen de kosten daarvan.', 100, 'Sterk: bij een hoge impact is accepteren riskant, en je weegt de kosten van de maatregel mee.'],
    ['Accepteren, de kans is immers laag.', 30, 'Kan een bewuste keuze zijn als de organisatie het risico kan dragen, maar bij stilstand van de productie is dat zelden zo.'],
    ['Verzekeren tegen bedrijfsschade.', 60, 'Een redelijke manier om het risico over te dragen, maar het voorkomt niet dat klanten weglopen tijdens de stilstand.'],
    ['Niets doen tot het misgaat.', 0, 'Dat is geen risicomanagement.']
  ],
  hint: 'Lage kans, maar zeer hoge impact.',
  why: 'Opties bij risico’s: vermijden, verminderen, overdragen of accepteren. Bij hoge impact is de risicobereidheid van de organisatie bepalend.' });

/* ---------------- INVESTEREN ---------------- */
I({ id: 'in1', t: 'calc', topic: 'inv', c: ['terugverdientijd'], lvl: 1, kind: 'cijfers',
  ctx: 'Bakkerij Ten Hove (fictief) overweegt een nieuwe oven van €240.000. Die bespaart €80.000 per jaar aan energie en arbeid.',
  q: 'Wat is de terugverdientijd in jaren?',
  ans: 3, tol: 0.05, unit: 'jaar',
  hint: 'Investering gedeeld door jaarlijkse besparing.',
  steps: '240.000 ÷ 80.000 = 3 jaar.',
  why: 'Eenvoudig en goed uit te leggen. Let wel: de terugverdientijd negeert wat er na drie jaar gebeurt en de tijdswaarde van geld.' });

I({ id: 'in2', t: 'calc', topic: 'inv', c: ['roi'], lvl: 1, kind: 'cijfers',
  ctx: 'Een fictief marketingproject kost €50.000 en levert €65.000 extra brutowinst op.',
  q: 'Wat is de ROI in procenten?',
  ans: 30, tol: 0.5, unit: '%',
  hint: 'ROI = (opbrengst − investering) ÷ investering.',
  steps: '(65.000 − 50.000) ÷ 50.000 = 0,30 → 30%.',
  why: 'Let op de looptijd: 30% in één jaar is iets heel anders dan 30% over vijf jaar.' });

I({ id: 'in3', t: 'mc', topic: 'inv', c: ['ncw'], lvl: 2, kind: 'begrip',
  q: 'Een investering heeft een netto contante waarde (NCW) van −€50.000 bij een disconteringsvoet van 8%. Wat betekent dat?',
  o: [
    ['De investering haalt niet het vereiste rendement van 8%; financieel is ze bij deze aannames niet aantrekkelijk.', 100, 'Juist. Een negatieve NCW betekent: minder rendement dan je eist.'],
    ['De investering levert €50.000 verlies op.', 30, 'Niet precies: het project kan wel winst maken, maar minder dan 8% rendement.'],
    ['De disconteringsvoet is te laag.', 10, 'De voet is een keuze (vaak het vereiste rendement), geen uitkomst.'],
    ['De investering is altijd een slecht idee.', 20, 'Er kunnen strategische redenen zijn om toch te investeren. Maak die dan wel expliciet.']
  ],
  hint: 'Negatieve NCW: wat zegt dat over het rendement ten opzichte van de eis?',
  why: 'NCW rekent toekomstige kasstromen terug naar nu. Positief: meer dan het vereiste rendement. Negatief: minder.' });

I({ id: 'in4', t: 'mc', topic: 'inv', c: ['sunk-cost'], lvl: 2, kind: 'situatie',
  ctx: 'Een fictieve gemeente heeft al €3 miljoen besteed aan een nieuw IT-systeem. Afronden kost nog €4 miljoen. Een kant-en-klaar alternatief kost €2,5 miljoen en doet hetzelfde.',
  q: 'Welke redenering is het sterkst?',
  o: [
    ['De €3 miljoen is al uitgegeven en komt niet terug; vergelijk €4 miljoen met €2,5 miljoen, plus risico’s en overstapkosten.', 100, 'Sterk: je laat de sunk costs buiten de afweging en vergelijkt alleen toekomstige kosten en baten.'],
    ['Doorgaan, anders is de €3 miljoen weggegooid.', 0, 'Dat is precies de sunk-cost-valkuil.'],
    ['Het alternatief kiezen, want dat is goedkoper.', 60, 'De conclusie kan kloppen, maar check ook implementatierisico’s en of het alternatief echt hetzelfde doet.'],
    ['Een extern onderzoek laten doen voordat iets wordt besloten.', 40, 'Soms verstandig, maar het kan ook uitstel zijn terwijl de kosten doorlopen.']
  ],
  hint: 'Welk geld kun je nog beïnvloeden?',
  why: 'Alleen toekomstige kosten en baten horen in een besluit. Sunk costs voelen zwaar, maar veranderen de keuze niet.' });

I({ id: 'in5', t: 'open', topic: 'inv', c: ['businesscase', 'scenario'], lvl: 2, kind: 'case',
  ctx: 'De COO van Koster Logistiek (fictief) presenteert een businesscase voor elektrische vrachtwagens: €3 miljoen investering, terugverdientijd 4 jaar, “gebaseerd op de huidige dieselprijs en een subsidie van 30%”.',
  q: 'Welke kritische maar constructieve vragen stel je?',
  keys: [
    ['Gevoeligheid voor dieselprijs / energieprijs', 'diesel|brandstof|energie|stroom|prijs'],
    ['Zekerheid van de subsidie', 'subsidie|zeker|toegekend|voorwaarden'],
    ['Scenario’s of gevoeligheidsanalyse', 'scenario|gevoelig|slechter|tegenval|pessimist|wat als|wat gebeurt'],
    ['Andere kosten/risico’s (laadinfra, actieradius, restwaarde, onderhoud)', 'laad|infra|actieradius|restwaarde|onderhoud|batterij|chauffeur|planning']
  ],
  model: '“Mooi dat er een concreet voorstel ligt. Twee aannames bepalen veel: de dieselprijs en de subsidie. Hoe ziet de terugverdientijd eruit als de dieselprijs 20% daalt of als de subsidie maar 15% wordt? En zitten de laadinfrastructuur en de restwaarde van de batterijen al in de berekening?”',
  alt: 'Ook sterk: vragen naar niet-financiële baten, zoals toegang tot milieuzones of eisen van klanten op CO2-uitstoot.',
  why: 'Een businesscase is zo sterk als de aannames. Een gevoeligheidsanalyse laat zien welke aannames het verschil maken.' });

I({ id: 'in6', t: 'mc', topic: 'inv', c: ['scenario'], lvl: 3, kind: 'toepassing',
  ctx: 'Een businesscase toont drie scenario’s: “basis” (NCW +€2,0 mln), “optimistisch” (+€3,5 mln) en “zeer optimistisch” (+€5,0 mln).',
  q: 'Wat is de belangrijkste kritiek?',
  o: [
    ['Er ontbreekt een tegenvallend scenario; je weet niet hoe groot het neerwaartse risico is.', 100, 'Juist. Scenario’s horen ook te laten zien wat er gebeurt als het tegenzit.'],
    ['Het basisscenario is te voorzichtig.', 10, 'Daar is geen aanwijzing voor; het probleem zit aan de andere kant.'],
    ['Er zijn te veel scenario’s.', 0, 'Drie is gebruikelijk; het gaat om de spreiding.'],
    ['De NCW is niet de juiste maatstaf.', 20, 'NCW is een gangbare maatstaf; het probleem zit in de scenario’s zelf.']
  ],
  hint: 'Wat zou de RvC willen weten voordat ze instemt?',
  why: 'Goede scenario-analyse laat een realistische bandbreedte zien, inclusief een scenario dat pijn doet.' });

I({ id: 'in7', t: 'open', topic: 'inv', c: ['businesscase', 'sunk-cost', 'roi'], lvl: 3, kind: 'case',
  ctx: 'Hofstede Interieur (fictief) twijfelt tussen twee opties. A: een webshop bouwen (€400.000, verwachte extra brutowinst €150.000 per jaar). B: de showroom vernieuwen (€300.000, verwachte extra brutowinst €80.000 per jaar). Het budget is €400.000.',
  q: 'Hoe zou jij de keuze voor het MT voorbereiden? Noem welke informatie je nog mist.',
  keys: [
    ['Vergelijkt rendement/terugverdientijd (A ca. 2,7 jaar, B ca. 3,75 jaar)', '2[,.]7|3[,.]75|3[,.]8|terugverd|rendement|roi|ncw'],
    ['Benoemt onzekerheid / aannames van de verwachtingen', 'aanname|onzeker|zeker|risico|realistisch|verwacht|scenario'],
    ['Strategische fit / klantgedrag', 'strateg|klant|doelgroep|online|kanaal|merk|past'],
    ['Opportuniteitskosten / combinatie / niets doen', 'opportun|alternatie|combin|fase|niets doen|beide|resterend']
  ],
  model: '“Op basis van de cijfers verdient A zich in ongeveer 2,7 jaar terug en B in 3,75 jaar, dus A lijkt sterker. Maar de webshop-schatting is onzekerder: we hebben nog geen online ervaring. Ik zou willen weten op welke aannames die €150.000 is gebaseerd, hoe het tegenvallende scenario eruitziet, en welke optie het best past bij hoe onze klanten in de toekomst willen kopen. Ook de optie ‘gefaseerd beginnen met een kleinere webshop’ verdient een plek.”',
  alt: 'Verdedigbaar is ook om B te kiezen als de showroom het merk draagt en de webshop zonder showroom slecht verkoopt. Of om eerst een kleine pilot te doen.',
  why: 'Een goede voorbereiding vergelijkt rendement en risico, maakt aannames zichtbaar en koppelt de keuze aan de strategie.' });

I({ id: 'in8', t: 'mc', topic: 'inv', c: ['roi', 'businesscase'], lvl: 2, kind: 'situatie',
  ctx: 'Een leverancier belooft een ROI van 300% op nieuwe software.',
  q: 'Welke vraag stel je als eerste?',
  o: [
    ['“Over welke periode, en welke kosten en baten zitten erin, ook implementatie, training en onze eigen uren?”', 100, 'Sterk: zo ontdek je of de ROI vergelijkbaar en volledig is.'],
    ['“Kunnen we korting krijgen?”', 10, 'Mag, maar dat zegt niets over de betrouwbaarheid van de belofte.'],
    ['“Welke klanten gingen ons voor?”', 60, 'Goede vraag voor referenties, maar de ROI-berekening zelf blijft ongetoetst.'],
    ['“Wat is ROI?”', 20, 'Eerlijk, maar je hebt dit begrip al geleerd!']
  ],
  hint: 'Een ROI zonder periode en kostenposten zegt weinig.',
  why: 'Laat bij elke ROI de looptijd, de kostenposten en de aannames zien. Leveranciersberekeningen zijn vaak optimistisch.' });

/* ----- extra variaties voor herhaling in een andere context ----- */
I({ id: 'fi9', t: 'mc', topic: 'fin', c: ['ebitda'], lvl: 1, kind: 'begrip',
  q: 'Welke kosten zitten níet in de EBITDA verwerkt?',
  o: [
    ['Rente, belastingen en afschrijvingen.', 100, 'Juist: die staan “onder de streep” van de EBITDA.'],
    ['Personeelskosten.', 0, 'Personeelskosten zijn al wel afgetrokken.'],
    ['Inkoopkosten.', 0, 'Inkoopkosten zijn al wel afgetrokken.'],
    ['Huur.', 10, 'Huur is meestal al afgetrokken (bij sommige boekhoudregels wordt lease anders behandeld, maar dat is een detail).']
  ],
  hint: 'Kijk naar de letters: Interest, Taxes, Depreciation, Amortization.',
  why: 'EBITDA = operationeel resultaat vóór rente, belastingen en afschrijvingen. Handig om bedrijven te vergelijken, maar geen cash.' });

I({ id: 'kp8', t: 'mc', topic: 'kpi', c: ['begroting-afwijking'], lvl: 1, kind: 'begrip',
  ctx: 'In de rapportage staat: “Omzet YTD €4,2 mln, begroting YTD €4,5 mln.”',
  q: 'Wat lees je hieruit?',
  o: [
    ['Van januari tot nu zit de omzet €0,3 mln (ongeveer 7%) onder de begroting.', 100, 'Juist. YTD betekent vanaf het begin van het jaar.'],
    ['De jaaromzet wordt €4,2 mln.', 10, 'YTD is een tussenstand, geen jaarprognose.'],
    ['Het bedrijf maakt verlies.', 0, 'Omzet onder begroting zegt nog niets over winst of verlies.'],
    ['De begroting moet omhoog.', 0, 'Eerder andersom, als je al iets zou willen aanpassen. Begrijp eerst de oorzaak.']
  ],
  hint: 'YTD = year-to-date.',
  why: 'Een volgende stap: is dit een timingverschil (orders schuiven door) of een structureel tekort?' });

I({ id: 'op7', t: 'calc', topic: 'ops', c: ['productiviteit'], lvl: 2, kind: 'cijfers',
  ctx: 'Een fictief adviesteam van 10 FTE heeft per persoon 1.600 beschikbare uren per jaar. Het team schreef in totaal 12.000 declarabele uren.',
  q: 'Wat is de bezettingsgraad (declarabiliteit) in procenten?',
  ans: 75, tol: 0.5, unit: '%',
  hint: 'Declarabele uren ÷ beschikbare uren.',
  steps: 'Beschikbaar: 10 × 1.600 = 16.000 uur. 12.000 ÷ 16.000 = 0,75 → 75%.',
  why: 'Of 75% goed is, hangt af van de norm en het type werk. Vraag altijd naar de norm en wat er met de niet-declarabele uren gebeurt.' });

I({ id: 'le6', t: 'mc', topic: 'lead', c: ['cultuur', 'verandering'], lvl: 3, kind: 'situatie',
  ctx: 'Na een fusie van twee fictieve woningcorporaties werken de teams langs elkaar heen. De ene organisatie was gewend aan snelle informele besluiten, de andere aan zorgvuldige procedures.',
  q: 'Welke aanpak heeft de meeste kans van slagen?',
  o: [
    ['Beide culturen expliciet bespreken, samen bepalen wat je van elk wilt behouden, en leidinggevenden het nieuwe gedrag laten voorleven.', 100, 'Sterk: je maakt de ongeschreven regels zichtbaar en bouwt samen iets nieuws.'],
    ['De cultuur van de grootste organisatie overnemen.', 30, 'Duidelijk, maar je verliest de sterke kanten van de ander en wekt weerstand.'],
    ['Een nieuwe set kernwaarden laten ontwerpen door een bureau.', 20, 'Woorden alleen veranderen het gedrag niet.'],
    ['Het tijd geven; het groeit vanzelf naar elkaar toe.', 10, 'Soms gebeurt dat, maar vaak verharden de tegenstellingen.']
  ],
  hint: 'Cultuur zit in gedrag en ongeschreven regels.',
  why: 'Cultuurverschillen zijn een van de meest genoemde redenen waarom fusies tegenvallen. Benoemen, kiezen en voorleven werkt beter dan kernwaarden op papier.' });

I({ id: 'mk8', t: 'mc', topic: 'mkt', c: ['salesfunnel'], lvl: 1, kind: 'begrip',
  ctx: 'Van 200 leads komen er 50 tot een gesprek, 20 tot een offerte en 5 tot een order.',
  q: 'Waar zit het grootste relatieve verlies in de funnel?',
  o: [
    ['Van lead naar gesprek: 75% valt af.', 100, 'Juist: 50 van de 200 = 25% conversie. Daarna 40% en 25%.'],
    ['Van offerte naar order: 15 offertes leveren niets op.', 70, 'Ook een verlies van 75%, dus even groot relatief. Juist hier zit veel werk (offertes maken), dus een prima aandachtspunt.'],
    ['Van gesprek naar offerte.', 20, 'Daar valt 60% af, relatief minder dan in de andere stappen.'],
    ['Nergens, 5 orders is prima.', 0, 'Dat hangt af van het doel; de vraag gaat over de conversie per stap.']
  ],
  hint: 'Bereken per stap welk percentage doorgaat.',
  why: 'Conversie per stap laat zien waar je moet verbeteren. Hier verliezen twee stappen elk 75%; de vervolgvraag is waar je het meest kunt winnen.' });

I({ id: 'go7', t: 'mc', topic: 'gov', c: ['stakeholders'], lvl: 1, kind: 'begrip',
  q: 'In een stakeholdermatrix (macht en belang): hoe ga je om met een partij met veel macht maar weinig belang?',
  o: [
    ['Tevreden houden: goed informeren en zorgen dat ze geen tegenstander worden.', 100, 'Juist. Nauw betrekken is voor partijen met veel macht én veel belang.'],
    ['Nauw betrekken in elke beslissing.', 30, 'Dat is voor partijen met veel macht en veel belang.'],
    ['Negeren.', 0, 'Riskant: als hun belang groeit, kunnen ze het project blokkeren.'],
    ['Alleen informeren via de nieuwsbrief.', 30, 'Te weinig voor een partij met veel macht.']
  ],
  hint: 'Vier kwadranten: nauw betrekken, tevreden houden, informeren, monitoren.',
  why: 'De matrix van Mendelow helpt om bewust te kiezen hoeveel aandacht elke stakeholder krijgt.' });

I({ id: 'st9', t: 'mc', topic: 'strat', c: ['vijf-krachten', 'concurrentievoordeel'], lvl: 3, kind: 'situatie',
  ctx: 'Een fictieve regionale taxicentrale verliest klanten aan een ritten-app. De directeur wil investeren in nieuwe auto’s.',
  q: 'Welke analyse is het meest behulpzaam voordat er geïnvesteerd wordt?',
  o: [
    ['Begrijpen waarom klanten naar de app gaan (gemak, prijs, beschikbaarheid) en of nieuwe auto’s daar iets aan doen.', 100, 'Sterk: de dreiging is een vervangend product. Nieuwe auto’s lossen mogelijk het verkeerde probleem op.'],
    ['De prijzen van de concurrent vergelijken.', 50, 'Een deel van het antwoord, maar gemak en beschikbaarheid spelen vaak een grotere rol.'],
    ['Een SWOT maken.', 40, 'Kan helpen, mits je de inzichten verbindt aan de keuze. Op zichzelf te algemeen.'],
    ['Meteen investeren; stilstand is achteruitgang.', 0, 'Investeren zonder de oorzaak te kennen is riskant.']
  ],
  hint: 'Welke van de vijf krachten zie je hier?',
  why: 'De dreiging van substituten verandert de spelregels. Vraag eerst welke klantbehoefte de nieuwe speler beter vervult.' });

I({ id: 'in9', t: 'calc', topic: 'inv', c: ['ncw'], lvl: 3, kind: 'cijfers',
  ctx: 'Een fictieve investering van €100.000 levert over precies één jaar €110.000 op. Het vereiste rendement (disconteringsvoet) is 5%.',
  q: 'Wat is de NCW in euro’s (afgerond op hele euro’s)?',
  ans: 4762, tol: 5, unit: '€',
  hint: 'Contante waarde = 110.000 ÷ 1,05. Trek daar de investering van af.',
  steps: '110.000 ÷ 1,05 = 104.762. NCW = 104.762 − 100.000 = €4.762.',
  why: 'Positief: de investering levert meer op dan de vereiste 5%. Met een disconteringsvoet van 10% zou de NCW precies 0 zijn.' });

I({ id: 'fi10', t: 'open', topic: 'fin', c: ['cashflow', 'werkkapitaal'], lvl: 3, kind: 'case',
  ctx: 'Brouwer Installatietechniek (fictief) heeft een recordorder binnengehaald van €3 miljoen. De klant betaalt pas bij oplevering na negen maanden. Materiaal en personeel moeten vanaf maand één worden betaald.',
  q: 'Wat zou jij de directeur vragen of adviseren voordat het contract wordt getekend?',
  keys: [
    ['Benoemt cash- of financieringsbehoefte', 'cash|kas|liquid|financier|krediet|voorfinanc|bank'],
    ['Stelt termijnbetalingen of aanbetaling voor', 'termijn|aanbetal|vooruit|deelbetal|mijlpaal|betaalschema'],
    ['Risico van één grote klant / debiteurenrisico', 'risico|afhankelijk|failliss|wanbetal|zekerheid|garantie|bankgarantie'],
    ['Effect op ander werk / capaciteit', 'capaciteit|ander werk|personeel|planning']
  ],
  model: '“Gefeliciteerd, dit is een mooie order. Tegelijk moeten we ongeveer negen maanden voorfinancieren. Hoeveel cash hebben we op het dieptepunt nodig, en heeft de bank daar ruimte voor? Ik zou proberen termijnbetalingen per mijlpaal af te spreken, en het risico afdekken als de klant niet betaalt, bijvoorbeeld met een bankgarantie.”',
  alt: 'Ook sterk: vragen of de marge hoog genoeg is om financieringskosten te dragen, en wat deze order betekent voor de capaciteit voor andere klanten.',
  why: 'Een grote order kan winstgevend zijn en toch een cashprobleem veroorzaken. Betaalafspraken zijn hier net zo belangrijk als de prijs.' });
