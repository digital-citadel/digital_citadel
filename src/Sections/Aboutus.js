import React, { Component } from "react";
import { MDBTypography } from "mdbreact";
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
      <section id='about_us'>
        <div className='col-md-12 col-xs-12'>
          <MDBTypography
            tag='h3'
            variant='h3-responsive'
            className='text-center font_bold font_size_title'
            style={{ paddingTop: "4vh", color: "#E37373" }}
          >
            About Us
          </MDBTypography>
          <APTextComponent />
          <div className='row col-md-12 col-xs-12'>
            <APIllustration />
            <WhoAreWeText />
          </div>
        </div>
      </section>
    );
  }
}

export default Aboutus;
