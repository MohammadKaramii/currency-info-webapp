import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CryptoList from './components/CryptoList';
import CryptoDetails from './components/CryptoDetails';
import axios from 'axios';

const Home = () => (
  <div>
    <h1>Welcome to the Currency App</h1>
    <Link to="/currencies">View Currencies</Link>
  </div>
);

const App = () => {

  const [cryptoList, setCryptoList] = useState([]);
  useEffect(() => {
    const fetchCryptoes = async () => {
        try{
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1');
        
        setCryptoList(response.data)
        } catch(err){
            console.error(err);
    }
};

fetchCryptoes();    
}, []);
  
  
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/currencies" element={<CryptoList cryptoes={cryptoList}/>} />
          <Route path="/crypto/:symbol" element={ <CryptoDetails cryptoes={cryptoList} />}>
          </Route>
        </Routes>
      </Router>
    
  );
};

export default App;