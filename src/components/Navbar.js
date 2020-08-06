import React from 'react'
import { Link } from 'react-router-dom'
import { NavWrapper } from '../style.js'

function Navbar() {
    return (
        <div>
            <NavWrapper>
                <img alt="logo"/>
                <nav>
                    <ul className="nav-links">
                        <Link to="/library" ><li>My Library</li></Link>
                        <Link to="/search"><li>Album Search</li></Link>
                        <Link to="/stores"><li>Store Finder</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/basics"><li>Guide to Vinyl</li></Link>
                    </ul>
                </nav>
                <Link to="/">
                <button>
                    Sign Out
                </button>
                </Link>
            </NavWrapper>
        </div>
    )
}

export default Navbar