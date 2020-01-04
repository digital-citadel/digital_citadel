import React, { Component } from "react";
import { MDBContainer, MDBAnimation, MDBLink } from "mdbreact";
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
          {/* <MDBAnimation reveal type='zoomIn' duration='2s'> */}
          <Gallery />
          <div
            className='col-md-12 text-center'
            style={{ marginTop: "5vh", marginBottom: "5vh" }}
          >
            <button
              class='btn btn-rounded'
              style={{
                color: "#FFFFFF",
                backgroundColor: "#E37373",
                padding: "5px 10px"
              }}
            >
              <MDBLink
                style={{
                  color: "#FFFFFF"
                }}
                to='/'
              >
                Thanks! I've seen enough
              </MDBLink>
            </button>
          </div>
          {/* </MDBAnimation> */}
        </MDBContainer>
      </section>
    );
  }
}

export default GalleryPage;
