import { Card } from "@/components/ui/card"
import { Zap, Shield, Layers, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience near-instant transaction finality with optimized Layer 3 architecture built on Optimism.",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Inherit the security guarantees of Ethereum while benefiting from additional Layer 3 protections.",
  },
  {
    icon: Layers,
    title: "Scalable Infrastructure",
    description: "Handle thousands of transactions per second without compromising on decentralization or security.",
  },
  {
    icon: TrendingUp,
    title: "Cost Efficient",
    description:
      "Dramatically reduced gas fees compared to Layer 1 and Layer 2, making blockchain accessible to everyone.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Choose 0xL3?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"Built on Optimism Rollup technology, 0xL3 delivers the next generation of blockchain infrastructure"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="p-6 space-y-4 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
