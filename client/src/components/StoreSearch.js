import React, { useState } from 'react'
import API from '../utils/API'

const StoreSearch = (props) => {

    const { results, setResults } = props

    const [search, setSearch] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        type: ""
    })

    const { input1, input2, input3, input4, type } = search

    const handleChange = (event) => {
        const { name, value } = event.target
        setSearch({ ...search, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearch({...search, type: event.target.name})
        switch (type) {
            case "store":
                setResults(API.yelpSearch({type, term: input1}))
                break;

            case "locale":
                setResults(API.yelpSearch({type, term: input2}))
                break;

            case "both":
                setResults(API.yelpSearch({type, term: [input3, input4]}))
            break;
            default:
                break;
        }

        setResults(API.yelpSearch())

    }

    return (
        <>
            <h2>Search by...</h2>
            <h3>Store name: </h3>
            <input name="input1" value={search.input1} type="text" onChange={handleChange} />
            <button name="store" onClick={handleSubmit}>Search</button>
            <h3>Zip code: </h3>
            <input name="input2" value={search.input2} type="text" onChange={handleChange} />
            <button name="locale" onClick={handleSubmit}>Search</button>
            <h3>Name and zip: </h3>
            <input name="input3" value={search.input3} onChange={handleChange} type="text" />
            <input name="input4" value={search.input4} onChange={handleChange} type="text" />
            <button name="both" onClick={handleSubmit}>Search</button>
        </>
    )
}

export default StoreSearch