import React, { useState } from 'react'


export default function ChangeObj(props) {

    const [index,setIndex] = useState(0) // 처음으로 가져오는 obj의 인덱스는 0으로 설정
    const obj = props.objArr[index]; //EX5에 있는 객체의 해당 인덱스에 있는 obj를 가져옴
    function changeProfile(){
        if (index === props.objArr.length -1) {
            setIndex(0);
        } else {
            setIndex(index + 1)
        }
    }
    return (
    <div>
    <h1>이름:{obj.name}</h1>    
    <h2>나이:{obj.age}</h2>
    <h2>별명:{obj.nickName}</h2>
    <br />
    <button onClick={changeProfile}> 변경버튼</button>
</div>
)}
