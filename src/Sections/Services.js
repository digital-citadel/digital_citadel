import React, { Component } from "react";
import { MDBTypography, MDBContainer, MDBAnimation } from "mdbreact";
import SPTextComponent from "../Components/SPTextComponent";
import SPCardComponent from "../Components/SPCardComponent";
import servicedata from "../servicedata";
export default class Services extends Component {
  state = {
    services: []
  };
  componentDidMount() {
    let services = servicedata;
    this.setState({
      services
    });
  }
  render() {
    let ser = this.state.services.map(service => {
      return <SPCardComponent service={service} />;
    });
    return (
      <section id='services' className='background-3'>
        <MDBContainer fluid>
          <MDBAnimation reveal type='zoomIn' duration='1s'>
            <MDBTypography
              tag='h3'
              variant='h3-responsive'
              className='text-center font_bold '
              style={{ paddingTop: "8vh", color: "#E37373" }}
            >
              Services
            </MDBTypography>
          </MDBAnimation>

          <SPTextComponent />
          <MDBAnimation reveal type='zoomIn' duration='2s'>
            <div
              className='row col-md-12'
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0"
              }}
            >
              {ser}
            </div>
          </MDBAnimation>
        </MDBContainer>
      </section>
    );
  }
}
