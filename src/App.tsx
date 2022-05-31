import { useState } from "react"
import "./App.css"

const App = () => {
  const [todoList, setTodoList] = useState<string[]>([])
  const [label, setLabel] = useState<string>("")

  return (
    <div className="App">
      <input
        value={label}
        type={"text"}
        onChange={(e) => setLabel(e.target.value)}
      />
      <button
        onClick={() => {
          if (label !== "") setTodoList([...todoList, label])
        }}
      >
        add Task
      </button>
      <ul>
        {todoList.length !== 0
          ? todoList.map((todoTask, index) => <li key={index}>{todoTask}</li>)
          : null}
      </ul>
    </div>
  )
}

export default App

