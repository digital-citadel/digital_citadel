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
            <img
              src='https://raw.githubusercontent.com/digital-citadel/digital_citadel/master/src/Assets/DC_new.png'
              height='40'
              alt='logo'
              style={{ marginRight: "10px", marginLeft: "130px" }}
            />
            <strong
              style={{ color: "#E37373", marginLeft: "" }}
              className='font_bold font_size_title'
            >
              Digital Citadel
            </strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <MDBCollapse
            id='navbarCollapse3'
            isOpen={this.state.collapseID}
            navbar
          >
            <MDBNavbarNav
              right
              style={{ marginRight: "2vw" }}
              className='font_medium'
            >
              <MDBNavItem style={{ color: "#E37373" }}>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  <MDBSmoothScroll to='home' style={{ color: "#E37373" }}>
                    Home
                  </MDBSmoothScroll>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  <MDBSmoothScroll to='about_us' style={{ color: "#E37373" }}>
                    About Us
                  </MDBSmoothScroll>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  <MDBSmoothScroll to='services' style={{ color: "#E37373" }}>
                    Services
                  </MDBSmoothScroll>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  <MDBSmoothScroll
                    to='the_team'
                    style={{ color: "#E37373", fontSize: "1vm" }}
                  >
                    The Team
                  </MDBSmoothScroll>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  <MDBSmoothScroll to='contact_us' style={{ color: "#E37373" }}>
                    Contact Us
                  </MDBSmoothScroll>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#E37373" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  <MDBSmoothScroll to='join_us' style={{ color: "#E37373" }}>
                    Join Us
                  </MDBSmoothScroll>
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
