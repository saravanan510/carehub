import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Client_img from "../assets/carehub-logo.jpg";
function Testimonial() {
  return (
    <section className="testimonial">
      <Container>
        <Row className="justify-content-md-center">
          <Col className="review" lg="6">
            <img src={Client_img} alt="" className="testimonial_profile" />
            <h4 style={{ color: "white" }}>
              Compassion Is At The Heart Of Our Care
            </h4>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonial;
