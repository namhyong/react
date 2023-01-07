import React from 'react'
import CustomObject from './CustomObject'

export default function CallCustomObj() {
  const pororoObj = {
    name:'뽀로로',
    age:'5',
    nickName:'사고뭉치'
  }

    return (
    <div>
        <CustomObject obj={pororoObj} />
    </div>
  )
}
