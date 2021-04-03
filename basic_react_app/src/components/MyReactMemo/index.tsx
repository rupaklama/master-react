import React from 'react';

export interface MyReactMemoProps {
  name: string;
  address: {
    city: string;
    state: string;
  };
}

// React.memo does Shallow Props checking to determine if it needs to re-render or not
// that is how it detect changes in the props due to Shallow Props checking
const MyReactMemo: React.FC<MyReactMemoProps> = ({ name, address }) => {
  console.log('MyReactMemo render');
  return (
    <>
      <h1>My React Memo</h1>
      <h2> Name: {name} </h2>
      <h3> City: {address.city} </h3>
      <h3> State: {address.state} </h3>
    </>
  );
};

// applying compare function as a second param in React.memo
// to do our own custom comparison to compare prevProps & nextProps
export default React.memo<MyReactMemoProps>(
  MyReactMemo
  //   (prevProps, nextProps) => {}
);
