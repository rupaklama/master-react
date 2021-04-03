import React from 'react';
// import axios from 'axios';

interface CounterManagementProps {
  ownerName: string;
}

interface CounterManagementState {
  counter: number;
  users: string[];
}

class CounterManagement extends React.Component<
  CounterManagementProps,
  CounterManagementState
> {
  state = {
    counter: 0,
    users: [],
  };

  handleAddClick = () => {
    // 'first parameter' can be a function or an object
    this.setState(
      prevState => {
        // first parameter can be a function or an object to update a state
        // first parameter as a function should be used if we want to update based on the previous state
        return {
          counter: prevState.counter + 1,
        };
      },
      // Second parameter is a callback function
      // If we want to do something after we update the state, use this callback func
      () => {
        console.log('callback function');
      }
    );

    // this.setState({ counter: this.state.counter + 1 });
    // this.setState({ counter: this.state.counter + 1 });
    // All multiple calls may be batch for performance gain
    // all the above setState functions will be called ONCE only to boost performance
    // Only the last setState function's value is stored since it's last one inline to get execute
  };

  handleMinusClick = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  // NOTE - Executed before initial render
  // static getDerivedStateFromProps - method exists for rare use cases where the state depends on props
  // static getDerivedStateFromProps(
  //   props: CounterManagementProps,
  //   state: CounterManagementState
  // ) {
  //   console.log('getDerivedStateFromProps');

  //   // whatever the value is returned is going to be the value of our state
  //   // if we don't want to update the value of our state, we will just return - null
  //   return null;
  //   // return props.ownerName === 'Rupak' ? { counter: 5 } : null;
  //   //  counter: 5 - value will never change, its consistent always
  // }

  // // event listener function
  // clickWindow = () => {
  //   console.log('clickWindow Event occur');
  //   this.setState({ counter: this.state.counter + 1 });
  // };

  // // gets call after initial render when react updates the DOM and Refs
  // componentDidMount() {
  //   console.log('componentDidMount');
  //   axios.get('https://reqres.in/api/users?page=2').then(response => {
  //     const data = response.data;

  //     const users = data.data.map((user: any) => user.first_name);
  //     this.setState({ users: users });
  //   });

  //   window.addEventListener('click', this.clickWindow);
  // }

  // // clean up function
  // componentWillUnmount() {
  //   window.removeEventListener('click', this.clickWindow);
  // }

  // Note - all the functions for Updating lifecycle of a component

  // when state depends on props
  static getDerivedStateFromProps(
    props: CounterManagementProps,
    state: CounterManagementState
  ) {
    console.log('getDerivedStateFromProps');

    return null;
  }

  // if there's been change in props and state
  shouldComponentUpdate(
    nextProps: CounterManagementProps,
    nextState: CounterManagementState
  ) {
    console.log('shouldComponentUpdate');

    // if counter is less than 5, do re-render
    // return this.state.counter < 5;
    return true;
  }

  // to capture some information from the DOM to render on initial render before
  // react updated the DOM again
  getSnapshotBeforeUpdate(
    prevProps: CounterManagementProps,
    prevState: CounterManagementState
  ) {
    console.log('getSnapshotBeforeUpdate');

    return { scrollPosition: '152px' };
  }

  // We will do stuffs here when our Component gets Updated
  // Invoked immediately after updating occurs
  componentDidUpdate(
    prevProps: CounterManagementProps,
    prevState: CounterManagementState,
    snapshot: any
  ) {
    console.log('componentDidUpdate');
    console.log('snapshot:', snapshot);
    // NOTE - make sure to wrap in a condition to prevent unlimited loop
    // if(prevState.user !== this.state.user) {
    //   this.fetchUserData()
    // }
  }

  render() {
    const { ownerName } = this.props;
    const { counter, users } = this.state;

    console.log('render');

    return (
      <div>
        <h3>Counter Management</h3>
        <p>Owner Name: {ownerName} </p>
        <p>Counter: {counter} </p>

        <button onClick={this.handleAddClick}>Add</button>
        <button onClick={this.handleMinusClick}>Minus</button>

        <ul>
          {users.map(user => (
            <li>{user}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CounterManagement;
