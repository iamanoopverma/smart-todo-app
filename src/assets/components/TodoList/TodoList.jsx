import TodoListItem from '../TodoListItem/TodoListItem.jsx'
import './TodoList.css'
import { useState } from 'react'

function TodoList({ allTodos, deleteTodo, handleToggle }) {
    const [activeTab, setActiveTab] = useState("all")

    const filteredTodos = allTodos.filter(item => {
        if (activeTab === "active") return !item.completed
        if (activeTab === "completed") return item.completed
        return true
    })

    return (
        <div className="todo-list">
            <div className="tab-sec">
                <div className="button-con">
                    <button
                        className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
                        onClick={() => setActiveTab("all")}
                    >
                        All
                    </button>

                    <button
                        className={`tab-btn ${activeTab === "active" ? "active" : ""}`}
                        onClick={() => setActiveTab("active")}
                    >
                        Active
                    </button>

                    <button
                        className={`tab-btn ${activeTab === "completed" ? "active" : ""}`}
                        onClick={() => setActiveTab("completed")}
                    >
                        Completed
                    </button>
                </div>

                <div className="tab-content">
                    {filteredTodos.length === 0 ? (
                        <p>Empty.</p>
                    ) : (
                        filteredTodos.map(item => (
                            <TodoListItem
                                key={item.id}
                                listElement={item}
                                deleteTodo={deleteTodo}
                                handleToggle={handleToggle}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default TodoList
