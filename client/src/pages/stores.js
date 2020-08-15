import React, { useState } from 'react';
import API from '../utils/API'
import StoreSearch from '../components/StoreSearch'

function Stores() {

  const [results, setResults] = useState({

  })

  return (
      <div>
        <header>
          Album Store Search
          <StoreSearch results={results} setResults={setResults}/>
        </header>
      </div>
    );
  }
  
  export default Stores;