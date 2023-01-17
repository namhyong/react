import React from 'react'
import styled from 'styled-components'  //styled 컴포넌트 임포트

export default function TestStyled() {

    //css 문법으로 사용
    const MyDiv = styled.div `
    background-color: orange;   
    `
    
    const Myheading = styled.h1 `
    color:blue;
    `
    const MySpan  = styled.span `
    background-color:pink;
    font-weight: 700;
    `
  return (
    <MyDiv> 
        <Myheading>h1 태그</Myheading>
            <MySpan>span 태그</MySpan>
        
    </MyDiv>
  )
  }
