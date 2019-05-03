
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import Nav from './components/Nav';
import Container from './components/Container';

function App() {
  return (
    <div className="App" className="ui container">
      <Router>
        <Nav />
        <Container />
      </Router>
    </div>
  );
}

export default App;
