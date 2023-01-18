import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';

export default function BoardDetail() {
  const {boardID} = useParams(); //구조 분해 할당
    //console.log(params);
  return (
    <>
    <Header />
    <h2> {boardID}번 글입니다.</h2>
    </>
  )
}
//App.js에서 params가(/:) boardID로 설정되어 있기 때문에  useParams를 쓰게 되면,
//boardID가 키,값으로 저장되어 넘어오고 구조분해 할당을 안하면, boardID.boardID가 되고
//구조분해 할당을 하게 되면, boardID가 된다.