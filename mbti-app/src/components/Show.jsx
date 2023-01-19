import React from 'react'
import styled from 'styled-components'
import OrangeButton from './OrangeButton'
import { useDispatch } from 'react-redux'
import { reset } from '../store/modules/mbti'
import { useSelector } from 'react-redux'


const Header = styled.p`
    font-size: 3em;

`
const Explaination = styled.p`
    font-size: 1.5em;
    color:#777;
`
const Result = styled.p`
    font-size: 3em;
    color:dodgerblue;
`
const Additional = styled.p`
    font-size: 2em;
    color:orange;
`
const AdditionalImg = styled.img`
    width:500px;
    transform: translateX(-35px);
`

export default function Show() {
  const result = useSelector((state)=>state.mbti.mbtiResult) //각 선택에 따라 완성된 mbti 결과로 result 객체로 담음 (mbti.js에서)
  const explaination = useSelector((state)=>state.mbti.explaination[result]) //result 객체를 키로 explainaiton의 값을 찾아옴 (mbti.js에서)
  const dispatch = useDispatch()
    return (
    <>
        <Header>당신의 개발자 MBTI 결과는?</Header>
        <Explaination>{explaination.text}</Explaination>
        <Result>{result}</Result>
        <Additional>이건 재미로 읽어 보세요</Additional>
        <AdditionalImg src={explaination.img}alt="팩폭"/>   
        <OrangeButton text="다시 검사하기" clickEvent={()=>dispatch(reset())}/>
    </>  
    //clickEvent에 걸어둔 dispatch를 통해 mbti.js에서 만들어놓은 reset()함수의 결과를 가져옴
  )
}
