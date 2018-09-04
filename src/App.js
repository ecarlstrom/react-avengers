import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import animals from './animalsData.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: animals
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: by Evan Carlstrom</h1>
          <h3 className = 'app-info'>Reused animals info, could not find Avengers data.</h3>
        </header>
        <div>
          {this.state.animals.map(a => (
            <div key = {a.species}>
              <p>
                Name: {a.name} Species: {a.species}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
