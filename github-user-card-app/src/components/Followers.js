import React from 'react';
import { FollowersDiv, FollowerCard, FollowerImg } from './AppStyles';

class Followers extends React.Component {
  render() {
    return (
        <FollowersDiv>
          {this.props.followers.map(follower => {
            return(
              <FollowerCard key={follower.url}>
                <FollowerImg src={follower.avatar_url}></FollowerImg>
                <p>username: {follower.login}</p>
                <p>Location: {follower.location}</p>
                <a href={follower.url}>{follower.login}'s Github</a>
              </FollowerCard>
            )
          })}
        </FollowersDiv>
    );
  }
}

export default Followers;
