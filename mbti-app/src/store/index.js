// 리덕스 통합 관리
import { combineReducers } from 'redux';
import todo from './modules/todo';
import mbti from './modules/mbti';

//여러개의 state를 combine 하여 export 하는 형태
export default combineReducers({
  todo,
  mbti,
});
