
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Divider } from 'semantic-ui-react';
import './App.css';

import Nav from './components/Nav';
import AppContainer from './components/Container';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>

      <Container className="App">
        <Router>
          <Nav />
          <Divider />
          <AppContainer />
        </Router>
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
