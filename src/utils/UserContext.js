import React from 'react'

const UserContext = React.createContext({
    loggedin: false,
    username: "Test",
    password: "password",
    options: {},
    library: [],
    wishlist: [],
    stores: []
})

export default UserContext