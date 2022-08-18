import React, {useState} from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
      <h2>СЧЕТЧИК</h2>
      <h1>{count}</h1>
      <button className="plus" onClick={() => setCount(count + 1)}>+</button>&nbsp;
      <button className="minus" onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;
