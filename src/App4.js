import React, { useState, useEffect } from "react";
import "./App.css";

function App4() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    setCount(getRandomInt(2, 100));
  }, []);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const onTyping = e => setText(e.target.value);

  return (
    <div>
      <p>Number: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div>
        <input type="text" onChange={onTyping} value={text} />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default App4;
