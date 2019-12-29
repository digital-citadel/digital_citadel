import React from "react";
import { MDBTypography } from "mdbreact";

const WhoAreWeText = () => {
  return (
    <div className='col-md-4 offset-1 text-right'>
      <div style={{ marginTop: "2vh" }}>
        <p style={{ color: "#BEBABA" }}>
          <MDBTypography
            tag='h3'
            variant='h3-responsive'
            className='text-right'
            style={{ paddingTop: "8vh", color: "#E37373" }}
          >
            Who are we?
          </MDBTypography>
        </p>
        <p style={{ color: "#BEBABA" }}>
          A group of Designers and Computer Engineers based in Germany and
          India, having ourselves equipped with skillsets ready to bring pretty
          much any idea to life. <br /> <br />
          We don’t hesitate to push that extra pixel onto our design or refactor
          that bit of extra code. We are all about providing quality consumer
          experience and bringing success to complex problems.
        </p>
      </div>
    </div>
  );
};

export default WhoAreWeText;