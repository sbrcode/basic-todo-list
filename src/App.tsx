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
        onFocus={() => setLabel("")}
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
          ? todoList.map((todoTask, idTask) => (
              <li key={idTask}>
                {todoTask}
                <button
                  onClick={() => {
                    const filtered = todoList.filter(
                      (todoTask, idBtn) => idBtn !== idTask
                    )
                    // console.log("todoTask: ", todoTask, "idTask: ", idTask)
                    setTodoList(filtered)
                  }}
                >
                  X
                </button>
              </li>
            ))
          : null}
      </ul>
      {todoList.length > 1 && (
        <button onClick={() => setTodoList([])}>Remove all Tasks</button>
      )}
    </div>
  )
}

export default App

