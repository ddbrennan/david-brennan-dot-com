import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          <div id="logo"><span id="firstname">DAVID</span><span id="lastname">BRENNAN</span></div>
          <div className="menu-item">About</div>
          <div className="menu-item">Blog</div>
          <div className="menu-item sub-menu">Work
            <div className="drop-down">
              <div className="dropdown-item">Illustration/Design</div>
              <div className="dropdown-item">Web Development</div>
            </div>
          </div>
          <div className="menu-item">Contact Me</div>
        </div>
      </div>
    );
  }
}

export default App;
