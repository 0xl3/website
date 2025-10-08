import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Server, Database, Cloud, Shield, Monitor, Network, Copy, ExternalLink, Terminal, Download } from "lucide-react"
import Link from "next/link"

export default function InfrastructurePage() {
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
                <h1 className="text-3xl font-bold">Infrastructure</h1>
                <p className="text-muted-foreground mt-2">
                  Run your own 0xL3 blockchain node
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Overview */}
        <div className="mb-12">
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Server className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  0xL3 Blockchain Node
                </h2>
                <p className="text-blue-800 dark:text-blue-200 mb-4">
                  Run your own 0xL3 blockchain node using Docker Compose. This setup includes OP-Reth (Execution Layer) 
                  and OP-Node (Consensus Layer) for a complete blockchain infrastructure.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">OP-Reth</Badge>
                  <Badge variant="secondary">OP-Node</Badge>
                  <Badge variant="secondary">Chain ID: 7117</Badge>
                  <Badge variant="secondary">Block Time: 2s</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Network Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Network Information</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="h-5 w-5" />
                0xL3 Chain Details
              </CardTitle>
              <CardDescription>
                Essential network parameters for node setup
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Network Configuration:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Chain ID:</span>
                        <span className="font-mono">7117</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">L1 Network:</span>
                        <span className="font-mono">Optimism (Chain ID: 10)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Block Time:</span>
                        <span className="font-mono">2 seconds</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Currency:</span>
                        <span className="font-mono">XL3</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">RPC Endpoints:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">HTTP RPC:</span>
                        <span className="font-mono">http://localhost:9545</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">WebSocket:</span>
                        <span className="font-mono">ws://localhost:9546</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">OP-Node RPC:</span>
                        <span className="font-mono">http://localhost:8547</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Requirements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Hardware Requirements
                </CardTitle>
                <CardDescription>
                  Minimum specifications for running a 0xL3 node
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Minimum Requirements:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• <strong>RAM:</strong> At least 8GB</li>
                      <li>• <strong>Storage:</strong> At least 50GB free disk space</li>
                      <li>• <strong>Network:</strong> Stable internet connection</li>
                      <li>• <strong>OS:</strong> Linux, macOS, or Windows with WSL2</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Software Dependencies
                </CardTitle>
                <CardDescription>
                  Required software for node operation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Required Software:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• <strong>Docker:</strong> Latest version</li>
                      <li>• <strong>Docker Compose:</strong> v2.0+</li>
                      <li>• <strong>OpenSSL:</strong> For JWT secret generation</li>
                      <li>• <strong>Git:</strong> For repository cloning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Installation Guide</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Step 1: Clone the Repository
                </CardTitle>
                <CardDescription>
                  Get the official 0xL3 node repository
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span>git clone https://github.com/0xl3/node.git</span>
                    <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>cd node</span>
                    <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Step 2: Generate JWT Secret
                </CardTitle>
                <CardDescription>
                  Create authentication secret for OP-Node and OP-Reth communication
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Before starting, you need to generate a JWT secret for authentication between OP-Node and OP-Reth:
                  </p>
                  <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                     <div className="flex items-center justify-between">
                       <span>openssl rand -hex 32 {`>`} config/jwt.txt</span>
                       <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                     </div>
                   </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Step 3: Verify Configuration
                </CardTitle>
                <CardDescription>
                  Check configuration files before starting the node
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Check the configuration files in the config/ directory:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <h4 className="font-semibold text-sm">.env</h4>
                      <p className="text-xs text-muted-foreground">Environment variables for L1 connection and peer nodes</p>
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <h4 className="font-semibold text-sm">genesis.json</h4>
                      <p className="text-xs text-muted-foreground">Genesis block configuration for L2 chain</p>
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <h4 className="font-semibold text-sm">rollup.json</h4>
                      <p className="text-xs text-muted-foreground">Rollup configuration and system parameters</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  Step 4: Start the Node
                </CardTitle>
                <CardDescription>
                  Launch the 0xL3 blockchain node
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span>cd node</span>
                      <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>docker-compose up -d</span>
                      <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Node Management */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Node Management</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Check Node Status
                </CardTitle>
                <CardDescription>
                  Monitor your node's health and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">View Logs:</h4>
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-sm space-y-1">
                      <div className="flex items-center justify-between">
                        <span># View OP-Reth logs</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>docker-compose logs -f op-reth</span>
                        <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                      </div>
                      <div className="mt-2">
                        <span># View OP-Node logs</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>docker-compose logs -f op-node</span>
                        <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Check Status:</h4>
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
                      <div className="flex items-center justify-between">
                        <span>docker-compose ps</span>
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
                  <Terminal className="h-5 w-5" />
                  Node Operations
                </CardTitle>
                <CardDescription>
                  Common operations for node management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Stop Node:</h4>
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
                      <div className="flex items-center justify-between">
                        <span>docker-compose down</span>
                        <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Update Node:</h4>
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-sm space-y-1">
                      <div className="flex items-center justify-between">
                        <span>docker-compose down</span>
                        <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>docker-compose pull</span>
                        <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>docker-compose up -d</span>
                        <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testing Connection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Testing Your Node</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="h-5 w-5" />
                RPC Connection Tests
              </CardTitle>
              <CardDescription>
                Verify your node is working correctly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Check Chain ID:</h4>
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-sm overflow-x-auto">
                      <pre>{`curl -X POST -H "Content-Type: application/json" \\
  --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}' \\
  http://localhost:9545`}</pre>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Check Latest Block:</h4>
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-sm overflow-x-auto">
                      <pre>{`curl -X POST -H "Content-Type: application/json" \\
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \\
  http://localhost:9545`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* File Structure */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Project Structure</h2>
          <Card>
            <CardHeader>
              <CardTitle>Repository File Structure</CardTitle>
              <CardDescription>
                Understanding the 0xL3 node repository layout
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`.
├── config/
│   ├── .env              # Environment variables
│   ├── genesis.json      # Genesis block configuration
│   ├── rollup.json       # Rollup configuration
│   └── jwt.txt           # JWT secret (generated)
└── node/
    ├── docker-compose.yml    # Docker Compose configuration
    ├── op-node-entrypoint    # OP-Node startup script
    ├── op-reth-entrypoint    # OP-Reth startup script
    └── data/                 # Blockchain data directory`}</pre>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Troubleshooting */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Common Issues
                </CardTitle>
                <CardDescription>
                  Solutions for frequent problems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-red-600">JWT Secret Not Found:</h4>
                     <p className="text-sm text-muted-foreground">
                       Generate JWT secret with: <code className="bg-muted px-1 rounded">openssl rand -hex 32 {`>`} config/jwt.txt</code>
                     </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-red-600">Port Already in Use:</h4>
                    <p className="text-sm text-muted-foreground">
                      Stop the service using port 9545 or change the port in docker-compose.yml
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-red-600">Cannot Connect to L1:</h4>
                    <p className="text-sm text-muted-foreground">
                      Check L1_RPC_URL in config/.env file
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Viewing Logs
                </CardTitle>
                <CardDescription>
                  Debug your node with detailed logging
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-black text-green-400 p-3 rounded font-mono text-sm space-y-1">
                    <div># View real-time logs</div>
                    <div className="flex items-center justify-between">
                      <span>docker-compose logs -f</span>
                      <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                    </div>
                    <div className="mt-2"># View historical logs</div>
                    <div className="flex items-center justify-between">
                      <span>docker-compose logs --tail=100 op-reth</span>
                      <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                    </div>
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
              <h3 className="font-semibold mb-2">GitHub Repository</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Official 0xL3 node source code
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/0xl3/node" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Repository
                </a>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <h3 className="font-semibold mb-2">OP Stack Docs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Official OP Stack documentation
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://docs.optimism.io/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Read Docs
                </a>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <h3 className="font-semibold mb-2">OP-Reth</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Execution layer implementation
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/paradigmxyz/op-reth" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Learn More
                </a>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <h3 className="font-semibold mb-2">Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get help with node setup
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/docs">
                  Contact Support
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}