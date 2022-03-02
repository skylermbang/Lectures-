import { useState, useEffect } from "react"

function App() {

  const [todo, setTodo] = useState("");
  const onClick = (event) => setTodo(event.target.value)
  const [todos, setTodos] = useState([])
  const submmit = (event) => {
    event.preventDefault()

    if (todo === "") {
      return
    }

    setTodos((previousArray) => [todo, ...previousArray])
    setTodo("")
    console.log(todos)
  }

  return (
    <div>
      <h1> My todos</h1>
      <h2> Todos :  {todos.length}</h2>
      <form>
        <input value={todo} onChange={onClick} placeholder="Write your todo"></input>
        <button onClick={submmit}> Add Todo</button>
      </form>

      <hr />
      <ul>
        {todos.map((item, index) => <li key={index}> {item}</li>)}
      </ul>


    </div >
  );
}

export default App;
