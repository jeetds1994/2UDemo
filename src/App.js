import React, { Component } from 'react';
import NavBar from './NavBar/NavBar'
import Homepage from './Homepage/Homepage'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Homepage />
      </div>
    );
  }
}

export default App;
