"use client"

import { Card } from "@/components/ui/card"
import { Copy, ExternalLink, Wallet } from "lucide-react"
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

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Add to MetaMask</h3>
              <p className="text-muted-foreground">{"Connect your wallet to 0xL3 network with one click"}</p>
              <Button 
                className="w-full sm:w-auto" 
                onClick={addToMetaMask}
                disabled={isAddingNetwork}
              >
                <Wallet className="mr-2 h-4 w-4" />
                {isAddingNetwork ? "Adding Network..." : "Add Network to Wallet"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
