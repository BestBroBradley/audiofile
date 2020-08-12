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
        length: false,
        composer: false,
        rarity: false
    })

    const [state, setState] = useState({
        current: 0
    })

    const screenArray = [1, 2, 3]

    const next = () => {
        let current = state.current
        current += 1
        if (current === 3) {
            current = 0
        }
        setState({...state, "current": current})
    }

    const back = () => {
        let current = state.current
        current -= 1
        if (current === -1) {
            current = 2
        }
        setState({...state, "current": current})
    }

    const handleChange = (event) => {
        const { value, name } = event.target
        console.log(name)
        console.log(value)
        setDetails({...userDetails, [name]: value})
    }

    const handleCheck = (event) => {
        console.log(event.target)
    }

    return (
        <AcctContext.Provider value={{userDetails, setDetails, handleCheck, handleChange}}>
        <div className="carousel">
            <div className="interior">
                <ScreenTwo current={screenArray[state.current]}/>
            </div>
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </div>
        </AcctContext.Provider>
    )
}

export default NewAcct