"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
      setActiveDropdown(null)
    }
  }

  const networkMenuItems = [
    { label: "RPC Status", id: "rpc-status" },
    { label: "Network Statistics", id: "network-statistics" },
    { label: "Network Specifications", id: "network-specifications" },
  ]

  const tokenMenuItems = [
    { label: "How to Acquire XL3 Tokens", id: "acquire-tokens" },
    { label: "XL3 Token Information", id: "token-info" },
    { label: "Buy XL3 Tokens", id: "buy-tokens" },
  ]

  const externalLinks = [
    { label: "Documentation", url: "/docs" },
    { label: "Block Explorer", url: "https://exp.0xl3.com" },
  ]

  return (
    <nav className={`bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/0xl3-logo.svg" alt="0xL3" className="h-8 w-auto" />
            <span className="ml-2 text-xl font-bold">0xL3</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Network Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                className="flex items-center space-x-1"
                onMouseEnter={() => setActiveDropdown("network")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Network</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
              {activeDropdown === "network" && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-background border rounded-md shadow-lg z-50"
                  onMouseEnter={() => setActiveDropdown("network")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {networkMenuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Token Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                className="flex items-center space-x-1"
                onMouseEnter={() => setActiveDropdown("token")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>XL3 Token</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
              {activeDropdown === "token" && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-background border rounded-md shadow-lg z-50"
                  onMouseEnter={() => setActiveDropdown("token")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {tokenMenuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* External Links */}
            {externalLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                asChild
              >
                <a
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : "_self"}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-2">
              {/* Network Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                  Network
                </div>
                {networkMenuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-6 py-2 text-sm hover:bg-muted transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Token Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                  XL3 Token
                </div>
                {tokenMenuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-6 py-2 text-sm hover:bg-muted transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* External Links */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                  External
                </div>
                {externalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : "_self"}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block px-6 py-2 text-sm hover:bg-muted transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}