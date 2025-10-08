import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image src="/0xl3-logo.svg" alt="0xL3" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold">0xL3</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{"Beyond Transactions Building Trust"}</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Network</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://exp.0xl3.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  Block Explorer
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://rpc.0xl3.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  RPC Endpoint
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Developer Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 0xL3. All rights reserved.</p>
            <p className="font-mono">Chain ID: 7117</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
