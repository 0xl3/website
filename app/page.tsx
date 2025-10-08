import { HeroSection } from "@/components/hero-section"
import { NetworkDetails } from "@/components/network-details"
import { FeaturesSection } from "@/components/features-section"
import { TechStack } from "@/components/tech-stack"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <NetworkDetails />
      <FeaturesSection />
      <TechStack />
      <Footer />
    </main>
  )
}
