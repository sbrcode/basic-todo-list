import { useState } from "react"
import "./App.css"

const App = () => {
  const [todoList, setTodoList] = useState<string[]>([])
  const [label, setLabel] = useState<string>("")

  return (
    <div className="App">
      <input
        className="Input"
        value={label}
        type={"text"}
        autoFocus
        maxLength={272}
        onChange={(e) => {
          e.preventDefault()
          setLabel(e.target.value)
        }}
      />
      <button
        className="Btn"
        onClick={(e) => {
          e.preventDefault()
          if (label !== "") setTodoList([...todoList, label])
          setLabel("")
        }}
      >
        add Task
      </button>
      {todoList.length !== 0 && (
        <ul className="Ul">
          {todoList.map((todoTask, idTask) => (
            <li className="Li" key={idTask}>
              <button
                className="Btn Del"
                onClick={() => {
                  const filtered = todoList.filter(
                    (todoTask, idBtn) => idBtn !== idTask
                  )
                  setTodoList(filtered)
                }}
              >
                X
              </button>
              {todoTask}
            </li>
          ))}
        </ul>
      )}
      {todoList.length > 1 && (
        <button className="Btn Del" onClick={() => setTodoList([])}>
          Remove all Tasks
        </button>
      )}
    </div>
  )
}

export default App

