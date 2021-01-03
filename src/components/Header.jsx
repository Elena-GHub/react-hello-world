import React, { Component } from 'react'
import logo from '../logo.svg';

export default class Header extends Component {
    render() {
        const { miau, handleClick } = this.props
        return (
            <header className="App-header">
                <img onClick={handleClick} src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{miau}</h1>
            </header>
        )
    }
}