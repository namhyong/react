import React from 'react'

import Ex10 from './Ex10'
import img from '../cat.jpg';

export default function Ex9(props) {

    
  return (
    <div style={{backgroundColor: props.obj.backgroundColor}}>
      <h1 style={{color:props.obj.fontColor}}>{props.obj.title}</h1>
      <img src = {img} alt="그림"/>
      <h1> {props.obj.maintext}</h1>
      <h3>저자:{props.obj.writer}</h3>
      <h3>판매가:{props.obj.price}원</h3>
      <h3>구분:{props.obj.col}</h3>

    </div>
  )
}

