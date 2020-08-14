import React, { useContext, useState } from 'react';
import UserContext from '../utils/UserContext'
import PrimaryDeets from '../components/PrimaryDeets'
import SecondaryDeets from '../components/SecondaryDeets'
import TitleSearch from '../components/TitleSearch'

function Search() {

const [ search, setSearch ] = useState({
  title: "",
  artist: "",
  genre: ""
})

const handleChange = (event) => {
    const { name, value } = event.target
    setSearch({...search, [name]:value})
}

const { userState } = useContext(UserContext)

const { options } = userState
const main = []
const additional = []

for (const item in options) {
    if (options[item] === true) {
        main.push(item)
    } else {
      additional.push(item)
    }
}

console.log(search.title)

    return (
      <div>
        <header>
            Album Search
        </header>
        <TitleSearch search={search} handleChange={handleChange}/>
        <PrimaryDeets items={main}/>
        <SecondaryDeets items={additional}/>
      </div>
    );
  }
  
  export default Search;