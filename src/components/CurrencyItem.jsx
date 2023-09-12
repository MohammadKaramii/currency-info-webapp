import React from 'react';
import { Link } from 'react-router-dom';

const CurrencyItem = ({ code, name }) => {
  return (
    <div>
      <Link to={`/currency/${code}`}>{name}</Link>
    </div>
  );
};

export default CurrencyItem;