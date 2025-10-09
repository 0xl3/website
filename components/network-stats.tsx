"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Users, Blocks, Zap, TrendingUp, Clock } from "lucide-react"

interface NetworkStats {
  average_block_time: number
  coin_image: string | null
  coin_price: string | null
  coin_price_change_percentage: number | null
  gas_price_updated_at: string
  gas_prices: {
    slow: number
    average: number
    fast: number
  }
  gas_prices_update_in: number
  gas_used_today: string
  last_output_root_size: string
  market_cap: string
  network_utilization_percentage: number
  secondary_coin_image: string | null
  secondary_coin_price: string | null
  static_gas_price: string | null
  total_addresses: string
  total_blocks: string
  total_gas_used: string
  total_transactions: string
  transactions_today: string
  tvl: string | null
}

export default function NetworkStats() {
  const [stats, setStats] = useState<NetworkStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const formatNumber = (num: string | number) => {
    const value = typeof num === 'string' ? parseInt(num) : num
    return value.toLocaleString()
  }

  const formatBlockTime = (ms: number) => {
    return `${(ms / 1000).toFixed(1)}s`
  }

  const formatPercentage = (value: number) => {
    return `${(value * 100).toFixed(2)}%`
  }

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://exp.0xl3.com/api/v2/stats')
        if (!response.ok) {
          throw new Error('Failed to fetch network stats')
        }
        const data = await response.json()
        setStats(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
    // Refresh stats every 30 seconds
    const interval = setInterval(fetchStats, 30000)
    
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="pb-2">
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-muted rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-muted rounded w-full"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <Card className="border-destructive">
        <CardContent className="pt-6">
          <div className="text-center text-destructive">
            <Activity className="h-8 w-8 mx-auto mb-2" />
            <p>Failed to load network statistics</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!stats) return null

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          XL3 Chain Network Statistics
        </h2>
        <p className="text-muted-foreground">Real-time blockchain metrics and performance data</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="w-2 h-2 rounded-full animate-pulse bg-green-500"></div>
          <span className="text-xs font-medium text-green-600">
            Live Data (HTTP)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Blocks */}
        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">Total Blocks</CardTitle>
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Blocks className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">{formatNumber(stats.total_blocks)}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <Clock className="h-3 w-3" />
              Avg block time: {formatBlockTime(stats.average_block_time)}
            </p>
          </CardContent>
        </Card>

        {/* Total Transactions */}
        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">Total Transactions</CardTitle>
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <Activity className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900 dark:text-green-100">{formatNumber(stats.total_transactions)}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              Today: {formatNumber(stats.transactions_today)}
            </p>
          </CardContent>
        </Card>

        {/* Total Addresses */}
        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">Total Addresses</CardTitle>
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">{formatNumber(stats.total_addresses)}</div>
            <p className="text-xs text-muted-foreground">
              Unique wallet addresses
            </p>
          </CardContent>
        </Card>

        {/* Network Utilization */}
        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-700 dark:text-orange-300">Network Utilization</CardTitle>
            <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <TrendingUp className="h-4 w-4 text-orange-600 dark:text-orange-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">{formatPercentage(stats.network_utilization_percentage)}</div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
              <div 
                className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(stats.network_utilization_percentage * 100, 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Current network usage
            </p>
          </CardContent>
        </Card>

        {/* Gas Prices */}
        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-yellow-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700 dark:text-yellow-300">Gas Prices</CardTitle>
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <Zap className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  Slow
                </span>
                <Badge variant="outline" className="border-red-200 text-red-700 dark:border-red-800 dark:text-red-300">
                  {stats.gas_prices.slow} Gwei
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm flex items-center gap-1">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  Average
                </span>
                <Badge variant="outline" className="border-yellow-200 text-yellow-700 dark:border-yellow-800 dark:text-yellow-300">
                  {stats.gas_prices.average} Gwei
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Fast
                </span>
                <Badge variant="outline" className="border-green-200 text-green-700 dark:border-green-800 dark:text-green-300">
                  {stats.gas_prices.fast} Gwei
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gas Used Today */}
        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-indigo-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Gas Used Today</CardTitle>
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
              <Clock className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">{formatNumber(stats.gas_used_today)}</div>
            <p className="text-xs text-muted-foreground">
              Total gas consumed today
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full animate-pulse bg-green-500"></div>
            <span className="text-xs font-medium">
              HTTP Polling
            </span>
          </div>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">Powered by Blockscout</span>
        </div>
      </div>
    </div>
  )
}