import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import styled from "styled-components";

const Pic = styled.img`
  height: 150px;
  width: 150px;
`;

const Div = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: lightblue;
  color: white;
  border: 3px solid yellow;
`;

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Div>
          <Pic src={this.props.cardInfo.avatar_url} />

          <h3> {this.props.cardInfo.login}</h3>
          <h3>{this.props.cardInfo.company}</h3>

          <ListGroup className="list-group-flush">
            <ListGroupItem>{this.props.cardInfo.location}</ListGroupItem>
          </ListGroup>
        </Div>
      </Wrapper>
    );
  }
}

{
  /* <h3>{this.props.cardInfo.login} </h3>
        <h4>{this.props.followersInfo.login} </h4> */
}
