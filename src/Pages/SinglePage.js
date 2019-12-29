import React, { Component } from "react";
import Home from "../Sections/Home";
import Aboutus from "../Sections/Aboutus";
import Services from "../Sections/Services";
class SinglePage extends Component {
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
      </div>
    );
  }
}

export default SinglePage;
