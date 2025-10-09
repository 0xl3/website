import { HeroSection } from "@/components/hero-section"
import { NetworkDetails } from "@/components/network-details"
import NetworkStats from "@/components/network-stats"
import RPCStatus from "@/components/rpc-status"
import { FeaturesSection } from "@/components/features-section"
import { TechStack } from "@/components/tech-stack"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <section id="rpc-status" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <RPCStatus />
        </div>
      </section>
      <section id="network-statistics" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <NetworkStats />
        </div>
      </section>
      <div id="network-specifications">
        <NetworkDetails />
      </div>
      <div id="acquire-tokens">
        <FeaturesSection />
      </div>
      <div id="token-info">
        <TechStack />
      </div>
      <Footer />
    </main>
  )
}
