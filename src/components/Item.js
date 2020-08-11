import React from 'react'

const Item = (props) => {
    const item = props.item.item
    console.log(item)
    return (
        <>
            <h1>{item.title}</h1>
            <h2>{item.artist}</h2>
            <h2>{item.genre}</h2>
        </>
    )
}

export default Item