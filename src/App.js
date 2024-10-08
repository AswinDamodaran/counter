import { useState } from 'react';
import './App.css';

function App() {

  const [count,setCount]=useState(0)

  const handleincrement=()=>{
    setCount((prev)=> prev+1)
  }

  const handledecrement=()=>{
    setCount((prev)=> prev-1)
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleincrement} >Increment</button>
      <button onClick={handledecrement} >Decrement</button>
    </div>
  );
}

export default App;
