import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Code, Zap, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">XL3 Chain Developer Docs</h1>
              <p className="text-muted-foreground mt-2">
                Build the future of decentralized applications on XL3 Chain
              </p>
            </div>
            <Link href="/">
              <Button variant="outline">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Get Started Section */}
        <div className="mb-12">
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Get Started with XL3 Chain
                </h2>
                <p className="text-blue-800 dark:text-blue-200 mb-4">
                  XL3 Chain is a high-performance blockchain designed for scalable decentralized applications. 
                  Choose your integration path below to start building.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Paths */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Choose your integration path:</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Smart Contracts */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Smart Contracts</CardTitle>
                </div>
                <CardDescription>
                  Deploy and interact with smart contracts on XL3 Chain using Solidity and Web3 tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Solidity</Badge>
                    <Badge variant="secondary">Foundry</Badge>
                    <Badge variant="secondary">Web3.js</Badge>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/docs/smart-contracts">
                      Start Building
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* DApp Development */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">DApp Development</CardTitle>
                </div>
                <CardDescription>
                  Build decentralized applications with modern frontend frameworks and XL3 Chain integration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">wagmi</Badge>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/docs/dapp-development">
                      Start Building
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Infrastructure */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Infrastructure</CardTitle>
                </div>
                <CardDescription>
                  Run nodes, validators, and infrastructure services on the XL3 Chain network.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node Setup</Badge>
                    <Badge variant="secondary">Validators</Badge>
                    <Badge variant="secondary">RPC</Badge>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/docs/infrastructure">
                      Start Building
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Start Guides */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Quick Start Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Connect Your Wallet
                </CardTitle>
                <CardDescription>
                  Learn how to connect MetaMask and other wallets to XL3 Chain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Network Details:</h4>
                    <div className="space-y-1 text-sm font-mono">
                      <div>Chain ID: <span className="text-primary">7117</span></div>
                      <div>RPC URL: <span className="text-primary">https://rpc.xl3chain.com</span></div>
                      <div>Currency: <span className="text-primary">XL3</span></div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/docs/wallet-setup">
                      View Full Guide
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Deploy Your First Contract
                </CardTitle>
                <CardDescription>
                  Step-by-step guide to deploy a smart contract on XL3 Chain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Prerequisites:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Foundry installed</li>
                      <li>• XL3 tokens for gas</li>
                      <li>• MetaMask configured</li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/docs/first-contract">
                      View Full Guide
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="text-center p-6">
              <h3 className="font-semibold mb-2">API Reference</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete API documentation for XL3 Chain
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/docs/api">
                  View Docs
                </Link>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <h3 className="font-semibold mb-2">Examples</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sample projects and code snippets
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/docs/examples">
                  Browse Examples
                </Link>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Join our developer community
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://discord.gg/xl3chain" target="_blank">
                  Join Discord
                </Link>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore our open source code
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/0xl3" target="_blank">
                  View Repository
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}