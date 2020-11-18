import React, { useState } from 'react';

export default function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter {count} </p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}