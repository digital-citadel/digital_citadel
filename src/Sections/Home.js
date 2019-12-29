import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Navbar from "../Components/Navbar";
import HPTextComponent from "../Components/HPTextComponent";
import HPIllustration from "../Components/HPIllustration";
import HPMouseComponent from "../Components/HPMouseComponent";

export default class Home extends Component {
  render() {
    return (
      <MDBContainer fluid>
        <Navbar />
        <section className='row col-md-12' style={{ height: "100vh" }}>
          <HPTextComponent />
          <HPIllustration />
          <HPMouseComponent />
        </section>
      </MDBContainer>
    );
  }
}
