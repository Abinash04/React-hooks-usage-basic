import React, { Component } from 'react'

export default class lifeCycleClassComponents extends Component {
    constructor (props) {
        super(props)

        this.state = {
            count: 0
        }
    }

  componenetDidMount() {
    document.title = `Button not clicked yet!`
  }
  componentDidUpdate() {
    document.title = `Button clicked ${this.state.count} times`
  }
  componentDidUnMount() {
    document.title = `Button destroyed!`
  }

  render() {
    return (
      <div>
        <button onClick={ ()=> this.setState({ count: this.state.count + 1})}>{this.state.count}</button>
      </div>
    )
  }
}
