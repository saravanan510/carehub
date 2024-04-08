import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import service_1 from "../assets/Service_1.jpg";
import service_2 from "../assets/Service_2.jpg";
import service_3 from "../assets/Service_3.jpg";
import service_4 from "../assets/Service_4.jpg";
import service_5 from "../assets/Service_5.jpg";
import service_6 from "../assets/Service_6.jpg";
import service_7 from "../assets/Service_7.jpg";
import service_8 from "../assets/Service_8.jpg";
import service_9 from "../assets/Service_9.jpg";
import service_10 from "../assets/Service_10.jpg";

const services = [
  {
    image: service_1,
    title: "Private at Home Nursing Care Services",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_2,
    title: "24 Hours In-Home Care",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_3,
    title: "Post Hospitalization Home Health Care services",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_4,
    title: "Nurses that come to your house",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_5,
    title: "Ventilator Care at Home",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_6,
    title: "Palliative care Services at home",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_7,
    title: "Elderly Care Services",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_8,
    title: "Post Operative Care Services at Home",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_9,
    title: "Pediatric Palliative care Services at Home",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    image: service_10,
    title: "Paralytic Care Services at home",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
];

const Services = () => {
  return (
    <section className="service">
      <Container>
        <Row className="justify-content-md-center">
          <Col className="comperhensive_header">
            <h2 className="fs-3 fw-semibold">What Service We Offer</h2>
            <p>
              At Carehub Healthcare, we offer a wide range of comprehensive
              services designed to cater to the unique needs of our clients.
            </p>
          </Col>
        </Row>
        <Row>
          {services.map((service) => {
            return (
              <Col xs={12} md={6} lg={3}>
                <Card className="service_card border-0 mb-3">
                  <img src={service.image} className="service_img" />
                  <Card.Body className="py-3 px-0">
                    <Card.Title className="fs-5 fw-semibold">
                      {service.title}
                    </Card.Title>
                    <Card.Text className="mb-0">{service.para}</Card.Text>
                    <button className="service_btn">Learn More</button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
