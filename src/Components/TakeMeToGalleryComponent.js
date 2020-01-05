import React from "react";
import { MDBAnimation, MDBTypography, MDBNavLink } from "mdbreact";

const TakeMeToGalleryComponent = () => {
  return (
    <div className='col-md-12 text-center'>
      <div style={{ marginTop: "2vh" }}>
        <MDBAnimation reveal type='zoomIn' duration='1s'>
          <MDBTypography
            tag='h3'
            variant='h3-responsive'
            className='text-center font_bold font_size_title'
            style={{ paddingTop: "8vh", color: "#E37373" }}
          >
            Gallery
          </MDBTypography>
          <p style={{ color: "#E5EFFF" }}>
            Have a look at some of our projects and designs and decide for
            yourself <br /> if we are worth the time you wish to invest upon!
          </p>

          <button
            class='btn btn-rounded'
            style={{
              color: "#FFFFFF",
              backgroundColor: "#E37373",
              padding: "5px 10px"
            }}
          >
            <MDBNavLink
              style={{
                color: "#FFFFFF"
              }}
              exact
              to='/gallery'
            >
              Take me there!
            </MDBNavLink>
          </button>
        </MDBAnimation>
      </div>
    </div>
  );
};

export default TakeMeToGalleryComponent;
