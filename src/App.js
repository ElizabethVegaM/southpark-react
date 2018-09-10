import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div>
        <h1>South Park</h1>
        <div className="container">
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
