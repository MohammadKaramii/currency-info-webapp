import React, { useState, useEffect } from 'react';

const CurrencyList = () => {
  const [currencies, setCurrencies] = useState([]);
 

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
         'https://rest.coinapi.io/v1/assets', {
          
            headers: {
              'X-CoinAPI-Key': '89131833-4CB7-40D8-9BDB-590BC71BC9F8',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch currencies');
        }

        const data = await response.json();
        setCurrencies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCurrencies();
  }, []);




  console.log(currencies);
  return (
    <div>
      <h1>Currency List</h1>
      <ul>
      {currencies.filter((currency) => ( currency.type_is_crypto === 1 && currency.price_usd)).map((currency) => (
          <li key={currency.asset_id}>
            <h3>{currency.asset_id}</h3>
            <p>Name: {currency.name}</p>
            <p>Price (USD): {currency.price_usd}</p>
          </li>
        ))}
      </ul>

   
    </div>
  );
};

export default CurrencyList;