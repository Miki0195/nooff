import { motion } from 'framer-motion';

function scrollToQuote() {
  const element = document.querySelector('#quote');
  element?.scrollIntoView({ behavior: 'smooth' });
}

const services = [
  {
    id: 'content',
    title: 'Havi szintű tartalomgyártás',
    description:
      'Folyamatos tartalom, ami nem csak kitölti a feedet — hanem építi a márkát.',
    bullets: [
      'havi tartalomtervezés',
      'social videók / reel-ek',
      'fotó + videó gyártás',
      'platformra optimalizált vágás',
      'kreatív koncepció',
      'egységes vizuális jelenlét',
    ],
    bestSeller: true,
    warm: false,
  },
  {
    id: 'promo',
    title: 'Promóciós / Marketing videó',
    description:
      'Erős, figyelemre építő videók kampányhoz, launchhoz vagy márkaépítéshez.',
    bullets: [
      'kampányvideó',
      'promóciós spot',
      'brand videó',
      'esemény / launch content',
      'drón / cinematic felvételek',
      'vágás és utómunka',
    ],
    bestSeller: false,
    warm: false,
  },
  {
    id: 'web',
    title: 'Weboldal készítés',
    description:
      'Letisztult, gyors, modern weboldalak, amelyek nem csak jól néznek ki — működnek is.',
    bullets: [
      'UX szemléletű struktúra',
      'modern UI design',
      'reszponzív fejlesztés',
      'animált megjelenés',
      'konverzió fókusz',
      'könnyen bővíthető rendszer',
    ],
    bestSeller: false,
    warm: false,
  },
  {
    id: 'wedding',
    title: 'Esküvői cinematic film',
    description:
      'Érzelmes, elegáns és filmszerű esküvői anyagok prémium megközelítéssel.',
    bullets: [
      'cinematic highlights film',
      'egész napos forgatás',
      'drón felvételek',
      'teaser / short film',
      'storytelling alapú vágás',
      'prémium vizuális hangulat',
    ],
    bestSeller: false,
    warm: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function ServicesGrid() {
  return (
    <div className="px-6 md:px-10 lg:px-16 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {services.map((service, i) => (
          <motion.article
            key={service.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className={`
              relative rounded-2xl p-8 md:p-10 overflow-hidden
              shadow-xl shadow-black/20
              border transition-all duration-300
              hover:translate-y-[-4px] hover:border-[rgba(255,255,255,0.15)]
              ${service.warm ? 'bg-[#231e18] border-[rgba(255,235,220,0.12)]' : 'bg-[#1c1c1e] border-[rgba(255,255,255,0.08)]'}
            `}
          >
            {service.warm && (
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  background:
                    'radial-gradient(ellipse at 30% 20%, rgba(200, 16, 46, 0.08) 0%, transparent 60%), linear-gradient(180deg, transparent 60%, rgba(35, 30, 24, 0.6) 100%)',
                }}
                aria-hidden
              />
            )}
            {service.bestSeller && (
              <span
                className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-medium text-white"
                style={{ backgroundColor: '#c8102e' }}
              >
                Best Seller
              </span>
            )}

            <div className="relative z-10">
            <h3
              className="text-2xl font-bold text-[#f5f5f5]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {service.title}
            </h3>

            <p
              className="mt-3 text-base text-[#888888]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {service.description}
            </p>

            <ul className="mt-6 space-y-2">
              {service.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2 text-sm text-[#f5f5f5]/90"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span
                    className="shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: '#c8102e' }}
                    aria-hidden
                  />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#"
                className="text-[#f5f5f5] hover:underline transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ opacity: 0.8 }}
                whileTap={{ scale: 0.98 }}
              >
                Részletek
              </motion.a>
              <motion.button
                onClick={scrollToQuote}
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-colors hover:bg-[#a00d24]"
                style={{
                  backgroundColor: '#c8102e',
                  fontFamily: "'Inter', sans-serif",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ajánlatot kérek
              </motion.button>
            </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
