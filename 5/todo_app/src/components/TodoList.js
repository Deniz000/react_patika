import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { Button, List, Container } from 'semantic-ui-react'


export default function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) { //ifade boşluk var mı yok mu kontrol eder
            return
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos)
    }

    return (
        <div>
            What's the plan for today?
            <TodoForm onSubmit={addTodo} />
            <Container>
                <List celled>
                    {todos.map((todo) => (

                        <List.Item>
                            <List.Content floated='right'>
                                <Button icon='delete' />
                            </List.Content>

                            <List.Content>{ todo.text }</List.Content>
                        </List.Item>
                    ))}
                </List>
            </Container>
        </div>
    )
}