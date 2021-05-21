import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

    return (
        <Row>
            <Col><h1>Hello From React</h1></Col>
            <Col xs={6}><h1>Hello From React</h1></Col>
            <Col><h1>Hello From React</h1></Col>
        </Row>
    )
}

export default Home;