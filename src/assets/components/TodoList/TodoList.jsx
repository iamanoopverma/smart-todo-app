import TodoListItem from '../TodoListItem/TodoListItem.jsx'

function TodoList({ allTodos, deleteTodo, handleToggle }) {
    return (
        <>
            {
                allTodos.map(item => {
                    return (
                       item.id ? <TodoListItem 
                        key={item.id} 
                        listElement={item} 
                        deleteTodo={deleteTodo} 
                        handleToggle={handleToggle} /> :
                        <p>"List is Empty."</p>
                    )
                })
            }

        </>
    )
}

export default TodoList;