import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Code, Terminal, FileText, Zap, Shield, Copy } from "lucide-react"
import Link from "next/link"

export default function SmartContractsPage() {
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
                <h1 className="text-3xl font-bold">Smart Contracts</h1>
                <p className="text-muted-foreground mt-2">
                  Deploy and interact with smart contracts on XL3 Chain
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
              <Code className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Smart Contract Development on XL3 Chain
                </h2>
                <p className="text-blue-800 dark:text-blue-200 mb-4">
                  XL3 Chain is fully compatible with Ethereum Virtual Machine (EVM), allowing you to deploy 
                  Solidity smart contracts with minimal modifications. Enjoy faster transactions and lower gas fees.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">EVM Compatible</Badge>
                  <Badge variant="secondary">Solidity</Badge>
                  <Badge variant="secondary">Low Gas Fees</Badge>
                  <Badge variant="secondary">Fast Finality</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  Setup Development Environment
                </CardTitle>
                <CardDescription>
                  Install and configure Foundry for XL3 Chain development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Install Foundry:</h4>
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
                      <div className="flex items-center justify-between">
                        <span>curl -L https://foundry.paradigm.xyz | bash</span>
                        <Copy className="h-4 w-4 cursor-pointer hover:text-green-300" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Initialize Project:</h4>
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
                      <div className="flex items-center justify-between">
                        <span>forge init my-xl3-project</span>
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
                  <FileText className="h-5 w-5" />
                  Network Configuration
                </CardTitle>
                <CardDescription>
                  Configure your project to deploy on XL3 Chain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">foundry.toml:</h4>
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
                      <pre>{`[profile.default]
src = "src"
out = "out"
libs = ["lib"]

[rpc_endpoints]
xl3 = "https://rpc.xl3chain.com"

[etherscan]
xl3 = { key = "YOUR_API_KEY" }`}</pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contract Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Contract Examples</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Simple Token Contract</CardTitle>
                <CardDescription>
                  A basic ERC-20 token implementation for XL3 Chain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract XL3Token is ERC20, Ownable {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) ERC20(name, symbol) Ownable(msg.sender) {
        _mint(msg.sender, initialSupply * 10**decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>NFT Contract</CardTitle>
                <CardDescription>
                  ERC-721 NFT contract optimized for XL3 Chain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract XL3NFT is ERC721, Ownable {
    uint256 private _tokenIdCounter;
    string private _baseTokenURI;

    constructor(
        string memory name,
        string memory symbol,
        string memory baseURI
    ) ERC721(name, symbol) Ownable(msg.sender) {
        _baseTokenURI = baseURI;
    }

    function mint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter++;
        _safeMint(to, tokenId);
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }
}`}</pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Deployment Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Deployment Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Deploy with Foundry
                </CardTitle>
                <CardDescription>
                  Step-by-step deployment process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">1. Compile Contract:</h4>
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
                      forge build
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">2. Deploy to XL3 Chain:</h4>
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
                      <div>forge create --rpc-url xl3 \</div>
                      <div>  --private-key $PRIVATE_KEY \</div>
                      <div>  src/MyContract.sol:MyContract</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">3. Verify Contract:</h4>
                    <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
                      <div>forge verify-contract \</div>
                      <div>  --chain-id 7117 \</div>
                      <div>  --verifier blockscout \</div>
                      <div>  --verifier-url https://exp.0xl3.com/api \</div>
                      <div>  --verify \</div>
                      <div>  $CONTRACT_ADDRESS \</div>
                      <div>  src/MyContract.sol:MyContract</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Best Practices
                </CardTitle>
                <CardDescription>
                  Security and optimization tips
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Security:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Use OpenZeppelin contracts</li>
                      <li>• Implement access controls</li>
                      <li>• Add reentrancy guards</li>
                      <li>• Validate all inputs</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Gas Optimization:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Use packed structs</li>
                      <li>• Minimize storage operations</li>
                      <li>• Use events for data storage</li>
                      <li>• Optimize loops and conditions</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Testing:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Write comprehensive tests</li>
                      <li>• Test edge cases</li>
                      <li>• Use fuzzing for robustness</li>
                      <li>• Test on testnet first</li>
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
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center p-6">
              <h3 className="font-semibold mb-2">Foundry Documentation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete guide to Foundry toolkit
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://book.getfoundry.sh/" target="_blank" rel="noopener noreferrer">
                  View Docs
                </a>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <h3 className="font-semibold mb-2">OpenZeppelin</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Secure smart contract library
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://openzeppelin.com/contracts/" target="_blank" rel="noopener noreferrer">
                  Browse Library
                </a>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <h3 className="font-semibold mb-2">XL3 Explorer</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Verify and interact with contracts
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://exp.0xl3.com/" target="_blank" rel="noopener noreferrer">
                  Open Explorer
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}