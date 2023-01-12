import React, { useState } from 'react'
import Practiceone from './Practiceone'
import Practicetwo from './Practicetwo'

export default function ExConditional() {
    const [condition,setCondition] = useState('1')

    const onChange = () =>{
        condition ==='1번' ? setCondition('2번') : setCondition('1번')
    }
  return (
    <div>
        {condition === '1번' ? (<Practiceone text={condition} />):
        (
            <Practicetwo text={condition} />
        )}
        <button onClick={onChange}>{condition}</button>
    </div>
  )
}
