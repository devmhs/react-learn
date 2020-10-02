import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import AGINav from './components/AGINav';

function App() {
  return (
    <>
      <Router>
        <AGINav />
        <Routes />
      </Router>
    </>
  );
}

export default App;
