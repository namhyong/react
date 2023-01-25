import React, { useState } from 'react'
import Item from './Item'

export default function ConditionalRender() {
    const[condition,setCondition] = useState('보여주기')

    const onChange = () =>{
        condition === '보여주기' ? setCondition('감추기') : setCondition('보여주기')
    }
    const ConditionalRender = condition ==='감추기' && <Item /> 
    //감추기라는 글자가 보여야 하는 상황일때 현재 컨디션이 보여주기인 상태이기 때문에 감추기 일때 랜더링 되어야 한다.
  return (
    <>
        {ConditionalRender}
        <button onClick={onChange}>{condition}번</button>
    </>
  )
}
