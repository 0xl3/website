import { HeroSection } from "@/components/hero-section"
import { NetworkDetails } from "@/components/network-details"
import NetworkStats from "@/components/network-stats"
import { FeaturesSection } from "@/components/features-section"
import { TechStack } from "@/components/tech-stack"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <NetworkStats />
        </div>
      </section>
      <NetworkDetails />
      <FeaturesSection />
      <TechStack />
      <Footer />
    </main>
  )
}
