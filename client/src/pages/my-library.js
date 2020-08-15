import React, { useContext } from 'react';
import UserContext from '../utils/UserContext'
import CardContainer from "../components/CardContainer"

function Library() {

  const {userState} = useContext(UserContext)
  const library = userState.library
  console.log(library)

  return (
      <div>
        <header>
            Welcome back, {userState.username}!
            <h1>Your Collection</h1>
            <input placeholder="search"/>
            <button>Search</button>
            <h2>By...</h2>
            <button>Album</button>
            <button>Artist</button>
            <button>Genre</button>
            <button>Date Acquired</button>
            {library.map(item => 
              <CardContainer key={item.title} item={item}/>)}
        </header>
      </div>
    );
  }
  
  export default Library;