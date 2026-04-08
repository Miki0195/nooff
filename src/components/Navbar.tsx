import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useT, useLang, LANGUAGES } from '../i18n/LanguageContext';

export default function Navbar() {
  const t = useT();
  const { lang, setLang } = useLang();
  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  function scrollToSection(href: string) {
    if (isHome) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + href);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isHome && location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location, isHome]);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  const goHome = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 lg:px-16 py-5 transition-colors duration-300"
        initial={false}
        animate={{
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.6)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
          borderBottomColor: isScrolled ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
        }}
        style={{ borderBottomWidth: 1 }}
      >
        <nav className="flex items-center justify-between max-w-[1600px] mx-auto">
          <button
            onClick={goHome}
            className="flex flex-col items-start group"
            aria-label="NO OFF Studio - Home"
          >
            <span
              className="font-bold text-xl md:text-2xl tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-[#f5f5f5]">NO </span>
              <span className="text-[#c8102e]">OFF</span>
            </span>
            <span
              className="text-[10px] md:text-[11px] tracking-[0.2em] text-[#888888] uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Studio
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-12">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-[#f5f5f5]/90 hover:text-[#f5f5f5] text-sm font-medium tracking-wide transition-colors duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1 pl-4 border-l border-white/10">
              {LANGUAGES.map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2 py-1 text-xs font-medium transition-colors duration-200 ${
                    lang === code
                      ? 'text-[#c8102e]'
                      : 'text-[#888888] hover:text-[#f5f5f5]/80'
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2 text-[#f5f5f5]"
            aria-label="Open menu"
          >
            <motion.span
              className="block w-6 h-0.5 bg-current"
              animate={{ rotate: 0 }}
            />
            <motion.span className="block w-6 h-0.5 bg-current" />
            <motion.span className="block w-5 h-0.5 bg-current self-end" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#0a0a0a]/98 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="relative flex flex-col items-center justify-center min-h-screen px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-[#888888] hover:text-[#f5f5f5] transition-colors"
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.05 * i,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-2xl md:text-3xl font-medium text-[#f5f5f5] hover:text-[#c8102e] transition-colors duration-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="flex items-center gap-3 mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {LANGUAGES.map((code) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                      lang === code
                        ? 'text-[#c8102e]'
                        : 'text-[#888888] hover:text-[#f5f5f5]/80'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
