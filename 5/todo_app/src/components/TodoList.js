import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { Button, List, Container } from 'semantic-ui-react'
import Todo from './Todo'


export default function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {   // buraya id ve text alanlarına sahip nesne gelir, kaydedilir.
        if (!todo.text || /^\s*$/.test(todo.text)) { //ifade boşluk var mı yok mu kontrol eder
            return
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    // const completeTodo = id => {
    //     let updatedTodos = todos.map(todo => {
    //         if (todo.id === id) {
    //             todo.isComplete = !todo.isComplete
    //         }
    //         return todo
    //     })

    //     setTodos(updatedTodos)
    // }

    const removeTodo = id => {
        const removeArr = todos.filter((todo) => todo.id !== id);
        
        setTodos(removeArr)
    }


    return (
        <div>
            What's the plan for today?
            <TodoForm onSubmit={addTodo} />
            <Container>
                <List celled>
                    {todos?.map((todo, i) => (

                        <List.Item key={i}>
                            <List.Content floated='right'>
                                <Button key={i} icon='delete' className='delete-icon' onClick={() => removeTodo(todo.id)} />
                            </List.Content>
                            <List.Content floated='right'>
                                <Button icon='edit' className='edit-icon' onClick={() => setTodos({id: todo.id, text: todo.text}) } />
                            </List.Content>

                            <List.Content>{todo.text}</List.Content>
                        </List.Item>
                    ))}
                </List>
            </Container>

            <Todo />
        </div>
    )
}