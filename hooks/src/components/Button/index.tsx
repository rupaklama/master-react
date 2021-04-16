import React, { useRef, useEffect, useDebugValue } from 'react';
import { ButtonProps } from './interface';

// React Memo is used to wrap React components to prevent re-renderings
export const Button = React.memo<ButtonProps>(({ onClick }) => {
  // To access DOM Elements, null - default value
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  // console.log(buttonRef.current); button element

  // To reference a value in a variable
  const instanceVariable = useRef(0);
  console.log(instanceVariable);

  useEffect(() => {
    // on initial render calculate & display the value
    instanceVariable.current += 1;
    console.log('useEffect render');
  }, []);

  console.log('Button re-render');

  return (
    <div>
      <p>Instance Variable: {instanceVariable.current}</p>
      <button ref={buttonRef} onClick={onClick}>
        Add Value
      </button>
    </div>
  );
});
