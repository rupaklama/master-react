import React from 'react';
import MyReactMemo from '../MyReactMemo';

export interface MyPureComponentProps {}

export interface MyPureComponentState {
  name: string;
  address: {
    city: string;
    state: string;
  };
}

// implements shouldComponentUpdate() with a shallow prop and state checking
// When comparing objects, it does not compare their attributes - only their references are compared
// (e.g. "do they point to same object?").
// Shallow compare is an efficient way to detect changes. It expects you don't mutate data.
class MyPureComponent extends React.PureComponent<
  MyPureComponentProps,
  MyPureComponentState
> {
  constructor(props: MyPureComponentProps) {
    super(props);

    this.state = {
      name: 'Rysh',
      address: {
        city: 'MyCity',
        state: 'MyState',
      },
    };
  }

  handleSetState = () => {
    this.setState({
      name: 'May',
    });

    // Note - this won't work since PureComponent always does Shallow comparison
    // but we can fix this with second paramter 'compare function' of React.Memo
    // Deep copy - always creates a new objects with new memory, deep comparison
    // const newAddress = {
    //   city: 'MyCity',
    //   state: 'MyState',
    // };

    // this.setState({
    //   address: newAddress,
    // });
  };

  render() {
    // console.log('render');
    const { name, address } = this.state;

    return (
      <>
        <h1> Pure Component </h1>
        {/* <h2> Name: {name} </h2>
        <h3> City: {address.city} </h3>
        <h3> State: {address.state} </h3> */}
        <MyReactMemo name={name} address={address} />
        <button onClick={this.handleSetState}>Set State</button>
      </>
    );
  }
}

export default MyPureComponent;
