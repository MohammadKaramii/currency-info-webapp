import React, {  useState, useMemo } from "react";
import SearchCrypto from "./SearchCrypto"
import { Link } from "react-router-dom";

const CryptoList = ({cryptoes}) => {

    const [query, setQuery] = useState("");
    
    const cryptoSearch = (e) => {
        setQuery(e.target.value);
      };
      
      const filteredCrypto = useMemo(() => {
        return cryptoes.filter((crypto) => {
          return crypto.name.toLowerCase().includes(query.toLowerCase());
        });
      }, [cryptoes, query]);
  
  
      console.log(filteredCrypto);

return (
<div>
    <div>
        <SearchCrypto query={query} search={cryptoSearch} />
    </div>
    <h1>Crypto List</h1>
    <ul>
        {filteredCrypto.length > 0 ? (filteredCrypto.map((crypto) => (
          <li key={crypto.id}>
        <img src={crypto.image} alt={crypto.name} title={crypto.name} /> 
        <Link to={`/crypto/${crypto.symbol}`}> {crypto.name} </Link>
        <p>{crypto.current_price}</p>
        </li>
        ))) : (      <div
            className="text-center py-5"
            style={{ backgroundColor: "#44475a" }}
          >
            <p className="h3" style={{ color: "#ffb86c" }}>
              Crypto not found...
            </p>
          </div>)}
    </ul>
</div>
  );
};

export default CryptoList;