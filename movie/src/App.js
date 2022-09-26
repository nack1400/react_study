// import Button from "./Button"
// import styles from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("항상 실행되는 코드");
  // 한번만 호출하기 위해
  useEffect(() => {
    console.log("CALL THE API...");
  }, []); // 처음에 한번만 실행, []안에 있는 값이 변화할 때 마다 실행, 아무것도 없으므로 처음 한번만 실행
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) { // keyword가 5보다 클 때만 실행
      console.log("검색창 : ", keyword);
    }
    console.log("키워드가 변화할 때만 실행");
  }, [keyword]); // keyword가 변화할 때만 실행
  
  return (
    <div>
      {/* <h1 className={styles.title}>Welcome</h1>
      <Button text={"button"} /> */}
      <button onClick={onClick}>click me</button>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
