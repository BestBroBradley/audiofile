import React, { useContext } from 'react'
import AcctContext from '../utils/AcctContext'

function ScreenOne() {

    const {userDetails, setDetails, handleChange} = useContext(AcctContext)

    console.log(userDetails)

    return(
        <div>
            <h1>First off, let's choose a username and password:</h1>
            <input type='text' value={userDetails.username} name="username" onChange={handleChange}></input>
            <input placeholder='password'></input>
            <input placeholder='confirm password'></input>
        </div>
    )
}

export default ScreenOne