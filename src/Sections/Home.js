import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Navbar from "../Components/Navbar";
import HPTextComponent from "../Components/HPTextComponent";
import HPIllustration from "../Components/HPIllustration";
import HPMouseComponent from "../Components/HPMouseComponent";
import data from "../data";

export default class Home extends Component {
  state = {
    team: []
  };
  componentDidMount() {
    let team = data;
    this.setState({
      team
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <MDBContainer fluid className='no-padding'>
          <section
            id='home'
            className='row col-md-12 col-xs-12 responsive-height background-1 no-margin'
          >
            <HPTextComponent />
            <HPIllustration />
            <HPMouseComponent />
          </section>
        </MDBContainer>
      </div>
    );
  }
}
