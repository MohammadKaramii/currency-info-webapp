import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingIndicator from './LoadingIndicator';
import ErrorHandling from './ErrorHandling';

const CurrencyList = () => {
  const navigate = useNavigate();
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch currency data');
        setLoading(false);
        console.error(error);
      }
    };

    fetchCurrencies();
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchCurrencies();
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return (
      <ErrorHandling errorMessage={error} onRetry={handleRetry} onGoBack={handleGoBack} />
    );
  }

  return (
    <div>
      <h1>Currency List</h1>
      <ul>
        {currencies
          .filter((currency) => currency.type_is_crypto === 1 && currency.price_usd)
          .map((currency) => (
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