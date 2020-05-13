import React from 'react';
import { MainCard, Img } from './AppStyles';

class UserCard extends React.Component {
  render() {
    return (
      <MainCard>
        <Img src={this.props.user.avatar_url}></Img>
        <p>username: {this.props.user.login}</p>
        <p>Location: {this.props.user.location}</p>
        <a href={this.props.user.html_url}>{this.props.user.login}'s Github</a>

      </MainCard>
    );
  }
}

export default UserCard;
