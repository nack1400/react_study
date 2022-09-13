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


### 3. State Hook 사용하기

Hook과 함수 컴포넌트
```javascript
const Example = (props) => {
  // 여기서 Hook을 사용할 수 있습니다!
  return <div />;
}
function Example(props) {
  // 여기서 Hook을 사용할 수 있습니다!
  return <div />;
}
```
- 함수 컴포넌트는 state가 없는 컴포넌트
- 하지만 Hook은 state를 함수 안에서 사용할 수 있게 해준다
- Hook은 클래스 안에서 동작하지 않는다

state 변수 선언하기
```javascript
import React, { useState } from 'react';

function Example() {
  // 새로운 state 변수를 선언하고, 이것을 count라 부르겠습니다.
  const [count, setCount] = useState(0);
```
- state 변수를 선언, 위에서는 count
- useState는 클래스 컴포넌트의 this.state와 동일

state 가져오기
```javascript
// 클래스 컴포넌트 방식
<p>You clicked {this.state.count} times</p>
// 함수 컴포넌트 방식
<p>You clicked {count} times</p>
```

state 갱신하기
```javascript
// 클래스 컴포넌트 방식
<button onClick={() => this.setState({ count: this.state.count + 1 })}>
  Click me
</button>
// 함수 컴포넌트 방식
<button onClick={() => setCount(count + 1)}>
  Click me
</button>
```


### 4. Effect Hook 사용하기

- [기본 예시](hook\src\01intro.js)
- useEffect는 class 생명주기 메서드의 componentDidMount와 componentDidUpdate, componentWillUnmount가 합쳐진 것과 비슷
- Side-Effect를 처리하기 위해 사용
- Side-Effect : 함수가 실행되면서 함수 외부에 존재하는 값이나 상태를 변경시키는 등의 행위

정리(Clean-up)를 이용하지 않는 Effects
```javascript
// 클래스 생명주기 메서드
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

// Hook을 사용한 동일한 예시
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
- useEffect를 컴포넌트 안에서 불러내는 이유 : useEffect를 컴포넌트 내부에 둠으로써 effect를 통해 count state 변수(또는 그 어떤 prop에도)에 접근할 수 있음
- useEffect는 기본적으로 첫번째 렌더링과 이후의 모든 업데이트에서 수행

정리(clean-up)를 이용하는 Effects
- 구독(subscription)을 설정해야 하는 경우
- Clean-up 함수 : Component의 unmount이전 / update직전에 어떠한 작업을 수행하고 싶다면 Clean-up 함수를 반환
- re-render -> 이전 effect clean-up -> effect
```javascript
// 클래스 생명주기 메서드
class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return 'Loading...';
    }
    return this.state.isOnline ? 'Online' : 'Offline';
  }
}

// Hook을 사용한 동일한 예시
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // effect 이후에 어떻게 정리(clean-up)할 것인지 표시합니다.
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

effect를 이용하는 팁
- 관심사 분리 : Multiple Effect
```javascript
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);

  // 여러개를 만들어서 사용, 코드가 무엇을 하는지에 따라 나눔
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  // ...
}
```
- effect가 업데이트 시마다 실행 : 버그가 적은 컴포넌트를 만들기 위해
- useEffect가 기본적으로 업데이트를 다루기 때문에 더는 업데이트를 위한 특별한 코드가 필요 없다

### 5. Hook의 규칙
1. 최상위(at the Top Level)에서만 Hook을 호출
  반복문, 조건문 혹은 중첩된 함수 내에서 Hook을 호출 X
2. 오직 React 함수 내에서 Hook을 호출
  Hook을 일반적인 JavaScript 함수에서 호출 X

ESLint 플러그인
- 위의 두 가지 규칙을 강제하는 플러그인
- npm install eslint-plugin-react-hooks --save-dev
- 기본적으로 Create React App에 포함되어 있음

3. 한 컴포넌트 내에서 State나 Effect Hook을 여러 개 사용할 수 있다
  그렇다면 React는 어떻게 특정 state가 어떤 useState 호출에 해당하는지 알 수 있을까? React가 Hook이 호출되는 순서에 의존
```javascript
function Form() {
// 1. name이라는 state 변수를 사용하세요.
const [name, setName] = useState('Mary');

// 2. Effect를 사용해 폼 데이터를 저장하세요.
useEffect(function persistForm() {
  localStorage.setItem('formData', name);
});

// 3. surname이라는 state 변수를 사용하세요.
const [surname, setSurname] = useState('Poppins');

// 4. Effect를 사용해서 제목을 업데이트합니다.
useEffect(function updateTitle() {
  document.title = name + ' ' + surname;
});

// ...
}

// 첫 번째 렌더링
// ------------
useState('Mary')           // 1. 'Mary'라는 name state 변수를 선언합니다.
useEffect(persistForm)     // 2. 폼 데이터를 저장하기 위한 effect를 추가합니다.
useState('Poppins')        // 3. 'Poppins'라는 surname state 변수를 선언합니다.
useEffect(updateTitle)     // 4. 제목을 업데이트하기 위한 effect를 추가합니다.

// -------------
// 두 번째 렌더링
// -------------
useState('Mary')           // 1. name state 변수를 읽습니다.(인자는 무시됩니다)
useEffect(persistForm)     // 2. 폼 데이터를 저장하기 위한 effect가 대체됩니다.
useState('Poppins')        // 3. surname state 변수를 읽습니다.(인자는 무시됩니다)
useEffect(updateTitle)     // 4. 제목을 업데이트하기 위한 effect가 대체됩니다.

// ...
```

### 6. 자신만의 Hook 만들기

기존 Hook
```javascript
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  // 비슷한 로직을 복사하여 사용
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
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

import React, { useState, useEffect } from 'react';

function FriendListItem(props) {
  // 비슷한 로직을 복사하여 사용
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

사용자 정의 Hook 추출하기
```javascript
import { useState, useEffect } from 'react';

// 사용자 정의 Hook - useFriendStatus
// use로 시작하여 한 눈에 Hook인지 파악
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

사용자 정의 Hook 사용하기
```javascript
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```
- 사용자 정의 Hook으로 추출하여 위와 동일한 코드 작성
- use로 시작하는 사용자 정의 Hook
- 같은 Hook을 사용하는 두 개의 컴포넌트 안의 state와 effect는 완전히 독립적
