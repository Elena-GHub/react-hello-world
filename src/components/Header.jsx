import React, { Component } from 'react'
import logo from '../logo.svg';
import H1 from './H1'

const styles = {
    header: ({ backgroundColor }) => ({
        backgroundColor,
        minHeight: '25vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
    })
}
export default class Header extends Component {
    state = {
        backgroundColor: '#282c34',
    }
    changeHeaderColor = () => {
        this.setState({ backgroundColor: '#008000'})
    }
    handleClick = () => {
        const { handleClick, miau} = this.props
        handleClick(miau)
    }
    render() {
        const { miau, handleClick } = this.props
        const { backgroundColor } = this.state
        return (
            <header onClick={this.changeHeaderColor} style={ styles.header({ backgroundColor }) }>
                <img onClick={this.handleClick} src={logo} className="App-logo" alt="logo" />
                <H1>{miau}</H1>
            </header>
        )
    }
}