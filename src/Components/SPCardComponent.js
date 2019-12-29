import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";

export default class SPCardComponent extends Component {
  state = {
    skills: []
  };
  constructor(props) {
    super(props);
    console.log(props.service);
  }
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
              to='/'
              className='font-weight-bold mb-3'
              style={{ color: "#e37373" }}
            >
              Learn More
              <i
                style={{ padding: "10px" }}
                class='fa fa-arrow-right'
                aria-hidden='true'
              ></i>
            </Link>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}