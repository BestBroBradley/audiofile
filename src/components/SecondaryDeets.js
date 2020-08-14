import React from 'react'

const SecondaryDeets = (props) => {

    const items = props.items

    return (
        <div>
            {items.map(item=> item.toUpperCase())}
        </div>
    )
}

export default SecondaryDeets