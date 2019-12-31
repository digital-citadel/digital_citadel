import React from "react";
import { MDBAnimation } from "mdbreact";

const CUIllustration = () => {
  return (
    <div className='col-md-6'>
      <MDBAnimation reveal type='fadeInLeft' duration='2s'>
        <img
          alt='Start-up'
          style={{}}
          className='responsive-contact-img'
          src='https://raw.githubusercontent.com/digital-citadel/digital_citadel/master/src/Assets/Messaging.png'
        />
      </MDBAnimation>
    </div>
  );
};

export default CUIllustration;
