import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import headshot from './Jordan_Final_Headshot.jpg';
import './App.css';
import { createGlobalStyle } from "styled-components";
import NavBar from "./components/NavBar";

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Global />
        <NavBar />
        <header className="App-header">
          <img src={headshot} className="App-logo" alt="logo" />
          <p>
            Welcome to Jordan's Portfolio
          </p>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
