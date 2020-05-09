import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import LoadingPage from './components/LoadingPage';

class App extends React.Component {
  state = {
    user: [],
    error: ''
  }

  render() {
    console.log('this.state.user', this.state.user);
    return (
      <div className="App">
        <LoadingPage />
        <UserCard user={this.state.user} />
      </div>
    );
  }

  componentDidMount() {
    fetch('https://api.github.com/users/dcornelison1216')
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
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
  }

}

export default App;
