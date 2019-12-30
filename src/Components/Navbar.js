import React, { Component } from "react";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBSmoothScroll
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
                  <MDBSmoothScroll to='home'>Home</MDBSmoothScroll>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  <MDBSmoothScroll to='about_us'>About Us</MDBSmoothScroll>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  <MDBSmoothScroll to='services'>Services</MDBSmoothScroll>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  <MDBSmoothScroll to='the_team'>The Team</MDBSmoothScroll>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  <MDBSmoothScroll to='contact_us'>Contact Us</MDBSmoothScroll>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  <MDBSmoothScroll to='join_us'>Join Us</MDBSmoothScroll>
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
