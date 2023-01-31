import Contact from './Contact';
import { Provider, useState } from 'react';
import { createStore } from 'redux';
export default function App() {
  function reducer(state = [], action) {
    if (action.type == 'ADD') {
      return [...state, action.payload];
    }
    return state;
  }
  const store = createStore(reducer);

  return (
    <Provider>
      <Contact />
    </Provider>
  );
}

//store에 있는 state에 접근 할 캄포넌트 상단에 provider로 묶어 줘야 한다.
