import PropTypes from 'prop-types'
import Home from "./Home"
import CryptoInfo from "./CryptoInfo"

const routes = { "/": <Home />, "/cryptoInfo": <CryptoInfo /> };

const Router = ({ path }) => {
    const route = path in routes ? routes[path] : <Home />;
    return (
        route
    )
}

Router.defaultProps = {
    path: '/',
}

Router.propTypes = {
    path: PropTypes.string,
}

export default Router;