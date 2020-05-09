import React from 'react';
import { FollowersDiv, FollowerCard, Img } from './AppStyles';

class Followers extends React.Component {
  render() {
    console.log(this.props.followers)
    return (
        <FollowersDiv>
          {this.props.followers.map(follower => {
            return(
              <FollowerCard key={follower.url} className="follower-card">
                <Img src={follower.avatar_url}></Img>
                <p>{follower.login}</p>
                <a href={follower.html_url}>{follower.login}'s Github</a>
              </FollowerCard>
            )
          })}
        </FollowersDiv>
    );
  }
}

export default Followers;
