import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [todos, setTodos] = useState( JSON.parse(localStorage.getItem('Todos')) || [])

  function addTodo(task) {
    const newTodo = {
      id: Date.now(),
      task: task,
      done: false
    }
    setTodos([...todos, newTodo])
    console.log(todos);
  }

  function DeleteTodo(id){
    setTodos(todos.filter((t) => t.id !== id))
  }

  useEffect(()=> {
    localStorage.setItem('Todos', JSON.stringify(todos))
  }, [todos])



  return (
    <>    
      <TodoForm  onAdd = {addTodo}/>
      <TodoList todos={todos}  onDelete={DeleteTodo}/>
    </>
  )
}

export default App
