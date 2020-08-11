import React, {useContext} from 'react'
import UserContext from '../utils/UserContext'
import { Link } from 'react-router-dom'
import { NavWrapper } from '../style.js'

function Navbar() {

    const {userState, setUser} = useContext(UserContext)

    const logOut = () => {
        setUser({...userState, loggedin: false})
        console.log(userState)
    }

    return (
        <div>
            <NavWrapper>
                <Link to="/library">
                <img alt="logo"/>
                </Link>
                <nav>
                    <ul className="nav-links">
                        <Link to="/library" className="link"><li>My Library</li></Link>
                        <Link to="/search" className="link"><li>Album Search</li></Link>
                        <Link to="/stores" className="link"><li>Store Finder</li></Link>
                        <Link to="/about" className="link"><li>About</li></Link>
                        <Link to="/basics" className="link"><li>Guide to Vinyl</li></Link>
                    </ul>
                </nav>
                <Link to="/">
                <button onClick={logOut}>
                    Sign Out
                </button>
                </Link>
            </NavWrapper>
        </div>
    )
}

export default Navbar