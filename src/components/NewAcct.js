import React, { useState, setState } from 'react'
import Screen from "./Screen"

function NewAcct() {

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

    return (
        <div className="carousel">
            <div className="interior">
                <Screen current={screenArray[state.current]}/>
            </div>
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default NewAcct