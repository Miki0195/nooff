// ──────────────────────────────────────────────
//  Legal page content for Imprint & Privacy Policy
//  Placeholders marked with {{...}} MUST be replaced with real data.
// ──────────────────────────────────────────────

type LegalSection = { heading: string; content: string[] };
type LegalPage = { title: string; lastUpdated: string; sections: LegalSection[] };

// ─── HUNGARIAN ─────────────────────────────────

export const imprintHU: LegalPage = {
  title: 'Impresszum',
  lastUpdated: 'Utolsó frissítés: {{DATE}}',
  sections: [
    {
      heading: 'Szolgáltató adatai',
      content: [
        'Név: {{COMPANY_NAME}}',
        'Székhely: {{ADDRESS}}',
        'Adószám: {{TAX_NUMBER}}',
        'Cégjegyzékszám / Nyilvántartási szám: {{REGISTRATION_NUMBER}}',
        'Képviselő: {{REPRESENTATIVE}}',
      ],
    },
    {
      heading: 'Elérhetőség',
      content: [
        'E-mail: hello@nooff-studio.com',
        'Telefon: {{PHONE}}',
        'Weboldal: https://nooff-studio.com',
      ],
    },
    {
      heading: 'Tárhelyszolgáltató',
      content: [
        'Név: {{HOSTING_NAME}}',
        'Székhely: {{HOSTING_ADDRESS}}',
        'Elérhetőség: {{HOSTING_CONTACT}}',
      ],
    },
    {
      heading: 'Szerzői jogok',
      content: [
        'A weboldalon megjelenő tartalmak (szövegek, képek, videók, grafikai elemek, logók) a {{COMPANY_NAME}} szellemi tulajdonát képezik. Ezek felhasználása kizárólag a jogosult írásbeli engedélyével lehetséges.',
      ],
    },
    {
      heading: 'Felelősségkizárás',
      content: [
        'A {{COMPANY_NAME}} mindent megtesz a weboldalon közzétett információk pontosságáért, de azok teljességéért és naprakészségéért felelősséget nem vállal. A weboldalon található hivatkozások (linkek) harmadik felek tartalmára mutathatnak, amelyekért a {{COMPANY_NAME}} nem felel.',
      ],
    },
    {
      heading: 'Alkalmazandó jog',
      content: [
        'A jelen impresszumra és a weboldalra a magyar jog az irányadó, különös tekintettel az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről szóló 2001. évi CVIII. törvényre.',
      ],
    },
  ],
};

export const privacyHU: LegalPage = {
  title: 'Adatvédelmi tájékoztató',
  lastUpdated: 'Utolsó frissítés: {{DATE}}',
  sections: [
    {
      heading: '1. Adatkezelő',
      content: [
        'Név: {{COMPANY_NAME}}',
        'Székhely: {{ADDRESS}}',
        'E-mail: hello@nooff-studio.com',
        'Telefon: {{PHONE}}',
        'A {{COMPANY_NAME}} (továbbiakban: Adatkezelő) a jelen tájékoztatóval biztosítja, hogy adatkezelése megfelel az Európai Parlament és a Tanács (EU) 2016/679 számú általános adatvédelmi rendeletének (GDPR) és az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény (Infotv.) előírásainak.',
      ],
    },
    {
      heading: '2. Kezelt személyes adatok és az adatkezelés célja',
      content: [
        'Ajánlatkérő űrlap: A weboldalon elérhető ajánlatkérő űrlapon az alábbi adatokat gyűjtjük:',
        '• Név (kötelező) — cél: azonosítás és megszólítás',
        '• E-mail cím (kötelező) — cél: kapcsolatfelvétel, ajánlat küldése',
        '• Telefonszám (opcionális) — cél: gyorsabb kapcsolatfelvétel',
        '• Kiválasztott szolgáltatás, cég típusa, projekt leírás, költségkeret, időzítés — cél: személyre szabott ajánlat készítése',
        'Az adatkezelés jogalapja: az Ön hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont), amelyet az űrlap elküldésével ad meg.',
      ],
    },
    {
      heading: '3. Sütik (cookie-k)',
      content: [
        'A weboldal nem használ analitikai, marketing vagy nyomkövető sütiket.',
        'Az egyetlen sütiket a hCaptcha szolgáltatás állítja be az ajánlatkérő űrlap robot elleni védelme érdekében. Ezek a sütik a weboldal biztonságos működéséhez szükségesek (GDPR 6. cikk (1) bekezdés f) pont — jogos érdek), és nem igényelnek külön hozzájárulást.',
        'A betűtípusok (Inter, Space Grotesk) helyben tároltak, nem töltődnek be külső szerverről, így nem kerül sor adattovábbításra harmadik fél felé.',
      ],
    },
    {
      heading: '4. Adatfeldolgozók (harmadik felek)',
      content: [
        'Az alábbi harmadik fél szolgáltatásokat vesszük igénybe:',
        '• Web3Forms (web3forms.com) — az ajánlatkérő űrlap adatainak e-mailben történő továbbítása. Az adatok a Web3Forms szerverein áthaladnak, de nem kerülnek tartósan tárolásra. Adatvédelmi tájékoztatójuk: https://web3forms.com/privacy',
        '• hCaptcha (hcaptcha.com) — robotvédelem, spam szűrés. Az hCaptcha a felhasználó IP-címét és böngésző adatait dolgozza fel a robotfelismeréshez. Adatvédelmi tájékoztatója: https://www.hcaptcha.com/privacy',
        '• Tárhelyszolgáltató: {{HOSTING_NAME}} — a weboldal üzemeltetéséhez szükséges szerver infrastruktúra.',
      ],
    },
    {
      heading: '5. Adatmegőrzés időtartama',
      content: [
        'Az ajánlatkérő űrlapon megadott személyes adatokat az ajánlatkérés feldolgozásához és a kapcsolatfelvételhez szükséges ideig, de legfeljebb 1 évig tároljuk az utolsó kapcsolatfelvételtől számítva, amennyiben nem jön létre szerződéses jogviszony. Szerződés létrejötte esetén az adatmegőrzési idő a vonatkozó jogszabályok szerinti.',
      ],
    },
    {
      heading: '6. Az Ön jogai',
      content: [
        'A GDPR alapján Önt az alábbi jogok illetik meg:',
        '• Hozzáférési jog — tájékoztatást kérhet a kezelt adatairól',
        '• Helyesbítéshez való jog — kérheti adatai javítását',
        '• Törléshez való jog ("elfeledtetéshez való jog") — kérheti adatai törlését',
        '• Adatkezelés korlátozásához való jog',
        '• Adathordozhatósághoz való jog',
        '• Tiltakozáshoz való jog',
        '• Hozzájárulás visszavonásának joga — bármikor, a visszavonás előtti adatkezelés jogszerűségének érintetlenül hagyásával',
        'Jogai gyakorlásához kérjük, lépjen kapcsolatba velünk a hello@nooff-studio.com címen.',
      ],
    },
    {
      heading: '7. Jogorvoslat',
      content: [
        'Amennyiben úgy érzi, hogy adatai kezelésével kapcsolatban jogsérelem érte, panaszt tehet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH):',
        'Cím: 1055 Budapest, Falk Miksa utca 9-11.',
        'Postacím: 1363 Budapest, Pf. 9.',
        'Telefon: +36 (1) 391-1400',
        'E-mail: ugyfelszolgalat@naih.hu',
        'Weboldal: https://naih.hu',
      ],
    },
    {
      heading: '8. Adatbiztonság',
      content: [
        'Az Adatkezelő gondoskodik az adatok biztonságáról, megteszi azokat a technikai és szervezési intézkedéseket, amelyek az adatok védelméhez szükségesek. A weboldal HTTPS titkosított kapcsolatot használ.',
      ],
    },
  ],
};

// ─── ENGLISH ───────────────────────────────────

export const imprintEN: LegalPage = {
  title: 'Imprint',
  lastUpdated: 'Last updated: {{DATE}}',
  sections: [
    {
      heading: 'Service Provider',
      content: [
        'Name: {{COMPANY_NAME}}',
        'Registered address: {{ADDRESS}}',
        'Tax number: {{TAX_NUMBER}}',
        'Registration number: {{REGISTRATION_NUMBER}}',
        'Representative: {{REPRESENTATIVE}}',
      ],
    },
    {
      heading: 'Contact',
      content: [
        'Email: hello@nooff-studio.com',
        'Phone: {{PHONE}}',
        'Website: https://nooff-studio.com',
      ],
    },
    {
      heading: 'Hosting Provider',
      content: [
        'Name: {{HOSTING_NAME}}',
        'Address: {{HOSTING_ADDRESS}}',
        'Contact: {{HOSTING_CONTACT}}',
      ],
    },
    {
      heading: 'Copyright',
      content: [
        'All content on this website (texts, images, videos, graphics, logos) is the intellectual property of {{COMPANY_NAME}}. Use is only permitted with written consent from the rights holder.',
      ],
    },
    {
      heading: 'Disclaimer',
      content: [
        '{{COMPANY_NAME}} makes every effort to ensure the accuracy of published information, but accepts no liability for its completeness or timeliness. Links on this website may direct to third-party content for which {{COMPANY_NAME}} is not responsible.',
      ],
    },
    {
      heading: 'Applicable Law',
      content: [
        'This imprint and website are governed by Hungarian law, in particular Act CVIII of 2001 on certain aspects of electronic commerce and information society services.',
      ],
    },
  ],
};

export const privacyEN: LegalPage = {
  title: 'Privacy Policy',
  lastUpdated: 'Last updated: {{DATE}}',
  sections: [
    {
      heading: '1. Data Controller',
      content: [
        'Name: {{COMPANY_NAME}}',
        'Address: {{ADDRESS}}',
        'Email: hello@nooff-studio.com',
        'Phone: {{PHONE}}',
        '{{COMPANY_NAME}} (hereinafter: Data Controller) ensures through this notice that its data processing complies with Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR).',
      ],
    },
    {
      heading: '2. Personal Data Collected and Purpose',
      content: [
        'Quote request form: We collect the following data through the form on our website:',
        '• Name (required) — purpose: identification and addressing',
        '• Email address (required) — purpose: communication, sending quotes',
        '• Phone number (optional) — purpose: faster communication',
        '• Selected service, business type, project description, budget, timeline — purpose: creating a personalized quote',
        'Legal basis: your consent (GDPR Article 6(1)(a)), which you provide by submitting the form.',
      ],
    },
    {
      heading: '3. Cookies',
      content: [
        'This website does not use analytics, marketing, or tracking cookies.',
        'The only cookies are set by hCaptcha for bot protection on the quote request form. These cookies are strictly necessary for the secure operation of the website (GDPR Article 6(1)(f) — legitimate interest) and do not require separate consent.',
        'Fonts (Inter, Space Grotesk) are self-hosted and are not loaded from external servers, so no data is transferred to third parties for font delivery.',
      ],
    },
    {
      heading: '4. Third-Party Processors',
      content: [
        'We use the following third-party services:',
        '• Web3Forms (web3forms.com) — transmitting form data via email. Data passes through Web3Forms servers but is not stored permanently. Privacy policy: https://web3forms.com/privacy',
        '• hCaptcha (hcaptcha.com) — bot protection, spam filtering. hCaptcha processes the user\'s IP address and browser data for bot detection. Privacy policy: https://www.hcaptcha.com/privacy',
        '• Hosting: {{HOSTING_NAME}} — server infrastructure for website operation.',
      ],
    },
    {
      heading: '5. Data Retention',
      content: [
        'Personal data provided through the quote form is stored for the time necessary to process the request and establish contact, but no longer than 1 year from the last contact, unless a contractual relationship is established. In case of a contract, retention periods follow applicable laws.',
      ],
    },
    {
      heading: '6. Your Rights',
      content: [
        'Under the GDPR, you have the following rights:',
        '• Right of access — request information about your processed data',
        '• Right to rectification — request correction of your data',
        '• Right to erasure ("right to be forgotten") — request deletion of your data',
        '• Right to restriction of processing',
        '• Right to data portability',
        '• Right to object',
        '• Right to withdraw consent — at any time, without affecting the lawfulness of prior processing',
        'To exercise your rights, please contact us at hello@nooff-studio.com.',
      ],
    },
    {
      heading: '7. Complaints',
      content: [
        'If you believe your rights have been violated regarding data processing, you may file a complaint with the Hungarian National Authority for Data Protection and Freedom of Information (NAIH):',
        'Address: 1055 Budapest, Falk Miksa utca 9-11.',
        'Phone: +36 (1) 391-1400',
        'Email: ugyfelszolgalat@naih.hu',
        'Website: https://naih.hu',
      ],
    },
    {
      heading: '8. Data Security',
      content: [
        'The Data Controller ensures the security of data and takes the technical and organizational measures necessary to protect it. This website uses HTTPS encrypted connections.',
      ],
    },
  ],
};

// ─── GERMAN ────────────────────────────────────

export const imprintDE: LegalPage = {
  title: 'Impressum',
  lastUpdated: 'Zuletzt aktualisiert: {{DATE}}',
  sections: [
    {
      heading: 'Dienstanbieter',
      content: [
        'Name: {{COMPANY_NAME}}',
        'Sitz: {{ADDRESS}}',
        'Steuernummer: {{TAX_NUMBER}}',
        'Registrierungsnummer: {{REGISTRATION_NUMBER}}',
        'Vertreter: {{REPRESENTATIVE}}',
      ],
    },
    {
      heading: 'Kontakt',
      content: [
        'E-Mail: hello@nooff-studio.com',
        'Telefon: {{PHONE}}',
        'Webseite: https://nooff-studio.com',
      ],
    },
    {
      heading: 'Hosting-Anbieter',
      content: [
        'Name: {{HOSTING_NAME}}',
        'Adresse: {{HOSTING_ADDRESS}}',
        'Kontakt: {{HOSTING_CONTACT}}',
      ],
    },
    {
      heading: 'Urheberrecht',
      content: [
        'Alle Inhalte dieser Webseite (Texte, Bilder, Videos, Grafiken, Logos) sind geistiges Eigentum von {{COMPANY_NAME}}. Die Nutzung ist nur mit schriftlicher Genehmigung des Rechteinhabers gestattet.',
      ],
    },
    {
      heading: 'Haftungsausschluss',
      content: [
        '{{COMPANY_NAME}} bemüht sich um die Richtigkeit der veröffentlichten Informationen, übernimmt jedoch keine Haftung für deren Vollständigkeit oder Aktualität. Links auf dieser Webseite können auf Inhalte Dritter verweisen, für die {{COMPANY_NAME}} keine Verantwortung übernimmt.',
      ],
    },
    {
      heading: 'Anwendbares Recht',
      content: [
        'Dieses Impressum und die Webseite unterliegen ungarischem Recht, insbesondere dem Gesetz CVIII von 2001 über bestimmte Aspekte des elektronischen Geschäftsverkehrs und der Dienste der Informationsgesellschaft.',
      ],
    },
  ],
};

export const privacyDE: LegalPage = {
  title: 'Datenschutzerklärung',
  lastUpdated: 'Zuletzt aktualisiert: {{DATE}}',
  sections: [
    {
      heading: '1. Verantwortlicher',
      content: [
        'Name: {{COMPANY_NAME}}',
        'Adresse: {{ADDRESS}}',
        'E-Mail: hello@nooff-studio.com',
        'Telefon: {{PHONE}}',
        '{{COMPANY_NAME}} (nachfolgend: Verantwortlicher) stellt mit dieser Erklärung sicher, dass die Datenverarbeitung der Verordnung (EU) 2016/679 (DSGVO) entspricht.',
      ],
    },
    {
      heading: '2. Erhobene Daten und Zweck',
      content: [
        'Angebotsformular: Über das Formular auf unserer Webseite erheben wir folgende Daten:',
        '• Name (Pflichtfeld) — Zweck: Identifikation und Anrede',
        '• E-Mail-Adresse (Pflichtfeld) — Zweck: Kommunikation, Angebotszusendung',
        '• Telefonnummer (optional) — Zweck: schnellere Kommunikation',
        '• Gewählte Leistung, Unternehmenstyp, Projektbeschreibung, Budget, Zeitrahmen — Zweck: Erstellung eines personalisierten Angebots',
        'Rechtsgrundlage: Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie durch das Absenden des Formulars erteilen.',
      ],
    },
    {
      heading: '3. Cookies',
      content: [
        'Diese Webseite verwendet keine Analyse-, Marketing- oder Tracking-Cookies.',
        'Die einzigen Cookies werden von hCaptcha zum Bot-Schutz des Angebotsformulars gesetzt. Diese Cookies sind für den sicheren Betrieb der Webseite zwingend erforderlich (Art. 6 Abs. 1 lit. f DSGVO — berechtigtes Interesse) und erfordern keine gesonderte Einwilligung.',
        'Schriftarten (Inter, Space Grotesk) werden lokal gehostet und nicht von externen Servern geladen, sodass keine Daten zur Schriftartenbereitstellung an Dritte übertragen werden.',
      ],
    },
    {
      heading: '4. Drittanbieter',
      content: [
        'Wir nutzen folgende Drittanbieter:',
        '• Web3Forms (web3forms.com) — Übermittlung von Formulardaten per E-Mail. Die Daten passieren die Web3Forms-Server, werden aber nicht dauerhaft gespeichert. Datenschutz: https://web3forms.com/privacy',
        '• hCaptcha (hcaptcha.com) — Bot-Schutz, Spamfilterung. hCaptcha verarbeitet die IP-Adresse und Browserdaten des Nutzers zur Bot-Erkennung. Datenschutz: https://www.hcaptcha.com/privacy',
        '• Hosting: {{HOSTING_NAME}} — Serverinfrastruktur für den Betrieb der Webseite.',
      ],
    },
    {
      heading: '5. Datenaufbewahrung',
      content: [
        'Personenbezogene Daten aus dem Angebotsformular werden für die zur Bearbeitung und Kontaktaufnahme erforderliche Dauer gespeichert, maximal jedoch 1 Jahr ab dem letzten Kontakt, sofern kein Vertragsverhältnis entsteht. Bei Vertragsschluss gelten die gesetzlichen Aufbewahrungsfristen.',
      ],
    },
    {
      heading: '6. Ihre Rechte',
      content: [
        'Nach der DSGVO stehen Ihnen folgende Rechte zu:',
        '• Auskunftsrecht — Informationen über Ihre verarbeiteten Daten anfordern',
        '• Recht auf Berichtigung — Korrektur Ihrer Daten verlangen',
        '• Recht auf Löschung ("Recht auf Vergessenwerden") — Löschung Ihrer Daten verlangen',
        '• Recht auf Einschränkung der Verarbeitung',
        '• Recht auf Datenübertragbarkeit',
        '• Widerspruchsrecht',
        '• Recht auf Widerruf der Einwilligung — jederzeit, ohne Beeinträchtigung der Rechtmäßigkeit der bisherigen Verarbeitung',
        'Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter hello@nooff-studio.com.',
      ],
    },
    {
      heading: '7. Beschwerde',
      content: [
        'Wenn Sie der Meinung sind, dass Ihre Rechte bei der Datenverarbeitung verletzt wurden, können Sie eine Beschwerde bei der ungarischen Datenschutzbehörde (NAIH) einreichen:',
        'Adresse: 1055 Budapest, Falk Miksa utca 9-11.',
        'Telefon: +36 (1) 391-1400',
        'E-Mail: ugyfelszolgalat@naih.hu',
        'Webseite: https://naih.hu',
      ],
    },
    {
      heading: '8. Datensicherheit',
      content: [
        'Der Verantwortliche sorgt für die Sicherheit der Daten und trifft die notwendigen technischen und organisatorischen Maßnahmen zu deren Schutz. Diese Webseite verwendet HTTPS-verschlüsselte Verbindungen.',
      ],
    },
  ],
};

// ─── SLOVAK ────────────────────────────────────

export const imprintSK: LegalPage = {
  title: 'Impressum',
  lastUpdated: 'Posledná aktualizácia: {{DATE}}',
  sections: [
    {
      heading: 'Poskytovateľ služieb',
      content: [
        'Názov: {{COMPANY_NAME}}',
        'Sídlo: {{ADDRESS}}',
        'DIČ: {{TAX_NUMBER}}',
        'Registračné číslo: {{REGISTRATION_NUMBER}}',
        'Zástupca: {{REPRESENTATIVE}}',
      ],
    },
    {
      heading: 'Kontakt',
      content: [
        'E-mail: hello@nooff-studio.com',
        'Telefón: {{PHONE}}',
        'Webstránka: https://nooff-studio.com',
      ],
    },
    {
      heading: 'Poskytovateľ hostingu',
      content: [
        'Názov: {{HOSTING_NAME}}',
        'Adresa: {{HOSTING_ADDRESS}}',
        'Kontakt: {{HOSTING_CONTACT}}',
      ],
    },
    {
      heading: 'Autorské práva',
      content: [
        'Všetok obsah na tejto webstránke (texty, obrázky, videá, grafika, logá) je duševným vlastníctvom {{COMPANY_NAME}}. Použitie je povolené len s písomným súhlasom oprávneného.',
      ],
    },
    {
      heading: 'Vylúčenie zodpovednosti',
      content: [
        '{{COMPANY_NAME}} sa snaží o presnosť zverejnených informácií, ale nepreberá zodpovednosť za ich úplnosť alebo aktuálnosť. Odkazy na tejto webstránke môžu smerovať na obsah tretích strán, za ktorý {{COMPANY_NAME}} nenesie zodpovednosť.',
      ],
    },
    {
      heading: 'Rozhodné právo',
      content: [
        'Toto impressum a webstránka sa riadia maďarským právom, najmä zákonom CVIII z roku 2001 o niektorých aspektoch elektronického obchodu a služieb informačnej spoločnosti.',
      ],
    },
  ],
};

export const privacySK: LegalPage = {
  title: 'Ochrana osobných údajov',
  lastUpdated: 'Posledná aktualizácia: {{DATE}}',
  sections: [
    {
      heading: '1. Prevádzkovateľ',
      content: [
        'Názov: {{COMPANY_NAME}}',
        'Adresa: {{ADDRESS}}',
        'E-mail: hello@nooff-studio.com',
        'Telefón: {{PHONE}}',
        '{{COMPANY_NAME}} (ďalej: Prevádzkovateľ) týmto oznámením zabezpečuje, že spracúvanie údajov je v súlade s nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR).',
      ],
    },
    {
      heading: '2. Zhromažďované údaje a účel',
      content: [
        'Formulár žiadosti o ponuku: Prostredníctvom formulára na našej webstránke zhromažďujeme nasledujúce údaje:',
        '• Meno (povinné) — účel: identifikácia a oslovenie',
        '• E-mailová adresa (povinné) — účel: komunikácia, odoslanie ponuky',
        '• Telefónne číslo (voliteľné) — účel: rýchlejšia komunikácia',
        '• Vybraná služba, typ firmy, popis projektu, rozpočet, časový rámec — účel: vytvorenie personalizovanej ponuky',
        'Právny základ: váš súhlas (čl. 6 ods. 1 písm. a) GDPR), ktorý udelíte odoslaním formulára.',
      ],
    },
    {
      heading: '3. Cookies',
      content: [
        'Táto webstránka nepoužíva analytické, marketingové ani sledovacie cookies.',
        'Jediné cookies nastavuje hCaptcha na ochranu formulára žiadosti o ponuku proti botom. Tieto cookies sú nevyhnutné pre bezpečnú prevádzku webstránky (čl. 6 ods. 1 písm. f) GDPR — oprávnený záujem) a nevyžadujú osobitný súhlas.',
        'Písma (Inter, Space Grotesk) sú hostované lokálne a nenačítavajú sa z externých serverov, takže nedochádza k prenosu údajov tretím stranám.',
      ],
    },
    {
      heading: '4. Tretie strany',
      content: [
        'Využívame nasledujúce služby tretích strán:',
        '• Web3Forms (web3forms.com) — prenos údajov z formulára e-mailom. Údaje prechádzajú cez servery Web3Forms, ale nie sú trvalo ukladané. Ochrana údajov: https://web3forms.com/privacy',
        '• hCaptcha (hcaptcha.com) — ochrana proti botom, filtrovanie spamu. hCaptcha spracúva IP adresu a údaje prehliadača používateľa na detekciu botov. Ochrana údajov: https://www.hcaptcha.com/privacy',
        '• Hosting: {{HOSTING_NAME}} — serverová infraštruktúra pre prevádzku webstránky.',
      ],
    },
    {
      heading: '5. Uchovávanie údajov',
      content: [
        'Osobné údaje z formulára uchovávame po dobu potrebnú na spracovanie žiadosti a nadviazanie kontaktu, maximálne však 1 rok od posledného kontaktu, pokiaľ nedôjde k uzavretiu zmluvného vzťahu. V prípade zmluvy platia zákonné lehoty uchovávania.',
      ],
    },
    {
      heading: '6. Vaše práva',
      content: [
        'Podľa GDPR máte nasledujúce práva:',
        '• Právo na prístup — vyžiadať informácie o spracúvaných údajoch',
        '• Právo na opravu — žiadať opravu svojich údajov',
        '• Právo na vymazanie ("právo na zabudnutie") — žiadať vymazanie svojich údajov',
        '• Právo na obmedzenie spracúvania',
        '• Právo na prenosnosť údajov',
        '• Právo namietať',
        '• Právo na odvolanie súhlasu — kedykoľvek, bez vplyvu na zákonnosť predchádzajúceho spracúvania',
        'Na uplatnenie svojich práv nás kontaktujte na hello@nooff-studio.com.',
      ],
    },
    {
      heading: '7. Sťažnosť',
      content: [
        'Ak máte pocit, že boli porušené vaše práva v súvislosti so spracúvaním údajov, môžete podať sťažnosť na maďarský Národný úrad pre ochranu údajov a slobodu informácií (NAIH):',
        'Adresa: 1055 Budapest, Falk Miksa utca 9-11.',
        'Telefón: +36 (1) 391-1400',
        'E-mail: ugyfelszolgalat@naih.hu',
        'Webstránka: https://naih.hu',
      ],
    },
    {
      heading: '8. Bezpečnosť údajov',
      content: [
        'Prevádzkovateľ zabezpečuje bezpečnosť údajov a prijíma technické a organizačné opatrenia potrebné na ich ochranu. Táto webstránka používa šifrované pripojenie HTTPS.',
      ],
    },
  ],
};
