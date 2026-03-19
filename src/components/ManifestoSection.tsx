import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MANIFESTO_LINES = [
  'A legtöbb márka akkor aktív, amikor épp kampány van.',
  'Mi akkor is dolgozunk, amikor nincs.',
  'A jelenlét nem időszakos.',
  'Vagy működik. Vagy nem.',
  'Mi nem külön kezeljük a videót, a webet meg a socialt.',
  'Egy rendszerben gondolkodunk.',
  'Ha tartalmat csinálunk, annak célja van.',
  'Ha webet építünk, az nem csak szép — hanem konvertál.',
  'Ha jelen vagyunk, az nem véletlen.',
  'Never Off. Always On.', // Special: red, bolder, larger
  'Nem hype.',
  'Folyamatos munka.',
] as const;

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function ManifestoSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#0a0a0a] py-32 md:py-40 lg:py-48 overflow-hidden"
    >
      {/* Decorative right-side element — vertical red line + subtle glow */}
      <div
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-3/4"
        style={{
          background: 'linear-gradient(to bottom, transparent, #c8102e 20%, #c8102e 80%, transparent)',
          opacity: 0.4,
        }}
        aria-hidden
      />
      <div
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-64 h-96 -translate-x-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(200, 16, 46, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          {MANIFESTO_LINES.map((line, i) => {
            const isHighlight = line === 'Never Off. Always On.';
            return (
              <motion.p
                key={i}
                custom={i}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={lineVariants}
                className={
                  isHighlight
                    ? 'text-3xl md:text-4xl lg:text-5xl font-bold text-[#c8102e]'
                    : 'text-2xl md:text-3xl lg:text-4xl font-light text-[#f5f5f5]'
                }
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {line}
              </motion.p>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: MANIFESTO_LINES.length * 0.08 + 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 md:mt-20 lg:mt-24 text-lg md:text-xl text-[#888888] max-w-2xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Teljes digitális jelenlétet építünk vállalkozásoknak — a stratégiától a kivitelezésig.
        </motion.p>
      </div>
    </section>
  );
}
