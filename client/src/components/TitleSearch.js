import React from 'react'

const TitleSearch = (props) => {
    
    const handleChange = props.handleChange
    const search = props.search

    const submit = () => {
        alert("searched")
    }

    return (
        <>
        <input value={search.title} onChange={handleChange} name="title" type="text"></input>
        <label forhtml="title">Title Search</label>
        <input value={search.artist} onChange={handleChange} name="artist" type="text"></input>
        <label forhtml="artist">Artist Search</label>
        <button onClick={submit}>Search</button>
        <hr></hr>
        </>
    )
}

export default TitleSearch