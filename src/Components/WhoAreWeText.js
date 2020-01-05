import React from "react";
import { MDBTypography, MDBAnimation } from "mdbreact";

const WhoAreWeText = () => {
  return (
    <div className='col-md-4 offset-1 responsive-center'>
      <div style={{ marginTop: "2vh" }}>
        <p style={{ color: "#E5EFFF" }}>
          <MDBAnimation reveal type='zoomIn' duration='1s'>
            <MDBTypography
              tag='h3'
              variant='h3-responsive'
              className='responsive-center'
              style={{ paddingTop: "8vh", color: "#E37373" }}
            >
              Who are we?
            </MDBTypography>
          </MDBAnimation>
        </p>
        <MDBAnimation reveal type='zoomIn' duration='1s'>
          <p style={{ color: "#E5EFFF" }}>
            A group of Designers and Computer Engineers based in Germany and
            India, having ourselves equipped with skillsets ready to bring
            pretty much any idea to life. <br /> <br />
            We don’t hesitate to push that extra pixel onto our design or
            refactor that bit of extra code. We are all about providing quality
            consumer experience and bringing success to complex problems.
          </p>
        </MDBAnimation>
      </div>
    </div>
  );
};

export default WhoAreWeText;
