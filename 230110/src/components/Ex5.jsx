import React from 'react'
import '../App.css';

export default function Ex5() {
   const title = 'Hello World'
  return (
    <div >
        <div className='test'>
            {title} <br />
        </div>
        아이디: <input className='input' /> <br />
        비밀번호: <input className='input' />
    </div>
  )
}
