import React, { Component } from 'react';
import headshot from './Jordan_Final_Headshot.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={headshot} className="App-logo" alt="logo" />
          <p>
            Welcome to Jordan's Portfolio
          </p>
        </header>
      </div>
    );
  }
}

export default App;
