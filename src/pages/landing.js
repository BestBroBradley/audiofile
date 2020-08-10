import React from 'react'
import { Link } from 'react-router-dom'
import Library from './my-library'
import Welcome from './welcome'

function Landing(props) {
    console.log(props)

    const loggedIn = props.userState.loggedin

    return (
        <>
        {loggedIn ? <Library/> : <Welcome/>}
        </>
    )
}

export default Landing