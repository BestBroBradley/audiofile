import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <>
        <h1>Audiofile</h1>
        <button><Link to="/signin"><h2>Sign In</h2></Link></button>
        <button><Link to="/signup"><h2>Sign Up</h2></Link></button>
        </>
    )
}

export default Landing