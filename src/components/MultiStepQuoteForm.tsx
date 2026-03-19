import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = [
  { id: 1, label: 'Szolgáltatás' },
  { id: 2, label: 'Cég típusa' },
  { id: 3, label: 'Projekt' },
  { id: 4, label: 'Költségkeret' },
  { id: 5, label: 'Időzítés' },
  { id: 6, label: 'Elérhetőség' },
] as const;

const STEP_1_OPTIONS = [
  'Havi tartalomgyártás',
  'Marketing videó',
  'Weboldal',
  'Esküvői film',
  'Több is érdekel',
] as const;

const STEP_2_OPTIONS = [
  'Étterem',
  'Szálloda',
  'Edzőterem',
  'Helyi vállalkozás',
  'Egyéb',
] as const;

const STEP_4_OPTIONS = [
  '300k alatt',
  '300k–800k',
  '800k–1.5M',
  '1.5M+',
] as const;

const STEP_5_OPTIONS = [
  'ASAP',
  '1 hónapon belül',
  '1–3 hónap',
  'Rugalmas',
] as const;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 40 : -40,
    opacity: 0,
  }),
};

export default function MultiStepQuoteForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [services, setServices] = useState<string[]>([]);
  const [businessType, setBusinessType] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const toggleService = (s: string) => {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const goNext = () => {
    if (step === 6) {
      const newErrors: { name?: string; email?: string } = {};
      if (!name.trim()) newErrors.name = 'Kötelező';
      if (!email.trim()) newErrors.email = 'Kötelező';
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setErrors({});
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
      return;
    }
    setDirection(1);
    setStep((s) => s + 1);
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => s - 1);
  };

  const inputBase =
    'w-full bg-[#141414] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-[#f5f5f5] placeholder:text-[#888888] focus:outline-none focus:border-[#c8102e]/50 transition-colors';

  const optionCardBase =
    'px-4 py-3 rounded-lg border cursor-pointer transition-all duration-200 text-left';

  if (isSuccess) {
    return (
      <section id="quote" className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#1c1c1e] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.08)] text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: 'spring',
                stiffness: 200,
                damping: 15,
              }}
              className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#c8102e]/20 flex items-center justify-center"
            >
              <svg
                className="w-7 h-7 text-[#c8102e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#f5f5f5]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Megkaptuk.
            </h2>
            <p className="mt-3 text-[#888888]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Hamarosan jelentkezünk.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 md:py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#f5f5f5] text-center"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Kérj ajánlatot
        </h2>
        <p
          className="mt-2 text-center text-[#888888]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Pár lépés, és máris visszajelzünk.
        </p>

        <motion.div
          className="mt-10 bg-[#1c1c1e] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.08)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-[#888888]" style={{ fontFamily: "'Inter', sans-serif" }}>
                {STEPS[step - 1].label}
              </span>
              <span className="text-sm text-[#888888]" style={{ fontFamily: "'Inter', sans-serif" }}>
                {step} / 6
              </span>
            </div>
            <div className="h-1.5 bg-[#141414] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#c8102e] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(step / 6) * 100}%` }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="flex justify-between mt-2 gap-1">
              {STEPS.map((s) => (
                <div
                  key={s.id}
                  className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${
                    s.id < step
                      ? 'bg-[#c8102e]/60'
                      : s.id === step
                        ? 'bg-[#c8102e]'
                        : 'bg-[#141414]'
                  }`}
                />
              ))}
            </div>
          </div>

          {isSubmitting ? (
            <div className="py-16 flex flex-col items-center justify-center">
              <motion.div
                className="w-12 h-12 border-2 border-[#c8102e] border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
              />
              <p className="mt-4 text-[#888888]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Küldés...
              </p>
            </div>
          ) : (
            <>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Step 1 */}
                  {step === 1 && (
                    <div>
                      <h3
                        className="text-lg font-semibold text-[#f5f5f5] mb-4"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Melyik szolgáltatás érdekel?
                      </h3>
                      <div className="space-y-2">
                        {STEP_1_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => toggleService(opt)}
                            className={`${optionCardBase} w-full ${
                              services.includes(opt)
                                ? 'border-[#c8102e] bg-[#c8102e]/10 text-[#f5f5f5]'
                                : 'border-[rgba(255,255,255,0.08)] bg-transparent text-[#888888] hover:border-[rgba(255,255,255,0.15)] hover:text-[#f5f5f5]'
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div>
                      <h3
                        className="text-lg font-semibold text-[#f5f5f5] mb-4"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Milyen típusú a céged?
                      </h3>
                      <div className="space-y-2">
                        {STEP_2_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setBusinessType(opt)}
                            className={`${optionCardBase} w-full ${
                              businessType === opt
                                ? 'border-[#c8102e] bg-[#c8102e]/10 text-[#f5f5f5]'
                                : 'border-[rgba(255,255,255,0.08)] bg-transparent text-[#888888] hover:border-[rgba(255,255,255,0.15)] hover:text-[#f5f5f5]'
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div>
                      <h3
                        className="text-lg font-semibold text-[#f5f5f5] mb-4"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Röviden írd le a projektet
                      </h3>
                      <textarea
                        value={projectDesc}
                        onChange={(e) => setProjectDesc(e.target.value)}
                        placeholder="Pl. új weboldalt szeretnék az éttermemhez, és havi social tartalmakat..."
                        rows={5}
                        className={`${inputBase} resize-none`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                  )}

                  {/* Step 4 */}
                  {step === 4 && (
                    <div>
                      <h3
                        className="text-lg font-semibold text-[#f5f5f5] mb-4"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Költségkeret
                      </h3>
                      <div className="space-y-2">
                        {STEP_4_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setBudget(opt)}
                            className={`${optionCardBase} w-full ${
                              budget === opt
                                ? 'border-[#c8102e] bg-[#c8102e]/10 text-[#f5f5f5]'
                                : 'border-[rgba(255,255,255,0.08)] bg-transparent text-[#888888] hover:border-[rgba(255,255,255,0.15)] hover:text-[#f5f5f5]'
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 5 */}
                  {step === 5 && (
                    <div>
                      <h3
                        className="text-lg font-semibold text-[#f5f5f5] mb-4"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Mikor kellene?
                      </h3>
                      <div className="space-y-2">
                        {STEP_5_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setTimeline(opt)}
                            className={`${optionCardBase} w-full ${
                              timeline === opt
                                ? 'border-[#c8102e] bg-[#c8102e]/10 text-[#f5f5f5]'
                                : 'border-[rgba(255,255,255,0.08)] bg-transparent text-[#888888] hover:border-[rgba(255,255,255,0.15)] hover:text-[#f5f5f5]'
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 6 */}
                  {step === 6 && (
                    <div>
                      <h3
                        className="text-lg font-semibold text-[#f5f5f5] mb-4"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Elérhetőségek
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-[#888888] mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Név *
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                              if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                            }}
                            className={`${inputBase} ${errors.name ? 'border-[#c8102e]' : ''}`}
                            placeholder="Neved"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-[#c8102e]">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm text-[#888888] mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Email *
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                            }}
                            className={`${inputBase} ${errors.email ? 'border-[#c8102e]' : ''}`}
                            placeholder="email@pelda.hu"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-[#c8102e]">{errors.email}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm text-[#888888] mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Telefonszám
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={inputBase}
                            placeholder="+36 30 123 4567"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-10 pt-6 border-t border-[rgba(255,255,255,0.08)]">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    className="text-[#888888] hover:text-[#f5f5f5] transition-colors font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Vissza
                  </button>
                ) : (
                  <div />
                )}
                <motion.button
                  type="button"
                  onClick={goNext}
                  className="px-6 py-3 rounded-lg font-semibold text-white bg-[#c8102e] hover:bg-[#a00d24] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {step === 6 ? 'Küldés' : 'Tovább'}
                </motion.button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
