import './App.css';
import Todo from './components/Todo';
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([]);


  const addTodo = (todo) => {
    const newTodo = [todo, ...todos];
    //Rest Operatörü: Dizi içindeki geri kalan öğeleri tek bir değişkene toplu olarak atamak için kullanılır.

    setTodos(newTodo);

  }

  console.log(todos, 'hadiiii');

  return (
    <div className="App">
      <Todo addTodo={addTodo} />

    </div >
  );
}

export default App;