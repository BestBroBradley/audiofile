import React from 'react'

const AcctContext = React.createContext({
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

export default AcctContext