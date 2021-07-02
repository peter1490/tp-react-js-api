import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const HomeCryptoCards = ({ cryptos }) => {
    return (
        <>
            {cryptos.map((crypto, key) => (
                <Card style={{ width: '18rem' }} key={"crypto-" + key}>
                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                    <Card.Body>
                        <a href="#"><Card.Title>{crypto.name}</Card.Title></a>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Price: {Math.round(crypto.quote.USD.price * 100) / 100}$</ListGroupItem>
                        <ListGroupItem>Price Change 24H: {Math.round(crypto.quote.USD.percent_change_24h * 100) / 100}%</ListGroupItem>
                        <ListGroupItem>Market Cap: {Math.floor(crypto.quote.USD.market_cap / 1000000)}M</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        {crypto.news.filter((article, idx) => idx < 5).map((article, key) => (
                            <Card.Link style={{ overflow: 'hidden', textOverflow: 'ellipsis' }} href={article.url} key={crypto.slug + "-news-" + key}>{article.title}</Card.Link>
                        ))}
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default HomeCryptoCards;