import React from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'; // Assuming you choose to use Recharts for the price history graph

const CurrencyDetails = ({ currencies }) => {
    const { code } = useParams(); // Get the currency code from the URL params
  
    // Find the currency with the matching code
    const currency = currencies.find((c) => c.code === code);
  
    if (!currency) {
      return <div>Currency not found</div>;
    }
  
    // Define sample price history data (replace with actual data)
    const priceHistoryData = [
      { date: '2021-01-01', price: 100 },
      { date: '2021-01-02', price: 120 },
      // ...
    ];
  
    return (
      <div>
        <h2>{currency.name}</h2>
        <p>Code: {currency.code}</p>
  
        <h3>Price History</h3>
        <LineChart width={500} height={300} data={priceHistoryData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      </div>
    );
  };
  
  export default CurrencyDetails;