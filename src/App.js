import React, { Component } from 'react'
import Header from './components/Header'
import P from './components/P'
import './App.css';

class App extends Component {
  state = {
    miau: 'Welcome to miau'
  }

  changeStateText = () => {
    this.setState({ miau: 'Hello World!'})
  }
  handleClick = text => {
    console.log(text)
  }
  render() {
    const { miau } = this.state
    const text = 'Welcome miau'
    const guau = 'Welcome guau'
    return (
      <div className="App">
          <Header miau={miau} handleClick={this.handleClick} />
          <P onClick={this.changeStateText}>
            { miau }  
          </P>         
      </div>
    )
  }
}

export default App;
