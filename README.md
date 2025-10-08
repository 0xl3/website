# 0xL3 Chain — Website

Beyond Transactions, Building Trust

## Project Overview

- 0xL3 is a Layer 3 blockchain built on Optimism Rollup (a rollup on Optimism)
- RPC: `https://rpc.0xl3.com` (use HTTP `POST`)
- Chain ID: `7117`
- Block Explorer: `https://exp.0xl3.com/`

This repository contains the landing/information website for the 0xL3 network, built with Next.js and TailwindCSS using Radix UI components.

## Tech Stack

- `Next.js 15`
- `React 19`
- `TailwindCSS 4`
- `Radix UI`

## Getting Started (for website development)

Prerequisites:
- Node.js `>= 18`
- `pnpm >= 8`

Basic commands:
- Install dependencies: `pnpm install`
- Run development server: `pnpm dev`
- Create production build: `pnpm build`
- Start production build: `pnpm start`

## Wallet Network Settings

To add the network in MetaMask, use:
- Network Name: `0xL3 Chain`
- RPC URL: `https://rpc.0xl3.com`
- Chain ID: `7117`
- Block Explorer URL: `https://exp.0xl3.com/`
- Currency Symbol: `XL3`

JSON-RPC examples (HTTP POST):

```bash
curl -X POST https://rpc.0xl3.com \
  -H 'Content-Type: application/json' \
  --data '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "eth_chainId",
    "params": []
  }'

curl -X POST https://rpc.0xl3.com \
  -H 'Content-Type: application/json' \
  --data '{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "eth_blockNumber",
    "params": []
  }'
```

## Explorer

- View blocks, transactions, and network stats at `https://exp.0xl3.com/`

## Deployment

- Ready for deployment on platforms such as Vercel
- Configure any required environment variables for deployment if applicable

## License & Usage

- This codebase is for the 0xL3 website
- Network details may be updated periodically; please check `https://exp.0xl3.com/` for the latest information