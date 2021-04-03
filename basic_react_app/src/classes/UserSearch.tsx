import { Component } from 'react';

interface UserSearchProps {
  users: {
    name: string;
    age: number;
  }[];
}

interface UserSearchState {
  name: string;
  user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find(user => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  };

  render() {
    // destructuring state
    const { name, user } = this.state;

    return (
      <div>
        <h3>User Search</h3>
        <input
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>

        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
