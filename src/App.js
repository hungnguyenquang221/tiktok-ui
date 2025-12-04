import {useState} from 'react';
function App() {
  const [counter, setCounter] = useState(1);
  return (
    
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default App;
