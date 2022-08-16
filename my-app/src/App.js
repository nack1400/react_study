import Form from "./Form";
import LoginControl from "./07conditional_rendering";
import Mailbox from "./07mailbox";
import Page from "./07warning_banner";
import NumberList from "./08list";
import NumberList2 from "./08key";
import NameForm from "./09form.js"
import FlavorForm from "./09form_select";
import Reservation from "./09form_multiple_input";
import Calculator from "./10pulling_up_state";

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
      <hr/>
      <h1>8. 리스트와 key</h1>
      <NumberList numbers={numbers} />
      <NumberList2 numbers={numbers} />
      <hr/>
      <h1>9. 폼</h1>
      <NameForm />
      <FlavorForm />
      <Reservation />
      <hr/>
      <h1>10. State 끌어올리기</h1>
      <Calculator />
      <hr />
    </div>
  );
}

export default App;
