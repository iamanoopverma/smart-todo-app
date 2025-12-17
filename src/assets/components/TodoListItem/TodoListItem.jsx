

function TodoListItem({allTodos, deleteTodos}){
    return(
        <>
          <div className="todo-item">
             <p>First Todo Item</p>
             <Button onClick={deleteTodos}>Delete</Button>
          </div>
        </>
    )
}


export default TodoListItem;