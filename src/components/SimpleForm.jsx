import React, { Component } from 'react'

export default class SimpleForm extends Component {
    state = { }

    handleChange = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    }

    render() {
        console.log(this.state)
        return (
            <form>
                <input name="firstName" onChange={this.handleChange} />
                <input name="lastName" onChange={this.handleChange} />
            </form>
        )
    }
}
