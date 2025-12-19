import { useState } from 'react'
import './App.css'
import TodoInput from './assets/components/TodoInput/TodoInput.jsx'
import TodoList from './assets/components/TodoList/TodoList.jsx'
import FilterButton from './assets/components/FilterButton/FilterButton.jsx'

function App() {
  const [allTodos, setAllTodos] = useState([]);
  let uniqueId = 0;
  function addTodo(inputText) {
      let todo = {
        id: uniqueId+1,
        text: inputText,
        completed: false
      }
      setAllTodos((prev) => [...prev, todo] );
  }
  function deleteTodo(id) {
   setAllTodos((prev) => prev.filter(item => item.id !== id ));
  }
  function filterTodoList() {

  }
  function handleToggle(id){
     setAllTodos((prev) => prev.map(item = item.id === id ? {...item, completed: !item.completed} : item  ))
  }

  return (
    <>

      <div className="container">
        <section className="todo-section  mt-auto">
          <h2>Hello this is my todo app</h2>
          <TodoInput addTodo={addTodo}></TodoInput>
          <FilterButton allTodos={allTodos} filterTodoList={filterTodoList}></FilterButton>
          <TodoList allTodos={allTodos} deleteTodo={deleteTodo} handle={handleToggle}></TodoList>
        </section>

      </div>

    </>
  )
}

export default App
