import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserContext from './utils/UserContext'
import Landing from './pages/landing'
import Welcome from './pages/welcome'
import About from './pages/about'
import Guide from './pages/guide'
import Library from './pages/my-library'
import Search from './pages/search'
import Signin from './pages/signin'
import Stores from './pages/stores'
import Signup from './pages/signup'
import Navbar from './components/Navbar'

import { SiteWrapper } from './style'

function App() {

  const [userState, setUser] = useState({
    loggedin: true,
    username: "Test User",
    password: "password",
    options: { title: true,
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
      price: false},
    library: [{ title: "Born in the USA", artist: "Bruce Springsteen", genre: "rock" },
    { title: "Jazzman", artist: "Carole King", genre: "folk" }, { title: "Meteora", artist: "Linkin Park", genre: "hip hop/rock" }],
    wishlist: [],
    stores: []
  })

  return (
    <Router>
      <SiteWrapper>
        <UserContext.Provider value={{ userState, setUser }}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/library" component={Library} />
            <Route path="/search" component={Search} />
            <Route path="/stores" component={Stores} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/about" component={About} />
            <Route path="/basics" component={Guide} />
          </Switch>
        </UserContext.Provider>
      </SiteWrapper>
    </Router>
  );
}

export default App;
