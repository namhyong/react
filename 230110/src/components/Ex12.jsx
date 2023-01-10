
import React from 'react'
import { useState } from 'react'

export default function Ex11() {
    const [number, setNumber] = useState(0);
    function increase() {
        setNumber(number + 1);
        
    }
    function decrease() {
        setNumber(number -2 )
    }
  return (
    <div> 
        <span>{number}</span>
    < br />
    <button onClick={()=> increase()}>increase+1</button>
    <button onClick={()=> decrease()}>decrease-2</button>
    </div>
  )
}
