import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Navbar from "../Components/Navbar";
import HPTextComponent from "../Components/HPTextComponent";
import HPIllustration from "../Components/HPIllustration";
import HPMouseComponent from "../Components/HPMouseComponent";
import TeamCard from "../Components/TeamCard";
import items from "../Sections/data";


export default class Home extends Component {
  render() {
    return (
      <MDBContainer fluid>
        <Navbar />
        <div className='row col-md-12'>
          <HPTextComponent />
          <HPIllustration />
        </div>
        <HPMouseComponent />
        <TeamCard />
      </MDBContainer>
    );
  }
}
