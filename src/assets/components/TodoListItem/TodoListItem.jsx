import './TodoListItem.css'

function TodoListItem({listElement, deleteTodo, handleToggle}){
    return(
          <div className="todo-item">
             <input type="checkbox" onChange={() => handleToggle(listElement.id)}/>
             <p>{listElement.text}</p>
             <button onClick={()=> deleteTodo(listElement.id)}>Delete</button>
          </div>
    )
}


export default TodoListItem;