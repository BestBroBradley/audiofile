import React from 'react';
import Welcome from './pages/welcome'
import { AppWrapper, SiteWrapper } from './style'

function App() {
  return (
    <SiteWrapper>
    <AppWrapper>
    <div className="App">
      <Welcome/>
      <header className="App-header">
        Welcome to Audiofile!
      </header>
    </div>
    </AppWrapper>
    </SiteWrapper>
  );
}

export default App;
