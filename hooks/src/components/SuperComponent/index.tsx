import React, { useEffect, useState } from 'react';

const expensiveCalculateInitialValue = () => {
  console.log('Calculate Initial State');

  return 0;
};

export const SuperComponent: React.FC = () => {
  // Lazy Initial State (lazy state initialization) - to calculate the Value only Once with syntax (() =>)
  // Lazy initializers are useful to improve performance issues
  // const [counter, setCounter] = useState(() => expensiveCalculateInitialValue()); // passing func as arg
  const [counter, setCounter] = useState(expensiveCalculateInitialValue); // pass by not invoking it
  // note - it causes performance problems if 'expensiveCalculateInitialValue' performs
  // a computationally expensive process.
  // To solve the problem described above, you can pass a function which calls initializer as an argument. First one.
  // Else pass initializer to useState without invoking it like

  const [otherValue, setOtherValue] = useState(0);

  // NOTE - Think of useEffect is a combo of componentDidMount, componentDidUpdate & componentWillUnmount
  useEffect(() => {
    console.log('useEffect triggered');
  }, []); // Array Dependency to when to run this effect - to work like componentDidMount

  useEffect(() => {
    console.log('Other value has changed');
  }, [otherValue]); // Dependency Value or prop is like componentDidUpdate

  useEffect(() => {
    window.addEventListener('click', handleButtonClick);
    // clean up function is like componentWillUnmount
    return () => {
      window.removeEventListener('click', handleButtonClick);
    };
  });
  const handleButtonClick = () => {
    // note - useState has performance optimization built in
    // useState checks if the value changes
    // if the value changes, it will trigger the re-render
    // setCounter(0);
    // setCounter(counter + 1);

    setOtherValue(otherValue + 1);

    // both the setCounter func will be invoke, resulting counter value to be 2
    // setCounter(prevState => prevState + 1);
    // setCounter(prevState => prevState + 1);
  };

  console.log('render');

  return (
    <div className='App'>
      <p>Counter: {otherValue}</p>
      <button onClick={handleButtonClick}>Add Value</button>
    </div>
  );
};
