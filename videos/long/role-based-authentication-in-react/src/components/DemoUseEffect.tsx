import { useEffect, useState } from 'react';

interface DemoProps {i: number}

export default function DemoUseEfect({i}: DemoProps) {
  const [count, setCount] = useState<number>(i);

  useEffect(() => {console.log('initial render')}, []);

  useEffect(() => {
    // The code that we want to run
    console.log('The count is:', count);

    // Optional return function
    return () => {
      console.log(`'I am being cleaned up!' ${count}`);
    };
  }, [count]); // The dependency array

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
