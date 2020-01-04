import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
  MDBTypography
} from "mdbreact";
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
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg"
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
      <section id='gallery' className='background-4'>
        <MDBAnimation reveal type='zoomIn' duration='2s'>
          <MDBTypography
            tag='h3'
            variant='h3-responsive'
            className='text-center font_bold font_size_title'
            style={{ paddingTop: "8vh", color: "#E37373" }}
          >
            Gallery
          </MDBTypography>
        </MDBAnimation>
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
