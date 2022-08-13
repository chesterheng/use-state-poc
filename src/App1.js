import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState(1);

  const increase = () => {
    setNumber(number + 1);
  };

  const increaseAsync = () => {
    setTimeout(() => {
      // use functional update to get the current value
      setNumber((prev) => prev + 1);
    }, 2000);
  };

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={increaseAsync}>Increase Async</button>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
