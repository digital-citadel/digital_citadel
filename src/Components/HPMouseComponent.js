import React from "react";
import { MDBIcon, MDBAnimation } from "mdbreact";

const HPMouseComponent = () => {
  return (
    <div
      className='col-md-12 d-none d-sm-block text-center'
      style={{ padding: "5vh" }}
    >
      <div>
        <MDBAnimation type='bounce' infinite duration='2s' delay='2s'>
          <MDBIcon
            style={{
              marginTop: "5vh",
              color: "#4285F4",
              right: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            icon='mouse'
            size='2x'
          />
          <p
            className='text-center'
            style={{ color: "#4285F4", marginTop: "10px" }}
          >
            Or Scroll Down
          </p>
        </MDBAnimation>
      </div>
    </div>
  );
};

export default HPMouseComponent;
