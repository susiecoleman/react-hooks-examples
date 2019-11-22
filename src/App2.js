import React from "react";
import "./App.css";

function App2() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Number: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default App2;
