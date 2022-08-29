import React from "react";

function NumberList(props) {
  const numbers = props.numbers;
  // 각 리스트에 key를 할당
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>
      {number}
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default NumberList;
