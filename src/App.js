import React, { Component } from 'react';
import logo from './images/LogoStuff2.png';
import './App.css';
import { Button } from 'bulma-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-Right">
          <h2>Welcome to React StuffDevelopers</h2>
        </div>
        </div>
        <p className="App-intro">
          <Button is-primary is-loading>Enter</Button>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
