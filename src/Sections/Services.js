import React, { Component } from 'react';
import { MDBTypography, MDBContainer } from "mdbreact";
import SPTextComponent from '../Components/SPTextComponent';
import SPCardComponent from '../Components/SPCardComponent';
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
          <div className='row col-md-12' style={{ display:"flex", justifyContent:"center", alignItems:"center", padding: "0 13%"}}>{ser}</div>
        </MDBContainer>
      </section>
        )
    }
}
