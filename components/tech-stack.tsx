import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const techDetails = [
  {
    category: "Consensus",
    items: ["Optimistic Rollup", "Fraud Proofs", "Ethereum Settlement"],
  },
  {
    category: "Performance",
    items: ["2000+ TPS", "<1s Block Time", "Instant Finality"],
  },
  {
    category: "Compatibility",
    items: ["EVM Compatible", "Solidity Support", "Web3 Standard"],
  },
  {
    category: "Infrastructure",
    items: ["Decentralized Sequencer", "Data Availability", "Cross-chain Bridge"],
  },
]

export function TechStack() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Technical Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"Powered by cutting-edge blockchain technology and battle-tested infrastructure"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {techDetails.map((tech) => (
              <Card key={tech.category} className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-primary">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-sm px-3 py-1">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">Built on Optimism</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "0xL3 leverages the proven Optimism Rollup technology to deliver a secure, scalable, and efficient Layer 3 solution. By rolling up to Optimism, we inherit the security of Ethereum while providing enhanced performance and lower costs."
                  }
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-sm aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="text-6xl md:text-8xl font-bold text-primary/20 font-mono">L3</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
