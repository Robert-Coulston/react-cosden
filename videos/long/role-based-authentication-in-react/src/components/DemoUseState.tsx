import { useState } from 'react';

interface DemoProps { i: number}

export default function DemoUseState({i}: DemoProps) {
  const [count, setCount] = useState(i);

  return (
    <div className='tutorial'>
      <h1 className='mb-4'>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
