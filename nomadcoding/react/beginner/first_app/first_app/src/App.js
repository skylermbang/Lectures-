
import Button from "./Button"
import styles from "../src/App.module.css"
import { useState, useEffect } from "react"

function App() {

  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1)

  const [keyword, setKeyword] = useState("")
  const onChange = (event) => { setKeyword(event.target.value) }

  console.log("rendering done")
  const iRunOnlyOnce = () => {
    console.log("render")
  }
  useEffect(() => { console.log("fuck this") }, [])

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) { console.log("search for : ", keyword) }
  }, [keyword])

  return (
    <div>
      <input value={keyword} type="text" onChange={onChange} placeholder="search here bitch" />
      <h1 className={styles.title}> Welcome to React !{counter}</h1>
      <button onClick={onClick} > Click me</button>
    </div >
  );
}

export default App;
