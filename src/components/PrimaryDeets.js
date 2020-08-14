import React from 'react'

const PrimaryDeets = (props) => {

    const items = props.items

    return (
        <div>
            {items.map(item=> item)}
        </div>
    )
}

export default PrimaryDeets