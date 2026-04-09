import {
  imprintHU, privacyHU, imprintEN, privacyEN,
  imprintDE, privacyDE, imprintSK, privacySK,
} from './legalContent';

export type Lang = 'HU' | 'EN' | 'DE' | 'SK';

export interface Translations {
  nav: { services: string; projects: string; about: string; contact: string };
  hero: {
    subtitle: string;
    tags: string;
    projectsBtn: string;
    quoteBtn: string;
    scroll: string;
  };
  manifesto: {
    lines: string[];
    summary: string;
  };
  logoMarquee: { label: string };
  servicesIntro: { line1: string; line2: string; subtitle: string };
  servicesGrid: { details: string; quoteBtn: string; bestSeller: string };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    items: {
      id: string;
      name: string;
      category: string;
      tag: string;
      description: string;
    }[];
  };
  whyUs: {
    title: string;
    line1: string;
    line2: string;
    tagline: string;
    differentiators: string[];
  };
  cta: {
    title: string;
    line1: string;
    line2: string;
    tagline: string;
    quoteBtn: string;
  };
  form: {
    title: string;
    subtitle: string;
    steps: string[];
    step1Title: string;
    step1Options: string[];
    step2Title: string;
    step2Options: string[];
    step3Title: string;
    step3Placeholder: string;
    step4Title: string;
    step4Options: string[];
    step5Title: string;
    step5Options: string[];
    step6Title: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    required: string;
    back: string;
    next: string;
    submit: string;
    sending: string;
    successTitle: string;
    successSubtitle: string;
    errorTitle: string;
    errorSubtitle: string;
    retry: string;
    step1Required: string;
    step2Required: string;
    step3Required: string;
    step4Required: string;
    step5Required: string;
    step6Required: string;
    invalidEmail: string;
    invalidPhone: string;
    captchaRequired: string;
  };
  footer: {
    services: string;
    projects: string;
    about: string;
    contact: string;
    quickLinks: string;
    contactTitle: string;
    copyright: string;
    imprint: string;
    privacy: string;
    backToHome: string;
  };
  serviceDetail: {
    back: string;
    popular: string;
    choosePkg: string;
    quoteBtn: string;
    addOnsTitle: string;
    questionTitle: string;
    questionSubtitle: string;
    allServices: string;
    notFoundTitle: string;
    notFoundText: string;
    notFoundBtn: string;
  };
  imprint: {
    title: string;
    lastUpdated: string;
    sections: { heading: string; content: string[] }[];
  };
  privacy: {
    title: string;
    lastUpdated: string;
    sections: { heading: string; content: string[] }[];
  };
  services: {
    content: {
      title: string;
      subtitle: string;
      description: string;
      bullets: string[];
      packages: { name: string; subtitle: string; features: string[] }[];
    };
    promo: {
      title: string;
      subtitle: string;
      description: string;
      bullets: string[];
      packages: { name: string; features: string[] }[];
    };
    wedding: {
      title: string;
      subtitle: string;
      description: string;
      bullets: string[];
      packages: { name: string; subtitle: string }[];
    };
    web: {
      title: string;
      subtitle: string;
      description: string;
      bullets: string[];
      subCategories: {
        name: string;
        packages: { name: string; subtitle?: string; features: string[] }[];
      }[];
      addOns: { name: string; price: string }[];
    };
  };
}

const hu: Translations = {
  nav: { services: 'Szolgáltatások', projects: 'Projektek', about: 'Rólunk', contact: 'Kapcsolat' },
  hero: {
    subtitle: 'Digitális jelenlét. Egy rendszerben.',
    tags: 'Videó. Web. Social. Kampány.',
    projectsBtn: 'Projektek',
    quoteBtn: 'Ajánlatot kérek',
    scroll: 'Scroll',
  },
  manifesto: {
    lines: [
      'A legtöbb márka akkor aktív, amikor épp kampány van.',
      'Mi akkor is dolgozunk, amikor nincs.',
      'A jelenlét nem időszakos.',
      'Vagy működik. Vagy nem.',
      'Mi nem külön kezeljük a videót, a webet meg a socialt.',
      'Egy rendszerben gondolkodunk.',
      'Ha tartalmat csinálunk, annak célja van.',
      'Ha webet építünk, az nem csak szép — hanem konvertál.',
      'Ha jelen vagyunk, az nem véletlen.',
      'Never Off. Always On.',
      'Nem hype.',
      'Folyamatos munka.',
    ],
    summary: 'Teljes digitális jelenlétet építünk vállalkozásoknak — a stratégiától a kivitelezésig.',
  },
  logoMarquee: { label: 'Akikkel dolgoztunk' },
  servicesIntro: {
    line1: 'Nem kampányokban gondolkodunk.',
    line2: 'Rendszerben gondolkodunk.',
    subtitle: 'Itt kapcsolódik össze minden.',
  },
  servicesGrid: { details: 'Részletek', quoteBtn: 'Ajánlatot kérek', bestSeller: 'Best Seller' },
  projects: {
    title: 'Így néz ki, amikor valami tényleg működik.',
    subtitle: 'Nem stock. Nem demo. Ezekkel már kint vagyunk a piacon.',
    viewProject: 'Projekt megtekintése',
    items: [
      { id: 'gymtronic', name: 'Gymtronic', category: 'Social Content + Performance', tag: 'Havi tartalomgyártás', description: 'Havi szintű social tartalomgyártás egy dinamikus fitnesz brandnek — videó, reel, fotó, egységes vizuális rendszerben.' },
      { id: 'hotel-aurum', name: 'Hotel Aurum', category: 'Brand Film + Web Refresh', tag: 'Marketing videó + Web', description: 'Prémium brand film és komplett weboldal újratervezés egy boutique hotelnek a Balaton-felvidéken.' },
      { id: 'bistro-nine', name: 'Bistro Nine', category: 'Restaurant Promo Content', tag: 'Promóciós tartalom', description: 'Étterem promóciós tartalom, ami nemcsak szép — hanem vendéget hoz.' },
      { id: 'dora-mark', name: 'Dóra & Márk', category: 'Cinematic Wedding Film', tag: 'Esküvői film', description: 'Filmszerű esküvői highlights, ami nem egy slideshow — hanem egy történet.' },
    ],
  },
  whyUs: {
    title: 'Nem minden cégnek van szüksége ránk.\nDe aki komolyan veszi a jelenlétét, annak igen.',
    line1: 'Mi nem tűnünk el két projekt között.',
    line2: 'Nem kapcsolunk ki.',
    tagline: 'Never Off. Always On.',
    differentiators: [
      'Nem sablonból dolgozunk.',
      'Nem külön elemekben gondolkodunk, hanem rendszerben.',
      'Nem félkész munkát adunk ki.',
    ],
  },
  cta: {
    title: 'Ha komolyan gondolod, induljunk.',
    line1: 'Mi nem kampányokat csinálunk.',
    line2: 'Rendszert építünk.',
    tagline: 'Never Off. Always On.',
    quoteBtn: 'Ajánlatot kérek',
  },
  form: {
    title: 'Kérj ajánlatot',
    subtitle: 'Pár lépés, és máris visszajelzünk.',
    steps: ['Szolgáltatás', 'Cég típusa', 'Projekt', 'Költségkeret', 'Időzítés', 'Elérhetőség'],
    step1Title: 'Melyik szolgáltatás érdekel?',
    step1Options: ['Havi tartalomgyártás', 'Marketing videó', 'Weboldal', 'Esküvői film', 'Több is érdekel'],
    step2Title: 'Milyen típusú a céged?',
    step2Options: ['Étterem', 'Szálloda', 'Edzőterem', 'Helyi vállalkozás', 'Egyéb'],
    step3Title: 'Röviden írd le a projektet',
    step3Placeholder: 'Pl. új weboldalt szeretnék az éttermemhez, és havi social tartalmakat...',
    step4Title: 'Költségkeret',
    step4Options: ['300k alatt', '300k–800k', '800k–1.5M', '1.5M+'],
    step5Title: 'Mikor kellene?',
    step5Options: ['ASAP', '1 hónapon belül', '1–3 hónap', 'Rugalmas'],
    step6Title: 'Elérhetőségek',
    nameLabel: 'Név *',
    namePlaceholder: 'Neved',
    emailLabel: 'Email *',
    emailPlaceholder: 'email@pelda.hu',
    phoneLabel: 'Telefonszám',
    phonePlaceholder: '+36 30 123 4567',
    required: 'Kötelező',
    back: 'Vissza',
    next: 'Tovább',
    submit: 'Küldés',
    sending: 'Küldés...',
    successTitle: 'Megkaptuk.',
    successSubtitle: 'Hamarosan jelentkezünk.',
    errorTitle: 'Hiba történt.',
    errorSubtitle: 'Kérjük próbáld újra, vagy írj nekünk közvetlenül: hello@nooff-studio.com',
    retry: 'Újrapróbálás',
    step1Required: 'Válassz legalább egy szolgáltatást a továbblépéshez.',
    step2Required: 'Válaszd ki a céged típusát a továbblépéshez.',
    step3Required: 'Kérjük, írd le röviden a projektet.',
    step4Required: 'Válassz költségkeretet a továbblépéshez.',
    step5Required: 'Válaszd ki az időzítést a továbblépéshez.',
    step6Required: 'Kérjük, töltsd ki a kötelező mezőket.',
    invalidEmail: 'Kérjük, adj meg egy érvényes email címet.',
    invalidPhone: 'Kérjük, adj meg egy érvényes telefonszámot (pl. +36 30 123 4567).',
    captchaRequired: 'Kérjük, igazold, hogy nem vagy robot.',
  },
  footer: {
    services: 'Szolgáltatások',
    projects: 'Projektek',
    about: 'Rólunk',
    contact: 'Kapcsolat',
    quickLinks: 'Gyors linkek',
    contactTitle: 'Kapcsolat',
    copyright: '© 2026 NO OFF Studio. Minden jog fenntartva.',
    imprint: 'Impresszum',
    privacy: 'Adatvédelem',
    backToHome: 'Vissza a főoldalra',
  },
  serviceDetail: {
    back: 'Szolgáltatások',
    popular: 'Népszerű',
    choosePkg: 'Válaszd ki a számodra ideális csomagot.',
    quoteBtn: 'Ajánlatot kérek',
    addOnsTitle: 'Kiegészítő szolgáltatások',
    questionTitle: 'Kérdésed van?',
    questionSubtitle: 'Írj nekünk, és segítünk megtalálni a számodra ideális csomagot.',
    allServices: 'Összes szolgáltatás',
    notFoundTitle: '404',
    notFoundText: 'Ez a szolgáltatás nem található.',
    notFoundBtn: 'Vissza a szolgáltatásokhoz',
  },
  imprint: imprintHU,
  privacy: privacyHU,
  services: {
    content: {
      title: 'Havi social média tartalom gyártás',
      subtitle: 'Csomagok',
      description: 'Folyamatos tartalom, ami nem csak kitölti a feedet — hanem építi a márkát.',
      bullets: ['havi tartalomtervezés', 'social videók / reel-ek', 'fotó + videó gyártás', 'platformra optimalizált vágás', 'kreatív koncepció', 'egységes vizuális jelenlét'],
      packages: [
        { name: 'Social Start', subtitle: '15-30 mp', features: ['4 videó/hó'] },
        { name: 'Social Grow', subtitle: '15-30 mp', features: ['8 videó/hó'] },
        { name: 'Social Scale', subtitle: '15-30 mp', features: ['12 videó/hó'] },
        { name: 'Content Shark', subtitle: '15-30 mp', features: ['25-30 videó/hó'] },
      ],
    },
    promo: {
      title: 'Promóciós / Marketing videó',
      subtitle: 'Csomagok',
      description: 'Erős, figyelemre építő videók kampányhoz, launchhoz vagy márkaépítéshez.',
      bullets: ['kampányvideó', 'promóciós spot', 'brand videó', 'esemény / launch content', 'drón / cinematic felvételek', 'vágás és utómunka'],
      packages: [
        { name: 'SPARK', features: ['20 – 45 mp'] },
        { name: 'MOMENTUM', features: ['1 – 1.5 perc'] },
        { name: 'IMPACT', features: ['2 – 2.5 perc'] },
        { name: 'SIGNATURE FILM', features: ['2.5 perc felett'] },
      ],
    },
    wedding: {
      title: 'Esküvői kisfilm',
      subtitle: 'Csomagok',
      description: 'Érzelmes, elegáns és filmszerű esküvői anyagok prémium megközelítéssel.',
      bullets: ['cinematic highlights film', 'egész napos forgatás', 'drón felvételek', 'teaser / short film', 'storytelling alapú vágás', 'prémium vizuális hangulat'],
      packages: [
        { name: 'Essential csomag', subtitle: '3-5 perc / highlight film' },
        { name: 'Signature Csomag', subtitle: '5-7 perc / történetmesélő film' },
        { name: 'Cinema Csomag', subtitle: '8-10 perc / cinematic esküvői film' },
      ],
    },
    web: {
      title: 'Weblap / Webshop',
      subtitle: 'Csomagok',
      description: 'Letisztult, gyors, modern weboldalak, amelyek nem csak jól néznek ki — működnek is.',
      bullets: ['UX szemléletű struktúra', 'modern UI design', 'reszponzív fejlesztés', 'animált megjelenés', 'konverzió fókusz', 'könnyen bővíthető rendszer'],
      subCategories: [
        { name: 'Bemutatkozó weboldal', packages: [
          { name: 'Basic csomag', features: ['1 oldal (görgethető szekciókkal)', 'Reszponzív kialakítás', 'Kapcsolat gomb / űrlap', 'Alap SEO beállítás', 'Analitika integráció', '1 módosítási kör'] },
          { name: 'Plus csomag', features: ['Esztétikusabb, kifinomultabb design', 'Letisztultabb szekció struktúra', 'Gyorsasági optimalizálás', '2 módosítási kör', 'Finomabb vizuális részletek'] },
          { name: 'Premium csomag', features: ['Egyedibb, márka szintű megjelenés', 'Extra szekciók (portfólió, vélemények stb.)', 'Animációk és vizuális részletek', 'Erősebb vizuális hatás', 'Több iteráció'] },
        ] },
        { name: 'Landing oldal', packages: [
          { name: 'Basic csomag', features: ['1 landing oldal', 'Konverzióra optimalizált struktúra', 'Űrlap + köszönő oldal', 'Analitika', 'Alap SEO', '2 módosítási kör'] },
          { name: 'Plus csomag', features: ['Segítség az üzenet és szöveg struktúra kialakításában', 'Erősebb CTA rendszer', 'Gyorsasági optimalizálás', '3 módosítási kör'] },
          { name: 'Premium csomag', features: ['Magasabb szintű design finomítás', 'Mikro animációk', 'Több iteráció', 'Márka szintű megjelenés'] },
        ] },
        { name: 'Céges weboldal', packages: [
          { name: 'Basic csomag', subtitle: 'Starter csomag (max. 5 oldal)', features: ['Egyedi design', 'Reszponzív működés', 'Alap SEO', 'Letisztult struktúra'] },
          { name: 'Plus csomag', subtitle: 'Business csomag (max 8 oldal)', features: ['Komplexebb struktúra', 'Több aloldal', 'Animációk', 'Erősebb SEO optimalizálás', 'Finomabb üzleti logika'] },
          { name: 'Premium csomag', subtitle: 'Premium csomag (max 12 oldal)', features: ['Teljesen egyedi rendszer', 'Komplex üzleti logika', 'Haladó animációk', 'Mélyebb SEO optimalizálás', 'Magasabb szintű testreszabás'] },
        ] },
        { name: 'Webshop', packages: [
          { name: 'Basic csomag', subtitle: 'Starter webshop', features: ['Fizetési és szállítási alap beállítások', 'Kategóriák', 'Kötelező jogi oldalak', 'Max. 20 termék feltöltése', 'Betanítás'] },
          { name: 'Plus csomag', subtitle: 'Business webshop', features: ['Max. 60 termék', 'Termék variációk', 'Kupon rendszer', 'Fejlettebb email értesítések', 'Alap automatizálás'] },
          { name: 'Premium csomag', subtitle: 'Growth webshop', features: ['Max. 150 termék', 'Feed integráció', 'Komplex szállítási és fizetési logika', 'Teljesítmény optimalizálás', 'Több iteráció'] },
        ] },
      ],
      addOns: [
        { name: 'Extra oldal', price: '+40.000 Ft / oldal' },
        { name: 'Szövegírás / átfogalmazás', price: '+25.000 Ft / oldal' },
        { name: 'Landing szövegstruktúra', price: '+80.000 Ft' },
        { name: 'Extra nyelv', price: '+140.000 Ft - +220.000 Ft' },
        { name: 'Időpontfoglaló rendszer', price: '+120.000 Ft' },
        { name: 'Hírlevél integráció', price: '+90.000 Ft' },
        { name: 'Extra termék feltöltés', price: '+1.500 Ft / termék' },
        { name: 'Variációs termék', price: '+2.500 Ft / termék' },
        { name: 'Sürgősségi felár', price: '+15–25%' },
      ],
    },
  },
};

const en: Translations = {
  nav: { services: 'Services', projects: 'Projects', about: 'About', contact: 'Contact' },
  hero: {
    subtitle: 'Digital presence. One system.',
    tags: 'Video. Web. Social. Campaigns.',
    projectsBtn: 'Projects',
    quoteBtn: 'Get a Quote',
    scroll: 'Scroll',
  },
  manifesto: {
    lines: [
      'Most brands are only active during campaigns.',
      'We keep working even when there\'s none.',
      'Presence is not seasonal.',
      'It either works. Or it doesn\'t.',
      'We don\'t treat video, web, and social separately.',
      'We think in systems.',
      'When we create content, it has a purpose.',
      'When we build a website, it doesn\'t just look good — it converts.',
      'When we\'re present, it\'s not by accident.',
      'Never Off. Always On.',
      'Not hype.',
      'Continuous work.',
    ],
    summary: 'We build complete digital presence for businesses — from strategy to execution.',
  },
  logoMarquee: { label: 'Brands we\'ve worked with' },
  servicesIntro: {
    line1: 'We don\'t think in campaigns.',
    line2: 'We think in systems.',
    subtitle: 'This is where everything connects.',
  },
  servicesGrid: { details: 'Details', quoteBtn: 'Get a Quote', bestSeller: 'Best Seller' },
  projects: {
    title: 'This is what it looks like when it actually works.',
    subtitle: 'Not stock. Not a demo. These are live, on the market.',
    viewProject: 'View project',
    items: [
      { id: 'gymtronic', name: 'Gymtronic', category: 'Social Content + Performance', tag: 'Monthly content', description: 'Monthly social content production for a dynamic fitness brand — video, reels, photos, in a unified visual system.' },
      { id: 'hotel-aurum', name: 'Hotel Aurum', category: 'Brand Film + Web Refresh', tag: 'Marketing video + Web', description: 'Premium brand film and complete website redesign for a boutique hotel in the Balaton Uplands.' },
      { id: 'bistro-nine', name: 'Bistro Nine', category: 'Restaurant Promo Content', tag: 'Promotional content', description: 'Restaurant promotional content that\'s not just beautiful — it brings in guests.' },
      { id: 'dora-mark', name: 'Dóra & Márk', category: 'Cinematic Wedding Film', tag: 'Wedding film', description: 'Cinematic wedding highlights that\'s not a slideshow — it\'s a story.' },
    ],
  },
  whyUs: {
    title: 'Not every company needs us.\nBut those who take their presence seriously, do.',
    line1: 'We don\'t disappear between two projects.',
    line2: 'We don\'t switch off.',
    tagline: 'Never Off. Always On.',
    differentiators: [
      'We don\'t work from templates.',
      'We don\'t think in separate pieces, but in systems.',
      'We don\'t deliver half-finished work.',
    ],
  },
  cta: {
    title: 'If you\'re serious, let\'s go.',
    line1: 'We don\'t just run campaigns.',
    line2: 'We build systems.',
    tagline: 'Never Off. Always On.',
    quoteBtn: 'Get a Quote',
  },
  form: {
    title: 'Request a Quote',
    subtitle: 'A few steps and we\'ll get back to you.',
    steps: ['Service', 'Business type', 'Project', 'Budget', 'Timeline', 'Contact'],
    step1Title: 'Which service interests you?',
    step1Options: ['Monthly content', 'Marketing video', 'Website', 'Wedding film', 'Multiple'],
    step2Title: 'What type of business?',
    step2Options: ['Restaurant', 'Hotel', 'Gym', 'Local business', 'Other'],
    step3Title: 'Briefly describe the project',
    step3Placeholder: 'E.g. I need a new website for my restaurant and monthly social content...',
    step4Title: 'Budget',
    step4Options: ['Under €800', '€800–€2,200', '€2,200–€4,000', '€4,000+'],
    step5Title: 'When do you need it?',
    step5Options: ['ASAP', 'Within 1 month', '1–3 months', 'Flexible'],
    step6Title: 'Contact details',
    nameLabel: 'Name *',
    namePlaceholder: 'Your name',
    emailLabel: 'Email *',
    emailPlaceholder: 'email@example.com',
    phoneLabel: 'Phone',
    phonePlaceholder: '+36 30 123 4567',
    required: 'Required',
    back: 'Back',
    next: 'Next',
    submit: 'Submit',
    sending: 'Sending...',
    successTitle: 'Received.',
    successSubtitle: 'We\'ll get back to you soon.',
    errorTitle: 'Something went wrong.',
    errorSubtitle: 'Please try again or contact us directly at hello@nooff-studio.com',
    retry: 'Try again',
    step1Required: 'Please select at least one service to continue.',
    step2Required: 'Please choose your business type to continue.',
    step3Required: 'Please describe your project briefly.',
    step4Required: 'Please select a budget range to continue.',
    step5Required: 'Please choose a timeline to continue.',
    step6Required: 'Please fill in the required fields.',
    invalidEmail: 'Please enter a valid email address.',
    invalidPhone: 'Please enter a valid phone number (e.g. +36 30 123 4567).',
    captchaRequired: 'Please verify that you are not a robot.',
  },
  footer: {
    services: 'Services',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    quickLinks: 'Quick links',
    contactTitle: 'Contact',
    copyright: '© 2026 NO OFF Studio. All rights reserved.',
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
    backToHome: 'Back to home',
  },
  serviceDetail: {
    back: 'Services',
    popular: 'Popular',
    choosePkg: 'Choose the package that suits you best.',
    quoteBtn: 'Get a Quote',
    addOnsTitle: 'Add-on services',
    questionTitle: 'Have a question?',
    questionSubtitle: 'Write to us and we\'ll help you find the ideal package.',
    allServices: 'All services',
    notFoundTitle: '404',
    notFoundText: 'This service was not found.',
    notFoundBtn: 'Back to services',
  },
  imprint: imprintEN,
  privacy: privacyEN,
  services: {
    content: {
      title: 'Monthly social media content',
      subtitle: 'Packages',
      description: 'Continuous content that doesn\'t just fill the feed — it builds the brand.',
      bullets: ['monthly content planning', 'social videos / reels', 'photo + video production', 'platform-optimized editing', 'creative concepts', 'unified visual presence'],
      packages: [
        { name: 'Social Start', subtitle: '15-30 sec', features: ['4 videos/month'] },
        { name: 'Social Grow', subtitle: '15-30 sec', features: ['8 videos/month'] },
        { name: 'Social Scale', subtitle: '15-30 sec', features: ['12 videos/month'] },
        { name: 'Content Shark', subtitle: '15-30 sec', features: ['25-30 videos/month'] },
      ],
    },
    promo: {
      title: 'Promotional / Marketing video',
      subtitle: 'Packages',
      description: 'Powerful, attention-grabbing videos for campaigns, launches, or brand building.',
      bullets: ['campaign video', 'promotional spot', 'brand video', 'event / launch content', 'drone / cinematic footage', 'editing & post-production'],
      packages: [
        { name: 'SPARK', features: ['20 – 45 sec'] },
        { name: 'MOMENTUM', features: ['1 – 1.5 min'] },
        { name: 'IMPACT', features: ['2 – 2.5 min'] },
        { name: 'SIGNATURE FILM', features: ['2.5+ min'] },
      ],
    },
    wedding: {
      title: 'Wedding cinematic film',
      subtitle: 'Packages',
      description: 'Emotional, elegant, and cinematic wedding content with a premium approach.',
      bullets: ['cinematic highlights film', 'full-day shooting', 'drone footage', 'teaser / short film', 'story-based editing', 'premium visual atmosphere'],
      packages: [
        { name: 'Essential Package', subtitle: '3-5 min / highlight film' },
        { name: 'Signature Package', subtitle: '5-7 min / storytelling film' },
        { name: 'Cinema Package', subtitle: '8-10 min / cinematic wedding film' },
      ],
    },
    web: {
      title: 'Website / Webshop',
      subtitle: 'Packages',
      description: 'Clean, fast, modern websites that don\'t just look good — they work.',
      bullets: ['UX-focused structure', 'modern UI design', 'responsive development', 'animated appearance', 'conversion focus', 'easily expandable system'],
      subCategories: [
        { name: 'Portfolio website', packages: [
          { name: 'Basic package', features: ['1 page (scrollable sections)', 'Responsive layout', 'Contact button / form', 'Basic SEO setup', 'Analytics integration', '1 revision round'] },
          { name: 'Plus package', features: ['More refined, polished design', 'Cleaner section structure', 'Speed optimization', '2 revision rounds', 'Finer visual details'] },
          { name: 'Premium package', features: ['Unique, brand-level appearance', 'Extra sections (portfolio, reviews, etc.)', 'Animations and visual details', 'Stronger visual impact', 'More iterations'] },
        ] },
        { name: 'Landing page', packages: [
          { name: 'Basic package', features: ['1 landing page', 'Conversion-optimized structure', 'Form + thank you page', 'Analytics', 'Basic SEO', '2 revision rounds'] },
          { name: 'Plus package', features: ['Help with messaging and copy structure', 'Stronger CTA system', 'Speed optimization', '3 revision rounds'] },
          { name: 'Premium package', features: ['Higher-level design refinement', 'Micro animations', 'More iterations', 'Brand-level appearance'] },
        ] },
        { name: 'Corporate website', packages: [
          { name: 'Basic package', subtitle: 'Starter (max 5 pages)', features: ['Custom design', 'Responsive behavior', 'Basic SEO', 'Clean structure'] },
          { name: 'Plus package', subtitle: 'Business (max 8 pages)', features: ['More complex structure', 'Multiple subpages', 'Animations', 'Stronger SEO optimization', 'Finer business logic'] },
          { name: 'Premium package', subtitle: 'Premium (max 12 pages)', features: ['Fully custom system', 'Complex business logic', 'Advanced animations', 'Deeper SEO optimization', 'Higher-level customization'] },
        ] },
        { name: 'Webshop', packages: [
          { name: 'Basic package', subtitle: 'Starter webshop', features: ['Payment & shipping setup', 'Categories', 'Mandatory legal pages', 'Max 20 product uploads', 'Training'] },
          { name: 'Plus package', subtitle: 'Business webshop', features: ['Max 60 products', 'Product variations', 'Coupon system', 'Advanced email notifications', 'Basic automation'] },
          { name: 'Premium package', subtitle: 'Growth webshop', features: ['Max 150 products', 'Feed integration', 'Complex shipping & payment logic', 'Performance optimization', 'More iterations'] },
        ] },
      ],
      addOns: [
        { name: 'Extra page', price: '+€110 / page' },
        { name: 'Copywriting / rewriting', price: '+€70 / page' },
        { name: 'Landing copy structure', price: '+€220' },
        { name: 'Extra language', price: '+€380 - +€600' },
        { name: 'Booking system', price: '+€330' },
        { name: 'Newsletter integration', price: '+€250' },
        { name: 'Extra product upload', price: '+€4 / product' },
        { name: 'Product variation', price: '+€7 / product' },
        { name: 'Rush fee', price: '+15–25%' },
      ],
    },
  },
};

const de: Translations = {
  nav: { services: 'Leistungen', projects: 'Projekte', about: 'Über uns', contact: 'Kontakt' },
  hero: {
    subtitle: 'Digitale Präsenz. Ein System.',
    tags: 'Video. Web. Social. Kampagnen.',
    projectsBtn: 'Projekte',
    quoteBtn: 'Angebot anfordern',
    scroll: 'Scrollen',
  },
  manifesto: {
    lines: [
      'Die meisten Marken sind nur aktiv, wenn eine Kampagne läuft.',
      'Wir arbeiten auch dann, wenn keine läuft.',
      'Präsenz ist nicht saisonal.',
      'Entweder es funktioniert. Oder nicht.',
      'Wir behandeln Video, Web und Social nicht getrennt.',
      'Wir denken in Systemen.',
      'Wenn wir Content erstellen, hat er ein Ziel.',
      'Wenn wir eine Website bauen, sieht sie nicht nur gut aus — sie konvertiert.',
      'Wenn wir präsent sind, ist das kein Zufall.',
      'Never Off. Always On.',
      'Kein Hype.',
      'Kontinuierliche Arbeit.',
    ],
    summary: 'Wir bauen komplette digitale Präsenz für Unternehmen — von der Strategie bis zur Umsetzung.',
  },
  logoMarquee: { label: 'Marken, mit denen wir gearbeitet haben' },
  servicesIntro: {
    line1: 'Wir denken nicht in Kampagnen.',
    line2: 'Wir denken in Systemen.',
    subtitle: 'Hier kommt alles zusammen.',
  },
  servicesGrid: { details: 'Details', quoteBtn: 'Angebot anfordern', bestSeller: 'Best Seller' },
  projects: {
    title: 'So sieht es aus, wenn etwas wirklich funktioniert.',
    subtitle: 'Kein Stock. Keine Demo. Damit sind wir bereits auf dem Markt.',
    viewProject: 'Projekt ansehen',
    items: [
      { id: 'gymtronic', name: 'Gymtronic', category: 'Social Content + Performance', tag: 'Monatliche Inhalte', description: 'Monatliche Social-Content-Produktion für eine dynamische Fitnessmarke — Video, Reels, Fotos, in einem einheitlichen visuellen System.' },
      { id: 'hotel-aurum', name: 'Hotel Aurum', category: 'Brand Film + Web Refresh', tag: 'Marketingvideo + Web', description: 'Premium-Brandfilm und komplettes Website-Redesign für ein Boutique-Hotel am Balaton.' },
      { id: 'bistro-nine', name: 'Bistro Nine', category: 'Restaurant Promo Content', tag: 'Promo-Inhalte', description: 'Restaurant-Promoinhalte, die nicht nur schön sind — sondern Gäste bringen.' },
      { id: 'dora-mark', name: 'Dóra & Márk', category: 'Cinematic Wedding Film', tag: 'Hochzeitsfilm', description: 'Filmische Hochzeits-Highlights, die keine Diashow sind — sondern eine Geschichte.' },
    ],
  },
  whyUs: {
    title: 'Nicht jedes Unternehmen braucht uns.\nAber wer seine Präsenz ernst nimmt, schon.',
    line1: 'Wir verschwinden nicht zwischen zwei Projekten.',
    line2: 'Wir schalten nicht ab.',
    tagline: 'Never Off. Always On.',
    differentiators: [
      'Wir arbeiten nicht nach Vorlage.',
      'Wir denken nicht in einzelnen Elementen, sondern in Systemen.',
      'Wir liefern keine halbfertigen Arbeiten.',
    ],
  },
  cta: {
    title: 'Wenn du es ernst meinst, los geht\'s.',
    line1: 'Wir machen keine Kampagnen.',
    line2: 'Wir bauen Systeme.',
    tagline: 'Never Off. Always On.',
    quoteBtn: 'Angebot anfordern',
  },
  form: {
    title: 'Angebot anfordern',
    subtitle: 'Ein paar Schritte und wir melden uns.',
    steps: ['Leistung', 'Unternehmenstyp', 'Projekt', 'Budget', 'Zeitrahmen', 'Kontakt'],
    step1Title: 'Welche Leistung interessiert dich?',
    step1Options: ['Monatliche Inhalte', 'Marketingvideo', 'Webseite', 'Hochzeitsfilm', 'Mehrere'],
    step2Title: 'Was für ein Unternehmen hast du?',
    step2Options: ['Restaurant', 'Hotel', 'Fitnessstudio', 'Lokales Unternehmen', 'Sonstiges'],
    step3Title: 'Beschreibe kurz das Projekt',
    step3Placeholder: 'Z.B. Ich brauche eine neue Webseite für mein Restaurant und monatlichen Social Content...',
    step4Title: 'Budget',
    step4Options: ['Unter €800', '€800–€2.200', '€2.200–€4.000', '€4.000+'],
    step5Title: 'Wann brauchst du es?',
    step5Options: ['ASAP', 'Innerhalb eines Monats', '1–3 Monate', 'Flexibel'],
    step6Title: 'Kontaktdaten',
    nameLabel: 'Name *',
    namePlaceholder: 'Dein Name',
    emailLabel: 'E-Mail *',
    emailPlaceholder: 'email@beispiel.de',
    phoneLabel: 'Telefon',
    phonePlaceholder: '+49 170 123 4567',
    required: 'Pflichtfeld',
    back: 'Zurück',
    next: 'Weiter',
    submit: 'Absenden',
    sending: 'Wird gesendet...',
    successTitle: 'Erhalten.',
    successSubtitle: 'Wir melden uns bald.',
    errorTitle: 'Ein Fehler ist aufgetreten.',
    errorSubtitle: 'Bitte versuche es erneut oder schreibe uns direkt an hello@nooff-studio.com',
    retry: 'Erneut versuchen',
    step1Required: 'Bitte wähle mindestens eine Leistung aus.',
    step2Required: 'Bitte wähle deinen Unternehmenstyp aus.',
    step3Required: 'Bitte beschreibe dein Projekt kurz.',
    step4Required: 'Bitte wähle ein Budget aus.',
    step5Required: 'Bitte wähle einen Zeitrahmen aus.',
    step6Required: 'Bitte fülle die Pflichtfelder aus.',
    invalidEmail: 'Bitte gib eine gültige E-Mail-Adresse ein.',
    invalidPhone: 'Bitte gib eine gültige Telefonnummer ein (z.B. +49 170 123 4567).',
    captchaRequired: 'Bitte bestätige, dass du kein Roboter bist.',
  },
  footer: {
    services: 'Leistungen',
    projects: 'Projekte',
    about: 'Über uns',
    contact: 'Kontakt',
    quickLinks: 'Schnelllinks',
    contactTitle: 'Kontakt',
    copyright: '© 2026 NO OFF Studio. Alle Rechte vorbehalten.',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    backToHome: 'Zurück zur Startseite',
  },
  serviceDetail: {
    back: 'Leistungen',
    popular: 'Beliebt',
    choosePkg: 'Wähle das Paket, das am besten zu dir passt.',
    quoteBtn: 'Angebot anfordern',
    addOnsTitle: 'Zusatzleistungen',
    questionTitle: 'Hast du eine Frage?',
    questionSubtitle: 'Schreib uns und wir helfen dir, das ideale Paket zu finden.',
    allServices: 'Alle Leistungen',
    notFoundTitle: '404',
    notFoundText: 'Diese Leistung wurde nicht gefunden.',
    notFoundBtn: 'Zurück zu Leistungen',
  },
  imprint: imprintDE,
  privacy: privacyDE,
  services: {
    content: {
      title: 'Monatliche Social-Media-Inhalte',
      subtitle: 'Pakete',
      description: 'Kontinuierlicher Content, der den Feed nicht nur füllt — sondern die Marke aufbaut.',
      bullets: ['monatliche Contentplanung', 'Social-Videos / Reels', 'Foto + Video Produktion', 'plattformoptimierter Schnitt', 'kreative Konzepte', 'einheitliche visuelle Präsenz'],
      packages: [
        { name: 'Social Start', subtitle: '15-30 Sek.', features: ['4 Videos/Monat'] },
        { name: 'Social Grow', subtitle: '15-30 Sek.', features: ['8 Videos/Monat'] },
        { name: 'Social Scale', subtitle: '15-30 Sek.', features: ['12 Videos/Monat'] },
        { name: 'Content Shark', subtitle: '15-30 Sek.', features: ['25-30 Videos/Monat'] },
      ],
    },
    promo: {
      title: 'Werbe- / Marketingvideo',
      subtitle: 'Pakete',
      description: 'Starke, aufmerksamkeitsstarke Videos für Kampagnen, Launches oder Markenaufbau.',
      bullets: ['Kampagnenvideo', 'Werbespot', 'Markenvideo', 'Event / Launch Content', 'Drohne / filmische Aufnahmen', 'Schnitt & Postproduktion'],
      packages: [
        { name: 'SPARK', features: ['20 – 45 Sek.'] },
        { name: 'MOMENTUM', features: ['1 – 1,5 Min.'] },
        { name: 'IMPACT', features: ['2 – 2,5 Min.'] },
        { name: 'SIGNATURE FILM', features: ['2,5+ Min.'] },
      ],
    },
    wedding: {
      title: 'Hochzeitsfilm',
      subtitle: 'Pakete',
      description: 'Emotionale, elegante und filmische Hochzeitsinhalte mit Premium-Ansatz.',
      bullets: ['Cinematic Highlights Film', 'ganztägiges Shooting', 'Drohnenaufnahmen', 'Teaser / Kurzfilm', 'erzählerischer Schnitt', 'Premium visuelle Atmosphäre'],
      packages: [
        { name: 'Essential Paket', subtitle: '3-5 Min. / Highlight Film' },
        { name: 'Signature Paket', subtitle: '5-7 Min. / Erzählerischer Film' },
        { name: 'Cinema Paket', subtitle: '8-10 Min. / Cinematic Hochzeitsfilm' },
      ],
    },
    web: {
      title: 'Webseite / Webshop',
      subtitle: 'Pakete',
      description: 'Klare, schnelle, moderne Webseiten, die nicht nur gut aussehen — sondern funktionieren.',
      bullets: ['UX-orientierte Struktur', 'modernes UI-Design', 'responsive Entwicklung', 'animiertes Erscheinungsbild', 'Konversionsfokus', 'leicht erweiterbares System'],
      subCategories: [
        { name: 'Portfolio-Webseite', packages: [
          { name: 'Basic Paket', features: ['1 Seite (scrollbare Sektionen)', 'Responsives Layout', 'Kontaktbutton / Formular', 'Basis-SEO-Setup', 'Analytics-Integration', '1 Korrekturschleife'] },
          { name: 'Plus Paket', features: ['Ästhetischeres, verfeinertes Design', 'Klarere Sektionsstruktur', 'Geschwindigkeitsoptimierung', '2 Korrekturschleifen', 'Feinere visuelle Details'] },
          { name: 'Premium Paket', features: ['Einzigartiges, markengerechtes Erscheinungsbild', 'Extra Sektionen (Portfolio, Bewertungen usw.)', 'Animationen und visuelle Details', 'Stärkerer visueller Eindruck', 'Mehr Iterationen'] },
        ] },
        { name: 'Landing Page', packages: [
          { name: 'Basic Paket', features: ['1 Landing Page', 'Konversionsoptimierte Struktur', 'Formular + Dankeseite', 'Analytics', 'Basis-SEO', '2 Korrekturschleifen'] },
          { name: 'Plus Paket', features: ['Hilfe bei Botschaft und Textstruktur', 'Stärkeres CTA-System', 'Geschwindigkeitsoptimierung', '3 Korrekturschleifen'] },
          { name: 'Premium Paket', features: ['Hochwertigere Designverfeinerung', 'Mikro-Animationen', 'Mehr Iterationen', 'Markengerechtes Erscheinungsbild'] },
        ] },
        { name: 'Firmenwebseite', packages: [
          { name: 'Basic Paket', subtitle: 'Starter (max. 5 Seiten)', features: ['Individuelles Design', 'Responsives Verhalten', 'Basis-SEO', 'Klare Struktur'] },
          { name: 'Plus Paket', subtitle: 'Business (max. 8 Seiten)', features: ['Komplexere Struktur', 'Mehrere Unterseiten', 'Animationen', 'Stärkere SEO-Optimierung', 'Feinere Geschäftslogik'] },
          { name: 'Premium Paket', subtitle: 'Premium (max. 12 Seiten)', features: ['Komplett individuelles System', 'Komplexe Geschäftslogik', 'Erweiterte Animationen', 'Tiefere SEO-Optimierung', 'Höheres Maß an Individualisierung'] },
        ] },
        { name: 'Webshop', packages: [
          { name: 'Basic Paket', subtitle: 'Starter Webshop', features: ['Zahlungs- und Versandeinrichtung', 'Kategorien', 'Pflicht-Rechtsseiten', 'Max. 20 Produktuploads', 'Einschulung'] },
          { name: 'Plus Paket', subtitle: 'Business Webshop', features: ['Max. 60 Produkte', 'Produktvariationen', 'Gutscheinsystem', 'Erweiterte E-Mail-Benachrichtigungen', 'Basis-Automatisierung'] },
          { name: 'Premium Paket', subtitle: 'Growth Webshop', features: ['Max. 150 Produkte', 'Feed-Integration', 'Komplexe Versand- & Zahlungslogik', 'Performance-Optimierung', 'Mehr Iterationen'] },
        ] },
      ],
      addOns: [
        { name: 'Extra Seite', price: '+110 € / Seite' },
        { name: 'Texterstellung / Umschreibung', price: '+70 € / Seite' },
        { name: 'Landing Textstruktur', price: '+220 €' },
        { name: 'Extra Sprache', price: '+380 € - +600 €' },
        { name: 'Buchungssystem', price: '+330 €' },
        { name: 'Newsletter-Integration', price: '+250 €' },
        { name: 'Extra Produktupload', price: '+4 € / Produkt' },
        { name: 'Produktvariation', price: '+7 € / Produkt' },
        { name: 'Eilzuschlag', price: '+15–25%' },
      ],
    },
  },
};

const sk: Translations = {
  nav: { services: 'Služby', projects: 'Projekty', about: 'O nás', contact: 'Kontakt' },
  hero: {
    subtitle: 'Digitálna prítomnosť. Jeden systém.',
    tags: 'Video. Web. Social. Kampane.',
    projectsBtn: 'Projekty',
    quoteBtn: 'Chcem ponuku',
    scroll: 'Scroll',
  },
  manifesto: {
    lines: [
      'Väčšina značiek je aktívna len počas kampane.',
      'My pracujeme aj vtedy, keď žiadna nie je.',
      'Prítomnosť nie je sezónna.',
      'Buď to funguje. Alebo nie.',
      'My neoddeľujeme video, web a social.',
      'Myslíme v systémoch.',
      'Keď tvoríme obsah, má to cieľ.',
      'Keď staviame web, nie je len pekný — konvertuje.',
      'Keď sme prítomní, nie je to náhoda.',
      'Never Off. Always On.',
      'Žiadny hype.',
      'Nepretržitá práca.',
    ],
    summary: 'Budujeme kompletnú digitálnu prítomnosť pre firmy — od stratégie po realizáciu.',
  },
  logoMarquee: { label: 'Značky, s ktorými sme pracovali' },
  servicesIntro: {
    line1: 'Nemyslíme v kampaniach.',
    line2: 'Myslíme v systémoch.',
    subtitle: 'Tu sa všetko spája.',
  },
  servicesGrid: { details: 'Detaily', quoteBtn: 'Chcem ponuku', bestSeller: 'Best Seller' },
  projects: {
    title: 'Takto to vyzerá, keď niečo naozaj funguje.',
    subtitle: 'Žiadny stock. Žiadne demo. S týmto sme už na trhu.',
    viewProject: 'Zobraziť projekt',
    items: [
      { id: 'gymtronic', name: 'Gymtronic', category: 'Social Content + Performance', tag: 'Mesačný obsah', description: 'Mesačná produkcia social obsahu pre dynamickú fitness značku — video, reels, fotky, v jednotnom vizuálnom systéme.' },
      { id: 'hotel-aurum', name: 'Hotel Aurum', category: 'Brand Film + Web Refresh', tag: 'Marketing video + Web', description: 'Prémiový brand film a kompletný redizajn webu pre butikový hotel pri Balatone.' },
      { id: 'bistro-nine', name: 'Bistro Nine', category: 'Restaurant Promo Content', tag: 'Promočný obsah', description: 'Reštauračný promo obsah, ktorý nie je len pekný — ale prináša hostí.' },
      { id: 'dora-mark', name: 'Dóra & Márk', category: 'Cinematic Wedding Film', tag: 'Svadobný film', description: 'Filmové svadobné highlights, ktoré nie sú slideshow — ale príbeh.' },
    ],
  },
  whyUs: {
    title: 'Nie každá firma nás potrebuje.\nAle tá, ktorá berie svoju prítomnosť vážne, áno.',
    line1: 'Nezmizíme medzi dvoma projektmi.',
    line2: 'Nevypíname.',
    tagline: 'Never Off. Always On.',
    differentiators: [
      'Nepracujeme podľa šablón.',
      'Nemyslíme v jednotlivých častiach, ale v systémoch.',
      'Nedodávame nedokončenú prácu.',
    ],
  },
  cta: {
    title: 'Ak to myslíš vážne, poďme na to.',
    line1: 'My nerobíme len kampane.',
    line2: 'Budujeme systémy.',
    tagline: 'Never Off. Always On.',
    quoteBtn: 'Chcem ponuku',
  },
  form: {
    title: 'Žiadosť o ponuku',
    subtitle: 'Pár krokov a ozveme sa.',
    steps: ['Služba', 'Typ firmy', 'Projekt', 'Rozpočet', 'Časový rámec', 'Kontakt'],
    step1Title: 'Ktorá služba ťa zaujíma?',
    step1Options: ['Mesačný obsah', 'Marketing video', 'Webstránka', 'Svadobný film', 'Viaceré'],
    step2Title: 'Aký typ firmy máš?',
    step2Options: ['Reštaurácia', 'Hotel', 'Fitnescentrum', 'Miestna firma', 'Iné'],
    step3Title: 'Stručne opíš projekt',
    step3Placeholder: 'Napr. potrebujem novú webstránku pre reštauráciu a mesačný social obsah...',
    step4Title: 'Rozpočet',
    step4Options: ['Pod 800 €', '800 €–2 200 €', '2 200 €–4 000 €', '4 000 €+'],
    step5Title: 'Kedy to potrebuješ?',
    step5Options: ['ASAP', 'Do 1 mesiaca', '1–3 mesiace', 'Flexibilný'],
    step6Title: 'Kontaktné údaje',
    nameLabel: 'Meno *',
    namePlaceholder: 'Tvoje meno',
    emailLabel: 'Email *',
    emailPlaceholder: 'email@priklad.sk',
    phoneLabel: 'Telefón',
    phonePlaceholder: '+421 900 123 456',
    required: 'Povinné',
    back: 'Späť',
    next: 'Ďalej',
    submit: 'Odoslať',
    sending: 'Odosiela sa...',
    successTitle: 'Prijaté.',
    successSubtitle: 'Čoskoro sa ozveme.',
    errorTitle: 'Vyskytla sa chyba.',
    errorSubtitle: 'Skús to znova alebo nám napíš priamo na hello@nooff-studio.com',
    retry: 'Skúsiť znova',
    step1Required: 'Vyber aspoň jednu službu na pokračovanie.',
    step2Required: 'Vyber typ svojej firmy na pokračovanie.',
    step3Required: 'Prosím, stručne opíš svoj projekt.',
    step4Required: 'Vyber rozpočet na pokračovanie.',
    step5Required: 'Vyber časový rámec na pokračovanie.',
    step6Required: 'Prosím, vyplň povinné polia.',
    invalidEmail: 'Prosím, zadaj platnú emailovú adresu.',
    invalidPhone: 'Prosím, zadaj platné telefónne číslo (napr. +421 900 123 456).',
    captchaRequired: 'Prosím, over, že nie si robot.',
  },
  footer: {
    services: 'Služby',
    projects: 'Projekty',
    about: 'O nás',
    contact: 'Kontakt',
    quickLinks: 'Rýchle odkazy',
    contactTitle: 'Kontakt',
    copyright: '© 2026 NO OFF Studio. Všetky práva vyhradené.',
    imprint: 'Impressum',
    privacy: 'Ochrana údajov',
    backToHome: 'Späť na hlavnú stránku',
  },
  serviceDetail: {
    back: 'Služby',
    popular: 'Obľúbený',
    choosePkg: 'Vyber si balíček, ktorý ti vyhovuje.',
    quoteBtn: 'Chcem ponuku',
    addOnsTitle: 'Doplnkové služby',
    questionTitle: 'Máš otázku?',
    questionSubtitle: 'Napíš nám a pomôžeme ti nájsť ideálny balíček.',
    allServices: 'Všetky služby',
    notFoundTitle: '404',
    notFoundText: 'Táto služba nebola nájdená.',
    notFoundBtn: 'Späť na služby',
  },
  imprint: imprintSK,
  privacy: privacySK,
  services: {
    content: {
      title: 'Mesačná tvorba obsahu pre social médiá',
      subtitle: 'Balíčky',
      description: 'Nepretržitý obsah, ktorý nielenže plní feed — ale buduje značku.',
      bullets: ['mesačné plánovanie obsahu', 'social videá / reels', 'foto + video produkcia', 'platformovo optimalizovaný strih', 'kreatívne koncepty', 'jednotná vizuálna prítomnosť'],
      packages: [
        { name: 'Social Start', subtitle: '15-30 sek.', features: ['4 videá/mesiac'] },
        { name: 'Social Grow', subtitle: '15-30 sek.', features: ['8 videí/mesiac'] },
        { name: 'Social Scale', subtitle: '15-30 sek.', features: ['12 videí/mesiac'] },
        { name: 'Content Shark', subtitle: '15-30 sek.', features: ['25-30 videí/mesiac'] },
      ],
    },
    promo: {
      title: 'Promočné / Marketingové video',
      subtitle: 'Balíčky',
      description: 'Silné, pútavé videá pre kampane, launche alebo budovanie značky.',
      bullets: ['kampaňové video', 'promočný spot', 'brand video', 'event / launch obsah', 'drón / filmové zábery', 'strih a postprodukcia'],
      packages: [
        { name: 'SPARK', features: ['20 – 45 sek.'] },
        { name: 'MOMENTUM', features: ['1 – 1,5 min.'] },
        { name: 'IMPACT', features: ['2 – 2,5 min.'] },
        { name: 'SIGNATURE FILM', features: ['2,5+ min.'] },
      ],
    },
    wedding: {
      title: 'Svadobný film',
      subtitle: 'Balíčky',
      description: 'Emotívny, elegantný a filmový svadobný obsah s prémiovým prístupom.',
      bullets: ['cinematic highlights film', 'celodenné natáčanie', 'drónové zábery', 'teaser / krátky film', 'rozprávačský strih', 'prémiová vizuálna atmosféra'],
      packages: [
        { name: 'Essential balíček', subtitle: '3-5 min. / highlight film' },
        { name: 'Signature balíček', subtitle: '5-7 min. / rozprávačský film' },
        { name: 'Cinema balíček', subtitle: '8-10 min. / cinematic svadobný film' },
      ],
    },
    web: {
      title: 'Webstránka / Webshop',
      subtitle: 'Balíčky',
      description: 'Čisté, rýchle, moderné webstránky, ktoré nielen dobre vyzerajú — ale fungujú.',
      bullets: ['UX-orientovaná štruktúra', 'moderný UI dizajn', 'responzívny vývoj', 'animovaný vzhľad', 'zameranie na konverzie', 'ľahko rozšíriteľný systém'],
      subCategories: [
        { name: 'Prezentačná webstránka', packages: [
          { name: 'Basic balíček', features: ['1 stránka (scrollovateľné sekcie)', 'Responzívny layout', 'Kontaktný button / formulár', 'Základné SEO nastavenie', 'Integrácia analytiky', '1 kolo úprav'] },
          { name: 'Plus balíček', features: ['Estetickejší, prepracovanejší dizajn', 'Čistejšia štruktúra sekcií', 'Optimalizácia rýchlosti', '2 kolá úprav', 'Jemnejšie vizuálne detaily'] },
          { name: 'Premium balíček', features: ['Unikátny, značkový vzhľad', 'Extra sekcie (portfólio, recenzie atď.)', 'Animácie a vizuálne detaily', 'Silnejší vizuálny dojem', 'Viac iterácií'] },
        ] },
        { name: 'Landing page', packages: [
          { name: 'Basic balíček', features: ['1 landing page', 'Konverzne optimalizovaná štruktúra', 'Formulár + ďakovacia stránka', 'Analytika', 'Základné SEO', '2 kolá úprav'] },
          { name: 'Plus balíček', features: ['Pomoc s odkazom a textovou štruktúrou', 'Silnejší CTA systém', 'Optimalizácia rýchlosti', '3 kolá úprav'] },
          { name: 'Premium balíček', features: ['Vyššia úroveň dizajnového doladenia', 'Mikro animácie', 'Viac iterácií', 'Značkový vzhľad'] },
        ] },
        { name: 'Firemná webstránka', packages: [
          { name: 'Basic balíček', subtitle: 'Starter (max. 5 stránok)', features: ['Individuálny dizajn', 'Responzívne správanie', 'Základné SEO', 'Čistá štruktúra'] },
          { name: 'Plus balíček', subtitle: 'Business (max. 8 stránok)', features: ['Komplexnejšia štruktúra', 'Viacero podstránok', 'Animácie', 'Silnejšia SEO optimalizácia', 'Jemnejšia obchodná logika'] },
          { name: 'Premium balíček', subtitle: 'Premium (max. 12 stránok)', features: ['Kompletne individuálny systém', 'Komplexná obchodná logika', 'Pokročilé animácie', 'Hlbšia SEO optimalizácia', 'Vyššia úroveň prispôsobenia'] },
        ] },
        { name: 'Webshop', packages: [
          { name: 'Basic balíček', subtitle: 'Starter webshop', features: ['Nastavenie platieb a dopravy', 'Kategórie', 'Povinné právne stránky', 'Max. 20 produktov', 'Zaškolenie'] },
          { name: 'Plus balíček', subtitle: 'Business webshop', features: ['Max. 60 produktov', 'Variácie produktov', 'Kupónový systém', 'Pokročilé emailové notifikácie', 'Základná automatizácia'] },
          { name: 'Premium balíček', subtitle: 'Growth webshop', features: ['Max. 150 produktov', 'Feed integrácia', 'Komplexná logika dopravy a platieb', 'Optimalizácia výkonu', 'Viac iterácií'] },
        ] },
      ],
      addOns: [
        { name: 'Extra stránka', price: '+110 € / stránka' },
        { name: 'Písanie textov / prepis', price: '+70 € / stránka' },
        { name: 'Landing textová štruktúra', price: '+220 €' },
        { name: 'Extra jazyk', price: '+380 € - +600 €' },
        { name: 'Rezervačný systém', price: '+330 €' },
        { name: 'Newsletter integrácia', price: '+250 €' },
        { name: 'Extra nahrávanie produktov', price: '+4 € / produkt' },
        { name: 'Variácia produktu', price: '+7 € / produkt' },
        { name: 'Príplatok za urgenciu', price: '+15–25%' },
      ],
    },
  },
};

export const translations: Record<Lang, Translations> = { HU: hu, EN: en, DE: de, SK: sk };
