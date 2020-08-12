import React from 'react'

const AcctContext = React.createContext({
    username: "",
    password: "",
    title: true,
    artist: true,
    genre: true,
    tracks: false,
    date: false,
    condition: false,
    comments: false,
    rating: false,
    length: false,
    composer: false
})

export default AcctContext