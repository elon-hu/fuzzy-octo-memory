import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get staasdsadrted, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

var content = document.createElement("div");
document.body.appendChild(content);
ReactDOM.render(<App />, content);