import React, { Component } from "react";
import { MDBTypography, MDBAnimation } from "mdbreact";
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
      <section id='about_us' className='background-2'>
        <div className='col-md-12 col-xs-12'>
          <MDBAnimation reveal type='zoomIn' duration='1s'>
            <MDBTypography
              tag='h3'
              variant='h3-responsive'
              className='text-center font_bold font_size_title'
              style={{ paddingTop: "1vh", color: "#E37373" }}
            >
              About Us
            </MDBTypography>
          </MDBAnimation>

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
