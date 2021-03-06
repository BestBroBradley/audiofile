import React, { useContext } from 'react'
import AcctContext from '../utils/AcctContext'

function ScreenOne() {

    const {userDetails, handleChange} = useContext(AcctContext)

    console.log(userDetails)

    return(
        <div>
            <h1>First off, let's choose a username and password:</h1>
            <input type='text' value={userDetails.username} name="username" onChange={handleChange}></input>
            <h4>username</h4>
            <br/>
            <input type='password' value={userDetails.password} name="password" onChange={handleChange}></input>
            <h4>password</h4>
            <br/>
            <input type='password' value={userDetails.confirm} name="confirm" onChange={handleChange}></input>
            <h4>confirm password</h4>
            <br/>
        </div>
    )
}

export default ScreenOne