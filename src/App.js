import React, { Component } from 'react';
import logo from './images/logo_osogu.png';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to OSOGU</h1>
        </header>
        <p className="App-intro">
          React Site Demo
        </p>
      </div>
    );
  }
}

export default App;
