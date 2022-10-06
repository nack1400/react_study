import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<h1>Hello</h1>} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );

}

export default App;

// import Button from "./Button"
// import styles from "./App.module.css"

// function App() {
//   return null;

//   // const [toDo, setToDo] = useState("");
//   // const [toDos, setToDos] = useState([]);
//   // const onChange = (event) => setToDo(event.target.value);
//   // const onSubmit = (event) => {
//   //   event.preventDefault();
//   //   if(toDo === ""){
//   //     return;
//   //   }
//   //   setToDo(""); // 아무것도 없으면 리턴, submit하면 텍스트 초기화
//   //   // 기존의 배열 앞에 새로운 값을 넣은 새로운 배열을 입력 
//   //   setToDos((currentArray) => [toDo, ...currentArray]);
//   // };
//   // console.log(toDos);
//   // return (
//   //   <div>
//   //     <h1>My To dos ({toDos.length})</h1>
//   //     <form onSubmit={onSubmit}>
//   //       <input
//   //         value={toDo}
//   //         onChange={onChange}
//   //         type="text"
//   //         placeholder="Write your to do..."
//   //       />
//   //       <button>Add To Do</button>
//   //     </form>
//   //     <hr />
//   //     {toDos.map((item, index) => (
//   //       <li key={index}>{item}</li>
//   //     ))}
//   //   </div>
//   // );

//   // const [counter, setValue] = useState(0);
//   // const [keyword, setKeyword] = useState("")
//   // const onClick = () => setValue((prev) => prev + 1);
//   // const onChange = (event) => setKeyword(event.target.value);
//   // console.log("항상 실행되는 코드");
//   // // 한번만 호출하기 위해
//   // useEffect(() => {
//   //   console.log("CALL THE API...");
//   // }, []); // 처음에 한번만 실행, []안에 있는 값이 변화할 때 마다 실행, 아무것도 없으므로 처음 한번만 실행
//   // useEffect(() => {
//   //   if (keyword !== "" && keyword.length > 5) { // keyword가 5보다 클 때만 실행
//   //     console.log("검색창 : ", keyword);
//   //   }
//   //   console.log("키워드가 변화할 때만 실행");
//   // }, [keyword]); // keyword가 변화할 때만 실행
  
//   // return (
//   //   <div>
//   //     {/* <h1 className={styles.title}>Welcome</h1>
//   //     <Button text={"button"} /> */}
//   //     <button onClick={onClick}>click me</button>
//   //     <input
//   //       value={keyword}
//   //       onChange={onChange}
//   //       type="text"
//   //       placeholder="Search here..."
//   //     />
//   //     <h1>{counter}</h1>
//   //   </div>
//   // );
// }


