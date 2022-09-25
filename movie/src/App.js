import Button from "./Button"
import styles from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [key, setKey] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKey(event.target.value);
  console.log("i run all the time");
  // 한번만 호출하기 위해
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Welcome</h1>
      <Button text={"button"} />
      <button onClick={onClick}>click me</button>
      <input
        value={key}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
    </div>
  );
}

export default App;
