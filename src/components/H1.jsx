import React, { Component } from 'react'

const style = {
    fontSize: '1.5em'
}

export default class H1 extends Component {
    render() {
        return (
            <h {...this.props} style={style} />
        )
    }
}