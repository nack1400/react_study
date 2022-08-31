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

주의 : 컴포넌트의 이름은 항상 대문자로 시작, React는 소문자로 시작하는 컴포넌트를 DOM 태그로 처리

- 컴포넌트 합성
컴포넌트 안에 컴포넌트를 여러 번 렌더링하는 컴포넌트를 만들 수 있음
- 컴포넌트 추출
중첩된 구성요소를 컴포넌트로 추출
- [컴포넌트 테스트 코드](test\05component_props.html)
- props는 읽기 전용, 수정해서는 안된다
- 모든 컴포넌트는 입력된 값을 변경하지 않는 순수함수처럼 동작해야한다. -> 그래서 나오는 개념이 state

### 5. State와 생명주기
Clock 구현
- 함수에서 클래스로 변환하기
- 클래스에 로컬 State 추가하기
- 생명주기 메서드를 클래스에 추가하기
1. &lt;Clock /&gt;가 ReactDOM.render()로 전달되었을 때 React는 Clock 컴포넌트의 constructor를 호출합니다. Clock이 현재 시각을 표시해야 하기 때문에 현재 시각이 포함된 객체로 this.state를 초기화합니다. 나중에 이 state를 업데이트할 것입니다.
2. React는 Clock 컴포넌트의 render() 메서드를 호출합니다. 이를 통해 React는 화면에 표시되어야 할 내용을 알게 됩니다. 그 다음 React는 Clock의 렌더링 출력값을 일치시키기 위해 DOM을 업데이트합니다. -> DOM을 업데이트?
3. Clock 출력값이 DOM에 삽입되면, React는 componentDidMount() 생명주기 메서드를 호출합니다. 그 안에서 Clock 컴포넌트는 매초 컴포넌트의 tick() 메서드를 호출하기 위한 타이머를 설정하도록 브라우저에 요청합니다.
4. 매초 브라우저가 tick() 메서드를 호출합니다. 그 안에서 Clock 컴포넌트는 setState()에 현재 시각을 포함하는 객체를 호출하면서 UI 업데이트를 진행합니다. setState() 호출 덕분에 React는 state가 변경된 것을 인지하고 화면에 표시될 내용을 알아내기 위해 render() 메서드를 다시 호출합니다. 이 때 render() 메서드 안의 this.state.date가 달라지고 렌더링 출력값은 업데이트된 시각을 포함합니다. React는 이에 따라 DOM을 업데이트합니다.
5. Clock 컴포넌트가 DOM으로부터 한 번이라도 삭제된 적이 있다면 React는 타이머를 멈추기 위해 componentWillUnmount() 생명주기 메서드를 호출합니다. -> 삭제된 적이 있다면? 삭제된다는 것은 어떤 상황인지?
- [테스트 코드](my-app\src\index.js)
#####

State 사용법
1. 직접 state를 수정하지 않는다.
```javascript
// Wrong, 다시 렌더링하지 않기 때문
this.state.comment = 'Hello';
// Correct, 다시 렌더링한다
this.setState({comment: 'Hello'});
```
2. state 업데이트는 비동기적일 수 있다.
```javascript
// Wrong, 실패할 수도 있는 코드, 값에 의존해서는 안된다. 비동기적으로 업데이트가 일어날 수도 있으므로
this.setState({
  counter: this.state.counter + this.props.increment,
});
// Correct, 함수를 인자로 사용하는 setState를 사용, 이전 state를 첫 번째 인자로 받아들일 것이고, 업데이트가 적용된 시점의 props를 두 번째 인자로 받아들일 것
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
    // 각자 setState에서 독립적으로 업데이트를 하고 병합하는 방식
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
    e.preventDefault(); // 기본 동작을 방지하기 위해, 이벤트가 발생했어도 새로 실행되지 않게 하기 위해
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
/*
  바인드란?
  bind - this를 가르키는 context를 변경하여 바로 실행시켜주는 메소드
  메소드의 재사용과 공유, 중복을 방지
  다른 컴포넌트로 pass할 메소드를 binding
*/
class LoggingButton extends React.Component {
  // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
  // 클래스 메서드는 기본적으로 바인딩 X, 실제 호출될 때 this는 undefined가 된다.
  // 주의: 이 문법은 *실험적인* 문법입니다.
  
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      // 이 문법의 문제점은 렌더링될 때마다 다른 콜백(새로 만들어서)이 생성되는 것, 콜백이 하위 컴포넌트에 props로서 전달될 수는 있으나 성능 이슈로 생성자 안에서 바인드하거나 클래스 필드 문법 사용
      // 화살표 문법 : () => this.handleClick() 사용 X
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
- key는 형제 사이에서만 고유한 값이어야 한다
- Key는 배열 안에서 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없다
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

### 9. 폼
- 제어 컴포넌트(Controlled Component)
&lt;input>, &lt;textarea>, &lt;select>와 같은 폼 엘리먼트는 일반적으로 사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트  
React에서는 변경할 수 있는 state가 일반적으로 컴포넌트의 state 속성에 유지되며 setState()에 의해 업데이트  

- [input 테스트 코드](my-app\src\09form.js), [select 테스트 코드](my-app\src\09form_select.js)
- file input 태그
HTML에서 &lt;input type="file">는 사용자가 하나 이상의 파일을 자신의 장치 저장소에서 서버로 업로드하거나 File API를 통해 JavaScript로 조작할 수 있다  
```javascript
<input type="file" />
```
- [다중 입력 제어 테스트 코드](my-app\src\09form_multiple_input.js)

- 제어되는 Input Null 값
제어 컴포넌트에 value prop을 지정하면 의도하지 않는 한 사용자가 변경할 수 없다  
```javascript
ReactDOM.render(<input value="hi" />, mountNode);

// 1초 후 입력 가능해지도록 설정
setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```

### 10. State 끌어올리기
- 동일한 데이터에 대한 변경사항을 여러 컴포넌트에 반영해야 할 때, 가까운 공통 조상으로 state를 끌어올리기
- 물의 끓는 여부 추정 및 섭씨화씨 측정 온도계산기
- [테스트 코드](my-app\src\10pulling_up_state.js)
- 입력값 변경시 코드 흐름
1. React는 DOM &lt;input>의 onChange에 지정된 함수를 호출합니다. 위 예시의 경우 TemperatureInput의 handleChange 메서드에 해당합니다.
2. TemperatureInput 컴포넌트의 handleChange 메서드는 새로 입력된 값과 함께 this.props.onTemperatureChange()를 호출합니다. onTemperatureChange를 포함한 이 컴포넌트의 props는 부모 컴포넌트인 Calculator로부터 제공받은 것입니다.
3. 이전 렌더링 단계에서, Calculator는 섭씨 TemperatureInput의 onTemperatureChange를 Calculator의 handleCelsiusChange 메서드로, 화씨 TemperatureInput의 onTemperatureChange를 Calculator의 handleFahrenheitChange 메서드로 지정해놓았습니다. 따라서 우리가 둘 중에 어떤 입력 필드를 수정하느냐에 따라서 Calculator의 두 메서드 중 하나가 호출됩니다.
4. 이들 메서드는 내부적으로 Calculator 컴포넌트가 새 입력값, 그리고 현재 수정한 입력 필드의 입력 단위와 함께 this.setState()를 호출하게 함으로써 React에게 자신을 다시 렌더링하도록 요청합니다.
5. React는 UI가 어떻게 보여야 하는지 알아내기 위해 Calculator 컴포넌트의 render 메서드를 호출합니다. 두 입력 필드의 값은 현재 온도와 활성화된 단위를 기반으로 재계산됩니다. 온도의 변환이 이 단계에서 수행됩니다.
6. React는 Calculator가 전달한 새 props와 함께 각 TemperatureInput 컴포넌트의 render 메서드를 호출합니다. 그러면서 UI가 어떻게 보여야 할지를 파악합니다.
7. React는 BoilingVerdict 컴포넌트에게 섭씨온도를 props로 건네면서 그 컴포넌트의 render 메서드를 호출합니다.
8. React DOM은 물의 끓는 여부와 올바른 입력값을 일치시키는 작업과 함께 DOM을 갱신합니다. 값을 변경한 입력 필드는 현재 입력값을 그대로 받고, 다른 입력 필드는 변환된 온도 값으로 갱신됩니다.

### 11. 합성 (Composition) vs 상속 (Inheritance)
- React는 합성 모델을 가지고 있으면 상속 대신 합성을 사용하여 코드를 재사용한다.
- 상속의 문제를 React에서는 합성으로 해결한다
- 컴포넌트를 재사용하려면 별도의 JavaScript 모듈로 분리하는 것을 추천
- [컴포넌트에서 다른 컴포넌트를 담기, 특수화 테스트 코드](my-app\src\11composition_inheritance.js)

### 12. React로 생각하기
1. UI를 컴포넌트 계층 구조로 나누기
단일 책임 원칙을 지켜서 하나의 컴포넌트는 한가지 일을 하도록, 보통은 JSON 데이터를 유저에게 보여주기 때문에 데이터 모델이 잘 만들어졌다면 UI(컴포넌트 구조)가 잘 연결될 것
![](thinking-in-react-components.png)
- FilterableProductTable(노란색): 예시 전체를 포괄합니다.
- SearchBar(파란색): 모든 유저의 입력(user input) 을 받습니다.
- ProductTable(연두색): 유저의 입력(user input)을 기반으로 데이터 콜렉션(data collection)을 필터링 해서 보여줍니다.
- ProductCategoryRow(하늘색): 각 카테고리(category)의 헤더를 보여줍니다.
- ProductRow(빨강색): 각각의 제품(product)에 해당하는 행을 보여줍니다.

2. React로 정적인 버전 만들기
[테스트 코드](my-app\src\12thinking_in_react.js)

3. UI state에 대한 최소한의 (하지만 완전한) 표현 찾아내기
중복 배제의 원칙
- 최소한의 state 찾기, 필요에 따라 그때그때 계산하도록 설계, state를 별도로 만들지 않기
- 부모로부터 props를 통해 전달됩니까? 그러면 확실히 state가 아닙니다.
- 시간이 지나도 변하지 않나요? 그러면 확실히 state가 아닙니다.
- 컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가요? 그렇다면 state가 아닙니다.

4. State가 어디에 있어야 할 지 찾기
- 어떤 컴포넌트가 어떤 state를 가지는지
- state를 기반으로 렌더링하는 모든 컴포넌트를 찾으세요.
- 공통 소유 컴포넌트 (common owner component)를 찾으세요. (계층 구조 내에서 특정 state가 있어야 하는 모든 컴포넌트들의 상위에 있는 하나의 컴포넌트).
- 공통 혹은 더 상위에 있는 컴포넌트가 state를 가져야 합니다.
- state를 소유할 적절한 컴포넌트를 찾지 못하였다면, state를 소유하는 컴포넌트를 하나 만들어서 공통 소유 컴포넌트의 상위 계층에 추가하세요.

5. 역방향 데이터 흐름 추가하기
- 아래로 흐르는 계층구조에서 반대 방향도
- state가 업데이트 되도록 호출
