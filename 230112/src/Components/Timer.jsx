import React from 'react'
import { useEffect } from 'react'

export default function Timer() {
    useEffect(()=>{
       const timer = setInterval(()=>{
            console.log('타이머 실행 중')
        },1000);

        return(()=>{
            clearInterval(timer)    // return 내부에 함수가 실행되어 setInterval 멈추는 코드
        })
    },[]);


    return (
    <div><h1>타이머가 실행 중 입니다</h1></div>
  )
}
