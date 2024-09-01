import React, { useCallback, useEffect, useState } from 'react';

export default function DemoUseCallback() {
  console.log('DemoUseCallback function started');

  const [count, setCount] = useState(0);
  const [showChild, setShowChild] = useState(true);

  const handleClick = () => {
    console.log('Button clicked');
  };

  // const handleClick = useCallback(() => {
  //   console.log('Button clicked');
  // }, []);

  const Increment = () => {
    setCount(count + 1);
  };

  const toggleChild = () => {
    setShowChild(!showChild);
  };

  return (
    <div>
      <h1>DemoUseCallback</h1>
      <h1>Count: {count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={() => handleClick()}>Click parent</button>
      <button onClick={toggleChild}>
        {showChild ? 'Hide' : 'Show'} Child Component
      </button>
      {showChild && <ChildComponent onClick={handleClick} />}
    </div>
  );
}

type ChildProps = {
  onClick: () => void;
};

const ChildComponent = React.memo(({ onClick }: ChildProps) => {
  console.log('ChildComponent function started');

  const [count, setCount] = useState(0);

  useEffect(() => {
    async function expensiveFunction() {
      const p = new Promise<void>((resolve) => {
        const timeoutId = setTimeout(() => {
          console.log('finished expensive process');
          setCount(count + 100);
          resolve();
        }, 5000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
      });
      await p;
    }

    console.log(`Count on render: ${count}`);
    let timeoutId: NodeJS.Timeout;
    expensiveFunction();

    // Cleanup function to clear the timeout
    return () => {
      console.log('cleanup ChildComponent');
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <h1>Child Count: {count}</h1>
      <button onClick={onClick}>Click child</button>
    </div>
  );
});
