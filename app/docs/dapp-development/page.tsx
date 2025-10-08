import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Smartphone, Globe, Wallet, Zap, Code, Users, Copy } from "lucide-react"
import Link from "next/link"

export default function DAppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/docs">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Docs
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold">DApp Development</h1>
                <p className="text-muted-foreground mt-2">
                  Build modern decentralized applications on XL3 Chain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Overview */}
        <div className="mb-12">
          <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Smartphone className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  Modern DApp Development on XL3 Chain
                </h2>
                <p className="text-purple-800 dark:text-purple-200 mb-4">
                  Build responsive, user-friendly decentralized applications using modern web technologies. 
                  XL3 Chain provides fast transactions and low fees for optimal user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">wagmi</Badge>
                  <Badge variant="secondary">viem</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recommended Tech Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Frontend Framework
                </CardTitle>
                <CardDescription>
                  Modern React-based frameworks for optimal performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <h4 className="font-semibold">Next.js 14+</h4>
                      <p className="text-sm text-muted-foreground">App Router, SSR, SSG</p>
                    </div>
                    <Badge>Recommended</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <h4 className="font-semibold">Vite + React</h4>
                      <p className="text-sm text-muted-foreground">Fast development</p>
                    </div>
                    <Badge variant="outline">Alternative</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-5 w-5" />
                  Web3 Integration
                </CardTitle>
                <CardDescription>
                  Type-safe blockchain interactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <h4 className="font-semibold">wagmi v2</h4>
                      <p className="text-sm text-muted-foreground">React hooks for Ethereum</p>
                    </div>
                    <Badge>Recommended</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <h4 className="font-semibold">viem</h4>
                      <p className="text-sm text-muted-foreground">TypeScript Ethereum library</p>
                    </div>
                    <Badge>Recommended</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  UI & Styling
                </CardTitle>
                <CardDescription>
                  Beautiful and responsive user interfaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <h4 className="font-semibold">Tailwind CSS</h4>
                      <p className="text-sm text-muted-foreground">Utility-first CSS</p>
                    </div>
                    <Badge>Recommended</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <h4 className="font-semibold">shadcn/ui</h4>
                      <p className="text-sm text-muted-foreground">Beautiful components</p>
                    </div>
                    <Badge>Recommended</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Start */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Create New Project
                </CardTitle>
                <CardDescription>
                  Set up a new DApp project with XL3 Chain integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">1. Create Next.js App:</h4>
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
                      <div className="flex items-center justify-between">
                        <span>npx create-next-app@latest my-xl3-dapp --typescript --tailwind --app</span>
                        <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">2. Install Web3 Dependencies:</h4>
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
                      <div className="flex items-center justify-between">
                        <span>npm install wagmi viem @tanstack/react-query</span>
                        <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">3. Install UI Components:</h4>
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
                      <div className="flex items-center justify-between">
                        <span>npx shadcn-ui@latest init</span>
                        <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-5 w-5" />
                  Configure Web3 Provider
                </CardTitle>
                <CardDescription>
                  Set up wagmi configuration for XL3 Chain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`// lib/config.ts
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// XL3 Chain configuration
export const xl3Chain = {
  id: 7117,
  name: 'XL3 Chain',
  nativeCurrency: {
    decimals: 18,
    name: 'XL3',
    symbol: 'XL3',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.xl3chain.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'XL3 Explorer',
      url: 'https://exp.0xl3.com',
    },
  },
}

export const config = createConfig({
  chains: [xl3Chain, mainnet, sepolia],
  transports: {
    [xl3Chain.id]: http(),
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})`}</pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Code Examples</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Wallet Connection Component</CardTitle>
                <CardDescription>
                  Connect and manage wallet connections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`// components/WalletConnect.tsx
'use client'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from '@/components/ui/button'

export function WalletConnect() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  if (isConnected) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </span>
        <Button onClick={() => disconnect()} variant="outline">
          Disconnect
        </Button>
      </div>
    )
  }

  return (
    <div className="flex gap-2">
      {connectors.map((connector) => (
        <Button
          key={connector.uid}
          onClick={() => connect({ connector })}
          variant="outline"
        >
          Connect {connector.name}
        </Button>
      ))}
    </div>
  )
}`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Smart Contract Interaction</CardTitle>
                <CardDescription>
                  Read from and write to smart contracts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`// components/TokenBalance.tsx
'use client'
import { useReadContract, useWriteContract } from 'wagmi'
import { parseEther } from 'viem'
import { Button } from '@/components/ui/button'

const tokenABI = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    name: 'transfer',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    outputs: [{ name: '', type: 'bool' }],
  },
] as const

export function TokenBalance({ address, tokenAddress }: {
  address: \`0x\${string}\`
  tokenAddress: \`0x\${string}\`
}) {
  const { data: balance } = useReadContract({
    address: tokenAddress,
    abi: tokenABI,
    functionName: 'balanceOf',
    args: [address],
  })

  const { writeContract } = useWriteContract()

  const handleTransfer = () => {
    writeContract({
      address: tokenAddress,
      abi: tokenABI,
      functionName: 'transfer',
      args: ['0x...', parseEther('1')],
    })
  }

  return (
    <div className="space-y-4">
      <p>Balance: {balance?.toString() || '0'}</p>
      <Button onClick={handleTransfer}>
        Transfer 1 Token
      </Button>
    </div>
  )
}`}</pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  User Experience
                </CardTitle>
                <CardDescription>
                  Create intuitive and responsive interfaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Loading States:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Show loading indicators for transactions</li>
                      <li>• Display transaction progress</li>
                      <li>• Handle pending states gracefully</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Error Handling:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Provide clear error messages</li>
                      <li>• Handle network switching</li>
                      <li>• Graceful fallbacks for failures</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Responsive Design:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Mobile-first approach</li>
                      <li>• Touch-friendly interactions</li>
                      <li>• Accessible components</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Performance
                </CardTitle>
                <CardDescription>
                  Optimize for speed and efficiency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Code Splitting:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Lazy load components</li>
                      <li>• Dynamic imports for heavy libraries</li>
                      <li>• Route-based splitting</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Caching:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Cache contract read results</li>
                      <li>• Use React Query for data fetching</li>
                      <li>• Implement proper cache invalidation</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Bundle Optimization:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Tree shake unused code</li>
                      <li>• Optimize images and assets</li>
                      <li>• Use production builds</li>
                    </ul>
                  </div>
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
              <h3 className="font-semibold mb-2">wagmi Docs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                React hooks for Ethereum
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://wagmi.sh/" target="_blank" rel="noopener noreferrer">
                  View Docs
                </a>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <h3 className="font-semibold mb-2">Next.js</h3>
              <p className="text-sm text-muted-foreground mb-4">
                React framework documentation
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <h3 className="font-semibold mb-2">shadcn/ui</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Beautiful UI components
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">
                  Browse Components
                </a>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <h3 className="font-semibold mb-2">Examples</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sample DApp projects
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/docs/examples">
                  View Examples
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}