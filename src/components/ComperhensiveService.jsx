import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { TbNurse } from "react-icons/tb";

const cardItems = [
  {
    title: "Private Nursing Care Services",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    title: "24 Hours In-Home Care",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    title: "Post-Hospitalization Home Health Care",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
  {
    title: "Palliative Care Services",
    para: "At Carehub Healthcare, we offer a wide range of comprehensive services.",
  },
];

const ComperhensiveService = () => {
  return (
    <section>
      <Container>
        <Row className="justify-content-md-center">
          <Col className="comperhensive_header">
            <h2 className="fs-3 fw-semibold">Our Comprehensive Services</h2>
            <p>
              At Carehub Healthcare, we offer a wide range of comprehensive
              services designed to cater to the unique needs of our clients.
            </p>
          </Col>
        </Row>
        <Row>
          {cardItems.map((item) => {
            return (
              <Col xs={12} md={6} lg={3}>
                <Card className="comperhensive_card border-0">
                  <Card.Body>
                    <TbNurse className="comperhensive_icon" />
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.para}</Card.Text>
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

export default ComperhensiveService;
