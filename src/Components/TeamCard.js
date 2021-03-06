import React, { Component } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardUp,
  MDBCardBody,
  MDBAvatar,
  MDBRotatingCard,
  MDBIcon
} from "mdbreact";

class TeamCard extends Component {
  state = {
    flipped: false
  };

  handleFlipping = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  render() {
    return (
      <MDBContainer className='col-md-3 col-xs-12' style={{ minHeight: "26rem" }}>
        <MDBRotatingCard
          flipped={this.state.flipped}
          className='text-center h-100 w-100'
        >
          <MDBCard className='face front' style={{ background: "#0A1250" }}>
            <MDBCardUp
              style={{ height: "60px", background: "#0D0B34" }}
            ></MDBCardUp>
            <MDBAvatar className='mx-auto' circle>
              <img src={this.props.emp.img} alt='' className='rounded-circle' />
            </MDBAvatar>
            <MDBCardBody>
              <h4
                className='font-weight-bold mb-3'
                style={{ color: "#e37373" }}
              >
                {" "}
                {this.props.emp.name}{" "}
              </h4>
              <p
                className='font-weight-bold white-text'
                style={{ margin: "0" }}
              >
                {this.props.emp.role}
              </p>
              <p className='white-text'>{this.props.emp.oneLiner}</p>
              <a
                href='#!'
                className='rotate-btn font-weight-bold'
                data-card='card-1'
                onClick={this.handleFlipping}
              >
                What do I do?
              </a>
              <ul className='list-inline py-2' style={{ marginTop: "16px" }}>
                <li className='list-inline-item'>
                  <a href={this.props.emp.Facebook} className='p-2 fa-lg fb-ic'>
                    <MDBIcon icon='facebook' brand style={{ color: "white" }} />
                  </a>
                </li>

                <li className='list-inline-item'>
                  <a
                    href={this.props.emp.Github}
                    className='p-2 fa-lg gplus-ic'
                  >
                    <MDBIcon icon='github' brand style={{ color: "white" }} />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href={this.props.emp.LinkedIn} className='p-2 fa-lg li-ic'>
                    <MDBIcon icon='linkedin' brand style={{ color: "white" }} />
                  </a>
                </li>
              </ul>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className='face back' style={{ background: "#0A1250" }}>
            <MDBCardBody>
              <h4 className='font-weight-bold white-text'>About me</h4>
              <hr />
              <p className='white-text'>{this.props.emp.description}</p>
              <hr />
              <a
                href='#!'
                className='rotate-btn'
                data-card='card-1'
                onClick={this.handleFlipping}
              >
                <MDBIcon icon='undo' /> Click here to rotate back
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBRotatingCard>
      </MDBContainer>
    );
  }
}

export default TeamCard;
