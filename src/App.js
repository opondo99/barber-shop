import React from 'react';
import './App.css';
import Main from './components/main/Main';
import Navigation from './components/navbar/nav';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
