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