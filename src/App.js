import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import AGINav from './components/AGINav';
import { UsersProvider } from './hooks/usersContext';

export default function App() {
  return (
    <>
      <UsersProvider>
        <Router>
          <AGINav />
          <Routes />
        </Router>
      </UsersProvider>
    </>
  );
}
