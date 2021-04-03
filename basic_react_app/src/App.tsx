import React from 'react';

import './App.css';
import HomePage from './components/HomePage';

interface AppState {
  change?: boolean;
}

class App extends React.Component<AppState> {
  // inputRef: HTMLInputElement | null;

  // super() will calls the constructor of its parent class.
  // This is required when you need to access some variables from the parent class.
  // In React, when you call super with props.
  // React will make props available across the component through this.props
  // constructor(props: {}) {
  //   super(props);

  //   this.inputRef = null;
  // }

  // componentDidMount() {
  //   console.log(this.inputRef);
  //   this.inputRef && this.inputRef.focus();
  // }

  // using Callback refs by passing html element as a param
  // React will call the ref callback with the DOM element when the
  // component mounts and call it with 'null' when it un-mounts
  // getInputRef = (element: HTMLInputElement) => {
  //   this.inputRef = element;
  // };

  // Note - using React.createRef and passing it to an element or component
  // inputRef: React.RefObject<HTMLInputElement>;
  // constructor(props: {}) {
  //   super(props);

  //   this.inputRef = React.createRef();
  // }

  // componentDidMount() {
  //   console.log(this.inputRef.current);
  //   this.inputRef.current && this.inputRef.current.focus();
  // }
  render() {
    return (
      <div className='App'>
        <h1>Basic React</h1>

        {/* <input ref={this.inputRef} /> */}
        <HomePage />
      </div>
    );
  }
}

export default App;
