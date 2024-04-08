import Carousel from "react-bootstrap/Carousel";
import Banner_1 from "../assets/Banner_1.jpg";
import Banner_2 from "../assets/Banner_2.jpg";
import Banner_3 from "../assets/Banner_3.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item className="banner">
        <img src={Banner_1} alt="First slide" className="" />
        <Carousel.Caption className="banner_caption">
          <h3>Private at Home Nursing Care Services</h3>
          <p>
            At Carehub Healthcare, we offer a wide range of comprehensive
            services designed to cater to the unique needs of our clients.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner">
        <img src={Banner_2} alt="First slide" />
        <Carousel.Caption className="banner_caption">
          <h3>24 Hours In-Home Care</h3>
          <p>
            At Carehub Healthcare, we offer a wide range of comprehensive
            services designed to cater to the unique needs of our clients.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner">
        <img src={Banner_3} alt="First slide" />
        <Carousel.Caption className="banner_caption">
          <h3>Post-Hospitalization Home Health Care</h3>
          <p>
            At Carehub Healthcare, we offer a wide range of comprehensive
            services designed to cater to the unique needs of our clients.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
