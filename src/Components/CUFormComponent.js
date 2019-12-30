import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class CUFormComponent extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className='col-md-6'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='10' style= {{ marginTop: '20px'}}>
              <form
                onSubmit={this.submitForm}
                action='https://formspree.io/mpzqowjw'
                method='POST'
              >
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
                  required
                />
                <br />
                <label
                  htmlFor='defaultFormContactEmailEx'
                  style={{ color: "#A87293" }}
                >
                  Your email
                </label>
                <input
                  name='email'
                  type='email'
                  id='defaultFormContactEmailEx'
                  className='form-control'
                  style={{
                    backgroundColor: "#0D0B34",
                    border: "1px solid #4285F4"
                  }}
                  required
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
                  name='subject'
                  id='defaultFormContactSubjectEx'
                  className='form-control'
                  style={{
                    backgroundColor: "#0D0B34",
                    border: "1px solid #4285F4"
                  }}
                  required
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
                  name='message'
                  id='defaultFormContactMessageEx'
                  className='form-control'
                  rows='3'
                  style={{
                    backgroundColor: "#0D0B34",
                    border: "1px solid #4285F4"
                  }}
                  required
                />
                {status === "SUCCESS" ? (
                  <div className='text-center mt-4'>
                    <p style={{ color: "white" }}>
                      Thanks for your message. We will get back to you ASAP!
                    </p>
                    <button
                      type='submit'
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
                ) : (
                  <div className='text-center mt-4'>
                    <button
                      type='submit'
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
                )}
                {status === "ERROR" && (
                  <p>Ooops! There was an error sending your message.</p>
                )}
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default CUFormComponent;
