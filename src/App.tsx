import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ManifestoSection from './components/ManifestoSection'
import LogoMarqueeSection from './components/LogoMarqueeSection'
import ServicesIntro from './components/ServicesIntro'
import ServicesGrid from './components/ServicesGrid'
import FeaturedProjectsSection from './components/FeaturedProjectsSection'
import WhyUsSection from './components/WhyUsSection'
import CTASection from './components/CTASection'
import MultiStepQuoteForm from './components/MultiStepQuoteForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </>
  )
}
