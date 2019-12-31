import React, { Component } from "react";
import { MDBContainer, MDBTypography } from "mdbreact";
import TeamCard from "../Components/TeamCard";
import data from "../data";
import TeamTextComponent from "../Components/TeamTextComponent";

export default class Home extends Component {
  state = {
    team: []
  };
  componentDidMount() {
    let team = data;
    this.setState({
      team
    });
  }
  render() {
    let emps = this.state.team.map(emp => {
      return <TeamCard emp={emp} />;
    });
    return (
      <section id="the_team" className="background-4">
        <MDBContainer fluid>
          <MDBTypography
            tag='h3'
            variant='h3-responsive'
            className='text-center font_bold font_size_title'
            style={{ paddingTop: "8vh", color: "#E37373" }}
          >
            The Team
          </MDBTypography>
          <TeamTextComponent />
          <div className='row col-md-12' style={{ margin: "0" }}>{emps}</div>
        </MDBContainer>
      </section>
    );
  }
}
