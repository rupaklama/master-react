import React, { ErrorInfo } from 'react';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import SecondComponent from '../SecondComponent/SecondComponent';

export interface FirstComponentProps {}

export interface FirstComponentState {
  hasError: boolean;
}

// TODO: Add Error Handling to App Component
class FirstComponent extends React.Component<
  FirstComponentProps,
  FirstComponentState
> {
  constructor(props: FirstComponentProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  // When an Error occurs, this will catch the Error first during the render phase & will render the Error
  // receives the error that was thrown as a parameter and should return a value to update state
  static getDerivedStateFromError(error: Error) {
    console.log('getDerivedStateFromError:', error);

    return {
      hasError: true,
    };
  }

  // When rendering an Error from above then this will be called
  // error – error that was thrown (same with getDerivedStateFromError)
  // info - An object with a componentStack key containing information about which component threw the error
  // Should be used for things like logging errors
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('componentDidCatch:', error);
    console.log('componentDidCatch:', info);
  }

  render() {
    console.log('render');
    return (
      <React.Fragment>
        <h1>First Component</h1>
        {this.state.hasError ? <ErrorComponent /> : <SecondComponent />}
      </React.Fragment>
    );
  }
}

export default FirstComponent;
