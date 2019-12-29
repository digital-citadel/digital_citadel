import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const ContactFormComponent = () => {
  return (
    <div className='row col-md-8'>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <form>
              <p className='h5 text-center mb-4' style={{ color: "#A87293" }}>
                Just fill out this simple form
              </p>
              <label
                htmlFor='defaultFormContactNameEx'
                style={{ color: "#A87293" }}
              >
                Your name
              </label>
              <input
                type='text'
                id='defaultFormContactNameEx'
                className='form-control'
                style={{
                  backgroundColor: "#0D0B34",
                  border: "1px solid #4285F4"
                }}
              />
              <br />
              <label
                htmlFor='defaultFormContactEmailEx'
                style={{ color: "#A87293" }}
              >
                Your email
              </label>
              <input
                type='email'
                id='defaultFormContactEmailEx'
                className='form-control'
                style={{
                  backgroundColor: "#0D0B34",
                  border: "1px solid #4285F4"
                }}
              />
              <br />
              <label
                htmlFor='defaultFormContactSubjectEx'
                cstyle={{ color: "#E37373" }}
                style={{ color: "#A87293" }}
              >
                Subject
              </label>
              <input
                type='text'
                id='defaultFormContactSubjectEx'
                className='form-control'
                style={{
                  backgroundColor: "#0D0B34",
                  border: "1px solid #4285F4"
                }}
              />
              <br />
              <label
                htmlFor='defaultFormContactMessageEx'
                style={{ color: "#A87293" }}
              >
                Your message
              </label>
              <textarea
                type='text'
                id='defaultFormContactMessageEx'
                className='form-control'
                rows='3'
                style={{
                  backgroundColor: "#0D0B34",
                  border: "1px solid #4285F4"
                }}
              />
              <div className='text-center mt-4'>
                <button
                  type='button'
                  class='btn btn-rounded'
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "#E37373",
                    width: "200px",
                    height: "45px"
                  }}
                >
                  Submit Message
                </button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ContactFormComponent;
