import React, { useState } from 'react'

export default function Ex14() {

const [info,setInfo] = useState([{name:"codee",email:"codee@gmail.com"},
{name:"윤소희", email:"ysh@gamil.com"}])
const [name,setName] = useState("") //input의 값이 변경될때마다 value값이 name에 저장됨
const [email,setEmail] = useState("") //input의 값이 변경될때마다 value값이 email에 저장됨
//info.concat을 사용하면 뒤에 적은 정보가 추가된 배열로 info가 새로 만들어 진다. (배열.concat 배열 뒤에서만 사용 가능)

  return (
    <div>
        <input type="text"name="name" placeholder='이름' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text"name="eamil" placeholder='이메일' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <button type='button' onClick={()=>{
            setInfo(info.concat({name:name, email:email}))
            setName('') //버튼을 누르면  rerendering 되면서 빈값으로 name,email 파트를 빈값으로 바꿔줌(이 코드가 없을때는 state이기 때문에 값이 남아 있음)
            setEmail('')
            }}>버튼</button>
        {info.map((el,i)=> <h2 key={i}>{el.name}:{el.email}</h2>)}

    </div>
  )
}

