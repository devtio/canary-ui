import React, { Component } from 'react';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-pf-vertical">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="/" className="navbar-brand" style={{ height: '58px', padding: '20px', fontSize: '20px' }}>
            DEVTIO CANARY
          </a>

        </div>
        <nav className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right navbar-iconic navbar-utility">
            <li className="dropdown">
              <button className="btn btn-link dropdown-toggle nav-item-iconic" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span className="dropdown-title">
                  Documentation <span className="caret"></span>
                </span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><a href="/">0.0.1</a></li>
              </ul>
            </li>
          </ul>
        </nav>

      </nav>

    );
  }

}

