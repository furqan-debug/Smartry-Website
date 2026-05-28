import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/TrustBar'
import FeaturesSection from '@/components/FeaturesSection'
import PlatformSection from '@/components/PlatformSection'
import IndustriesSection from '@/components/IndustriesSection'
import HowItWorks from '@/components/HowItWorks'
import BenefitsSection from '@/components/BenefitsSection'
import LiveOpsShowcase from '@/components/LiveOpsShowcase'
import SecuritySection from '@/components/SecuritySection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <FeaturesSection />
        <PlatformSection />
        <IndustriesSection />
        <HowItWorks />
        <BenefitsSection />
        <LiveOpsShowcase />
        <SecuritySection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
