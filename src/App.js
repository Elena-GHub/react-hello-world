import React, { Component } from 'react'
import axios from 'axios'
import SimpleForm from './components/SimpleForm'

class App extends Component {
  constructor() {
    super()
    // axios.get('http://jsonplaceholder.typicode.com/users')
    // .then(({ data }) => console.log(data))
    axios.post('http://jsonplaceholder.typicode.com/users', {
      name: 'Pepe Lomo',
      username: 'Elpepe'
    }).then(({ data }) => console.log(data))
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
