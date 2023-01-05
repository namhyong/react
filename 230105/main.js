// // @ts-check

// const str = 'hello!';
// const num = Math.log(str);
// console.log(num);

//전개연산자

const arr = [1, 2, 3, 4, 5];
console.log(arr);

const copyArr = arr; //값이 카피 되는 것이 아니라 메모리주소가 카피 된다.
console.log(copyArr);

console.log(arr === copyArr);

//원본 arr를 카피하여 copy arr를 만들면 원본이 바뀔때 copyarr이 바뀌는 경우가 생김 따라서 값만 가져오고 싶을때가 있다
//이때 전개 연산자를 사용한다.

function foo(a, b, c, d, e, f, g) {}
//는 아래와 같이 쓸 수 있다.
function foo(a, b, ...rest) {
  rest = { c: 'dd', d: 'dd' };
}

const copyArr1 = [...arr];
console.log(copyArr);

console.log(arr === copyArr1);

const obj = {
  pororo: '뽀로로',
  lupy: '루피',
  crong: '크롱',
};

const copyObj2 = { ...obj, lupy: 'lupy' }; //모든 키값을 가져오고 변경하고 싶은 키의 값만 바꿔 줌
console.log(copyObj2);
const copyObj = obj;

console.log(obj);
console.log(copyObj);
console.log(obj === copyObj);
