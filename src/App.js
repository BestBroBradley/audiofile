import React from 'react';
import Welcome from './pages/welcome'
import { AppWrapper } from './style'

function App() {
  return (
    <AppWrapper>
    <div className="App">
      <Welcome/>
      <header className="App-header">
        Welcome to Audiofile!
      </header>
    </div>
    </AppWrapper>
  );
}

export default App;
