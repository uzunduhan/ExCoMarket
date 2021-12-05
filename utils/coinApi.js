const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h'

export const fetchCoinMarket= async ()=>{
     return await fetch(API_URL)
        .then(res => res.json())
}
