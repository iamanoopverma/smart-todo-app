import { useState } from 'react'
import './App.css'
import TodoInput from './assets/components/TodoInput/TodoInput.jsx'
import TodoList from './assets/components/TodoList/TodoList.jsx'

function App() {
  const [allTodos, setAllTodos] = useState([]);
 
  function addTodo(inputText) {
    const todo = {
      id: crypto.randomUUID(),
      text: inputText,
      completed: false
    };
    setAllTodos(prev => [...prev, todo]);
  }
  function deleteTodo(id) {
    setAllTodos((prev) => 
      prev.filter(item => 
        item.id !== id));
  }
  function handleToggle(id) {
    setAllTodos(prev => 
      prev.map(item => 
        item.id === id 
        ? {...item, completed: !item.completed} 
        : item ));
}

return (
  <>

    <div className="container">
      <section className="todo-section mt-auto">
        <h2>Smart Todo App</h2>
        <TodoInput addTodo={addTodo}></TodoInput>
        <TodoList allTodos={allTodos} deleteTodo={deleteTodo} handleToggle={handleToggle}></TodoList>
      </section>

    </div>

  </>
)
}

export default App
