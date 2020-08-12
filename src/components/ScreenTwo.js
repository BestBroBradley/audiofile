import React, { useContext } from 'react'
import AcctContext from '../utils/AcctContext'

function ScreenTwo(props) {

    const { userDetails, handleCheck } = useContext(AcctContext)

    return(
        <div>
            <h1>Next, choose which details you consider most important for the items in your library.</h1>
            <h2>Don't worry, you'll be able to pick and choose further for each album.</h2>
            <input type="checkbox" name="title" value={userDetails.title}/><label htmlFor="title" onChange={handleCheck}>Title</label>
            <input type="checkbox" name="artist" value="artist"/><label htmlFor="artist">Artist</label>
            <input type="checkbox" name="genre" value="genre"/><label htmlFor="genre">Genre</label>
            <input type="checkbox" name="tracks" value="tracks"/><label htmlFor="tracks">Track Listing</label>
            <input type="checkbox" name="date" value="date"/><label htmlFor="date">Release Date</label>
            <input type="checkbox" name="condition" value="condition"/><label htmlFor="condition">Condition</label>
            <input type="checkbox" name="comments" value="comments"/><label htmlFor="comments">Personal Comments</label>
            <input type="checkbox" name="rating" value="rating"/><label htmlFor="rating">Rating</label>
            <input type="checkbox" name="length" value="length"/><label htmlFor="length">Album Length</label>
            <input type="checkbox" name="composer" value="composer"/><label htmlFor="composer">Composer</label>
            <input type="checkbox" name="rarity" value="rarity"/><label htmlFor="rarity">Rarity</label>
        </div>
    )
}

export default ScreenTwo