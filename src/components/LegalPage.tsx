import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useT } from '../i18n/LanguageContext';

type Props = { type: 'imprint' | 'privacy' };

export default function LegalPage({ type }: Props) {
  const t = useT();
  const page = t[type];

  return (
    <section className="min-h-screen py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-[#f5f5f5] transition-colors mb-10"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t.footer.backToHome}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="text-3xl md:text-4xl font-bold text-[#f5f5f5] mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {page.title}
          </h1>
          <p
            className="text-sm text-[#888888] mb-12"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {page.lastUpdated}
          </p>

          <div className="space-y-10">
            {page.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2
                  className="text-lg font-semibold text-[#f5f5f5] mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {section.heading}
                </h2>
                <div className="space-y-2">
                  {section.content.map((line, j) => (
                    <p
                      key={j}
                      className={`text-sm leading-relaxed ${
                        line.startsWith('•')
                          ? 'text-[#aaaaaa] pl-4'
                          : 'text-[#888888]'
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
