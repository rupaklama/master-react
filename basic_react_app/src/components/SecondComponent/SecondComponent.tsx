import React, { ErrorInfo } from 'react';

class SecondComponent extends React.Component {
  render() {
    // note- throwing error within from Child component for life-cycling Error handling
    throw new Error('Planned Error');
    return (
      <React.Fragment>
        <h1>Second Component</h1>
      </React.Fragment>
    );
  }
}

export default SecondComponent;
