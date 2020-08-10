import React, {useState, setState, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
  loggedin: false,
  username: "Test User",
  password: "password",
  library: [],
  wishlist: [],
  stores: []
})

  return (
    <Router>
      <SiteWrapper>
          <Navbar />
          <Switch>
          <Route path="/" exact userState={userState} component={Landing}/>
          <Route path="/welcome" component={Welcome}/>
          <Route path="/library" component={Library}/>
          <Route path="/search" component={Search}/>
          <Route path="/stores" component={Stores}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/about" component={About}/>
          <Route path="/basics" component={Guide}/>
          </Switch>
      </SiteWrapper>
    </Router>
  );
}

export default App;
