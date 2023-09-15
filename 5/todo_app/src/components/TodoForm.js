import React, { useState } from 'react'
import { Button, Input, Form, Grid, Container } from 'semantic-ui-react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => { // bu fonksiyon her güncellemede çalışır. 
        setInput(e.target.value);
    }
    const handlerSumit = e => { // buysa yalnızca form submit ediliğinde çalışır. 
        e.preventDefault();

        props.onSubmit({  
            // bu yeni bir nesne oluşturur ve DÖNER id Math'dan oluşur, text'de girilen input'da gelir (UseState)
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        //yani işlem burada aşlar TodoLis'te akar. Orda devam eder. 

        setInput('')
    }
    return (
        <>
            <Container>
                <Form className='todo-form' onSubmit={handlerSumit}>
                    <Grid>
                        <Grid.Row >
                            <Grid.Column width={12}>
                                <Input fluid
                                    placeholder='Add a todo'
                                    value={input}
                                    onChange={handleChange} />
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <Button positive >Add Todo</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>
            </Container>
        </>
    )
}

export default TodoForm