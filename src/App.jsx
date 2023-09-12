import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CurrencyList from './components/CurrencyList';

const Home = () => (
  <div>
    <h1>Welcome to the Currency App</h1>
    <Link to="/currencies">View Currencies</Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currencies" element={<CurrencyList />} />
      </Routes>
    </Router>
  );
};

export default App;