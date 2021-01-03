import React, { Component } from 'react'
import Header from './components/Header'
import './App.css';

class App extends Component {
  handleClick = text => {
    console.log(text)
  }
  render() {
    const miau = 'Welcome miau'
    const guau = 'Welcome guau'
    return (
      <div className="App">
          <Header miau={miau} handleClick={this.handleClick} />
          <Header miau={guau} handleClick={this.handleClick} />
          <h3 className="App-intro">
            Hello, World!
          </h3>
      </div>
    )
  }
}

export default App;
