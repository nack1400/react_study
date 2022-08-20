import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 6. 이벤트 처리하기

// 로그인 버튼
// class LoggingButton extends React.Component {
//   // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
//   // 주의: 이 문법은 *실험적인* 문법입니다.
//   handleClick = () => {
//     console.log('this is:', this);
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Click me
//       </button>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<LoggingButton />);


// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Toggle />);

// 5. State와 생명주기

// Clock 구현
// function tick() {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }
// setInterval(tick, 1000);

// 함수에서 클래스로 변환하기
// 클래스에 로컬 State 추가하기
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   // 생명주기 메서드 추가
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Clock />);