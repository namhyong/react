import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

export default function TestUseEffect() {
   const [count,setCount] = useState(0);
   const [text, setText]= useState('입력하세요!')
    const inputValue = useRef();

   const onButtonClick = () =>{
    console.log('🛡️ 버튼 클릭')
    setCount(count+1)

   }

   const onInputChange = () =>{ 
    console.log('🎮 키입력')
    setText(inputValue.current.value)       // state로 리랜더링 되기 때문에 실행
   }
   useEffect(()=>{
    console.log('🐶 랜더링 될 때 마다 실행')    //usEffect의 첫번째 조건 redering 될때마다 실행
   })

    useEffect(()=>{
    console.log('⚒️ 마운트 될때만 실행')    //빈 배열이기 때문에 의존성 배열 값이 바뀌는 경우가 없어서 처음 마운트 될때만 실행 됨
   },[])

   useEffect(()=>{
    console.log('🎧버튼 클릭시에만 실행') // 처음 마운트 될때와,[count]가 들어왔기 때문에 count 값의 변경이 생겼을때만 실행 됨
   },[count])

   useEffect(()=>{
    console.log('🎹키 입력시에만 실행') //처음 마운트 될때와,[text]가 들어왔기 때문에 text 값의 변경이 생겼을때만 실행 됨
   },[text])

   useEffect(()=>{
    console.log('📱키 입력, 버튼 클릭 때 모두 실행')  //배열의 형태이기 때문에 한번에 실행 가능
},[text,count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={onButtonClick}>+1버튼</button>
        <br/>
        <h1>{text}</h1>
        <input ref={inputValue} onChange={onInputChange}/>
    </div>
  )
}
