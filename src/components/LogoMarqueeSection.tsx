import { useT } from '../i18n/LanguageContext';

const LOGOS = [
  { name: 'Gymtronic', weight: 700, spacing: '0.02em' },
  { name: 'Hotel Aurum', weight: 500, spacing: '0.08em' },
  { name: 'Bistro Nine', weight: 600, spacing: '0.05em' },
  { name: 'Urban Fit', weight: 400, spacing: '0.1em' },
  { name: 'Varga Estate', weight: 600, spacing: '0.03em' },
  { name: 'Prime Dental', weight: 500, spacing: '0.06em' },
  { name: 'Loft Kitchen', weight: 700, spacing: '0.04em' },
  { name: 'Studio Eleven', weight: 500, spacing: '0.07em' },
  { name: 'Horizon Stay', weight: 600, spacing: '0.05em' },
  { name: 'Mono Coffee', weight: 400, spacing: '0.09em' },
  { name: 'Pulse Lab', weight: 700, spacing: '0.02em' },
  { name: 'North House', weight: 500, spacing: '0.06em' },
] as const;

function LogoItem({
  name,
  weight,
  spacing,
}: {
  name: string;
  weight: number;
  spacing: string;
}) {
  return (
    <a
      href="#"
      className="inline-flex items-center px-8 md:px-12 py-2 text-xl md:text-2xl font-semibold whitespace-nowrap text-[#f5f5f5] opacity-40 transition-opacity duration-300 hover:opacity-100"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: weight,
        letterSpacing: spacing,
      }}
    >
      {name}
    </a>
  );
}

function MarqueeRow() {
  return (
    <div className="marquee-track flex shrink-0">
      <div className="flex items-center">
        {LOGOS.map((logo) => (
          <LogoItem key={logo.name} {...logo} />
        ))}
      </div>
      <div className="flex items-center" aria-hidden>
        {LOGOS.map((logo) => (
          <LogoItem key={`dup-${logo.name}`} {...logo} />
        ))}
      </div>
    </div>
  );
}

export default function LogoMarqueeSection() {
  const t = useT();

  return (
    <section
      className="relative overflow-hidden bg-[#0a0a0a] py-16 md:py-24"
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Label */}
      <p
        className="mb-8 text-center text-xs md:text-sm text-[#888888] tracking-[0.15em] uppercase"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {t.logoMarquee.label}
      </p>

      {/* Marquee container - pause on hover */}
      <div className="marquee-group relative">
        <div className="flex flex-col gap-8 overflow-hidden">
          {/* Row 1 */}
          <div className="flex w-max">
            <MarqueeRow />
          </div>
          {/* Row 2 */}
          <div className="flex w-max">
            <MarqueeRow />
          </div>
        </div>

        {/* Left fade gradient */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 md:w-32"
          style={{
            background:
              'linear-gradient(to right, #0a0a0a 0%, rgba(10, 10, 10, 0) 100%)',
          }}
        />
        {/* Right fade gradient */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 md:w-32"
          style={{
            background:
              'linear-gradient(to left, #0a0a0a 0%, rgba(10, 10, 10, 0) 100%)',
          }}
        />
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          animation: marquee-scroll 30s linear infinite;
        }
        .marquee-group:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
