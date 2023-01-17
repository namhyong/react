import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Test() {
    const weight = useSelector((state)=>state) //받아온 state를 그대로 return 하여 weight로 들어가는 형태
    const dispatch = useDispatch();
    return (
    <>
        <h1>당신의 몸무게는 {weight} 입니다.</h1>
        <button onClick={()=>{dispatch({type:'증가'})}}>살 찌기</button>
        <button onClick={()=>{dispatch({type:'감소'})}}>살 빼기</button>
    </>
    
  )
}
