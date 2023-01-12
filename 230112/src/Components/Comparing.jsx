import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

export default function Comparing() {
    const [countState,setCountState] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;

    const [render,setRender] = useState(false);

    const countUpState = () =>{                 //값이 바로 유지되면서 랜더링되기 때문에 바로 반영
        setCountState(countState + 1);
        console.log('state:', countState)
    }
    const countUpRef = () =>{
        countRef.current = countRef.current + 1;    //값이 유지되지만, 랜더링이 되지 않기 때문에 리랜더링 후 반영 
        console.log('Ref:', countRef.current)
    }
    const countUpVar = () =>{
        countVar += 1;
        console.log('Variable:', countVar)          //리랜더링 되면 값이 날라가고 값이 유지 되지 않음
    }
    const reRender = () =>{
        setRender(!render)
    }
    return (
    <div>
        <h1>State: {countState}</h1>    
        <h1>Ref: {countRef.current}</h1>
        <h1>Variable: {countVar}</h1>
        <br />
        <button onClick={countUpState}>State UP</button>
        <button onClick={countUpRef}>Ref UP</button>
        <button onClick={countUpVar}>Variable UP</button>
        <button onClick={reRender}>Rendering</button>

    </div>
  )
}
