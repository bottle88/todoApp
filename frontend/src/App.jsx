import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  // Updating the state
  // It will be sent to 'Todos' componenet
  // Can  use UseEffect hook instead of this - Cause of infinite requests
  fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todos);
    })

  return (
    <>
     <CreateTodo/>
     <Todos todos={todos}/>
    </>
  )
}

export default App
