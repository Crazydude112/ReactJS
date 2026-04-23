import './App.css'
import { useState } from 'react';

function App() {
  // State variable to hold the count value
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log("increment", count);
  }

  const decrement = () => {
    setCount(count - 1);
    console.log("decrement", count);
  } 

  const reset = () => {
    setCount(0);
    console.log("reset", count);
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </>
  );
}

export default App;