import HeroSection from './HeroSection'
import ManifestoSection from './ManifestoSection'
import LogoMarqueeSection from './LogoMarqueeSection'
import ServicesIntro from './ServicesIntro'
import ServicesGrid from './ServicesGrid'
import FeaturedProjectsSection from './FeaturedProjectsSection'
import WhyUsSection from './WhyUsSection'
import CTASection from './CTASection'
import MultiStepQuoteForm from './MultiStepQuoteForm'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <LogoMarqueeSection />
      <ServicesIntro />
      <ServicesGrid />
      <FeaturedProjectsSection />
      <WhyUsSection />
      <CTASection />
      <div id="contact">
        <MultiStepQuoteForm />
      </div>
    </>
  )
}
