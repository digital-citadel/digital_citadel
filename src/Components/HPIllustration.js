import React from "react";
import { MDBAnimation } from "mdbreact";

const HPIllustration = () => {
  return (
    <div className='col-md-6 col-xs-12 col-sm-12'>
      <MDBAnimation type='slideInRight' duration='2s'>
        <img
          alt='Start-up'
          style={{
            width: "100%",
            height: "420px",
            marginTop: "10vh",
            marginLeft: "4vw"
          }}
          src={require("../Assets/undraw_startup_life_2du2.svg")}
        />
      </MDBAnimation>
    </div>
  );
};

export default HPIllustration;
