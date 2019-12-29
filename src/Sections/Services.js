import React, { Component } from 'react';
import { MDBTypography, MDBContainer } from "mdbreact";
import SPTextComponent from '../Components/SPTextComponent';
import SPCardComponent from '../Components/SPCardComponent';
export default class Services extends Component {
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
            Services
          </MDBTypography>
          <SPTextComponent />
          <SPCardComponent />
        </MDBContainer>
      </section>
        )
    }
}
