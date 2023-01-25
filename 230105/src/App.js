//import { useState } from 'react';
import './App.css';
import ArrState from './components/ArrState';
import ObjectState from './components/ObjectState';

import Ex2 from './components/Ex2';
// import ClassState from './components/ClassState';
import StateAndVariable from './components/StateAndVariable';

function App() {
  //  const [teacher, setTeacher] = useState('이효석');

  // function inEnglish() {
  //   const spanEl = document.querySelector('.App > span');
  //   // teacher = 'tetz';

  //   spanEl.innerHTML = 'tetz';
  //   // console.log(teacher);
  // }

  // function customSetTeacher(name) {
  //   setTeacher(name);
  //   console.log(teacher);
  // }

  return (
    <div className="App">
      <ArrState/>
    </div>
  );
}

export default App;
