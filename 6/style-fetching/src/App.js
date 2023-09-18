import './App.css';
import A from './components/A';
import B from './components/B';

function App() {
  return (
    <div className="App">
      <header className="A pp-header">
        {/* <div style={{color: "red", backgroundColor : "black"}}>
          lorem ipsum dolor sit amet,
           consectetur adip
        </div> */}

        <A/>
        <B/>
      </header>
    </div>
  );
}

export default App;
