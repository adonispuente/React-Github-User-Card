import React from "react";
import axios from "axios";
import Card from "./Card";
import FollowerCard from "./FollowerCard";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardInfo: [],
      followersInfo: [],
    };
  }
  componentDidMount() {
    this.grabData();
    this.grabFollowers();
  }

  grabData = () => {
    axios
      .get("https://api.github.com/users/adonispuente")
      .then((res) => {
        console.log(res.data);
        this.setState({
          cardInfo: res.data,
        });

        // console.log(this.state.cardInfo);
      })
      .catch((err) => console.log(err));
  };

  grabFollowers = () => {
    axios
      .get("https://api.github.com/users/adonispuente/followers")
      .then((res) => {
        console.log(res.data);
        this.setState({
          followersInfo: res.data,
        });

        // console.log(this.state.followersInfo);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1> Git Hub Cards </h1>
        <Card cardInfo={this.state.cardInfo} />
        {this.state.followersInfo.map((item) => (
          <Card key={item} cardInfo={item} />
        ))}
      </div>
    );
  }
}
