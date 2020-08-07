import React, { useState, setState } from 'react'
import Screen from "./Screen"

function NewAcct() {

    const [state, setState] = useState({
        current: 0
    })

    const screenArray = [1, 2, 3]

    const next = () => {
        console.log(state.current)
        let current = state.current
        current += 1
        if (current === 3) {
            current = 0
        }
        console.log(current)
        setState({...state, "current": current})
        console.log(state)
    }

    return (
        <div className="carousel">
            <div className="interior">
                <Screen current={screenArray[state.current]}/>
            </div>
            <button onClick={next}>Back</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default NewAcct