import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { getServicesData, type ServicePackage } from '../data/servicesData';
import { useT } from '../i18n/LanguageContext';
import type { Translations } from '../i18n/translations';

function useGoToQuote() {
  const navigate = useNavigate();
  const location = useLocation();

  return () => {
    if (location.pathname === '/') {
      const element = document.querySelector('#quote');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };
}

const cardEntrance = {
  hidden: { opacity: 0, y: 40, scale: 0.92, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const addOnEntrance = {
  hidden: { opacity: 0, x: -20, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function PackageCard({
  pkg,
  index,
  total,
  onQuote,
  t,
}: {
  pkg: ServicePackage;
  index: number;
  total: number;
  onQuote: () => void;
  t: Translations;
}) {
  const isHighlight = pkg.highlight || (total >= 3 && index === 1);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={cardEntrance}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
      className={`
        relative rounded-3xl overflow-hidden flex flex-col
        border transition-all duration-500
        ${
          isHighlight
            ? 'bg-[#111113] border-[#c8102e]/30 shadow-2xl shadow-[#c8102e]/8'
            : 'bg-[#111113] border-[rgba(255,255,255,0.06)] shadow-xl shadow-black/30 hover:border-[rgba(255,255,255,0.12)]'
        }
      `}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background: isHighlight
            ? 'linear-gradient(90deg, #c8102e, #e8334d, #c8102e)'
            : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
        }}
        aria-hidden
      />

      {isHighlight && (
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 50% -20%, rgba(200, 16, 46, 0.12) 0%, transparent 60%)',
          }}
          aria-hidden
        />
      )}

      <div className="relative z-10 p-8 md:p-10 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3
              className="text-xl md:text-2xl font-bold text-[#f5f5f5]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {pkg.name}
            </h3>
            {pkg.subtitle && (
              <p
                className="mt-1.5 text-sm text-[#666]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {pkg.subtitle}
              </p>
            )}
          </div>
          {isHighlight && (
            <span className="shrink-0 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-white bg-[#c8102e] shadow-lg shadow-[#c8102e]/30">
              {t.serviceDetail.popular}
            </span>
          )}
        </div>

        {/* Price */}
        <div className="mt-6 mb-6">
          <span
            className="text-2xl md:text-3xl font-bold text-[#f5f5f5]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {pkg.price}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[rgba(255,255,255,0.04)] via-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.04)] mb-6" />

        {/* Features list — grows to fill space */}
        {pkg.features && pkg.features.length > 0 && (
          <ul className="space-y-3 flex-1">
            {pkg.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-[#f5f5f5]/75"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 mt-0.5"
                  aria-hidden
                >
                  <path
                    d="M5 12l5 5L20 7"
                    stroke="#c8102e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA — always at bottom */}
        <motion.button
          onClick={onQuote}
          className={`
            mt-8 w-full px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300
            ${
              isHighlight
                ? 'bg-[#c8102e] text-white hover:bg-[#a00d24] hover:shadow-lg hover:shadow-[#c8102e]/25'
                : 'bg-[rgba(255,255,255,0.05)] text-[#f5f5f5] hover:bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.08)]'
            }
          `}
          style={{ fontFamily: "'Inter', sans-serif" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {t.serviceDetail.quoteBtn}
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const goToQuote = useGoToQuote();
  const t = useT();
  const services = getServicesData(t);
  const service = services.find((s) => s.id === serviceId);
  const [activeTab, setActiveTab] = useState(0);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="text-center">
          <h1
            className="text-4xl font-bold text-[#f5f5f5] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {t.serviceDetail.notFoundTitle}
          </h1>
          <p className="text-[#888888] mb-8">
            {t.serviceDetail.notFoundText}
          </p>
          <button
            onClick={() => navigate('/#services')}
            className="px-6 py-3 rounded-lg bg-[#c8102e] text-white font-medium hover:bg-[#a00d24] transition-colors"
          >
            {t.serviceDetail.notFoundBtn}
          </button>
        </div>
      </div>
    );
  }

  const hasSubCategories =
    service.subCategories && service.subCategories.length > 0;
  const activeSubCategory = hasSubCategories
    ? service.subCategories![activeTab]
    : null;

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-10 lg:px-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(200, 16, 46, 0.06) 0%, transparent 70%)',
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.button
            onClick={() => navigate('/#services')}
            className="group flex items-center gap-2 text-sm text-[#888888] hover:text-[#f5f5f5] transition-colors duration-200 mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-1.5"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {t.serviceDetail.back}
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {service.bestSeller && (
              <motion.span
                className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-white mb-6"
                style={{ backgroundColor: '#c8102e' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {t.servicesGrid.bestSeller}
              </motion.span>
            )}

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#f5f5f5] leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {service.title}
            </h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-[#888888] max-w-2xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {service.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent" />
      </div>

      {/* Sub-category tabs */}
      {hasSubCategories && (
        <section className="pt-12 md:pt-16 px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="flex flex-wrap gap-2 md:gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {service.subCategories!.map((sub, i) => (
                <button
                  key={sub.slug}
                  onClick={() => setActiveTab(i)}
                  className={`
                    relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                    ${
                      activeTab === i
                        ? 'bg-[#c8102e] text-white shadow-lg shadow-[#c8102e]/20'
                        : 'bg-[rgba(255,255,255,0.04)] text-[#888888] hover:text-[#f5f5f5] hover:bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.06)]'
                    }
                  `}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {sub.name}
                </button>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Packages */}
      <section className="py-12 md:py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-[#f5f5f5] mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {hasSubCategories ? activeSubCategory!.name : service.subtitle}
          </motion.h2>

          <motion.p
            className="text-[#888888] mb-10 text-base"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.serviceDetail.choosePkg}
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={hasSubCategories ? activeSubCategory!.slug : service.id}
              variants={containerStagger}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              className={`grid gap-6 md:gap-6 items-stretch ${
                (hasSubCategories
                  ? activeSubCategory!.packages.length
                  : service.packages?.length ?? 0) === 4
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
                  : 'grid-cols-1 md:grid-cols-3'
              }`}
            >
              {(hasSubCategories
                ? activeSubCategory!.packages
                : service.packages ?? []
              ).map((pkg, i, arr) => (
                <PackageCard
                  key={`${hasSubCategories ? activeSubCategory!.slug : service.id}-${pkg.name}`}
                  pkg={pkg}
                  index={i}
                  total={arr.length}
                  onQuote={goToQuote}
                  t={t}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Add-ons */}
      {service.addOns && service.addOns.length > 0 && (
        <section className="pb-20 md:pb-28 px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent mb-12 md:mb-16" />

            <motion.h2
              className="text-2xl md:text-3xl font-bold text-[#f5f5f5] mb-10"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t.serviceDetail.addOnsTitle}
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {service.addOns.map((addon, i) => (
                <motion.div
                  key={addon.name}
                  custom={i}
                  variants={addOnEntrance}
                  whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(200, 16, 46, 0.2)',
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-center justify-between gap-4 p-5 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] transition-colors duration-200"
                >
                  <span
                    className="text-sm text-[#f5f5f5]/80"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {addon.name}
                  </span>
                  <span
                    className="text-sm font-semibold text-[#c8102e] whitespace-nowrap"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {addon.price}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="pb-24 md:pb-32 px-6 md:px-10 lg:px-16">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-[#f5f5f5] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {t.serviceDetail.questionTitle}
          </h2>
          <p
            className="text-[#888888] text-lg mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t.serviceDetail.questionSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={goToQuote}
              className="px-8 py-4 rounded-xl bg-[#c8102e] text-white font-semibold text-base transition-all duration-300 hover:bg-[#a00d24] hover:shadow-lg hover:shadow-[#c8102e]/25"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.serviceDetail.quoteBtn}
            </motion.button>
            <motion.button
              onClick={() => navigate('/#services')}
              className="px-8 py-4 rounded-xl border border-[rgba(255,255,255,0.1)] bg-transparent text-[#f5f5f5] font-medium text-base transition-all duration-300 hover:bg-[rgba(255,255,255,0.04)]"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.serviceDetail.allServices}
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
