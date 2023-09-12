import React, { useState } from 'react';
import CurrencyItem from './CurrencyItem';
import SearchBar from './SearchBar';

const CurrencyList = ({ currencies }) => {
  const [filteredCurrencies, setFilteredCurrencies] = useState(currencies);

  const handleSearch = (query) => {
    const filtered = currencies.filter((currency) =>
      currency.code.includes(query) || currency.name.includes(query)
    );
    setFilteredCurrencies(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {filteredCurrencies.map((currency) => (
        <CurrencyItem
          key={currency.code}
          code={currency.code}
          name={currency.name}
          flag={currency.flag}
        />
      ))}
    </div>
  );
};

export default CurrencyList;