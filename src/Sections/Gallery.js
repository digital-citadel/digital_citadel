import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdbreact";
import Lightbox from "react-image-lightbox";
import GalleryTextComponent from "../Components/GalleryTextComponent";
import "../Gallery.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      images: [
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/Design-1.png",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/Design-2.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/Design-3.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/Explore_North.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/Lighthouse.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/Miami%20Beach.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/Daily_UX_1.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/Travel.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/ReWork%203.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/Mobile-Health.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/MobileEcommerce%202.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/Meeting.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/Brand.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/Digi.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/Webmeetings.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/auto.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/SoftUI-CE.jpg",
        "https://raw.githubusercontent.com/digital-citadel/digital_citadel/lightbox/src/Designs/Aurora.jpg"
      ]
    };
  }

  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;

    return images.map(imageSrc => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md='4' key={photoIndex}>
          <figure>
            <img
              src={imageSrc}
              alt='Gallery'
              className='img-fluid'
              onClick={() =>
                this.setState({ photoIndex: privateKey, isOpen: true })
              }
            />
          </figure>
        </MDBCol>
      );
    });
  };

  render() {
    const { photoIndex, isOpen, images } = this.state;
    return (
      <section className='background-4'>
        <MDBTypography
          tag='h3'
          variant='h3-responsive'
          className='text-center font_bold font_size_title'
          style={{ paddingTop: "8vh", color: "#E37373" }}
        >
          Gallery
        </MDBTypography>

        <GalleryTextComponent />
        <MDBContainer className='mt-5'>
          <div className='mdb-lightbox'>
            <MDBRow>{this.renderImages()}</MDBRow>
          </div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageTitle={photoIndex + 1 + "/" + images.length}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }
            />
          )}
        </MDBContainer>
      </section>
    );
  }
}

export default Gallery;
