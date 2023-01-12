import React from 'react'
import { useRef } from 'react'

export default function ColorInput() {
    const ChangeColor = useRef()
    const inputEl = useRef()
    function ChangeBtn () {
        console.log( inputEl.current.value)
        ChangeColor.current.style.backgroundColor = inputEl.current.value;
    }
    return (
    
    <div ref ={ChangeColor}>
        <input ref={inputEl}/>
        <br />
        <button onClick={ChangeBtn} >색 적용</button>
    </div>
  )
}
