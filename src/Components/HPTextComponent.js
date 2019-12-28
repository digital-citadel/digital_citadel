import React from "react";

const HPTextComponent = () => {
  return (
    <div className='col-md-6'>
      <div style={{ marginTop: "15vh", marginLeft: "10vw" }}>
        <h1 style={{ color: "#E5EFFF" }} class='h1-responsive'>
          Creating Impactful Digital
        </h1>
        <h1 style={{ color: "#E5EFFF" }} class='h1-responsive'>
          Solutions for Clients and
        </h1>
        <h1 style={{ color: "#E5EFFF" }} class='h1-responsive'>
          Common People
        </h1>
      </div>
      <div style={{ marginLeft: "10vw" }}>
        <p style={{ color: "#E5EFFF" }}>
          Need a digital identity for yourself? Want to showcase your talent and
          put the world in awe? Need to impress your customers with eye-catching
          digital content and illustrations? Well, You are in the right place
          and we have you covered.
        </p>
        <p style={{ color: "#E5EFFF" }}>
          Let us build something meaningful and valuable together.
        </p>
      </div>
      <button
        type='button'
        class='btn btn-rounded'
        style={{
          color: "#FFFFFF",
          backgroundColor: "#E37373",
          marginLeft: "10vw",
          width: "170px",
          height: "50px"
        }}
      >
        Find out more
      </button>
    </div>
  );
};

export default HPTextComponent;