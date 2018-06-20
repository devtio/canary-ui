import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import VirtualServiceComponent from './components/VirtualServiceComponent';
import HomeComponent from './components/HomeComponent';
import Navbar from './widgets/Navbar';
import Sidebar from './widgets/Sidebar';
import { URL } from './constants';

class App extends Component {
  render() {
    const path = window.location.pathname;
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar 
              path={path}
            />
            <Sidebar
              path={path}
            />
            <div className="container-fluid container-cards-pf container-pf-nav-pf-vertical nav-pf-persistent-secondary">
              <Route exact path="/" component={HomeComponent}/>
              <Route path={`/${URL.VIRTUAL_SERVICES}`} component={VirtualServiceComponent}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
