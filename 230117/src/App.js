import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Board from './components/Board';
import BoardDetail from './components/BoardDetail';
import FancyBorder from './components/FancyBorder';
import Header from './components/Header';
import Image from './components/Image';
import InlineCss from './components/InlineCss';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import StyledApp from './components/StyledApp';
// import TestCss from './components/TestCss';
import TestStyled from './components/TestStyled';
import UseEffectFetch from './components/UseEffectFetch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );

  //props.child
  //        <FancyBorder color="orange">
  //       <h1>Hello props.children</h1>
  //       <span>이건 유용합니다!</span> *
  //      <TestCss />
  //     </FancyBorder>
  // h1태그, span 태그가 props.children(보통 html 구조를 보냄), props(데이터를 보냄)
}

export default App;
