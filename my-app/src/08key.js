import React from "react";

function ListItem(props) {
  // 여기에는 key를 지정할 필요가 없습니다.
  return <li>{props.value}</li>;
}

function NumberList2(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // 배열 안에 key를 지정해야 합니다.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default NumberList2;


// // key 예시
// // 식별할 수 있는 value의 문자열로 key를 사용
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li key={number.toString()}>
//     {number}
//   </li>
// );

// // id로 key를 사용
// const todoItems = todos.map((todo) =>
//   <li key={todo.id}>
//     {todo.text}
//   </li>
// );

// // key를 인덱스로 사용할 수도 있으나 성능이 저하되거나 컴포넌트 state와 관련한 문제가 생길 수 있음
// // 그러므로 따로 지정해주는 것이 좋음
// const todoItems2 = todos.map((todo, index) =>
//   // 인덱스를 키로, 추천하지 않음
//   <li key={index}>
//     {todo.text}
//   </li>
// );