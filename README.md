# TypeScript Crypto Price Checker (CoinGecko API)

This repository contains a simple backend script written in **TypeScript** and Node.js to demonstrate interaction with external crypto APIs and showcase type safety.

## Goal

* Demonstrate proficiency in modern **TypeScript** and its configuration (`tsconfig.json`).
* Use the `axios` library to asynchronously fetch real-time crypto price data from the CoinGecko API.
* Implement a structured, type-safe approach to handling external API responses.

## Functionality (`src/index.ts`)

The script fetches the current USD prices for Bitcoin, Ethereum, Solana, and Chainlink (configurable in the `CRYPTO_IDS` array) and prints the formatted results to the console.

## Tech Stack

* **Language:** TypeScript
* **Runtime:** Node.js
* **API:** CoinGecko Simple Price API
* **Libraries:** `axios` (for HTTP requests), `ts-node` (for development/running).

## Installation and Running

To run this project locally, you must have Node.js and npm installed.

```bash
# Clone the repository
git clone [https://github.com/KZMKBL/typescript-crypto-price-checker.git](https://github.com/KZMKBL/typescript-crypto-price-checker.git)
cd typescript-crypto-price-checker

# Install dependencies (TypeScript, ts-node, axios)
npm install

# Run the script directly using ts-node
npm start

# Compile the TypeScript to JavaScript (optional)
npm run build
