import React from "react";
import axios from "axios";
import Cards from "./Card";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
`;

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

        console.log(this.state.followersInfo);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1> Git Hub Cards </h1>
        <Div>
          <Cards cardInfo={this.state.cardInfo} />
          {this.state.followersInfo.map((item) => (
            <Cards key={item} cardInfo={item} />
          ))}
        </Div>
      </div>
    );
  }
}
