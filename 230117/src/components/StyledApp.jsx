import React from 'react'
import logo from '../logo.svg';
import App from '../App';
import styled, { keyframes } from 'styled-components'


export default function StyledApp() {
    const RootDiv = styled.div `        //style.바꾸고 싶은 태그
        text-align:center;   
    `
    
    const AppHeader = styled.header `
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
    `
    const spin = keyframes`
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    `
    const AppLogo  = styled.img `
        height: 40vmin;
        pointer-events: none;
        animation: ${spin} infinite 20s linear; //백틱에서 변수를 불러오기 위해 달러 중괄호 사용
    `
    const MyA = styled.a`
        color: #61dafb;   
    `

  return (
    <RootDiv>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <MyA
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </MyA>
    </AppHeader>
  </RootDiv>
  )
}
