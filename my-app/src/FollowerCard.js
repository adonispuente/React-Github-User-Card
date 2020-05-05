import React from "react";

export default class FollowerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <h4>{this.props.followerInfo.login} </h4> */}
        <h1>{this.props.followersInfo.login} </h1>
      </div>
    );
  }
}
