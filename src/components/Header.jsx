import React, { Component } from 'react'
import logo from '../logo.svg';

const styles = {
    header: {
        backgroundColor: '#282c34',
        minHeight: '25vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
    }
}
export default class Header extends Component {
    handleClick = () => {
        const { handleClick, miau} = this.props
        handleClick(miau)
    }
    render() {
        const { miau, handleClick } = this.props
        return (
            <header style={ styles.header }>
                <img onClick={this.handleClick} src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{miau}</h1>
            </header>
        )
    }
}