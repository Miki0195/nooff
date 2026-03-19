import { motion } from 'framer-motion';

function scrollToQuote() {
  const element = document.querySelector('#quote');
  element?.scrollIntoView({ behavior: 'smooth' });
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function CTASection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #141414 0%, #0f0f0f 50%, #141414 100%)',
      }}
    >
      {/* Subtle red glow accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(200, 16, 46, 0.15) 0%, transparent 70%)',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Main CTA text */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#f5f5f5]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Ha komolyan gondolod, induljunk.
        </motion.h2>

        {/* Secondary text */}
        <motion.div
          variants={containerVariants}
          className="mt-6 space-y-2"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#888888]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Mi nem kampányokat csinálunk.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#888888]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Rendszert építünk.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-bold text-[#c8102e]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Never Off. Always On.
          </motion.p>
        </motion.div>

        {/* CTA button with glow */}
        <motion.div
          variants={itemVariants}
          className="mt-12 md:mt-16 relative inline-block"
        >
          <div
            className="absolute inset-0 rounded-xl blur-2xl opacity-40 -z-10"
            style={{
              backgroundColor: '#c8102e',
              transform: 'scale(1.5)',
            }}
          />
          <motion.button
            onClick={scrollToQuote}
            className="px-10 py-5 rounded-xl text-lg font-semibold text-white transition-colors duration-200"
            style={{
              backgroundColor: '#c8102e',
              fontFamily: "'Inter', sans-serif",
            }}
            whileHover={{
              scale: 1.03,
              backgroundColor: '#a00d24',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Ajánlatot kérek
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
