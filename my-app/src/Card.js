import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>{this.props.cardInfo.login} </h3>
        {/* <h4>{this.props.followersInfo.login} </h4> */}
      </div>
    );
  }
}
