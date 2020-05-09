import React from 'react';
import { FollowersDiv, FollowerCard, FollowerImg } from './AppStyles';

class Followers extends React.Component {
  render() {
    console.log('this.props.followers', this.props.followers)
    return (
        <FollowersDiv>
          {this.props.followers.map(follower => {
            return(
              <FollowerCard>
                <FollowerImg src={follower.avatar_url}></FollowerImg>
                <p>{follower.login}</p>
              </FollowerCard>
            )
          })}
        </FollowersDiv>
    );
  }
}

export default Followers;
