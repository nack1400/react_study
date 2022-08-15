# 리액트 공부 정리 및 테스트 코드
## 설치

### 1. 웹 사이트에 React 추가
[html 코드](test/01index.html) / [js 코드](test/01like_button.js) / [JSX 테스트](test/01test.html)

### 2. 새로운 React 앱 만들기
*리액트 싱글 페이지 앱 my-app 생성  
>npx create-react-app my-app  
>cd my-app  
>npm start  

[my-app 코드](my-app)

### 3. CDN 링크
배포용 버전
```javascript
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
```
crossorigin 속성이 필요한 이유  
>https://unpkg.com 이란 도메인에서 react.js 자바스크립트를 받아오기 때문에 crossorigin 속성을 넣어주면서 다른 도메인이라도 받아올 수 있도록

### 4. 배포 채널
- Latest 채널  
  이미 사용하고 있는 안정적이고 기본적인 채널
- Next 채널  
  React 저장소의 main branch를 추적하는 prerelease 채널
- Experimental 채널  
  실험용 API 및 stable 배포에서는 사용할 수 없는 기능이 포함  
  main branch를 추적하지만, 추가 기능 플래그


## 주요 개념

### 1. Hello World
- [Hello World 테스트 코드](test\02hello.html)

### 2. JSX 소개
JSX란
- JavaScript를 확장한 문법
- JSX는 React “엘리먼트(element)” 를 생성
- 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신, 둘 다 포함하는 “컴포넌트”라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리
- JavaScript 코드 안에서 UI 관련 작업을 할 때 시각적으로 더 도움  
- [개념 정리 및 테스트 코드](test\03JSX.html)

### 3. 엘리먼트 렌더링
- 브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체 그러므로 쉽게 생성 가능
- [렌더링 방법 및 엘리먼트 업데이트 테스트 코드](test\04elemnet_render.html)

### 4. Component와 Props
함수 컴포넌트와 클래스 컴포넌트  
- “props” (props는 속성을 나타내는 데이터입니다) 객체 인자를 받은 후 React 엘리먼트를 반환
- 이러한 컴포넌트는 JavaScript 함수이기 때문에 말 그대로 “함수 컴포넌트”라고 호칭
#####
- 컴포넌트 렌더링  
1. &lt;Welcome name="Sara" /> 엘리먼트로 ReactDOM.render()를 호출합니다.
2. React는 {name: 'Sara'}를 props로 하여 Welcome 컴포넌트를 호출합니다.
3. Welcome 컴포넌트는 결과적으로 &lt;h1&gt;Hello, Sara&lt;h1&gt; 엘리먼트를 반환합니다.
4. React DOM은 &lt;h1&gt;Hello, Sara&lt;h1&gt; 엘리먼트와 일치하도록 DOM을 효율적으로 업데이트합니다.
5. 주의 : 컴포넌트의 이름은 항상 대문자로 시작, React는 소문자로 시작하는 컴포넌트를 DOM 태그로 처리

- 컴포넌트 합성
- 컴포넌트 추출
- [컴포넌트 테스트 코드](test\05component_props.html)

### 5. State와 생명주기
Clock 구현
- 함수에서 클래스로 변환하기
- 클래스에 로컬 State 추가하기
- 생명주기 메서드를 클래스에 추가하기
1. &lt;Clock /&gt;가 ReactDOM.render()로 전달되었을 때 React는 Clock 컴포넌트의 constructor를 호출합니다. Clock이 현재 시각을 표시해야 하기 때문에 현재 시각이 포함된 객체로 this.state를 초기화합니다. 나중에 이 state를 업데이트할 것입니다.
2. React는 Clock 컴포넌트의 render() 메서드를 호출합니다. 이를 통해 React는 화면에 표시되어야 할 내용을 알게 됩니다. 그 다음 React는 Clock의 렌더링 출력값을 일치시키기 위해 DOM을 업데이트합니다.
3. Clock 출력값이 DOM에 삽입되면, React는 componentDidMount() 생명주기 메서드를 호출합니다. 그 안에서 Clock 컴포넌트는 매초 컴포넌트의 tick() 메서드를 호출하기 위한 타이머를 설정하도록 브라우저에 요청합니다.
4. 매초 브라우저가 tick() 메서드를 호출합니다. 그 안에서 Clock 컴포넌트는 setState()에 현재 시각을 포함하는 객체를 호출하면서 UI 업데이트를 진행합니다. setState() 호출 덕분에 React는 state가 변경된 것을 인지하고 화면에 표시될 내용을 알아내기 위해 render() 메서드를 다시 호출합니다. 이 때 render() 메서드 안의 this.state.date가 달라지고 렌더링 출력값은 업데이트된 시각을 포함합니다. React는 이에 따라 DOM을 업데이트합니다.
5. Clock 컴포넌트가 DOM으로부터 한 번이라도 삭제된 적이 있다면 React는 타이머를 멈추기 위해 componentWillUnmount() 생명주기 메서드를 호출합니다.  
#####

State 사용법
1. 직접 state를 수정하지 않는다.
```javascript
// Wrong
this.state.comment = 'Hello';
// Correct
this.setState({comment: 'Hello'});
```
2. state 업데이트는 비동기적일 수 있다.
```javascript
// Wrong, 실패할 수도 있는 코드
this.setState({
  counter: this.state.counter + this.props.increment,
});
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```
3. state 업데이트는 병합된다.
```javascript
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        // setState()호출로 독립적으로 업데이트 가능
        posts: response.posts 
      });
    });

    fetchComments().then(response => {
      this.setState({
        // setState()호출로 독립적으로 업데이트 가능
        comments: response.comments
      });
    });
  }
```

### 6. 이벤트 처리하기
- React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용합니다.
- JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달합니다.
- 자바스크립트에서 함수가 작동하는 방식
```javascript
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```
- 클래스 필드를 사용하여 바인딩도 가능
```javascript
class LoggingButton extends React.Component {
  // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
  // 주의: 이 문법은 *실험적인* 문법입니다.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```
- 이벤트 핸들러에 인자 전달
```javascript
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
- [테스트 코드](my-app\src\index.js)

### 7. 조건부 렌더링
- React에서 조건부 렌더링은 JavaScript에서의 조건 처리와 같이 동작
- [로그인 상태](my-app\src\07conditional_rendering.js)
- 엘리먼트를 저장하기 위해 변수를 사용할 수 있다. 출력의 다른 부분은 변하지 않은 채로 컴포넌트의 일부를 조건부로 렌더링
- [조건 연산자](my-app\src\07mailbox.js)
- 가끔 다른 컴포넌트에 의해 렌더링될 때 컴포넌트 자체를 숨기고 싶을 때가 있다. 이때는 렌더링 결과를 출력하는 대신 null을 반환하면 해결
- [컴포넌트 조건에 따라 숨기기](my-app\src\07warning_banner.js)


### 8. 리스트와 Key
- 기본 리스트 컴포넌트
- [리스트](my-app\src\08list.js)
- key사용 및 컴포넌트 추출하기
- [Key](my-app\src\08key.js)
- key는 형제 사이에서만 고유한 값이어야 한다.
- Key는 배열 안에서 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없다.
```javascript
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
```
- JSX map() 포함시키기
```javascript
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
```