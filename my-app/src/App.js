import Form from "./Form";
import LoginControl from "./07conditional_rendering";
import Mailbox from "./07mailbox";
import Page from "./07warning_banner";
import NumberList from "./08list";

function App() {
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>이벤트 처리하기</h1>
      <Form />
      <hr/>
      <h1>7. 조건부 렌더링</h1>
      <LoginControl />
      <Mailbox unreadMessages={messages} />
      <Page />
      <NumberList numbers={numbers} />
      <hr/>
    </div>
  );
}

export default App;
