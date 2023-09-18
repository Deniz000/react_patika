import React, { useState } from 'react'

function Todo({ addTodo }) {
    const [item, setItem] = useState('');
    const [todos, setTodos] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);



    const handler = e => {
        setItem(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const oge = {
            id: Math.floor(Math.random() * 100000),
            text: item
        }


        setTodos([oge, ...todos])

        setItem('');
    }

    const handleItemClick = (i) => {
        setSelectedItem(i);
    }
    const removeTodo = id => {
        const removeArr = todos.filter((todo) => todo.id !== id);
        
        setTodos(removeArr)
    }
    return (
        <div>
            {/* <section mv-app="todoapp" classNameName="todoapp"
                mv-bar="none" mv-storage="local"
                mv-autosave="3"
                mv-mode="edit"
                mv-init="#data">
                <header classNameName="header">
                    <h1>todos</h1>
                    <form mv-action="set(newTodo, newTodo.trim()), if(newTodo != '', add(newTodo, todo) & set(newTodo, ''))" >
                        <input property="newTodo" value={item} onChange={handler} classNameName="new-todo"
                            placeholder="What needs to be done?"
                            autoFocus />
                    </form>
                </header>
            </section> */}

            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <form onSubmit={submitHandler}>
                        <input value={item} onChange={handler} className="new-todo" placeholder="What needs to be done?" autoFocus />
                    </form>
                </header>


                <section className="main">
                    <input className="toggle-all" type="checkbox" />
                    <label htmlFor="toggle-all">
                        Mark all as complete
                    </label>

                    <ul className="todo-list">
                        {todos?.map((todo, i) =>
                            <li key={i} className={i === selectedItem ? 'completed' : ''}
                                onClick={() => handleItemClick(i)}>
                                <div className="view">
                                    <input className="toggle" type="checkbox" />
                                    <label>{todo.text}</label>
                                    <button key={i} className="destroy" 
                                    onClick={() => removeTodo(todo.id)}></button>
                                </div>
                            </li>
                        )}
                    </ul>
                </section>


                <footer className="footer">
                    <span className="todo-count">
                        <strong>2</strong>
                        items left
                    </span>

                    <ul className="filters">
                        <li>
                            <a href="#/" className="selected">All</a>
                        </li>
                        <li>
                            <a href="#/">Active</a>
                        </li>
                        <li>
                            <a href="#/">Completed</a>
                        </li>
                    </ul>

                    <button className="clear-completed">
                        Clear completed
                    </button>
                </footer>
            </section>

            <footer className="info">
                <p>Click to edit a todo</p>
                <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
        </div>
    )
}

export default Todo