import React, { Component } from 'react'
import logo from '../logo.svg';

export default class Header extends Component {
    handleClick = () => {
        const { handleClick, miau} = this.props
        handleClick(miau)
    }
    render() {
        const { miau, handleClick } = this.props
        return (
            <header className="App-header">
                <img onClick={this.handleClick} src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{miau}</h1>
            </header>
        )
    }
}