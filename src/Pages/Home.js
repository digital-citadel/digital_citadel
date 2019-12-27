import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Navbar from "../Components/Navbar";

export default class Home extends Component {
  render() {
    return (
      <MDBContainer fluid color='#0D0B34'>
        <Navbar />
      </MDBContainer>
    );
  }
}
