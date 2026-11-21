/* ===== Praktijksimulaties (fictieve bedrijven) ===== */
const SIMS = [
  {
    id: 'sim-cash', title: 'Groeien zonder geld', topic: 'fin', minutes: 12, lvl: 2,
    company: 'Noordhout Meubelmakers',
    who: 'Ingrid Noordhout, algemeen directeur',
    intro: 'Noordhout maakt maatwerkmeubels voor hotels en kantoren. Het bedrijf groeit hard. Ingrid heeft je uitgenodigd om mee te denken voor het MT-overleg van volgende week.',
    assumptions: [
      'Alle cijfers zijn fictief en afgerond.',
      'Omzet dit jaar €9 mln (vorig jaar €6,9 mln), nettowinst €450.000 (vorig jaar €410.000).',
      'Banksaldo gedaald van €800.000 naar €320.000; de kredietlimiet is €500.000.',
      'Openstaande facturen bij klanten: €1,5 mln. Voorraad hout en halffabricaten: €1,1 mln.'
    ],
    steps: [
      { id: 'sc1', t: 'mc', topic: 'fin', c: ['cashflow', 'omzet-winst'], lvl: 2, kind: 'toepassing',
        say: 'Ingrid: “We groeien 30% en we maken winst. Toch zegt mijn controller dat we krap zitten. Ik snap het eerlijk gezegd niet. Waar moet ik naar kijken?”',
        q: 'Wat zeg je?',
        o: [
          ['“Groei kost vaak eerst geld: meer voorraad en meer openstaande facturen. Laten we kijken hoeveel cash er vastzit in werkkapitaal.”', 100, 'Sterk: je legt het mechanisme in gewone taal uit en wijst naar de plek waar het geld zit.'],
          ['“Dan moet de controller de cijfers nog eens controleren.”', 10, 'Je gaat voorbij aan een veelvoorkomend en verklaarbaar verschijnsel.'],
          ['“U moet de kosten verlagen.”', 20, 'De winst is prima; het probleem zit in de timing van geldstromen.'],
          ['“Wat is uw EBITDA?”', 30, 'Je stelt een vraag, maar EBITDA verklaart het cashprobleem juist niet.']
        ],
        hint: 'Winst en cash lopen niet gelijk op bij groei.',
        why: 'Bij snelle groei financier je eerst voorraad en debiteuren voordat het geld binnenkomt. Dit heet ook wel de groeival.' },
      { id: 'sc2', t: 'calc', topic: 'fin', c: ['werkkapitaal'], lvl: 2, kind: 'cijfers',
        say: 'Ingrid: “Klanten betalen eigenlijk best netjes, denk ik.”',
        q: 'Bereken de gemiddelde betaaltermijn van klanten (DSO) in dagen: openstaande facturen ÷ jaaromzet × 365. Rond af op hele dagen.',
        ans: 61, tol: 1, unit: 'dagen',
        hint: '1,5 ÷ 9 × 365.',
        steps: '1.500.000 ÷ 9.000.000 = 0,1667 × 365 ≈ 61 dagen.',
        why: 'Klanten betalen gemiddeld na ongeveer twee maanden, terwijl 30 dagen gangbaar is in deze branche. Dat verschil is een flinke cashbron.' },
      { id: 'sc3', t: 'mc', topic: 'fin', c: ['werkkapitaal'], lvl: 2, kind: 'cijfers',
        say: 'Ingrid: “Twee maanden? Wat levert het op als we dat naar 30 dagen krijgen?”',
        q: 'Ongeveer hoeveel cash komt er dan vrij?',
        o: [
          ['Ruim €700.000 (31 dagen × €9 mln ÷ 365 ≈ €760.000).', 100, 'Juist: elke dag kortere betaaltermijn maakt ongeveer €25.000 vrij.'],
          ['Ongeveer €75.000.', 0, 'Te laag: één dag omzet is al bijna €25.000.'],
          ['€1,5 mln, alle openstaande facturen.', 10, 'Er blijft altijd een deel openstaan; bij 30 dagen is dat circa €740.000.'],
          ['Niets, de omzet blijft gelijk.', 0, 'De omzet verandert niet, maar het geld komt eerder binnen.']
        ],
        hint: 'Eén dag omzet = €9 mln ÷ 365.',
        why: 'Werkkapitaalverbetering is vaak de goedkoopste financiering. Het vraagt wel strakke facturatie, heldere betaalafspraken en opvolging.' },
      { id: 'sc4', t: 'mc', topic: 'gov', c: ['risicomanagement', 'solvabiliteit-liquiditeit'], lvl: 3, kind: 'situatie',
        say: 'Ingrid: “Er ligt een mega-order van een hotelketen klaar: €2 mln, betaling bij oplevering over acht maanden. Zal ik tekenen?”',
        q: 'Welk advies is het sterkst?',
        o: [
          ['“Graag, maar alleen met termijnbetalingen of een aanbetaling. Anders lopen we met de huidige kas en kredietruimte een serieus liquiditeitsrisico.”', 100, 'Sterk: je steunt de groei en koppelt er een concrete voorwaarde aan.'],
          ['“Niet doen, te riskant.”', 30, 'Voorzichtig, maar je laat een kans liggen die met goede afspraken haalbaar kan zijn.'],
          ['“Tekenen, dit is een kans.”', 10, 'Met €320.000 op de bank en een limiet van €500.000 kan voorfinanciering van acht maanden het bedrijf in de problemen brengen.'],
          ['“Eerst een extra krediet aanvragen en dan tekenen.”', 60, 'Een redelijke route, maar duurder en onzeker. Betere betaalafspraken zijn de eerste stap.']
        ],
        hint: 'Kijk naar de kaspositie en de kredietlimiet.',
        why: 'Liquiditeit bepaalt of je de groei kunt dragen. Betaalvoorwaarden zijn onderhandelbaar en net zo belangrijk als de prijs.' },
      { id: 'sc5', t: 'open', topic: 'fin', c: ['cashflow', 'werkkapitaal'], lvl: 3, kind: 'case',
        say: 'Ingrid: “Kun je dit voor het MT in drie zinnen samenvatten? Ze hebben weinig geduld voor lange verhalen.”',
        q: 'Schrijf je samenvatting voor het MT (maximaal drie zinnen).',
        keys: [
          ['Kernboodschap: winst maar cash daalt door groei/werkkapitaal', 'winst|groei|werkkapitaal|vast|cash|kas'],
          ['Concrete getallen (61 dagen, €700k+, €320k)', '61|30 dagen|700|760|320|twee maanden'],
          ['Concrete acties (betaaltermijn, voorraad, termijnbetalingen)', 'termijn|factur|voorraad|aanbetal|betaal|incasso'],
          ['Besluit of vraag aan het MT', 'besluit|voorstel|vraag|akkoord|stel voor']
        ],
        model: '“We zijn winstgevend, maar onze groei slokt cash op: klanten betalen gemiddeld na 61 dagen en we hebben veel voorraad. Als we de betaaltermijn naar 30 dagen brengen, komt ruim €700.000 vrij. Ik stel voor dat we facturatie en debiteurenbeheer aanscherpen en nieuwe grote orders alleen met termijnbetalingen aannemen.”',
        alt: 'Je kunt ook beginnen met het besluit (“Ik vraag jullie akkoord op …”) en daarna onderbouwen. Directies waarderen het als de vraag vooraan staat.',
        why: 'In de boardroom werkt de structuur: kernboodschap, onderbouwing met één of twee getallen, en een concreet voorstel.' }
    ]
  },
  {
    id: 'sim-overname', title: 'De overnamekans', topic: 'inv', minutes: 15, lvl: 3,
    company: 'Koster Logistiek',
    who: 'Ruud Koster, directeur-eigenaar',
    intro: 'Koster Logistiek (fictief) wil concurrent Van Lent Transport overnemen. Ruud is enthousiast en vraagt jou als sparringpartner voordat hij het voorstel aan de RvC voorlegt.',
    assumptions: [
      'Alle namen en cijfers zijn fictief.',
      'Vraagprijs: €6 mln. EBITDA van Van Lent: €1,2 mln per jaar.',
      'Van Lent heeft 40% van de omzet bij één klant (een supermarktketen).',
      'Ruud verwacht €400.000 per jaar aan synergievoordelen door routes te combineren.',
      'Investeringen boven €2 mln vragen volgens de statuten goedkeuring van de RvC.'
    ],
    steps: [
      { id: 'so1', t: 'mc', topic: 'inv', c: ['ebitda', 'businesscase'], lvl: 2, kind: 'cijfers',
        say: 'Ruud: “Ze vragen vijf keer EBITDA. Dat is toch een redelijke prijs?”',
        q: 'Wat is de beste reactie?',
        o: [
          ['“Een veelvoud van 5 is in deze sector niet ongebruikelijk. Belangrijker is hoe stabiel die EBITDA is, zeker met 40% bij één klant.”', 100, 'Sterk: je plaatst het getal in context en brengt direct het grootste risico in.'],
          ['“Ja, dat is redelijk.”', 30, 'Mogelijk klopt het, maar zonder context of kritische blik voeg je weinig toe.'],
          ['“Wat bedoelt u met vijf keer EBITDA?”', 30, 'Eerlijk; het betekent: prijs = 5 × jaarlijkse EBITDA. Probeer daarna door te vragen.'],
          ['“Dat is te duur.”', 10, 'Zonder onderbouwing roept dat vooral discussie op.']
        ],
        hint: 'Een prijs is zo goed als de kwaliteit van de winst waarop hij is gebaseerd.',
        why: 'Overnameprijzen worden vaak uitgedrukt als veelvoud (multiple) van EBITDA. De kwaliteit en duurzaamheid van die EBITDA zijn minstens zo belangrijk als het veelvoud.' },
      { id: 'so2', t: 'mc', topic: 'gov', c: ['risicomanagement', 'clv-cac'], lvl: 3, kind: 'situatie',
        say: 'Ruud: “Die supermarktklant zit al twintig jaar bij Van Lent. Dat zit wel goed.”',
        q: 'Hoe ga je hiermee om?',
        o: [
          ['“Kunnen we nagaan of het contract een clausule heeft bij verandering van eigenaar, en wat de looptijd is? Misschien kunnen we een deel van de koopprijs afhankelijk maken van behoud van die klant.”', 100, 'Sterk: je maakt het risico concreet en stelt een gangbaar instrument voor (een earn-out).'],
          ['“Twintig jaar is een goed teken.”', 20, 'Een lange relatie zegt iets, maar bij een eigenaarswissel kan een klant opnieuw gaan aanbesteden.'],
          ['“Dan moeten we de overname niet doen.”', 20, 'Te snel: het risico is te beheersen met goede afspraken.'],
          ['“Laten we de klant zelf bellen.”', 40, 'Klantcontact kan waardevol zijn, maar vóór een geheime overname is dat meestal niet mogelijk. Due diligence is de route.']
        ],
        hint: 'Wat gebeurt er met contracten als de eigenaar verandert?',
        why: 'Klantconcentratie is een klassiek overnamerisico. Due diligence (boekenonderzoek) en een earn-out zijn manieren om dat te beheersen.' },
      { id: 'so3', t: 'calc', topic: 'inv', c: ['terugverdientijd', 'scenario'], lvl: 2, kind: 'cijfers',
        say: 'Ruud: “Met de synergie verdienen we het in een paar jaar terug.”',
        q: 'Stel dat je EBITDA ongeveer als jaarlijkse kasstroom mag gebruiken. Wat is de terugverdientijd in jaren als de synergie volledig wordt gehaald (€1,2 mln + €0,4 mln per jaar)?',
        ans: 3.75, tol: 0.05, unit: 'jaar',
        hint: '6 ÷ 1,6.',
        steps: '6 ÷ (1,2 + 0,4) = 6 ÷ 1,6 = 3,75 jaar. Zonder synergie: 6 ÷ 1,2 = 5 jaar.',
        why: 'Let op de aanname: EBITDA is geen vrije kasstroom (investeringen, rente en belasting gaan er nog af). In werkelijkheid is de terugverdientijd dus langer.' },
      { id: 'so4', t: 'open', topic: 'inv', c: ['scenario', 'businesscase'], lvl: 3, kind: 'case',
        say: 'Ruud: “Ik wil de RvC volgende maand een overtuigend verhaal brengen. Wat ontbreekt er nog?”',
        q: 'Noem wat er in het voorstel aan de RvC moet staan, en waarom.',
        keys: [
          ['Scenario’s inclusief tegenvallend (klantverlies, synergie lager)', 'scenario|tegenval|pessimist|slecht|verlies|wat als|gevoelig'],
          ['Due diligence / risico’s', 'due diligence|boekenonderzoek|risico|contract|onderzoek'],
          ['Financiering / effect op balans', 'financier|lening|bank|eigen vermogen|solvab|liquid|kas'],
          ['Integratie en cultuur / mensen', 'integratie|cultuur|personeel|chauffeur|mensen|organisatie']
        ],
        model: '“De RvC wil drie dingen zien. Eén: de onderbouwing van de prijs mét een tegenvallend scenario, bijvoorbeeld als de supermarkt vertrekt en de synergie maar de helft is. Twee: hoe we het financieren en wat dat doet met onze solvabiliteit en kas. Drie: de integratie, zoals cultuur, chauffeurs en planning, en wie daar eigenaar van is. Plus de uitkomsten van de due diligence en welke risico’s we contractueel afdekken.”',
        alt: 'Sterk is ook om alternatieven te noemen: autonome groei of samenwerking zonder overname. Zo ziet de RvC dat er echt is gekozen.',
        why: 'Een toezichthouder toetst vooral de risico’s, de aannames en de afweging tegen alternatieven. Het mooiste scenario overtuigt hen meestal het minst.' },
      { id: 'so5', t: 'mc', topic: 'lead', c: ['cultuur', 'verandering'], lvl: 2, kind: 'situatie',
        say: 'Ruud: “De mensen van Van Lent moeten gewoon onze manier van werken overnemen. Dat regelen we in de eerste week.”',
        q: 'Wat zeg je?',
        o: [
          ['“Begrijpelijk dat u snel duidelijkheid wilt. Maar chauffeurs en planners zijn het kapitaal dat we kopen. Zullen we een integratieplan maken met een paar mensen van beide kanten?”', 100, 'Sterk: je erkent zijn doel en wijst op het risico van personeelsverloop.'],
          ['“Prima, duidelijkheid is goed.”', 20, 'Snelle duidelijkheid helpt, maar opgelegde integratie leidt vaak tot vertrek van sleutelmensen.'],
          ['“Dat gaat nooit werken.”', 20, 'Inhoudelijk misschien terecht, maar weinig constructief.'],
          ['“Laat Van Lent maar zelfstandig doorgaan.”', 40, 'Soms een bewuste keuze, maar dan haal je de synergie van €400.000 niet.']
        ],
        hint: 'Wat kun je verliezen bij een overname?',
        why: 'Veel overnames halen hun synergie niet door integratieproblemen. Betrek mensen van beide kanten en benoem wat je van elkaar wilt behouden.' }
    ]
  },
  {
    id: 'sim-zorg', title: 'Verandering in de zorg', topic: 'ops', minutes: 12, lvl: 2,
    company: 'Veldkamp Zorggroep',
    who: 'Samira el Idrissi, bestuurder',
    intro: 'Veldkamp Zorggroep (fictief) heeft een tekort van €1,8 mln. Samira wil de planning van twaalf thuiszorgteams centraliseren om efficiënter te werken. Je zit als adviseur aan tafel bij het bestuursoverleg.',
    assumptions: [
      'Alle namen en cijfers zijn fictief.',
      'Begroting €60 mln, tekort €1,8 mln (3%).',
      'De teams plannen nu zelf; de productiviteit (direct cliëntgebonden tijd) is 61%, de norm in de sector is ongeveer 65%.',
      'De ondernemingsraad heeft adviesrecht bij belangrijke organisatieveranderingen.'
    ],
    steps: [
      { id: 'sz1', t: 'calc', topic: 'ops', c: ['productiviteit'], lvl: 2, kind: 'cijfers',
        say: 'Samira: “Als we van 61% naar 65% productiviteit gaan, hoeveel scheelt dat? We hebben 400 FTE in de wijk.”',
        q: 'Hoeveel FTE aan extra cliëntgebonden tijd levert 4 procentpunt productiviteit op bij 400 FTE?',
        ans: 16, tol: 0.1, unit: 'FTE',
        hint: '400 × 0,04.',
        steps: '400 × (0,65 − 0,61) = 400 × 0,04 = 16 FTE.',
        why: '16 FTE aan extra zorgtijd. Bij gemiddeld €60.000 per FTE is dat circa €960.000 aan capaciteit: ongeveer de helft van het tekort.' },
      { id: 'sz2', t: 'mc', topic: 'gov', c: ['stakeholders', 'governance'], lvl: 2, kind: 'toepassing',
        say: 'Samira: “Ik wil dit snel invoeren. Wie moet ik eigenlijk meenemen?”',
        q: 'Welke stakeholders zijn het meest cruciaal voor dit besluit?',
        o: [
          ['De ondernemingsraad (adviesrecht), de teams en hun leidinggevenden, en de RvT bij een grote reorganisatie.', 100, 'Sterk: je combineert formele rollen (OR, RvT) met de mensen die het moeten doen.'],
          ['Alleen de RvT.', 20, 'De RvT houdt toezicht, maar de OR heeft hier formeel adviesrecht en de teams bepalen of het werkt.'],
          ['De cliënten.', 50, 'Een belangrijke en vaak vergeten stakeholder. Maar zonder OR en teams loop je vast in het proces.'],
          ['Een extern adviesbureau.', 10, 'Een adviseur is geen stakeholder met belang of formele invloed.']
        ],
        hint: 'Wie heeft formele rechten, en wie moet het werk anders gaan doen?',
        why: 'Combineer formele besluitvorming (OR, RvT) met draagvlak bij de mensen die de verandering moeten dragen.' },
      { id: 'sz3', t: 'mc', topic: 'ops', c: ['verandering', 'cultuur'], lvl: 3, kind: 'situatie',
        say: 'Samira: “De teams zijn trots op hun zelfsturing. Ik verwacht veel weerstand.”',
        q: 'Welke aanpak past het best?',
        o: [
          ['Het probleem (tekort, productiviteit) open delen, teams laten meedenken over hoe planning efficiënter kan, en beginnen met een pilot in een paar teams.', 100, 'Sterk: je creëert urgentie en betrekt de teams, en een pilot levert bewijs en lessen op.'],
          ['Het besluit nemen en duidelijk communiceren: dit gaat gebeuren.', 30, 'Helder, maar bij trotse, zelfsturende teams vergroot dit de weerstand en het verloop.'],
          ['Het plan laten vallen om onrust te voorkomen.', 10, 'Het tekort blijft dan bestaan.'],
          ['Teamleiders een bonus geven als ze meewerken.', 20, 'Dat koopt hooguit tijdelijke medewerking en kan het vertrouwen schaden.']
        ],
        hint: 'Hoe maak je van tegenstanders mede-eigenaars?',
        why: 'Bij professionals werkt veranderen vaak het best via betrekken en leren (De Caluwé noemt dit groen- en witdruk-denken), met een duidelijk kader vanuit het bestuur.' },
      { id: 'sz4', t: 'open', topic: 'kpi', c: ['kpi', 'leading-lagging'], lvl: 2, kind: 'case',
        say: 'Samira: “Hoe weten we over een halfjaar of het werkt?”',
        q: 'Welke drie indicatoren stel je voor? Denk aan zowel efficiëntie als kwaliteit.',
        keys: [
          ['Productiviteit / cliëntgebonden tijd', 'productiv|cliëntgebonden|direct|uren|bezetting'],
          ['Kwaliteit voor cliënt (tevredenheid, vaste gezichten, gemiste zorg)', 'cliënt|tevreden|kwaliteit|vaste|gezicht|gemist|klacht'],
          ['Medewerkers (verzuim, verloop, tevredenheid)', 'verzuim|verloop|medewerker|tevredenheid|werkdruk|uitstroom'],
          ['Voorlopend signaal of norm', 'voorlopend|signaal|norm|streef|\\d']
        ],
        model: '1) Productiviteit: van 61% naar 65% binnen een jaar. 2) Cliëntervaring: het aantal verschillende zorgverleners per cliënt per week, en cliënttevredenheid. 3) Medewerkers: verzuim en verloop per team; dit zijn voorlopende signalen, want stijgend verzuim voorspelt later uitval van zorg en hogere kosten.',
        alt: 'Ook passend: reistijd per dienst, aantal last-minute roosterwijzigingen, en de kosten van inhuur.',
        why: 'Een efficiëntiemaatregel heeft een tegenwicht nodig: kwaliteit en welzijn van medewerkers. Anders bereik je het doel ten koste van iets wat je niet meet.' }
    ]
  }
];

/* Rollenspel met AI (alleen beschikbaar als de app binnen Claude draait) */
const ROLEPLAYS = [
  { id: 'rp-prijs', title: 'De directeur wil de prijzen verlagen', topic: 'strat',
    persona: 'Mark Jansen, directeur van Fietsfabriek Ronda (fictief): een bedrijf dat premium stadsfietsen van €2.400 maakt. Mark is ongeduldig, denkt in kansen, en heeft net gehoord dat de verkoop dit jaar 8% daalt. Hij wil de prijzen met 15% verlagen om volume terug te winnen. Brutomarge nu 42%.',
    opening: 'Goed dat je er bent. Ik ben er klaar mee: de verkoop daalt, en ik wil de prijzen met 15% omlaag. Volgende week wil ik het besluit nemen. Jij kijkt altijd kritisch, dus zeg het maar.' },
  { id: 'rp-it', title: 'Een IT-project dat uit de hand loopt', topic: 'inv',
    persona: 'Annelies Bakker, CFO van de fictieve gemeente Westerland. Het nieuwe belastingsysteem kost al €3 mln en heeft €4 mln extra nodig. Er is een kant-en-klaar alternatief van €2,5 mln. Annelies twijfelt en voelt politieke druk: stoppen voelt als falen. Ze is analytisch en waardeert heldere argumenten.',
    opening: 'Ik zit met een lastige. Ons belastingsysteem kost nog vier miljoen extra. De wethouder wil doorzetten: “we hebben er al drie miljoen in gestoken.” Hoe kijk jij hiernaar?' },
  { id: 'rp-kpi', title: 'Het dashboard van de RvC', topic: 'kpi',
    persona: 'Henk de Wit, voorzitter van de raad van commissarissen van Brouwer Installatietechniek (fictief). Hij vindt de rapportages van de directie te lang en te financieel. Hij wil weten of de strategie (groei in duurzame installaties) werkt. Henk is vriendelijk maar scherp.',
    opening: 'Elke maand krijg ik veertig pagina’s cijfers, en nog weet ik niet of onze strategie werkt. Als jij één pagina mocht maken voor de raad, wat zou erop staan?' }
];
