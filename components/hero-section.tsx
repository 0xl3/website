import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 animate-in fade-in zoom-in duration-500">
            <Image src="/0xl3-logo.svg" alt="0xL3 Logo" fill className="object-contain" priority />
          </div>

          {/* Main heading */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
              Beyond Transactions
              <br />
              <span className="text-primary">Building Trust</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {
                "Layer 3 blockchain infrastructure powered by Optimism Rollup. Experience unparalleled scalability, security, and efficiency."
              }
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="text-lg px-8 py-6 group" asChild>
              <Link href="/docs">
                Developer Docs
                <BookOpen className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
              <a href="https://exp.0xl3.com/" target="_blank" rel="noopener noreferrer">
                Explore Network
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Network badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border animate-in fade-in duration-700 delay-500">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">Network Active • Chain ID: 7117</span>
          </div>
        </div>
      </div>
    </section>
  )
}
