'use strict';

/*
  3. react 컴포넌트 만들기
  react 컴포넌트를 정의해주는 코드
*/

// const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this";
    }

    // return e(
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   'Like'
    // );

    /* 
      선택사항. JSX로 React 해보기
    */
    // "Like" <button>을 표시
    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
// document.querySelectorAll('.like_button_container')
//   .forEach(domContainer => {
//     // Read the comment ID from a data-* attribute.
//     const commentID = parseInt(domContainer.dataset.commentid, 10);
//     const root = ReactDOM.createRoot(domContainer);
//     root.render(
//       e(LikeButton, { commentID: commentID })
//     );
//   });

let domContainer = document.querySelector("#like_button_container");
//ReactDOM.render(e(LikeButton), domContainer);
ReactDOM.render(<LikeButton />, domContainer);
