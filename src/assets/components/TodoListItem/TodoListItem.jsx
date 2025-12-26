import './TodoListItem.css';

function TodoListItem({listElement, deleteTodo, handleToggle}){
    
    return(
          <div className="todo-item">
             <input type="checkbox" 
             checked = {listElement.completed}
             onChange={() => handleToggle(listElement.id)}/>
             <p className={
                  listElement.completed ? "done": ""
                }>{listElement.text}</p>
             <button 
             className='delete-btn' 
             onClick={()=> deleteTodo(listElement.id)}>
                Delete</button>
          </div>
    )
}


export default TodoListItem;