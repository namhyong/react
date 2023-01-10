import React from 'react'
import { useState } from 'react'

export default function Ex13() {
    const [state, setState] = useState("Hello World!")
  return (
    <div>
        <span>{state}</span>< br />
        <button onClick={()=>setState("Goodbye World!")}>클릭</button>
    </div>
  )
}
