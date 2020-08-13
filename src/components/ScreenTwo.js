import React, { useContext } from 'react'
import AcctContext from '../utils/AcctContext'

function ScreenTwo(props) {

    const { userDetails, handleCheck } = useContext(AcctContext)
    const { title, artist, genre, tracks, date, condition, comments, rating, albumlength, composer, rarity, price } = userDetails



    return(
        <div>
            <h1>Next, choose which details you consider most important for the items in your library.</h1>
            <h2>Don't worry, you'll be able to pick and choose further for each album.</h2>
            <input checked={title ? "checked" : null} type="checkbox" name="title" value={title} onChange={handleCheck}/><label htmlFor="title">Title</label>
            <input checked={artist ? "checked" : null} type="checkbox" name="artist" value={artist} onChange={handleCheck}/><label htmlFor="artist">Artist</label>
            <input checked={genre ? "checked" : null} type="checkbox" name="genre" value={genre} onChange={handleCheck}/><label htmlFor="genre">Genre</label>
            <input checked={tracks ? "checked" : null} type="checkbox" name="tracks" value={tracks}onChange={handleCheck}/><label htmlFor="tracks">Track Listing</label>
            <input checked={date ? "checked" : null}type="checkbox" name="date" value={date} onChange={handleCheck}/><label htmlFor="date">Release Date</label>
            <input checked={condition ? "checked" : null}type="checkbox" name="condition" value={condition} onChange={handleCheck}/><label htmlFor="condition">Condition</label>
            <input checked={comments ? "checked" : null}type="checkbox" name="comments" value={comments} onChange={handleCheck}/><label htmlFor="comments">Personal Comments</label>
            <input checked={rating ? "checked" : null} type="checkbox" name="rating" value={rating} onChange={handleCheck}/><label htmlFor="rating">Rating</label>
            <input checked={albumlength ? "checked" : null} type="checkbox" name="albumlength" value={albumlength} onChange={handleCheck}/><label htmlFor="length">Album Length</label>
            <input checked={composer ? "checked" : null} type="checkbox" name="composer" value={composer} onChange={handleCheck}/><label htmlFor="composer">Composer</label>
            <input checked={rarity ? "checked" : null} type="checkbox" name="rarity" value={rarity} onChange={handleCheck}/><label htmlFor="rarity">Rarity</label>
            <input checked={price ? "checked" : null} type="checkbox" name="price" value={price} onChange={handleCheck}/><label htmlFor="price">Purchase Price</label>
        </div>
    )
}

export default ScreenTwo