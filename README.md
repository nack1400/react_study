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