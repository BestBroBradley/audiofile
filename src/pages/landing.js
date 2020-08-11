import React from 'react'
import UserContext from '../utils/UserContext'
import Library from './my-library'
import Welcome from './welcome'

function Landing() {

    const { userState } = useContext(UserContext)

    console.log(userState)

    return (
        <>
        {loggedIn ? <Library/> : <Welcome/>}
        </>
    )
}

export default Landing