import React, { Component } from "react";
import styled from "styled-components";

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
    collapseID: "",
    show: true,
    scrollPos: 0
  };
  constructor(props) {
    super(props);
    this.state = {
      collapseID: "",
      show: true,
      scrollPos: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }


  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos
    });
  }


  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <Transition>
        <StyledNavbar className={this.state.show ? "active" : "hidden"}>

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

        </StyledNavbar>
      </Transition>
    );
  }
}
const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;
const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  background: #0d0b34;
  z-index: 1000;

`;

export default Navbar;
