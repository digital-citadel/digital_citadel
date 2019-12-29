import React from "react";
import { MDBIcon } from "mdbreact";

const HPMouseComponent = () => {
  return (
    <div className='col-md-12 text-center' style={{ padding: "9vh 0 0 2vw" }}>
      <div>
        <MDBIcon
          style={{
            marginTop: "9vh",
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
          style={{ color: "#4285F4", marginTop: "10px", marginBottom: "0" }}
        >
          Scroll Down
        </p>
      </div>
    </div>
  );
};

export default HPMouseComponent;
