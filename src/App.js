import React, { Component } from 'react';
import './App.css';
import Books from './Books';

class App extends Component {
  render() {
    return (
      <div className="App">
      This is the App for your books:
        <Books />
      </div>
    );
  }
}

export default App;
