"use client"

import { Card } from "@/components/ui/card"
import { Copy, ExternalLink, Wallet, ArrowUpDown, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// Extend Window interface for MetaMask
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>
    }
  }
}

const networkSpecs = [
  {
    label: "RPC Endpoint",
    value: "https://rpc.0xl3.com",
    copyable: true,
  },
  {
    label: "Chain ID",
    value: "7117",
    copyable: true,
  },
  {
    label: "Block Explorer",
    value: "https://exp.0xl3.com/",
    link: true,
  },
  {
    label: "Network Type",
    value: "Layer 3 (Optimism Rollup)",
    copyable: false,
  },
  {
    label: "Native Currency",
    value: "XL3",
    copyable: false,
  },
]

const tokenInfo = [
  {
    label: "XL3 Token Contract (Optimism)",
    value: "0x8888888323a6EF6F5F89aFcC60Fc1D0b95332c90",
    copyable: true,
    link: "https://optimistic.etherscan.io/token/0x8888888323a6EF6F5F89aFcC60Fc1D0b95332c90",
  },
  {
    label: "Token Standard",
    value: "ERC-20",
    copyable: false,
  },
  {
    label: "Decimals",
    value: "18",
    copyable: false,
  },
]

const tradingInfo = [
  {
    label: "USDT Contract (Optimism)",
    value: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
    copyable: true,
    link: "https://optimistic.etherscan.io/token/0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
  },
  {
    label: "Trading Pair",
    value: "XL3/USDT",
    copyable: false,
  },
  {
    label: "DEX Protocol",
    value: "Uniswap V4",
    copyable: false,
  },
]

export function NetworkDetails() {
  const [isAddingNetwork, setIsAddingNetwork] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const addToMetaMask = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed. Please install MetaMask to add the network.")
      return
    }

    setIsAddingNetwork(true)

    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x1BC5", // 7117 in hex
            chainName: "0xL3 Chain",
            nativeCurrency: {
              name: "XL3",
              symbol: "XL3",
              decimals: 18,
            },
            rpcUrls: ["https://rpc.0xl3.com"],
            blockExplorerUrls: ["https://exp.0xl3.com/"],
          },
        ],
      })
      alert("0xL3 network has been added to MetaMask successfully!")
    } catch (error: any) {
      console.error("Error adding network to MetaMask:", error)
      if (error.code === 4001) {
        alert("User rejected the request to add the network.")
      } else {
        alert("Failed to add network to MetaMask. Please try again or add manually.")
      }
    } finally {
      setIsAddingNetwork(false)
    }
  }

  const openBridge = () => {
    window.open("https://bridge.0xl3.com/", "_blank", "noopener,noreferrer")
  }

  const openUniswap = () => {
    // Uniswap V4 URL with XL3/USDT pair on Optimism
    const uniswapUrl = `https://app.uniswap.org/#/swap?inputCurrency=0x94b008aA00579c1307B0EF2c499aD98a8ce58e58&outputCurrency=0x8888888323a6EF6F5F89aFcC60Fc1D0b95332c90&chain=optimism`
    window.open(uniswapUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Network Specifications</h2>
            <p className="text-lg text-muted-foreground">{"Connect to 0xL3 and start building on Layer 3"}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {networkSpecs.map((spec) => (
              <Card key={spec.label} className="p-6 space-y-2 hover:border-primary/50 transition-colors">
                <div className="text-sm font-medium text-muted-foreground">{spec.label}</div>
                <div className="flex items-center justify-between gap-4">
                  <code className="text-sm md:text-base font-mono break-all">{spec.value}</code>
                  {spec.copyable && (
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => copyToClipboard(spec.value)}
                      className="shrink-0"
                    >
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy {spec.label}</span>
                    </Button>
                  )}
                  {spec.link && (
                    <Button size="icon" variant="ghost" asChild className="shrink-0">
                      <a href={spec.value} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Open {spec.label}</span>
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* XL3 Token Acquisition Guide */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold">How to Acquire XL3 Tokens</h3>
              <p className="text-muted-foreground">Step-by-step guide to purchase and bridge XL3 tokens for use on the XL3 Blockchain</p>
            </div>
            
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Step 1: Buy XL3 */}
              <Card className="p-6 space-y-4 bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h4 className="text-lg font-semibold">Buy XL3 on Uniswap</h4>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• Connect your wallet to Optimism network</p>
                  <p>• Prepare USDT for purchasing XL3 tokens</p>
                  <p>• Click the "Buy on Uniswap" button below</p>
                  <p>• Swap USDT for XL3 on Uniswap V4</p>
                </div>
                <Button 
                  className="w-full" 
                  onClick={openUniswap}
                  size="sm"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy XL3 on Uniswap
                </Button>
              </Card>

              {/* Step 2: Bridge XL3 */}
              <Card className="p-6 space-y-4 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-blue-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h4 className="text-lg font-semibold">Bridge to XL3 Chain</h4>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• Open the Bridge using our provided link</p>
                  <p>• Select bridge from Optimism to 0xL3 Chain</p>
                  <p>• Enter the amount of XL3 to bridge</p>
                  <p>• Confirm the transaction in your wallet</p>
                </div>
                <Button 
                  className="w-full" 
                  onClick={openBridge}
                  size="sm"
                >
                  <ArrowUpDown className="mr-2 h-4 w-4" />
                  Open Bridge
                </Button>
              </Card>

              {/* Step 3: Wait and Check */}
              <Card className="p-6 space-y-4 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-purple-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h4 className="text-lg font-semibold">Wait and Check Balance</h4>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• Wait approximately <strong>10 minutes</strong> after bridging</p>
                  <p>• Add 0xL3 network to your wallet</p>
                  <p>• Switch network to 0xL3 Chain</p>
                  <p>• Check your XL3 balance in wallet</p>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                  <p className="text-xs text-yellow-700 dark:text-yellow-300 font-medium">
                    ⏱️ Waiting time: Approximately 10 minutes
                  </p>
                </div>
              </Card>
            </div>

            {/* Important Notes */}
            <Card className="p-6 bg-gradient-to-r from-orange-500/5 to-red-500/5 border-orange-500/20">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold flex items-center gap-2">
                  <span className="text-orange-500">⚠️</span>
                  Important Information
                </h4>
                <div className="grid gap-3 md:grid-cols-2 text-sm text-muted-foreground">
                  <div className="space-y-2">
                    <p><strong>• Source Network:</strong> Optimism Mainnet</p>
                    <p><strong>• Destination Network:</strong> 0xL3 Chain</p>
                    <p><strong>• Bridge Time:</strong> Approximately 10 minutes</p>
                  </div>
                  <div className="space-y-2">
                    <p><strong>• Gas Fee:</strong> Paid with ETH on Optimism</p>
                    <p><strong>• Trading Pair:</strong> XL3/USDT</p>
                    <p><strong>• Protocol:</strong> Uniswap V4</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* XL3 Token Information */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold">XL3 Token Information</h3>
              <p className="text-muted-foreground">XL3 is the native gas token for 0xL3 Chain, available as ERC-20 on Optimism</p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tokenInfo.map((info) => (
                <Card key={info.label} className="p-6 space-y-2 hover:border-primary/50 transition-colors">
                  <div className="text-sm font-medium text-muted-foreground">{info.label}</div>
                  <div className="flex items-center justify-between gap-4">
                    <code className="text-sm md:text-base font-mono break-all">{info.value}</code>
                    {info.copyable && (
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => copyToClipboard(info.value)}
                        className="shrink-0"
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy {info.label}</span>
                      </Button>
                    )}
                    {info.link && (
                      <Button size="icon" variant="ghost" asChild className="shrink-0">
                        <a href={info.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">View on Explorer</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Buy XL3 Tokens Section */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold">Buy XL3 Tokens</h3>
              <p className="text-muted-foreground">Purchase XL3 tokens directly on Uniswap V4 using USDT</p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tradingInfo.map((info) => (
                <Card key={info.label} className="p-6 space-y-2 hover:border-primary/50 transition-colors">
                  <div className="text-sm font-medium text-muted-foreground">{info.label}</div>
                  <div className="flex items-center justify-between gap-4">
                    <code className="text-sm md:text-base font-mono break-all">{info.value}</code>
                    {info.copyable && (
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => copyToClipboard(info.value)}
                        className="shrink-0"
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy {info.label}</span>
                      </Button>
                    )}
                    {info.link && (
                      <Button size="icon" variant="ghost" asChild className="shrink-0">
                        <a href={info.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">View on Explorer</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Action Buttons Section */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Buy XL3 Section */}
            <Card className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Buy XL3 Tokens
                  </h3>
                  <p className="text-muted-foreground">
                    Purchase XL3 tokens on Uniswap V4 with USDT
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <Button 
                    className="w-full" 
                    onClick={openUniswap}
                    size="lg"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy on Uniswap
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <p>Trading Pair: XL3/USDT • Protocol: Uniswap V4</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Bridge Section */}
            <Card className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
                    <ArrowUpDown className="h-5 w-5" />
                    Bridge XL3 Tokens
                  </h3>
                  <p className="text-muted-foreground">
                    Bridge your XL3 tokens from Optimism to 0xL3 Chain
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <Button 
                    className="w-full" 
                    onClick={openBridge}
                    size="lg"
                  >
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    Open Bridge
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <p>Transfer time: ~10 minutes • Gas fee: Paid in ETH</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Add Network Section */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">Add 0xL3 Network to Wallet</h3>
                <p className="text-muted-foreground">{"Connect your wallet to 0xL3 network with one click"}</p>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  className="w-full sm:w-auto" 
                  onClick={addToMetaMask}
                  disabled={isAddingNetwork}
                  size="lg"
                >
                  <Wallet className="mr-2 h-4 w-4" />
                  {isAddingNetwork ? "Adding Network..." : "Add Network to Wallet"}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
