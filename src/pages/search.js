import React, { useContext, useState } from 'react';
import UserContext from '../utils/UserContext'
import Details from '../components/Details'
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

const handleSubmit = () => {
  console.log(search)
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

    return (
      <div>
        <header>
            Album Search
        </header>
        <TitleSearch search={search} handleChange={handleChange}/>
        <Details search={search} handleChange={handleChange} items={main}/>
        <Details search={search} handleChange={handleChange} items={additional}/>
        <button onClick={handleSubmit}>Add to Library</button>
      </div>
    );
  }
  
  export default Search;