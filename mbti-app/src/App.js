import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Start from './components/Start';
import { useSelector } from 'react-redux';
import Mbti from './components/Mbti';
import Show from './components/Show';

function App() {
  const Main = styled.main`
    box-sizing: border-box;
    width: 100%;
    max-width: 500px;
    padding: 0 35px;
    margin: auto;
    text-align: center;
  `;
  const page = useSelector((state) => state.mbti.page);
  const survey = useSelector((state) => state.mbti.survey);
  return (
    <>
      <GlobalStyle />
      <Main>
        {page === 0 ? (
          <Start />
        ) : page !== survey.length + 1 ? (
          <Mbti />
        ) : (
          <Show />
        )}
      </Main>
    </>
  );
}

export default App;
