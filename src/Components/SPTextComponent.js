import React from "react";
import { MDBAnimation } from "mdbreact";

const SPTextComponent = () => {
  return (
    <div className='col-md-12 text-center'>
      <div style={{ marginTop: "2vh" }}>
        <MDBAnimation reveal type='zoomIn' duration='2s'>
          <p style={{ color: "#E5EFFF" }}>
            From Ideation to Administration, our mixture of Innovative Thinking,
            Scientific Research, Design & <br />
            Development and Marketing & Maintenance, will have you covered from
            path to purpose.
          </p>
          <p style={{ color: "#E5EFFF" }}>
            Explore our comprehensive range of services. We flex to make you
            fit.
          </p>
        </MDBAnimation>
      </div>
    </div>
  );
};

export default SPTextComponent;
