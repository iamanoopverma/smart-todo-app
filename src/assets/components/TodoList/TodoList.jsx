import TodoListItem from '../TodoListItem/TodoListItem.jsx'
import './TodoList.css'

function TodoList({ allTodos, deleteTodo, handleToggle }) {
    function hanldeTabClick(id, e) {
        document.querySelectorAll('.tab-btn')
            .forEach(item => item.classList.remove("active"));
        document.querySelectorAll('.tab-content')
            .forEach(item => item.classList.remove("active"));
        document.querySelector(`#${id}`).classList.add("active");
        e.target.classList.add("active");
    }

    return (
        <>
            <div className="todo-list">
                <div className="tab-sec">
                    <div className="button-con">
                        <button className='tab-btn active' onClick={(e) => hanldeTabClick('tab1', e)}>All</button>
                        <button className='tab-btn' onClick={(e) => hanldeTabClick('tab2', e)}>Active</button>
                        <button className='tab-btn' onClick={(e) => hanldeTabClick('tab3', e)}>Completed</button>
                    </div>
                    <div className="tab-content active" id="tab1">
                        {allTodos.length > 0 ?
                            allTodos.map(item => (
                                <div className="tood-list">{
                                    <TodoListItem
                                        key={item.id}
                                        listElement={item}
                                        deleteTodo={deleteTodo}
                                        handleToggle={handleToggle} />

                                }</div>
                            ))
                            : <p>"Todo list is empty."</p>
                        }
                    </div>
                    <div className="tab-content" id="tab2">
                        {allTodos.filter(item => item.completed === false).length > 0 ?
                        allTodos.filter(item => item.completed === false)
                            .map(item => (
                                <div className="tood-list">{
                                    <TodoListItem
                                        key={item.id}
                                        listElement={item}
                                        deleteTodo={deleteTodo}
                                        handleToggle={handleToggle} />
                                }</div>
                            ))
                            : <p>"There is no active todo."</p>
                        }
                    </div>
                    <div className="tab-content" id="tab3">
                        {
                        allTodos.filter(item => item.completed === true).length > 0 ?
                        allTodos.filter(item => item.completed === true)
                            .map(item => (
                                <div className="tood-list">{
                                    <TodoListItem
                                        key={item.id}
                                        listElement={item}
                                        deleteTodo={deleteTodo}
                                        handleToggle={handleToggle} />
                                }</div>
                            ))
                        :<p>"There is no completed todo."</p>
                        }
                    </div>
                </div>
            </div>



        </>
    )
}

export default TodoList;