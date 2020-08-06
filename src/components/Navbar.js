import React from 'react'
import { Link } from 'react-router-dom'
import { NavWrapper } from '../style.js'

function Navbar() {
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
                <button>
                    Sign Out
                </button>
                </Link>
            </NavWrapper>
        </div>
    )
}

export default Navbar