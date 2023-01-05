import React, { useState } from 'react';

export default function Conditon() {
  const [condition, setCondition] = useState(true);
  return (
    <div>
      <button onClick={() => setCondition(!condition)}>컨디션 변경!</button>
      <br />
      <span>{condition ? '👍' : '😂'}</span>
    </div>
  );
}
