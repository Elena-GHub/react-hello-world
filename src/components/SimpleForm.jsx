import React, { Component } from 'react'

export default class SimpleForm extends Component {
    state = { }

    handleChange = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log('Prevented!', this.state)
    }

    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="firstName" onChange={this.handleChange} />
                <input name="lastName" onChange={this.handleChange} />
                <input type="submit" value="Send" />
            </form>
        )
    }
}
