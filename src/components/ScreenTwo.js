import React, { useContext } from 'react'
import AcctContext from '../utils/AcctContext'

function ScreenTwo(props) {

    const { userDetails, handleCheck } = useContext(AcctContext)

    return(
        <div>
            <h1>Next, choose which details you consider most important for the items in your library.</h1>
            <h2>Don't worry, you'll be able to pick and choose further for each album.</h2>
            <input checked="checked" type="checkbox" name="title" value={userDetails.title} onChange={handleCheck}/><label htmlFor="title">Title</label>
            <input checked="checked" type="checkbox" name="artist" value={userDetails.artist} onChange={handleCheck}/><label htmlFor="artist">Artist</label>
            <input checked="checked" type="checkbox" name="genre" value={userDetails.genre} onChange={handleCheck}/><label htmlFor="genre">Genre</label>
            <input type="checkbox" name="tracks" value={userDetails.tracks}onChange={handleCheck}/><label htmlFor="tracks">Track Listing</label>
            <input type="checkbox" name="date" value={userDetails.date} onChange={handleCheck}/><label htmlFor="date">Release Date</label>
            <input type="checkbox" name="condition" value={userDetails.condition} onChange={handleCheck}/><label htmlFor="condition">Condition</label>
            <input type="checkbox" name="comments" value={userDetails.comments} onChange={handleCheck}/><label htmlFor="comments">Personal Comments</label>
            <input type="checkbox" name="rating" value={userDetails.rating} onChange={handleCheck}/><label htmlFor="rating">Rating</label>
            <input type="checkbox" name="albumlength" value={userDetails.albumlength} onChange={handleCheck}/><label htmlFor="length">Album Length</label>
            <input type="checkbox" name="composer" value={userDetails.composer} onChange={handleCheck}/><label htmlFor="composer">Composer</label>
            <input type="checkbox" name="rarity" value={userDetails.rarity} onChange={handleCheck}/><label htmlFor="rarity">Rarity</label>
            <input type="checkbox" name="price" value={userDetails.price} onChange={handleCheck}/><label htmlFor="price">Purchase Price</label>
        </div>
    )
}

export default ScreenTwo