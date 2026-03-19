import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ServicesIntro() {
  return (
    <div id="services" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
              },
            },
            hidden: {},
          }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#f5f5f5]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <motion.span className="block" variants={fadeUp}>
            Nem kampányokban gondolkodunk.
          </motion.span>
          <motion.span className="block mt-2" variants={fadeUp}>
            Rendszerben gondolkodunk.
          </motion.span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-lg text-[#888888]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Itt kapcsolódik össze minden.
        </motion.p>
      </div>
    </div>
  );
}
