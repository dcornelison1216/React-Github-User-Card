import React from 'react';
import { MainCard, UserImg } from './AppStyles';

class UserCard extends React.Component {
  render() {
    return (
      <MainCard>
        <UserImg src={this.props.user.avatar_url}></UserImg>
        <p>username: {this.props.user.login}</p>
        <p>Location: {this.props.user.location}</p>
        <a href={this.props.user.url}>{this.props.user.login}'s Github</a>

      </MainCard>
    );
  }
}

export default UserCard;
