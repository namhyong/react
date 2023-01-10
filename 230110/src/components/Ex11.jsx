import React, { Component } from 'react'

export default class Ex11 extends Component {
    state={
        number: 0
    }
  render() {
    const {number} = this.state
    return (
      <div>
        <span>{number}</span><br />

        <button onClick={()=>this.setState({number:number+2})}> +2</button>
        <button onClick={()=>this.setState({number:number-1})}> -1</button>
      </div>
    )
  }
}
