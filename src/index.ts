// src/index.ts
import axios from 'axios';

// Kripto paraların CoinGecko'daki ID'leri
const CRYPTO_IDS = ['ethereum', 'bitcoin', 'solana', 'chainlink'];
const CURRENCY = 'usd';

// CoinGecko API'den dönen verinin tipini tanımlıyoruz
interface PriceData {
    [key: string]: {
        [CURRENCY]: number;
    };
}

/**
 * Belirtilen kripto paraların anlık fiyatlarını CoinGecko'dan çeker.
 */
async function fetchCryptoPrices() {
    console.log(`--- Fetching current crypto prices in ${CURRENCY.toUpperCase()} ---`);
    
    try {
        const idsString = CRYPTO_IDS.join(',');
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${idsString}&vs_currencies=${CURRENCY}`;

        const response = await axios.get<PriceData>(url);
        const data = response.data;
        
        console.log(`\nTimestamp: ${new Date().toISOString()}\n`);

        for (const id of CRYPTO_IDS) {
            const price = data[id]?.[CURRENCY];
            if (price) {
                // Fiyatı formatlayıp konsola yazdır
                console.log(`💰 ${id.toUpperCase().padEnd(10)}: $${price.toFixed(2)}`);
            } else {
                console.log(`❓ ${id.toUpperCase().padEnd(10)}: Price not available.`);
            }
        }
        
    } catch (error) {
        console.error("Error fetching crypto prices. Check API status or network connection.");
        if (axios.isAxiosError(error)) {
            console.error(`Axios Status: ${error.response?.status}`);
        }
    } finally {
        console.log('\n--- Fetch complete ---');
    }
}

fetchCryptoPrices();
