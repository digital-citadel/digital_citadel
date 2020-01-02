import React from "react";
import { MDBAnimation } from "mdbreact";

const APIllustration = () => {
  return (
    <div className='col-md-6 col-xs-12 col-sm-12'>
      <MDBAnimation reveal type='bounceInLeft' duration='2s'>
        <img
          alt='Start-up'
          style={{
            width: "100%",
            height: "420px",
            marginTop: "4vh",
            marginLeft: "4vw"
          }}
          src={require("../Assets/undraw_team_spirit_hrr4.svg")}
        />
      </MDBAnimation>
    </div>
  );
};

export default APIllustration;
