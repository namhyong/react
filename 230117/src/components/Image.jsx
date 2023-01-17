import React from 'react'
// import catImg from "../../public/images/cat.jpg" 
// npx create-react-app으로 리액트를 하면 바로 public 폴더가 src로 설정되어있음 따라서 위와 같이 쓸 필요 없음
import catImg from '../cat.jpg' //src 폴더에 있는 경우 사용 가능

export default function Image() {
  return (
    <>
    <img src="/images/cat.jpg" alt="고양이"/>
    <img src={catImg} alt="고양이"/>
    </>
  )
}
