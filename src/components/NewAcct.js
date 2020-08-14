import React, { useState, useContext } from 'react'
import AcctContext from '../utils/AcctContext'
import UserContext from '../utils/UserContext'
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

    const { userState, setUser } = useContext(UserContext)

    const { username, password, confirm } = userDetails

    const { title, artist, genre, tracks, date, condition, comments, rating, albumlength, composer, price, rarity } = userDetails

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
        } else if (password === "" || confirm === "") {
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
        setDetails({ ...userDetails, [name]: value })
    }

    const handleCheck = (event) => {
        const { name } = event.target
        if (userDetails[name]) {
            setDetails({ ...userDetails, [name]: false })
        } else {
            setDetails({ ...userDetails, [name]: true })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newUser = {
            username, password, options: {
                title,
                artist,
                genre,
                tracks,
                date,
                condition,
                comments,
                rating,
                albumlength,
                composer,
                rarity,
                price
            }, library: [], wishlist: [], stores: []
        }
        setUser({...userState, ...newUser, password: ""})
        console.log(newUser)
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