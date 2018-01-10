import React, { Component } from 'react';
import logo from './images/logo_old.jpg';
import './App.css';
import './../node_modules/uikit/src/js/uikit.min.js'

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Shotokan Karate Organisation</h1>
        </header>

        <p uk-margin>
            <a class="uk-button uk-button-default" href="#">Link</a>
            <button class="uk-button uk-button-default">Button</button>
            <button class="uk-button uk-button-default" disabled>Disabled</button>
        </p>

        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
