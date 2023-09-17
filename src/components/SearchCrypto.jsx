import React from "react";

const SearchCrypto = ({ query, search }) => {
  

  
  
  return (
    <div className="input-group mx-2 w-75" dir="ltr">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: '#bd93f9'}}
      >
        <i className="fas fa-search" />
      </span>
      <input
        dir="ltr"
        type="text"
        value={query.text}
        onChange={search}
        className="form-control"
        placeholder="Search Crypto"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default SearchCrypto;