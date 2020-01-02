import React, { Component } from "react";
import Home from "../Sections/Home";
import Aboutus from "../Sections/Aboutus";
import Services from "../Sections/Services";
import Team from "../Sections/Team";
import ContactUs from "../Sections/ContactUs";
import Footer from "../Sections/Footer";
import TakeMeToGalleryComponent from "../Components/TakeMeToGalleryComponent";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Home />
        <Aboutus />
        <Services />
        <Team />
        <TakeMeToGalleryComponent />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
