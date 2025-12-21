import './TodoListItem.css';

function TodoListItem({listElement, deleteTodo, handleToggle}){
    
    return(
          <div className="todo-item">
             <input type="checkbox" 
             checked = {listElement.completed}
             onChange={() => handleToggle(listElement.id)}/>
             <p style={{textDecoration: listElement.completed ? "line-through" : "none"}}>{listElement.text}</p>
             <button className='delete-btn' onClick={()=> deleteTodo(listElement.id)}>Delete</button>
          </div>
    )
}


export default TodoListItem;