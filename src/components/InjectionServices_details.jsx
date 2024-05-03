import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FeatureIcon from "../assets/features.svg";
import Injection_Service from "../assets/Injection_service.webp";
import BookAppointment from "./BookAppointment";
import OtherServices from "./OtherServices";
const InjectionServices_details = () => {
  return (
    <section>
      <Container>
        <Row className="g-4">
          <Col lg={8}>
            <div className="service_img">
              <img src={Injection_Service} />
            </div>

            <div className="text-start pe-5" lg={8}>
              <h2 className="fs-3 fw-bold" style={{ color: "#012a4a" }}>
                Injection Services at Home
              </h2>
              <p>
                Injection services at home- Get the facility of getting
                injections sitting at home. Which do not have to go out of the
                house. One of the most obvious benefits of getting injection
                services at home is saving time and energy and money on
                traveling also. By getting injections sitting at home we can
                stay safe in our homes. You not only save money on traveling but
                you also enjoy injection sitting services at home. In today’s
                time, people avoid going to the hospital because they have to
                wait for doctors. You get a better facility in less time and at
                affordable prices sitting at home. The care at the home facility
                is excellent. Because sometimes we do not have time to go to the
                hospital. For such people, getting an injection at home is a big
                advantage. They are saved from the hassle of traveling.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <OtherServices className="mb-4" />
            <BookAppointment />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InjectionServices_details;
