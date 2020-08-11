import React from 'react'

const UserContext = React.createContext({
    loggedin: true,
    username: "Test",
    password: "password",
    library: [],
    wishlist: [],
    stores: []
})

export default UserContext