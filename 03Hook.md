## Hook

### 1. Hook 소개
- hook 함수 - [useState 예시](hook\src\index.js)

Hook의 특징
- 선택적 사용, 기존 코드 다시 작성없이 적용 가능, 이전 버전과 100% 호환성
- React 컨셉을 유지

Hook을 만든 이유
- 컴포넌트 사이에서 상태 로직을 재사용하기 어려움 : 계층의 변화 없이 상태 관련 로직을 재사용할 수 있도록 도와줌
- 복잡한 컴포넌트들을 이해하기 어려움 : Hook을 통해 서로 비슷한 것을 하는 작은 함수의 묶음으로 컴포넌트를 나누는 방법을 사용할 수 있음(구독 설정 및 데이터를 불러오는 것과 같은 로직)
- Class는 사람과 기계를 혼동시킨다 : Hook은 Class없이 React 기능들을 사용하는 방법을 제시

점진적 적용 전략
- React로부터 Class를 제거할 계획은 없다
- 미래에도 계속 Class 컴포넌트들을 지원할 예정
- Hook은 존재하는 코드와 함께 나란히 작동

### 2. Hook의 개요

State Hook
```javascript
import React, { useState } from 'react';

function Example() {
  // "count"라는 새 상태 변수를 선언합니다
  const [count, setCount] = useState(0); // 초기값 0을 넣어준 것

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
- 여기서 useState가 바로 Hook이다
- 현재의 state 값과 이 값을 업데이트하는 함수를 쌍으로 제공
- class의 this.setState와 유사하지만 이전 state와 새로운 state를 합지지 않는다는 차이점  

여러 state 변수 선언하지
```javascript
function ExampleWithManyStates() {
  // 상태 변수를 여러 개 선언했습니다!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

Hook이란?
- 함수 컴포넌트에서 React state와 생명주기 기능을 연동할 수 있게 해주는 함수
- class없이 react를 사용할 수 있게

Effect Hook(useEffect)
- React 컴포넌트 안에서 데이터를 가져오거나 구독하고 DOM을 직접 조작하는 작업 = side effects
- useEffect는 함수 컴포넌트 내에서 이런 side effects를 수행할 수 있게 해준다
- 아래 예시는 React가 DOM을 업데이트한 뒤에 문서의 타이틀을 바꾸는 컴포넌트

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷합니다
  useEffect(() => {
    // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
- useEffect를 사용하면, React는 DOM을 바꾼 뒤에 effect 함수를 실행한다
- Effects는 컴포넌트안에 선언되어있기 때문에 props와 state에 접근할 수 있다
- 기본적으로 React는 매 랜더링 이후에 effects를 실행한다
- Effect를 해제할 필요가 있다면 해제하는 함수를 반환하면 된다
```javascript
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

Hook 사용 규칙
- 최상위에서만 Hook을 호출, 반복문, 조건문, 중첩된 함수 내에서 실행하지 말 것
- React 함수 컴포넌트 내에서만 Hook을 호출, 일반 Javascript 함수에서는 호출해서는 안됨


