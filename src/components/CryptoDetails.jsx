import { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useParams } from 'react-router-dom';
const CryptoDetails = ({ cryptoes }) => {
    const [loading, setLoading] = useState(true);
    const { symbol } = useParams();
    const currency = cryptoes.find((c) => c.symbol === symbol);

    useEffect(() => {
        const fetchPriceHistory = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/${currency.id}/market_chart?vs_currency=usd&days=30`
                );
                const priceHistory = response.data.prices.map(([timestamp, price]) => ({
                    timestamp: new Date(timestamp).toLocaleDateStringgi(),
                    price,
                }));

                currency.priceHistory = priceHistory;
                console.log(priceHistory);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        if (currency) {
            fetchPriceHistory();
        }
    }, [currency]);

    if (!currency) {
        return <p>Currency not found</p>;
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{currency.name} ({currency.symbol}) Price History</h2>
            <LineChart
                width={1300}
                height={1300}
                data={currency.priceHistory}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default CryptoDetails;