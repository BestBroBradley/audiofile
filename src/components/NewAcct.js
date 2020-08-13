import React, { useState, setState } from 'react'
import AcctContext from '../utils/AcctContext'
import ScreenOne from "./ScreenOne"
import ScreenTwo from "./ScreenTwo"

function NewAcct() {

    const [userDetails, setDetails] = useState({
        username: "",
        password: "",
        confirm: "",
        title: true,
        artist: true,
        genre: true,
        tracks: false,
        date: false,
        condition: false,
        comments: false,
        rating: false,
        albumlength: false,
        composer: false,
        rarity: false,
        price: false
    })

    const [state, setState] = useState({
        current: 0
    })

    const {username, password, confirm } = userDetails

    const next = () => {
        if (username !== "" && password !== "" && confirm !== "" && password === confirm) {
            let current = state.current
            current += 1
            if (current === 3) {
                current = 0
            }
            setState({ ...state, "current": current })
        } else if (username === "") {
            alert("Username cannot be blank")
        } else if (password === "" || confirm === "")  {
            alert("Password areas cannot be left blank.")            
        } else if (password !== confirm) {
            alert("Password and confirmation do not match.")
        }
    }

    const back = () => {
        let current = state.current
        current -= 1
        if (current === -1) {
            current = 2
        }
        setState({ ...state, "current": current })
    }

    const handleChange = (event) => {
        const { value, name } = event.target
        console.log(name)
        console.log(value)
        setDetails({ ...userDetails, [name]: value })
    }

    const handleCheck = (event) => {
        const { name, value } = event.target
        console.log(value)
        if (userDetails[name]) {
            setDetails({ ...userDetails, [name]: false })
            console.log("Hit true")
        } else {
            setDetails({ ...userDetails, [name]: true })
            console.log("Hit false")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Submitted!")
    }

    const displayScreen = () => {
        switch (state.current) {
            case 0:
                return (
                    <>
                        <h1>We're happy you're here!</h1>
                        <div className="interior">
                            <ScreenOne />
                        </div>
                        <button onClick={next}>Next</button>
                    </>
                );

            case 1:
                return (
                    <>
                        <div className="interior">
                            <ScreenTwo />
                        </div>
                        <button onClick={back}>Back</button>
                        <button onClick={handleSubmit}>Submit</button>
                    </>
                );
            default:
                break;
        }
    }

    return (
        <AcctContext.Provider value={{ userDetails, setDetails, handleCheck, handleChange }}>
            <div className="carousel">
                {displayScreen()}
            </div>
        </AcctContext.Provider>
    )
}

export default NewAcct