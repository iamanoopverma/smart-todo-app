import { useState } from 'react'
import './App.css'
import TodoInput from './assets/components/TodoInput/TodoInput.jsx'
import TodoList from './assets/components/TodoList/TodoList.jsx'

let uniqueId = 0;
function App() {
  const [allTodos, setAllTodos] = useState([]);
 
  function addTodo(inputText) {
    uniqueId += 1;
    const todo = {
      id: uniqueId,
      text: inputText,
      completed: false
    };
    todo.text !== "" && setAllTodos([...allTodos, todo]);
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
