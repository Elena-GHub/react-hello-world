import React, { Component } from 'react'
import Header from './components/Header'
import './App.css';

class App extends Component {
  handleClick = () => {
    console.log('I have been clicked!')
  }
  render() {
    const miau = 'Welcome miau'
    return (
      <div className="App">
          <Header miau={miau} handleClick={this.handleClick} />
          <h3 className="App-intro">
            Hello, World!
          </h3>
      </div>
    )
  }
}

export default App;
