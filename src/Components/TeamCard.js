import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBRotatingCard, MDBIcon } from "mdbreact";

class CardExample extends Component {
    state = {
        flipped: false
    }

    handleFlipping = () => {
        this.setState({ flipped: !this.state.flipped });
    }

    render() {
        const colStyle = { maxWidth: "18rem" };

        return (
            <MDBRow>
                <MDBCol style={{ minHeight: '26rem' }}>
                    <MDBRotatingCard flipped={this.state.flipped} className="text-center h-100 w-100" style={colStyle}>
                        <MDBCard className="face front" style={{ background: "#0A1250" }}>
                            <MDBCardUp style={{ height: "60px", background: "#0D0B34" }}></MDBCardUp>
                            <MDBAvatar className="mx-auto white" circle>
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" className="rounded-circle" />
                            </MDBAvatar>
                            <MDBCardBody>
                                <h4 className="font-weight-bold mb-3" style={{ color: "#e37373" }}>Marie Johnson</h4>
                                <p className="font-weight-bold white-text" style={{ margin: "0" }}>Product designer</p>
                                <p className="white-text">3+ years of experience</p>
                                <a href="#!" className="rotate-btn font-weight-bold" data-card="card-1" onClick={this.handleFlipping}>
                                    What do I do?
                                </a>
                                <ul className="list-inline py-2" style={{ "margin-top": "16px" }}>
                                    <li className="list-inline-item" >
                                        <a href="#!" className="p-2 fa-lg fb-ic" >
                                            <MDBIcon icon="facebook" brand style={{ color: "white" }} />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#!" className="p-2 fa-lg tw-ic">
                                            <MDBIcon icon="twitter" brand style={{ color: "white" }} />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#!" className="p-2 fa-lg gplus-ic">
                                            <MDBIcon icon="google-plus" brand style={{ color: "white" }} />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#!" className="p-2 fa-lg li-ic">
                                            <MDBIcon icon="linkedin" brand style={{ color: "white" }} />
                                        </a>
                                    </li>
                                </ul>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="face back" style={{ background: "#0A1250" }} >
                            <MDBCardBody>
                                <h4 className="font-weight-bold white-text" >About me</h4>
                                <hr />
                                <p className="white-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Maxime quae, dolores dicta.
              </p>
                                <hr />
                                <ul className="list-inline py-2" style={{ "margin-top": "16px" }}>
                                    <li className="list-inline-item" >
                                        <a href="#!" className="p-2 fa-lg fb-ic" >
                                            <MDBIcon icon="facebook" brand style={{ color: "white" }} />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#!" className="p-2 fa-lg tw-ic">
                                            <MDBIcon icon="twitter" brand style={{ color: "white" }} />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#!" className="p-2 fa-lg gplus-ic">
                                            <MDBIcon icon="google-plus" brand style={{ color: "white" }} />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#!" className="p-2 fa-lg li-ic">
                                            <MDBIcon icon="linkedin" brand style={{ color: "white" }} />
                                        </a>
                                    </li>
                                </ul>
                                <a href="#!" className="rotate-btn" data-card="card-1" onClick={this.handleFlipping}>
                                    <MDBIcon icon="undo" /> Click here to rotate back
              </a>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBRotatingCard>
                </MDBCol>
            </MDBRow>
        )
    }
}

export default CardExample;