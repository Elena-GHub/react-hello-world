import React, { Component } from 'react'
import SimpleForm from './components/SimpleForm'

class App extends Component {
  constructor() {
    super()
    // GET, POST, PUT, PATCH, DELETE
    // fetch('http://jsonplaceholder.typicode.com/users')
    // .then(x => x.json())
    // .then(x => console.log(x))
    fetch('http://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'applicaton/json'
      },
      body: JSON.stringify({
        name: 'Pepe Lomo',
        username: 'Pepito',
      })
    }).then(x => x.json())
    .then(x => console.log(x))
  }
  render() {
    return (
      <div className="App">
        < SimpleForm />       
      </div>
    )
  }
}

export default App;
