import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { MDBContainer } from "mdbreact";
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
          <Gallery />
          <div
            className='col-md-12 text-center'
            style={{ marginTop: "5vh", marginBottom: "5vh" }}
          >
            <button
              class='btn btn-rounded'
              onClick={this.props.history.goBack}
              style={{
                color: "#FFFFFF",
                backgroundColor: "#E37373"
              }}
            >
              Thanks! I've seen enough
            </button>
          </div>
        </MDBContainer>
      </section>
    );
  }
}

export default withRouter(GalleryPage);
