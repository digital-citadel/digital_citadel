import React from "react";
import { MDBAnimation } from "mdbreact";

const TeamTextComponent = () => {
  return (
    <div className='col-md-12 text-center'>
      <div style={{ marginTop: "2vh" }}>
        <MDBAnimation reveal type='zoomIn' duration='2s'>
          <p style={{ color: "#E5EFFF" }}>
            We are sincere and think straight forward. We are all like-minded
            and enjoy working together.
            <br /> We have had an amazing journey in being where we are right
            now.
          </p>
          <p style={{ color: "#E5EFFF" }}>
            We have extensive skills and can bring a lot more to the table than
            what is expected.
            <br /> Have a look at our careers, bio and achievements.
          </p>
        </MDBAnimation>
      </div>
    </div>
  );
};

export default TeamTextComponent;
