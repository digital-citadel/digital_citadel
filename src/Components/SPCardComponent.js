import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";

export default class SPCardComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      skills: [],
      modal7: false
    };
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div
        className='col-md-6'
        style={{ marginBottom: "25px", marginTop: "25px" }}
      >
        <MDBCard
          className='mb-r service-card'
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
            style={{ height: "150px" }}
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>
              <h4 className='mb-3' style={{ color: "#e37373" }}>
                {this.props.service.title}
              </h4>
            </MDBCardTitle>
            <MDBCardText className='white-text' style={{ margin: "0" }}>
              {this.props.service.description.map(desc => {
                return (
                  <ul style={{ margin: "auto", paddingLeft: "0" }}>{desc}</ul>
                );
              })}
            </MDBCardText>
            <br />
            <button
              style={{
                color: "#e37373",
                backgroundColor: "Transparent",
                border: "none"
              }}
              onClick={this.handleShow}
            >
              Learn More
              <i
                style={{ color: "#e37373", padding: "10px" }}
                class='fa fa-arrow-right'
                aria-hidden='true'
              ></i>
            </button>
          </MDBCardBody>
        </MDBCard>
        <Modal
          aria-labelledby='contained-modal-title-vcenter'
          centered
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header style={{ backgroundColor: "#0D0B34" }}>
            <Modal.Title style={{ color: "#E37373" }}>
              {this.props.service.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            scrollable
            style={{ backgroundColor: "#0D0B34", color: "white" }}
          >
            {this.props.service.information}
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#0D0B34" }}>
            <Button
              style={{
                color: "#FFFFFF",
                backgroundColor: "#E37373",
                marginLeft: "10vw",
                padding: "8px",
                borderRadius: "25px",
                border: "none"
              }}
              onClick={this.handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
