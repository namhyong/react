import { useState } from 'react';
function Ex1() {
  const [number, setNumber] = useState(0);
  function plusNumber() {
    setNumber(number + 1);
  }
  function minusNumber() {
    setNumber(number - 1);
  }

  return (
    <div>
      <span>{number}</span>
      <br />
      <button onClick={() => plusNumber()}>+</button>
      <button onClick={() => minusNumber()}>-</button>
      <button onClick={() => setNumber(number + 1)}>++</button>
      <button onClick={() => setNumber(number - 1)}>--</button>
    </div>
  );
}

export default Ex1;
