const API_URL = 'https://gnews.io/api/v4/search?q=economy&token=a086a2c8c8d372bdce5809d64f3a20d3'

export const fetchNews = async ()=>{
     return await fetch(API_URL)
        .then(res => res.json())
}
