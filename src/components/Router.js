import PropTypes from 'prop-types'
import Home from "./Home"

const routes = { "/": <Home /> };

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