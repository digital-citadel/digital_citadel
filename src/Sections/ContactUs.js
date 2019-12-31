import React, { Component } from "react";
import { MDBTypography, MDBContainer, MDBAnimation } from "mdbreact";
import CUTextComponent from "../Components/CUTextComponent";
import CUIllustration from "../Components/CUIllustration";
import CUFormComponent from "../Components/CUFormComponent";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id='contact_us' className='background-5'>
        <MDBContainer fluid>
          <MDBAnimation reveal type='zoomIn' duration='1s'>
            <MDBTypography
              tag='h3'
              variant='h3-responsive'
              className='text-center font_bold font_size_title'
              style={{ paddingTop: "8vh", color: "#E37373" }}
            >
              Contact Us
            </MDBTypography>
            <CUTextComponent />
            <div className='row col-md-12' style={{ margin: "0" }}>
              <CUIllustration />
              <CUFormComponent />
            </div>
          </MDBAnimation>
        </MDBContainer>
      </section>
    );
  }
}

export default ContactUs;
