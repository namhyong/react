import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const weight = 100;

function reducer(state = weight, action) {
  //state=weight  => state 값이 없으면 weight 값으로 해라 (js 문법)
  if (action.type === '증가') {
    state += 1;
    return state;
  } else if (action.type === '감소') {
    state -= 1;
    return state;
  } else {
    return state;
  }
  // 따라서 weight 를 리턴해주는 역할
}

let store = createStore(reducer); //어떤 컴포넌트에서도 weight 값을 불러 올 수 있는 세팅을 마친 상태

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
