const initState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추의 요정이 말합니다! 척추 펴기!',
      done: false,
    },
    {
      id: 2,
      text: '취업 하기',
      done: false,
    },
  ],
};

let counts = initState.list.length;
initState['nextID'] = counts; //nextID 라는 key에 배열의 길이 값을 넣어줌

//액션 타입 정의하기
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

//액션 생성 함수 설정
export function create(payload) {
  //필요할때 부르는 것이기 때문에 default는 아님
  return {
    type: CREATE,
    payload, //component에서 redux에 데이터를 보낼때 데이터가 payload에 담김
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}

// 리듀서
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state, // ...state를 사용하면 기존 배열 객체등을 모두다 return해줌
        //push는 배열의 length를 return하기 때문에 배열 자체를 return하고 싶으면, concat을 사용해야 한다.
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        //다음 배열에 올 id 이기 때문에 +1 을 해주고 이것을 TodoList.js 의 map함수 key로 사용한다
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default: //default로 return하는 것은 기존 배열이고, CREATE 일때나 DONE일 때 새롭게 추가된 배열을 return하는 형태
      return state;
  }
}
