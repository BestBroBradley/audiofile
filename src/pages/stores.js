import React, { useState } from 'react';
import API from '../utils/API'
import StoreSearch from '../components/StoreSearch'

function Stores() {

  const [search, setSearch] = useState({
    type: "store",
    term: ""
  })

  const [results, setResults] = useState({

  })

  const fetchResults = async () => {
    const data = await fetch()
  }

  return (
      <div>
        <header>
          Album Store Search
          <StoreSearch search={search} setSearch={setSearch}/>
        </header>
      </div>
    );
  }
  
  export default Stores;