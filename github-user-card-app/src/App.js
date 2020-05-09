import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import Followers from './components/Followers';

class App extends React.Component {
  state = {
    user: [],
    followers: [],
    error: ''
  }

  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} />
        <Followers followers={this.state.followers} />
      </div>
    );
  }

  componentDidMount() {
    fetch('https://api.github.com/users/dcornelison1216')
      .then(res => res.json())
      .then(data => {
        if(data.status === 'error') {
          this.setState({ error: data.message });
        } else {
          this.setState({ user: data });
        }
      })
      .catch(err => {
        console.error('fetch failed', err);
        this.setState({ error: err });
      });
    fetch('https://api.github.com/users/dcornelison1216/followers')
      .then(res => res.json())
      .then(followers => {
        console.log('followers', followers);
        if(followers.status === 'error') {
          this.setState({ error: followers.message});
        } else {
          this.setState({ followers: followers})
        }
      })
      .catch(err => {
        console.error('fetch failed', err);
        this.setState({ error: err })
      });
  }

}

export default App;
