import React, { Component } from 'react'

export default class Ex10 extends Component {
  render() {
    const{text, valid} = this.props.obj
    if(text){
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={()=>{console.log(valid)}}>콘솔메세지</button> 
      </div>
    )
    }
    else{
      return(
        <div>
      <h1> 이건 기본 text props입니다.</h1>
      <button onClick={()=>{console.log(valid)}}>콘솔메세지</button> 
        </div>
      )
    }
  }
}

