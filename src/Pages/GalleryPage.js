import React, { Component } from "react";
import { MDBContainer, MDBAnimation } from "mdbreact";
import Gallery from "../Sections/Gallery";

class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className='background-4'>
        <MDBContainer fluid>
          <MDBAnimation reveal type='zoomIn' duration='2s'>
            <Gallery />
          </MDBAnimation>
        </MDBContainer>
      </section>
    );
  }
}

export default GalleryPage;
