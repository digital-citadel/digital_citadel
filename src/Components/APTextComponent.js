import React from "react";
import { MDBAnimation } from "mdbreact";

const APTextComponent = () => {
  return (
    <div className='col-md-12 text-center'>
      <div style={{ marginTop: "2vh" }}>
        <MDBAnimation reveal type='zoomIn' duration='1s' delay='1s'>
          <p style={{ color: "#E5EFFF" }}>
            With the internet and the media growing the way it is, at Digital
            Citadel, we believe everyone deserves <br /> to have their presence
            and ideas online. We help people do this in ways other people don’t.
          </p>
          <p style={{ color: "#E5EFFF" }}>
            We understand your problems and make sure they are as important to
            us as they are to you. <br />
            We craft end to end solutions and ensure a wonderful user experience
          </p>
        </MDBAnimation>
      </div>
    </div>
  );
};

export default APTextComponent;
