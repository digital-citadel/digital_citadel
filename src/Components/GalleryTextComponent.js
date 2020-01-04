import React from "react";
import { MDBAnimation } from "mdbreact";

const GalleryTextComponent = () => {
  return (
    <div className='col-md-12 text-center'>
      <div style={{ marginTop: "2vh" }}>
        <MDBAnimation reveal type='zoomIn' duration='2s'>
          <p style={{ color: "#E5EFFF" }}>
            Our Designers keep themselves busy learning and implementing the
            latest design trends in the market. <br />
            They undergo intensive design trainings and online turorials to make
            sure they don't fall behind, <br />
            in updating themselves with new design skillsets and tools.
          </p>
          <p style={{ color: "#E5EFFF" }}>
            Have a look at some of their sample work that involves designs
            related to both Web and Mobile.
          </p>
        </MDBAnimation>
      </div>
    </div>
  );
};

export default GalleryTextComponent;
