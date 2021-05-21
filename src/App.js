import Container from 'react-bootstrap/Container';
import BTNavbar from './components/BTNavbar';
import Router from './components/Router';

const App = () => {
  return (
    <>
    <BTNavbar />
    <Container>
      <Router path={window.location.pathname}></Router>
    </Container>
    </>
  );
}

export default App;