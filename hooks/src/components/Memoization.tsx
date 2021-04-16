import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { Button } from './Button';

const Memoization: React.FC = () => {
  const [counter, setCounter] = useState(0);

  // useLayoutEffect vs useEffect - both works pretty much the same way but there some differences
  // Most of the time you want plain old 'useEffect'

  // useEffect runs asynchronously and after a render is painted to the screen - non blocking
  // useEffect(() => {
  //   // set counter value to 5 on initial page load
  //   if (counter === 0) {
  //     setCounter(5);
  //   }
  //   // note - first we render value 0 & then 5 - causes flickering of values
  // });

  // useLayoutEffect runs synchronously after a render but before the screen is updated - blocking
  // Updates scheduled inside will be flushed synchronously meaning initial value like 0 in below
  // is not displayed in the DOM. The counter is updated first and then displayed in the UI.
  // useLayoutEffect(() => {
  //   // Note - no flickering in the UI
  //   if (counter === 0) {
  //     setCounter(5);
  //   }
  // });

  // useCallback hook to Memoize the Function to get One Copy of same Object Reference or
  // to create a Scope where this function only references the OLD VALUE of the counter in the memory
  // note - When we Memoize the function initially,
  // it will actually contain the 'previous value' of the counter in the memory
  const handleButtonClick = useCallback(() => {
    console.log('counter', counter);
    // setCounter(prevState => prevState + 1);
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div className='App'>
      <p>Counter: {counter}</p>
      <Button onClick={handleButtonClick} />
      {/* <button onClick={handleButtonClick}>Add Value</button> */}
    </div>
  );
};

export default Memoization;
