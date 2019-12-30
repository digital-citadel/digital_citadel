import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from "mdbreact";

class Navbar extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <MDBContainer fluid>
        <MDBNavbar
          color='#0D0B34'
          dark
          expand='md'
          style={{ marginTop: "20px" }}
        >
          <MDBNavbarBrand>
            {/* <img
              alt='Start-up'
              style={{
                width: "60px",
                height: "30px"
                // marginTop: "10vh",
                // marginLeft: "4vw"
              }}
              src={require("../Assets/DC.png")}
            /> */}
            <strong style={{ color: "#E37373", marginLeft: "" }}>
              Digital Citadel
            </strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <MDBCollapse
            id='navbarCollapse3'
            isOpen={this.state.collapseID}
            navbar
          >
            <MDBNavbarNav right style={{ marginRight: "2vw" }}>
              <MDBNavItem style={{ color: "#E37373" }}>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  Home
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  About Us
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  Services
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  The Team
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  Contact Us
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  Join Us
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </MDBContainer>
    );
  }
}

export default Navbar;
