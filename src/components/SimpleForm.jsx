import React, { Component } from 'react'
import P from './P'

const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'This field is compulsory'
    }
    if (!values.lastName) {
        errors.lastName = 'This field is compulsory'
    }
    return errors
}
export default class SimpleForm extends Component {
    state = {
        errors: {}
    }

    handleChange = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    }
    handleSubmit = e => {
        e.preventDefault()
        const { errors, ...noErrors} = this.state
        const result = validate(noErrors)
        
        this.setState({ errors: result })
        if (!Object.keys(result).length) {
            // Send form!!
            console.log('Valid form')
            e.target.reset()
        }
    }

    render() {
        const { errors } = this.state
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="firstName" onChange={this.handleChange} />
                {errors.firstName && <P>{ errors.firstName }</P>}
                <input name="lastName" onChange={this.handleChange} />
                {errors.lastName && <P>{ errors.lastName }</P>}
                <input type="submit" value="Send" />
            </form>
        )
    }
}
