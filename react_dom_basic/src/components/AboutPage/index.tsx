import React from 'react';

// typescript routeProps interface
import { RouteComponentProps } from 'react-router-dom';

interface AboutPageRouteParams {
  username: string;
}

// type AboutPageProps = RouteComponentProps<AboutPageRouteParams>;

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1> About Page </h1>
        {/* <p>Name: {this.props.match.params.username}</p> */}
      </div>
    );
  }
}

export default AboutPage;
