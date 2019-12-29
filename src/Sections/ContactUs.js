import React, { Component } from "react";
import { MDBTypography, MDBContainer } from "mdbreact";
import CUTextComponent from "../Components/CUTextComponent";
import CUIllustration from "../Components/CUIllustration";
import ContactFormComponent from "../Components/ContactFormComponent";

class ContactUs extends Component {
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
            Contact Us
          </MDBTypography>
          <CUTextComponent />
          <div className='row col-md-12'>
            <CUIllustration />
            <ContactFormComponent />
          </div>
        </MDBContainer>
      </section>
    );
  }
}

export default ContactUs;
