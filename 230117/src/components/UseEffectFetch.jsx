import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import ProfileCompoenent from './ProfileCompoenent';


export default function UseEffectFetch() {
    const [dataArr, setDataArr] =useState([]); //초기값 빈 배열로 설정해야 함

    async function fetchData() {   //axios 요청을 함수로 따로 빼야 함
        const resFetch = await axios.get('http://localhost:4000');

        if(resFetch.status !== 200) return alert('통신에러') //예외처리

        const data = resFetch.data;
        setDataArr(data);

        console.log(data);
    }

    useEffect(()=>{
        fetchData(); 
    },[]);

  return (
    <div>
        {dataArr.map((el, index)=>{
            return (
            <ProfileCompoenent key={index}name={el.name} age={el.age} nickName={el.nickName} />
            )
        })}
    </div>
  )
}
