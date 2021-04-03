import React from 'react';
// import EvenComponent from '../EvenComponent';
// import OddComponent from '../OddComponent';
import { HomePageState } from './interface';

// Using Dynamic import syntax for code-splitting
// When Webpack comes across this syntax, it automatically starts code-splitting your
// app and this is setup in Create React App already
const OddComponent = React.lazy(() => import('../OddComponent'));
const EvenComponent = React.lazy(() => import('../EvenComponent'));

class HomePage extends React.Component<{}, HomePageState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      counter: 0,
      hasError: false,
    };
  }

  updateCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    const { counter, hasError } = this.state;

    return (
      <div>
        <h1> Home Page </h1>
        {hasError ? (
          <h1>Error Occurs</h1>
        ) : (
          // should then be rendered inside a Suspense component,
          // which allows us to show some fallback content (such as a loading indicator)
          // while we’re waiting for the lazy component to load
          <React.Suspense fallback={<div>Loading...</div>}>
            {counter % 2 === 0 ? <EvenComponent /> : <OddComponent />}
          </React.Suspense>
        )}
        {this.state.counter} {''}
        <button onClick={this.updateCounter}>Change Component</button>
      </div>
    );
  }
}

export default HomePage;
