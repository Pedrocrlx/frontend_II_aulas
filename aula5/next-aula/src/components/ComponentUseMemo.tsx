"use client";

import { useState, useMemo } from 'react';

const exemplo = () => {
  const [count, setCount] = useState(1);

  const memoizedValue = useMemo(() => {
    console.log('Calculating memoized value...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default exemplo;