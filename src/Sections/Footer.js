import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBSmoothScroll,
  MDBAnimation
} from "mdbreact";

const Footer = () => {
  return (
    <MDBAnimation reveal type='fadeInUp' duration='2s'>
      <MDBFooter color='#0D0B34' className='font-small pt-4 mt-4'>
        <MDBContainer className='text-center text-md-left'>
          <MDBRow className='text-center text-md-left mt-3 pb-3'>
            <MDBCol md='3' lg='3' xl='3' className='mx-auto mt-3'>
              <h6
                style={{ color: "#E39797" }}
                className='mb-4 font-weight-bold font_bold font_size_title'
              >
                Digital Citadel
              </h6>
              <p>
                Creative Design and Web Solutions <br />
                Committed to simplifying your needs <br />
                Grow your Business and boost up your sale now!
              </p>
            </MDBCol>
            <hr className='w-100 clearfix d-md-none' />
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mt-3'>
              <h6
                style={{ color: "#E39797" }}
                className='mb-4 font-weight-bold'
              >
                Navigation
              </h6>
              <p>
                <MDBSmoothScroll to='home'>Home</MDBSmoothScroll>
              </p>
              <p>
                <MDBSmoothScroll to='about_us'>About Us</MDBSmoothScroll>
              </p>
              <p>
                <MDBSmoothScroll to='services'>Services</MDBSmoothScroll>
              </p>
              <p>
                <MDBSmoothScroll to='the_team'>The Team</MDBSmoothScroll>
              </p>
            </MDBCol>
            <hr className='w-100 clearfix d-md-none' />
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mt-3'>
              <h6
                style={{ color: "#E39797" }}
                className='mb-4 font-weight-bold'
              >
                Legal
              </h6>
              <p>
                <a href='#!'>Terms</a>
              </p>
              <p>
                <a href='#!'>Privacy</a>
              </p>
              <p>
                <a href='#!'>Cookie</a>
              </p>
            </MDBCol>
            <hr className='w-100 clearfix d-md-none' />
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mt-3'>
              <h6
                style={{ color: "#E39797" }}
                className='mb-4 font-weight-bold'
              >
                Contact
              </h6>
              <p>
                <i className='fa fa-home mr-3' /> Friedrichstr. 49 Dossenheim
              </p>
              <p>
                <i className='fa fa-envelope mr-3' /> info.digitalcitadel@gmail.com
              </p>
              <p>
                <i className='fa fa-phone mr-3' /> +49 1744649138
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow className='d-flex align-items-center'>
            <MDBCol md='8' lg='8'>
              <p className='text-center text-md-left grey-text'>
                &copy; {new Date().getFullYear()} Copyright: digitalcitadel.tech
              </p>
            </MDBCol>
            <MDBCol md='4' lg='4' className='ml-lg-0'>
              <div className='text-center text-md-right'>
                <ul className='list-unstyled list-inline'>
                  <li className='list-inline-item'>
                    <a
                      href='https://www.instagram.com/digital_citadel'
                      className='btn-floating btn-sm rgba-white-slight mx-1'
                    >
                      <i className='fab fa-instagram' />
                    </a>
                  </li>

                  <li className='list-inline-item'>
                    <a
                      href='https://info.digitalcitadel@gmail.com'
                      className='btn-floating btn-sm rgba-white-slight mx-1'
                    >
                      <i className='fab fa-google-plus' />
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a
                      href='https://www.linkedin.com/in/digital-citadel-63100119b'
                      className='btn-floating btn-sm rgba-white-slight mx-1'
                    >
                      <i className='fab fa-linkedin-in' />
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </MDBAnimation>
  );
};

export default Footer;
