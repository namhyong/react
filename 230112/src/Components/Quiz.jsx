import React, { useRef } from 'react'
import { useState } from 'react';
export default function Quiz() {
    const firstRandomNumber = Math.floor(Math.random()*10);
    const secondRandomNumber = Math.floor(Math.random()*10);
    const arithmeticArr = ['+','-','*'];  //사칙연산 배열 3개
    const arithmetic = Math.floor(Math.random()* 3);  //3까지의 숫자가 랜덤으로 선택하게 하는 코드
    
    let answer = 0;
    if (arithmetic === 0) {   //arithmetic에서 랜덤으로 뽑은 인덱스 번호로 +,-,* 일때 각각 계산되는 과정
      answer = firstRandomNumber + secondRandomNumber;
    } else if (arithmetic === 1) {
      answer = firstRandomNumber - secondRandomNumber;
    } else {
      answer = firstRandomNumber * secondRandomNumber;
    }

    const answerInput = useRef()  // input에 입력한 값을 가져오기 위해 ref
    const [again, setAgain] = useState(false); //리랜더링하기 위한 state

    const checkAnswer = () =>{
      if(answer === Number(answerInput.current.value)){ //계산된 값과 input에서 가져온 값 비교
        alert("정답입니다.")
        answerInput.current.value ="";  //input값 비우기
        answerInput.current.focus();  //focus 이동
        setAgain(!again); //무조건 변경 해라 false 였으면 true가 되고, true였으면 false가 되라
      }else{
        alert("다시입력해주세요.")
        answerInput.current.value ="";
        answerInput.current.focus();
      }
    }

return <div>
    <h1>{firstRandomNumber} {arithmeticArr[arithmetic]} {secondRandomNumber}</h1>
    <input ref={answerInput} />
    <button onClick={checkAnswer}>정답제출</button>
</div>
}