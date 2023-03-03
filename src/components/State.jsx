import React, { Component } from 'react'

export class State extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeState() {
        if (this.state.message === "Welcome Visitor") {
            this.setState({
                message: "Welcome Hammad"
            })
        } else {
            this.setState({
                message: "Welcome Visitor"
            })
        }
    }
    render() {

        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => { this.changeState() }}>Subscribe</button>
            </div>
        )
    }
}

export default State
