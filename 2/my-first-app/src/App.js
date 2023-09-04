import './App.css';
import User from './components/User';

const friends = [{
  name: 'John',
},
{
  name: 'Deniz',
},
{
  name: 'Aslı',
}]
function App() {
  return (
    <>
      <User
        friends={friends} />
    </>
  )
};
export default App;
