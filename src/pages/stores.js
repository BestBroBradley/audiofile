import React, { setState } from 'react';
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
        </header>
      </div>
    );
  }
  
  export default Stores;