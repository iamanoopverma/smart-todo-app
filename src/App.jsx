import { useState } from 'react'
import './App.css'
import TodoInput from './assets/components/TodoInput/TodoInput.jsx'
import TodoList from './assets/components/TodoList/TodoList.jsx'
import TodoListItem from './assets/components/TodoListItem/TodoListItem.jsx'
import FilterButton from './assets/components/FilterButton/FilterButton.jsx'

function App() {
  const [allTodos, setAllTodos] = useState({
    id: 1,
    text: "",
    completed: false
  });

  function addTodo() {

  }
  function deleteTodo() {

  }
  function filterTodoList() {

  }

  return (
    <>

      <div className="container">
        <section className="todo-section  mt-auto">
          <h2>Hello this is my todo app</h2>
          <TodoInput allTodos={allTodos} addTodo={addTodo}></TodoInput>
          <TodoList allTodos={allTodos}>
            <TodoListItem allTodos={allTodos} deleteTodo={deleteTodo}></TodoListItem>
          </TodoList>
          <FilterButton allTodos={allTodos} filterTodoList={filterTodoList}></FilterButton>
        </section>

      </div>

    </>
  )
}

export default App
