import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Navbar from "../Components/Navbar";
import HPTextComponent from "../Components/HPTextComponent";
import HPIllustration from "../Components/HPIllustration";
import HPMouseComponent from "../Components/HPMouseComponent";
import TeamCard from "../Components/TeamCard";
import items from "./data";


export default class Home extends Component {
  render() {
    return (
      <MDBContainer fluid>
        <Navbar />
        <div className='row col-md-12' style={{ height: "100vh" }}>
          <HPTextComponent />
          <HPIllustration />
          <HPMouseComponent />
        </div>
<<<<<<< HEAD:src/Pages/Home.js
        <HPMouseComponent />
        <TeamCard />
=======
>>>>>>> bcc5072b2818a77155d853ae20c1c884a187ba3a:src/Sections/Home.js
      </MDBContainer>
    );
  }
}
