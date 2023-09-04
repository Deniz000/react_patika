import {useState} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(['Ahmet', 'Mehmet']);
  const [address, setAddress] = useState({title:'İstanbul', zip:12094});
  return (
    <div className="App">
     <h1>{name}</h1>
     <h1>{age}</h1>
     <button onClick={() => setName("Ahmet")}>Click</button>
     <button onClick={() => setAge(19)}>Click for age</button>
     <hr/>
     <br/>
     {
      friends.map((friend, i) => (<div key={i}>{friend}</div>) )
     }
     <button onClick={() => setFriends([...friends, "Ayşe"])}>add friend</button>
     <hr/>
     <br/>
     <div>{address.title} | {address.zip}</div>
     <button onClick={() => setAddress({...address,title:'ankara', zip:2389})}>add adress</button>

    </div>
  );
}

export default App;
