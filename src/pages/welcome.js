import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {

  return (
    <div>
      <header className="App-header">
        Welcome to Audiofile!
        <Link to='/signup'><button>Sign Up</button></Link>
        <Link to='/signin'><button>Sign In</button></Link>
      </header>
    </div>
  );
}

export default Welcome;