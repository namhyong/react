import React, { useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { create, done } from '../store/modules/todo';




export default function TodoList() {
    
    const inputRef = useRef();
    //store폴더의 modules폴더의 todo.js의 list로 접근
    const todoList = useSelector((state)=>state.todo.list).filter((el)=> el.done === false)

    const nextID = useSelector((state)=> state.todo.nextID)
    
    const dispatch = useDispatch();

    return (
    <section>
        <h1> 할 일 목록</h1>
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={()=> {
                dispatch(create({id:nextID, text: inputRef.current.value}))
                inputRef.current.value=''
            }}>추가</button>
        </div>
        <ul>
            {todoList.map((el)=>{
                return <li key={el.id}> {el.text} <button onClick={()=>{
                    dispatch(done(el.id)) //버튼 마다 id가 보내질 준비가 되어있는 버튼이 생성되는 형태
                }}>완료</button></li> 
            })}
        </ul>
    </section>
  )
}
