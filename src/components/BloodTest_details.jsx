import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FeatureIcon from "../assets/features.svg";
import BloodTest from "../assets/Blood_Test.webp";
import BookAppointment from "./BookAppointment";
import OtherServices from "./OtherServices";
const BloodTest_details = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={8}>
            <div className="service_img">
              <img src={BloodTest} />
            </div>

            <div className="text-start pe-5" lg={8}>
              <h2 className="fs-3 fw-bold" style={{ color: "#012a4a" }}>
                Blood Test at Home
              </h2>
              <p>
                If you are looking for an emergency Lab test at home, Carehub is
                with you to provide blood sample collection at Home with 24*7
                support.Carehub partnered with top certified diagnostic centres
                in Dubai. Going to the diagnostic centre and booking a lab test
                is a hazardous process. So to overcome such problems Carehub
                made simple solutions to collect blood samples from your
                doorstep with our nurse. Booking a lab test at home is quick and
                easy with Carehub.
              </p>

              <ul className="service_page_features_list">
                <li>
                  <img src={FeatureIcon} className="me-2" />
                  <p className="service_feature m-0 fw-semibold">
                    Once a patient books a test, our nurse will visit your home
                    on the agreed time slot and collects the blood/urine sample.
                  </p>
                </li>
                <li>
                  <img src={FeatureIcon} className="me-2" />
                  <p className="service_feature m-0 fw-semibold">
                    After collecting blood/urine samples nurse will submit the
                    samples to the lab for testing.
                  </p>
                </li>
                <li>
                  <img src={FeatureIcon} className="me-2" />
                  <p className="service_feature m-0 fw-semibold">
                    Your reports will be delivered in 24-48 hours. • We provide
                    different types of packages based on patient age and
                    according to his need, and we also do health checkups and
                    full-body checkups!
                  </p>
                </li>
              </ul>
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

export default BloodTest_details;
