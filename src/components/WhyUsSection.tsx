import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const differentiators = [
  {
    number: '01',
    statement: 'Nem sablonból dolgozunk.',
  },
  {
    number: '02',
    statement: 'Nem külön elemekben gondolkodunk, hanem rendszerben.',
  },
  {
    number: '03',
    statement: 'Nem félkész munkát adunk ki.',
  },
];

export default function WhyUsSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#f5f5f5]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Nem minden cégnek van szüksége ránk.
            <br />
            De aki komolyan veszi a jelenlétét, annak igen.
          </motion.h2>

          {/* Supporting lines */}
          <motion.div
            variants={containerVariants}
            className="mt-12 md:mt-16 space-y-4 md:space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-light text-[#f5f5f5]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Mi nem tűnünk el két projekt között.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-light text-[#f5f5f5]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Nem kapcsolunk ki.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-bold text-[#c8102e]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Never Off. Always On.
            </motion.p>
          </motion.div>

          {/* Differentiator blocks */}
          <motion.div
            variants={containerVariants}
            className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {differentiators.map((item) => (
              <motion.div
                key={item.number}
                variants={blockVariants}
                className="p-6 md:p-8 rounded-xl"
                style={{
                  backgroundColor: '#1c1c1e',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <span
                  className="block text-5xl md:text-6xl font-bold text-[#c8102e] opacity-30 mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.number}
                </span>
                <p
                  className="text-xl md:text-2xl font-semibold text-[#f5f5f5] leading-snug"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.statement}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
