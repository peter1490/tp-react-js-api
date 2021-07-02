import Carousel from 'react-bootstrap/Carousel';
const HomeCarousel = ({ articles }) => {
    return (
        <Carousel>
            {articles.map((article, key) => (
                <Carousel.Item key={"news-" + key.toString()}>
                    <img
                        className="d-block w-100"
                        src={article.urlToImage}
                        style={{ height: '35rem', width: '100%' }}
                        alt={"Image of" + article.title}
                    />
                    <Carousel.Caption>
                        <h3 style={{ textShadow: '2px 2px #646464' }}>{article.title}</h3>
                        <p style={{ textShadow: '1px 1px #646464' }}>{article.description}</p>
                        <a href={article.url}>
                            Go to article...
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default HomeCarousel;