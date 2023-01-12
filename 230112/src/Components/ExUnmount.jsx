import React from 'react'
import { useState } from 'react'
import PracticeTimer from './PracticeTimer';

export default function ExUnmount() {
    const [see,setSee] =useState('false');
  return (
    <div>
        {see &&<PracticeTimer />}
        <button onClick={()=>setSee(!see)}>{see ? '숨기기':'보이기'}</button>
    </div>
  )
}
