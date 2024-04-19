import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Client_img from "../assets/carehub-logo.jpg";
function Testimonial() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonial">
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            {/* <Col className="review" lg="6">
            <img src={Client_img} alt="" className="testimonial_profile" />
            <h4 style={{ color: "white" }}>
              Compassion Is At The Heart Of Our Care
            </h4>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col> */}
            <Slider {...settings}>
              <div className="testimonial_review">
                <img src={Client_img} alt="" className="testimonial_profile" />
                <h3 style={{ color: "white", fontWeight: 600 }}>
                  Great Staff!
                </h3>
                <p style={{ color: "white" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="testimonial_review">
                <img src={Client_img} alt="" className="testimonial_profile" />
                <h3 style={{ color: "white", fontWeight: 600 }}>Friendly</h3>
                <p style={{ color: "white" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="testimonial_review">
                <img src={Client_img} alt="" className="testimonial_profile" />
                <h3 style={{ color: "white", fontWeight: 600 }}>Loveable</h3>
                <p style={{ color: "white" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonial;
