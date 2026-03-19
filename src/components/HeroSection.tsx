import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function scrollToSection(id: string) {
  const element = document.querySelector(id);
  element?.scrollIntoView({ behavior: 'smooth' });
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.92]);
  const clipPath = useTransform(scrollYProgress, [0, 0.4], [
    'inset(0px round 0px)',
    'inset(0px round 24px)',
  ]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background wrapper — clipPath instead of borderRadius for GPU compositing */}
      <motion.div
        className="absolute inset-0 origin-center overflow-hidden will-change-transform"
        style={{ scale, clipPath }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #0a0a0a 0%, #0a0a0a 40%, #141414 100%)',
          }}
        />

        {/* Ambient glow — wide soft radial gradients, no blur filter.
            CSS keyframe animations run on compositor thread. */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="hero-blob-1 absolute -top-[30%] -left-[15%] w-[90%] h-[90%] rounded-full will-change-transform"
            style={{
              background:
                'radial-gradient(circle, rgba(200,16,46,0.08) 0%, rgba(200,16,46,0.03) 40%, transparent 70%)',
            }}
          />
          <div
            className="hero-blob-2 absolute -bottom-[20%] -right-[15%] w-[80%] h-[80%] rounded-full will-change-transform"
            style={{
              background:
                'radial-gradient(circle, rgba(200,16,46,0.06) 0%, rgba(200,16,46,0.02) 40%, transparent 70%)',
            }}
          />
          <div
            className="hero-blob-3 absolute top-[20%] right-[15%] w-[50%] h-[50%] rounded-full will-change-transform"
            style={{
              background:
                'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Montage frames — static with slight rotation, no continuous animation */}
        <div className="absolute inset-0" aria-hidden>
          <div
            className="absolute top-[15%] left-[10%] w-[35%] aspect-[4/3] rounded-sm opacity-[0.08] -rotate-1"
            style={{
              background:
                'linear-gradient(135deg, #1c1c1e 0%, #2a2018 50%, #1c1c1e 100%)',
            }}
          />
          <div
            className="absolute top-[25%] right-[15%] w-[30%] aspect-[3/4] rounded-sm opacity-[0.06] rotate-1"
            style={{
              background:
                'linear-gradient(180deg, #141414 0%, #231e18 100%)',
            }}
          />
          <div
            className="absolute bottom-[20%] left-[20%] w-[28%] aspect-square rounded-sm opacity-[0.07] rotate-[0.5deg]"
            style={{
              background:
                'linear-gradient(225deg, #1c1c1e 0%, #141414 100%)',
            }}
          />
          <div
            className="absolute bottom-[25%] right-[25%] w-[32%] aspect-[16/9] rounded-sm opacity-[0.05] -rotate-[0.5deg]"
            style={{
              background:
                'linear-gradient(90deg, #2a2018 0%, #1c1c1e 100%)',
            }}
          />
        </div>

        {/* Grain — tiny tiled PNG, no SVG feTurbulence */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMFChUbICWTl5TJAAAAbUlEQVQ4y83SMQ6AIBBFUdZAdMEaF0DcfxcKE0rn9VdMbnJ/8APMh7XsraQLz2YWfcXtcT3WnkLJHpYx8CiGsOERDHHDIxjihkcwxA2PYIgbHsEQN1yeM+fywKMYIk0YME74TQkDxq+sPKB/AHpJfj+lw4H1AAAAAElFTkSuQmCC")`,
            backgroundSize: '48px 48px',
          }}
        />
      </motion.div>

      {/* Content layer */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-10 lg:px-16 pt-24 pb-20"
        style={{ opacity: contentOpacity }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div
            className="overflow-hidden"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tight text-[#f5f5f5]"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.2,
                  },
                },
                hidden: {},
              }}
            >
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                Never{' '}
                <span className="text-[#c8102e]">Off</span>.
              </motion.span>
              <motion.span
                className="block mt-1 md:mt-2"
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                Always{' '}
                <span className="text-[#c8102e]">On</span>.
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            className="mt-10 text-xl md:text-2xl font-light text-[#f5f5f5]/95 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Digitális jelenlét. Egy rendszerben.
          </motion.p>

          <motion.p
            className="mt-4 text-sm md:text-base text-[#888888] tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Videó. Web. Social. Kampány.
          </motion.p>

          <motion.div
            className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-4 rounded-lg border-2 border-[#f5f5f5] bg-transparent text-[#f5f5f5] font-medium text-sm md:text-base tracking-wide transition-colors duration-200 hover:bg-[#f5f5f5] hover:text-[#0a0a0a]"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Projektek
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#quote')}
              className="px-8 py-4 rounded-lg bg-[#c8102e] text-white font-medium text-sm md:text-base tracking-wide transition-colors duration-200 hover:bg-[#a00d24]"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Ajánlatot kérek
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-1 text-[#888888]"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
