import React, { useState } from 'react'

function Todo() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    return TodoList.map((todo, index) => {
        <div className={todo.isComplete ? 'todo-row complete' :
            'todo-row'} key={index}>

                <div key={todo.id} onClick={() => completeTodo(todo.id)}> </div>
        </div>
    }
    )
}

export default Todo