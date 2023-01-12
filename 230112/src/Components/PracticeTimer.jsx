import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react'

export default function PracticeTimer() {
    const [render,setRender] = useState(false)
    const time = useRef(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            time.current += 1
            console.log(time.current)
        },1000);
        return(()=>{
            clearInterval(timer)
        })
    },[]) //마운트 될때 한번만 실행하기 위해서 [] 사용 만약, 사용하지 않으면 계속 새롭게 실행됨

  return (
    <div>
        <h1>{time.current}</h1>
        <button onClick={()=>setRender(!render)}>시간</button>
    </div>
  )
}
