import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBModal,
  MDBBtn,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
  MDBIcon
} from "mdbreact";

export default class SPCardComponent extends Component {
  state = {
    skills: [],
    modal7: false
  };
  constructor(props) {
    super(props);
    console.log(props.service);
  }
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };
  render() {
    return (
      <div
        className='col-md-6'
        style={{ marginBottom: "25px", marginTop: "25px" }}
      >
        <MDBCard
          className='mb-r'
          style={{
            width: "18rem",
            margin: "auto",
            background: "#021c848a",
            borderRadius: "10px"
          }}
        >
          <MDBCardImage
            className='img-fluid'
            src={this.props.service.images}
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>
              <h4
                className='font-weight-bold mb-3'
                style={{ color: "#e37373" }}
              >
                {this.props.service.title}
              </h4>
            </MDBCardTitle>
            <MDBCardText
              className='font-weight-bold white-text'
              style={{ margin: "0" }}
            >
              {this.props.service.description.map(desc => {
                return (
                  <ul style={{ margin: "auto", paddingLeft: "0" }}>{desc}</ul>
                );
              })}
            </MDBCardText>
            <br />
            <Link
              className='font-weight-bold mb-3'
              style={{ color: "#e37373" }}
              onClick={this.toggle(7)}
            >
              Learn More
            </Link>
            <i
              style={{ color: "#e37373", padding: "10px" }}
              class='fa fa-arrow-right'
              aria-hidden='true'
            ></i>
            <MDBModal
              className='modal-notify modal-info text-white'
              isOpen={this.state.modal7}
              toggle={this.toggle(7)}
            >
              <MDBModalHeader
                className='text-center'
                titleClass='w-100'
                tag='p'
              >
                {this.props.service.title}
              </MDBModalHeader>
              <MDBModalBody className='text-center'>
                <MDBIcon
                  icon='bell'
                  size='4x'
                  className='animated rotateIn mb-4'
                />
                <p>{this.props.service.information}</p>
              </MDBModalBody>
              <MDBModalFooter className='justify-content-center'>
                <MDBBtn color='primary' outline onClick={this.toggle(7)}>
                  Close
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}
