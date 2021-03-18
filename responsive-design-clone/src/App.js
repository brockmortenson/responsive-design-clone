import { Component } from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Welcome from './Components/Welcome';
import './App.css';

function App() {

    return(
      <div className='App'>
        <div className='header-container'>
          <Header />
          <Nav />
        </div>
        <Welcome />
      </div>
    )
}

export default App;
