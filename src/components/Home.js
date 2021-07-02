import { useState, useEffect } from 'react';
import HomeCarousel from './HomeCarousel';
import HomeCryptoCards from './HomeCryptoCards';
import Row from 'react-bootstrap/Row';

const Home = () => {

    const [HeadlineArticles, setHeadlineArticles] = useState([])
    const [cryptos, setCryptos] = useState([])

    useEffect(() => {
        const fetchNews = async (query, reqType, callback) => {
            return await fetch(`https://newsapi.org/v2/${reqType}?sortBy=relevancy&q=${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.articles != undefined) {
                        return callback(data.articles)
                    }else{
                        callback([])
                    }
                })
        };
        fetchNews("crypto", "top-headlines", setHeadlineArticles);

        const fetchBestCryptos = async (callback, cryptosNum = 5) => {
            fetch(`https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`, {
                origin: 'http://localhost:3000/',
                headers:{
                    'Accept': 'application/json',
                    'X-CMC_PRO_API_KEY': '5c3862b0-b2e2-4c43-bc7b-a06e1d03d8b2'
                }
            })
            .then((response) => response.json())
            .then(async (data) => {
                let cryptos = []
                cryptosNum = cryptosNum > data.data.length ? data.data.length : cryptosNum
                for (let i=0; i<cryptosNum; i++){
                    cryptos.push(data.data[i])
                    cryptos[i].news = await fetchNews(`${cryptos[i].name}%20AND%20crypto`, "everything", (data) => {
                        return data
                    })
                }
                callback(cryptos)
            })
        };

        fetchBestCryptos(setCryptos)
    }, []);
    return (
        <>
            <HomeCarousel articles={HeadlineArticles} />
            <Row>
                <HomeCryptoCards cryptos={cryptos} />
            </Row>
        </>
    )
}

export default Home;