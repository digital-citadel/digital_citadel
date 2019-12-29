import React, { Component } from "react";
import { MDBTypography, MDBContainer } from "mdbreact";
import APTextComponent from "../Components/APTextComponent";
import APIllustration from "../Components/APIllustration";
import WhoAreWeText from "../Components/WhoAreWeText";

class Aboutus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section>
        <MDBContainer fluid>
          <MDBTypography
            tag='h3'
            variant='h3-responsive'
            className='text-center'
            style={{ paddingTop: "8vh", color: "#E37373" }}
          >
            About Us
          </MDBTypography>
          <APTextComponent />
          <div className='row col-md-12'>
            <APIllustration />
            <WhoAreWeText />
          </div>
        </MDBContainer>
      </section>
    );
  }
}

export default Aboutus;
