import React from 'react';
import { useState } from 'react';

export default function Ex2() {
  const [condition, setCondition] = useState(1);

  return (
    <div>
      <span>{condition}</span>
      <button onClick={() => setCondition(condition + 1)}>
        {condition > 10 ? '😎' : '👍'}
      </button>
    </div>
  );
}
