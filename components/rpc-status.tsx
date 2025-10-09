"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Activity, 
  Server, 
  Clock, 
  Hash, 
  Zap, 
  RefreshCw, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Network,
  Database
} from "lucide-react"

interface BlockInfo {
  number: string
  timestamp: string
  hash: string
  gasUsed: string
  gasLimit: string
}

interface RPCStatus {
  isOnline: boolean
  chainId: string | null
  latestBlock: BlockInfo | null
  gasPrice: string | null
  isSyncing: boolean | null
  syncProgress: {
    currentBlock: string
    highestBlock: string
    startingBlock: string
  } | null
  responseTime: number
  lastUpdated: Date
}

const RPC_URL = "https://rpc.0xl3.com"
const EXPECTED_CHAIN_ID = "0x1BC5" // 7117 in hex

export default function RPCStatus() {
  const [status, setStatus] = useState<RPCStatus>({
    isOnline: false,
    chainId: null,
    latestBlock: null,
    gasPrice: null,
    isSyncing: null,
    syncProgress: null,
    responseTime: 0,
    lastUpdated: new Date()
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const makeRPCCall = async (method: string, params: any[] = []) => {
    const startTime = Date.now()
    
    try {
      const response = await fetch(RPC_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: Date.now(),
          method,
          params
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      const responseTime = Date.now() - startTime

      if (data.error) {
        throw new Error(data.error.message || 'RPC Error')
      }

      return { result: data.result, responseTime }
    } catch (err) {
      const responseTime = Date.now() - startTime
      throw { error: err, responseTime }
    }
  }

  const fetchRPCStatus = async () => {
    setLoading(true)
    setError(null)

    try {
      // Parallel RPC calls for better performance
      const [
        chainIdResult,
        blockNumberResult,
        gasPriceResult,
        syncingResult
      ] = await Promise.allSettled([
        makeRPCCall('eth_chainId'),
        makeRPCCall('eth_blockNumber'),
        makeRPCCall('eth_gasPrice'),
        makeRPCCall('eth_syncing')
      ])

      let totalResponseTime = 0
      let successfulCalls = 0

      // Process chain ID
      let chainId = null
      if (chainIdResult.status === 'fulfilled') {
        chainId = chainIdResult.value.result
        totalResponseTime += chainIdResult.value.responseTime
        successfulCalls++
      }

      // Process latest block number
      let latestBlock = null
      if (blockNumberResult.status === 'fulfilled') {
        const blockNumber = blockNumberResult.value.result
        totalResponseTime += blockNumberResult.value.responseTime
        successfulCalls++

        // Get detailed block info
        try {
          const blockDetailResult = await makeRPCCall('eth_getBlockByNumber', [blockNumber, false])
          const blockData = blockDetailResult.result
          
          latestBlock = {
            number: parseInt(blockNumber, 16).toString(),
            timestamp: new Date(parseInt(blockData.timestamp, 16) * 1000).toISOString(),
            hash: blockData.hash,
            gasUsed: parseInt(blockData.gasUsed, 16).toString(),
            gasLimit: parseInt(blockData.gasLimit, 16).toString()
          }
          totalResponseTime += blockDetailResult.responseTime
          successfulCalls++
        } catch (blockErr) {
          console.warn('Failed to fetch block details:', blockErr)
        }
      }

      // Process gas price
      let gasPrice = null
      if (gasPriceResult.status === 'fulfilled') {
        const gasPriceWei = gasPriceResult.value.result
        gasPrice = (parseInt(gasPriceWei, 16) / 1e9).toFixed(2) // Convert to Gwei
        totalResponseTime += gasPriceResult.value.responseTime
        successfulCalls++
      }

      // Process syncing status
      let isSyncing = null
      let syncProgress = null
      if (syncingResult.status === 'fulfilled') {
        const syncData = syncingResult.value.result
        isSyncing = syncData !== false
        
        if (syncData && typeof syncData === 'object') {
          syncProgress = {
            currentBlock: parseInt(syncData.currentBlock, 16).toString(),
            highestBlock: parseInt(syncData.highestBlock, 16).toString(),
            startingBlock: parseInt(syncData.startingBlock, 16).toString()
          }
        }
        totalResponseTime += syncingResult.value.responseTime
        successfulCalls++
      }

      const avgResponseTime = successfulCalls > 0 ? totalResponseTime / successfulCalls : 0

      setStatus({
        isOnline: successfulCalls > 0,
        chainId,
        latestBlock,
        gasPrice,
        isSyncing,
        syncProgress,
        responseTime: Math.round(avgResponseTime),
        lastUpdated: new Date()
      })

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch RPC status')
      setStatus(prev => ({
        ...prev,
        isOnline: false,
        lastUpdated: new Date()
      }))
    } finally {
      setLoading(false)
    }
  }

  const formatTimestamp = (isoString: string) => {
    const date = new Date(isoString)
    return date.toLocaleString('th-TH', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const formatNumber = (num: string) => {
    return parseInt(num).toLocaleString()
  }

  const getStatusColor = () => {
    if (!status.isOnline) return 'text-red-600'
    if (status.isSyncing) return 'text-yellow-600'
    return 'text-green-600'
  }

  const getStatusIcon = () => {
    if (!status.isOnline) return <XCircle className="h-4 w-4" />
    if (status.isSyncing) return <AlertCircle className="h-4 w-4" />
    return <CheckCircle className="h-4 w-4" />
  }

  const getStatusText = () => {
    if (!status.isOnline) return 'Offline'
    if (status.isSyncing) return 'Syncing'
    return 'Online'
  }

  useEffect(() => {
    fetchRPCStatus()
    // Refresh every 5 seconds (optimized for 2-second block time)
    const interval = setInterval(fetchRPCStatus, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          0xL3 RPC Node Status
        </h2>
        <p className="text-muted-foreground">Real-time blockchain node health and synchronization status</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className={`flex items-center gap-1 ${getStatusColor()}`}>
            {getStatusIcon()}
            <span className="text-sm font-medium">{getStatusText()}</span>
          </div>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">
            Updated: {mounted ? status.lastUpdated.toLocaleTimeString('th-TH') : '--:--:--'}
          </span>
        </div>
      </div>

      {error && (
        <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-red-700 dark:text-red-300">
              <XCircle className="h-4 w-4" />
              <span className="font-medium">Connection Error:</span>
              <span>{error}</span>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Node Status */}
        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">Node Status</CardTitle>
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Server className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${getStatusColor()}`}>
              {getStatusText()}
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <Activity className="h-3 w-3" />
              Response time: {status.responseTime}ms
            </p>
            {status.chainId && (
              <div className="mt-2">
                <Badge variant={status.chainId === EXPECTED_CHAIN_ID ? "default" : "destructive"}>
                  Chain ID: {parseInt(status.chainId, 16)}
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Latest Block */}
        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">Latest Block</CardTitle>
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <Database className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            {status.latestBlock ? (
              <>
                <div className="text-2xl font-bold text-green-900 dark:text-green-100">
                  #{formatNumber(status.latestBlock.number)}
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <Clock className="h-3 w-3" />
                  {formatTimestamp(status.latestBlock.timestamp)}
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <Hash className="h-3 w-3" />
                  {status.latestBlock.hash.slice(0, 10)}...
                </p>
              </>
            ) : (
              <div className="text-2xl font-bold text-muted-foreground">--</div>
            )}
          </CardContent>
        </Card>

        {/* Gas Price */}
        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">Gas Price</CardTitle>
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Zap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">
              {status.gasPrice ? `${status.gasPrice} Gwei` : '--'}
            </div>
            <p className="text-xs text-muted-foreground">
              Current network gas price
            </p>
          </CardContent>
        </Card>

        {/* Sync Status */}
        {status.isSyncing && status.syncProgress && (
          <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-yellow-500 md:col-span-2 lg:col-span-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-yellow-700 dark:text-yellow-300">Sync Progress</CardTitle>
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <RefreshCw className="h-4 w-4 text-yellow-600 dark:text-yellow-400 animate-spin" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Current Block: {formatNumber(status.syncProgress.currentBlock)}</span>
                  <span>Highest Block: {formatNumber(status.syncProgress.highestBlock)}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${Math.min((parseInt(status.syncProgress.currentBlock) / parseInt(status.syncProgress.highestBlock)) * 100, 100)}%` 
                    }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Node is synchronizing with the network...
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Block Details */}
        {status.latestBlock && (
          <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-indigo-500 md:col-span-2 lg:col-span-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Block Details</CardTitle>
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <Network className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Block Number</p>
                  <p className="font-mono text-sm">{formatNumber(status.latestBlock.number)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Gas Used</p>
                  <p className="font-mono text-sm">{formatNumber(status.latestBlock.gasUsed)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Gas Limit</p>
                  <p className="font-mono text-sm">{formatNumber(status.latestBlock.gasLimit)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Block Hash</p>
                  <p className="font-mono text-sm">{status.latestBlock.hash.slice(0, 16)}...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="text-center">
        <Button 
          onClick={fetchRPCStatus} 
          disabled={loading}
          variant="outline"
          className="gap-2"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          {loading ? 'Refreshing...' : 'Refresh Status'}
        </Button>
      </div>

      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full animate-pulse bg-blue-500"></div>
            <span className="text-xs font-medium">RPC Monitoring</span>
          </div>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">Auto-refresh every 5s</span>
        </div>
      </div>
    </div>
  )
}