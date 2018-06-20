import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VirtualServiceComponent from './components/VirtualServiceComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Devtio Canary</h1>
        </header>

        <VirtualServiceComponent />
        
      </div>
    );
  }
}

export default App;
