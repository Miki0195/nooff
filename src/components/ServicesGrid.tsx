import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { getServicesData, type ServiceDetail } from '../data/servicesData';
import { useT } from '../i18n/LanguageContext';

function scrollToQuote() {
  const element = document.querySelector('#quote');
  element?.scrollIntoView({ behavior: 'smooth' });
}

const SERVICE_ICONS: Record<string, string> = {
  content: '01',
  promo: '02',
  web: '03',
  wedding: '04',
};

const SERVICE_GRADIENTS: Record<string, string> = {
  content:
    'radial-gradient(ellipse at 20% 0%, rgba(200, 16, 46, 0.12) 0%, transparent 50%)',
  promo:
    'radial-gradient(ellipse at 80% 0%, rgba(200, 16, 46, 0.08) 0%, transparent 50%)',
  web:
    'radial-gradient(ellipse at 50% 100%, rgba(200, 16, 46, 0.08) 0%, transparent 50%)',
  wedding:
    'radial-gradient(ellipse at 20% 100%, rgba(255, 180, 100, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 0%, rgba(200, 16, 46, 0.06) 0%, transparent 50%)',
};

function ServiceCard({
  service,
  index,
  detailsLabel,
  quoteBtnLabel,
  bestSellerLabel,
}: {
  service: ServiceDetail;
  index: number;
  detailsLabel: string;
  quoteBtnLabel: string;
  bestSellerLabel: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useTransform(mouseX, (v) => `${v}px`);
  const spotlightY = useTransform(mouseY, (v) => `${v}px`);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        service-card-glow group relative rounded-3xl overflow-hidden
        border transition-all duration-500
        hover:translate-y-[-6px] hover:shadow-2xl
        ${
          service.warm
            ? 'bg-[#1a1610] border-[rgba(255,235,220,0.08)] hover:border-[rgba(255,235,220,0.2)]'
            : 'bg-[#111113] border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)]'
        }
      `}
    >
      {/* Mouse-following spotlight */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2 z-0"
        style={{
          left: spotlightX,
          top: spotlightY,
          background:
            'radial-gradient(circle, rgba(200,16,46,0.08) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: SERVICE_GRADIENTS[service.id] || '' }}
        aria-hidden
      />

      {/* Shimmer line at top */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden z-10" aria-hidden>
        <div
          className="card-shimmer h-full w-1/3"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(200, 16, 46, 0.6), transparent)',
          }}
        />
      </div>

      <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
        {/* Top row: number + badge */}
        <div className="flex items-start justify-between mb-6">
          <span
            className="text-5xl md:text-6xl font-bold text-[#f5f5f5]/[0.04] select-none leading-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {SERVICE_ICONS[service.id]}
          </span>
          {service.bestSeller && (
            <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-white bg-[#c8102e] shadow-lg shadow-[#c8102e]/30">
              {bestSellerLabel}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-2xl md:text-[1.65rem] font-bold text-[#f5f5f5] leading-snug"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="mt-3 text-[15px] leading-relaxed text-[#888888]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {service.description}
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-gradient-to-r from-[rgba(255,255,255,0.06)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.06)]" />

        {/* Features */}
        <ul className="space-y-2.5 flex-1">
          {service.bullets.map((bullet, bi) => (
            <motion.li
              key={bullet}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.12 + bi * 0.05 + 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-3 text-sm text-[#f5f5f5]/80"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span
                className="shrink-0 w-1 h-1 rounded-full"
                style={{ backgroundColor: '#c8102e' }}
                aria-hidden
              />
              {bullet}
            </motion.li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-8 flex items-center gap-4">
          <Link
            to={`/szolgaltatas/${service.id}`}
            className="group/link flex items-center gap-2 text-sm font-medium text-[#f5f5f5] hover:text-[#c8102e] transition-colors duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {detailsLabel}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover/link:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <motion.button
            onClick={scrollToQuote}
            className="ml-auto px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#c8102e]/20"
            style={{
              backgroundColor: '#c8102e',
              fontFamily: "'Inter', sans-serif",
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {quoteBtnLabel}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

export default function ServicesGrid() {
  const t = useT();
  const services = getServicesData(t);

  return (
    <div className="px-6 md:px-10 lg:px-16 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {services.map((service, i) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={i}
            detailsLabel={t.servicesGrid.details}
            quoteBtnLabel={t.servicesGrid.quoteBtn}
            bestSellerLabel={t.servicesGrid.bestSeller}
          />
        ))}
      </div>
    </div>
  );
}
