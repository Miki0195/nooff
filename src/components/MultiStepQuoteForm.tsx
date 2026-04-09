import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useT } from '../i18n/LanguageContext';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const HCAPTCHA_SITEKEY = import.meta.env.VITE_HCAPTCHA_SITEKEY;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[\d\s\-().]{7,20}$/;

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

const shakeKeyframes = [0, -12, 10, -8, 6, -3, 0];

export default function MultiStepQuoteForm() {
  const t = useT();
  const steps = t.form.steps.map((label, i) => ({ id: i + 1, label }));
  const step1Options = t.form.step1Options;
  const step2Options = t.form.step2Options;
  const step4Options = t.form.step4Options;
  const step5Options = t.form.step5Options;

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

  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [submitError, setSubmitError] = useState(false);
  const [stepError, setStepError] = useState('');
  const [hcaptchaToken, setHcaptchaToken] = useState('');
  const captchaRef = useRef<HCaptcha>(null);

  const shakeControls = useAnimation();

  useEffect(() => {
    shakeControls.start({ opacity: 1, y: 0, transition: { duration: 0.4 } });
  }, [shakeControls]);

  const triggerShake = useCallback((msg: string) => {
    setStepError(msg);
    shakeControls.start({
      x: shakeKeyframes,
      transition: { duration: 0.5, ease: 'easeInOut' },
    });
  }, [shakeControls]);

  const clearStepError = useCallback(() => {
    if (stepError) setStepError('');
  }, [stepError]);

  const toggleService = (s: string) => {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
    clearStepError();
  };

  const handleSubmit = async () => {
    const newErrors: { name?: string; email?: string; phone?: string } = {};
    if (!name.trim()) newErrors.name = t.form.required;
    if (!email.trim()) {
      newErrors.email = t.form.required;
    } else if (!EMAIL_RE.test(email.trim())) {
      newErrors.email = t.form.invalidEmail;
    }
    if (phone.trim() && !PHONE_RE.test(phone.trim())) {
      newErrors.phone = t.form.invalidPhone;
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      triggerShake(t.form.step6Required);
      return;
    }
    if (!hcaptchaToken) {
      triggerShake(t.form.captchaRequired);
      return;
    }
    setErrors({});
    setStepError('');
    setSubmitError(false);
    setIsSubmitting(true);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          'h-captcha-response': hcaptchaToken,
          subject: `Új ajánlatkérés: ${name}`,
          from_name: 'NO OFF Studio weboldal',
          name,
          email,
          phone: phone || '–',
          services: services.join(', ') || '–',
          business_type: businessType || '–',
          project_description: projectDesc || '–',
          budget: budget || '–',
          timeline: timeline || '–',
        }),
      });

      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
      setHcaptchaToken('');
      captchaRef.current?.resetCaptcha();
    }
  };

  const validateStep = (): boolean => {
    switch (step) {
      case 1:
        if (services.length === 0) { triggerShake(t.form.step1Required); return false; }
        break;
      case 2:
        if (!businessType) { triggerShake(t.form.step2Required); return false; }
        break;
      case 3:
        if (!projectDesc.trim()) { triggerShake(t.form.step3Required); return false; }
        break;
      case 4:
        if (!budget) { triggerShake(t.form.step4Required); return false; }
        break;
      case 5:
        if (!timeline) { triggerShake(t.form.step5Required); return false; }
        break;
    }
    return true;
  };

  const goNext = () => {
    if (step === 6) {
      handleSubmit();
      return;
    }
    if (!validateStep()) return;
    setStepError('');
    setDirection(1);
    setStep((s) => s + 1);
  };

  const goBack = () => {
    setStepError('');
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
              {t.form.successTitle}
            </h2>
            <p className="mt-3 text-[#888888]" style={{ fontFamily: "'Inter', sans-serif" }}>
              {t.form.successSubtitle}
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
          {t.form.title}
        </h2>
        <p
          className="mt-2 text-center text-[#888888]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t.form.subtitle}
        </p>

        <motion.div
          className="mt-10 bg-[#1c1c1e] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.08)]"
          initial={{ opacity: 0, y: 20 }}
          animate={shakeControls}
        >
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-[#888888]" style={{ fontFamily: "'Inter', sans-serif" }}>
                {steps[step - 1].label}
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
              {steps.map((s) => (
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
                {t.form.sending}
              </p>
            </div>
          ) : submitError ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#c8102e]/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#c8102e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-[#f5f5f5] font-semibold text-lg mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {t.form.errorTitle}
              </p>
              <p className="text-[#888888] text-sm mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                {t.form.errorSubtitle}
              </p>
              <motion.button
                type="button"
                onClick={() => { setSubmitError(false); handleSubmit(); }}
                className="px-6 py-3 rounded-lg font-semibold text-white bg-[#c8102e] hover:bg-[#a00d24] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.form.retry}
              </motion.button>
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
                        {t.form.step1Title}
                      </h3>
                      <div className="space-y-2">
                        {step1Options.map((opt) => (
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
                        {t.form.step2Title}
                      </h3>
                      <div className="space-y-2">
                        {step2Options.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => { setBusinessType(opt); clearStepError(); }}
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
                        {t.form.step3Title}
                      </h3>
                      <textarea
                        value={projectDesc}
                        onChange={(e) => { setProjectDesc(e.target.value); clearStepError(); }}
                        placeholder={t.form.step3Placeholder}
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
                        {t.form.step4Title}
                      </h3>
                      <div className="space-y-2">
                        {step4Options.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => { setBudget(opt); clearStepError(); }}
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
                        {t.form.step5Title}
                      </h3>
                      <div className="space-y-2">
                        {step5Options.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => { setTimeline(opt); clearStepError(); }}
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
                        {t.form.step6Title}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-[#888888] mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {t.form.nameLabel}
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                              clearStepError();
                              if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                            }}
                            className={`${inputBase} ${errors.name ? 'border-[#c8102e]' : ''}`}
                            placeholder={t.form.namePlaceholder}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-[#c8102e]">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm text-[#888888] mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {t.form.emailLabel}
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              clearStepError();
                              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                            }}
                            className={`${inputBase} ${errors.email ? 'border-[#c8102e]' : ''}`}
                            placeholder={t.form.emailPlaceholder}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-[#c8102e]">{errors.email}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm text-[#888888] mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {t.form.phoneLabel}
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                              if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                            }}
                            className={`${inputBase} ${errors.phone ? 'border-[#c8102e]' : ''}`}
                            placeholder={t.form.phonePlaceholder}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-[#c8102e]">{errors.phone}</p>
                          )}
                        </div>
                        <div className="pt-2">
                          <HCaptcha
                            ref={captchaRef}
                            sitekey={HCAPTCHA_SITEKEY}
                            theme="dark"
                            sentry={false}
                            onVerify={(token) => { setHcaptchaToken(token); clearStepError(); }}
                            onExpire={() => setHcaptchaToken('')}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <AnimatePresence>
                {stepError && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#c8102e]/10 border border-[#c8102e]/20"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#c8102e]/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#c8102e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#c8102e]/90" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {stepError}
                    </p>
                  </motion.div>
                )}
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
                    {t.form.back}
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
                  {step === 6 ? t.form.submit : t.form.next}
                </motion.button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
