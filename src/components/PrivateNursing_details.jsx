import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FeatureIcon from "../assets/features.svg";
import NursingServices from "../assets/Nursing-services.png";
import BookAppointment from "./BookAppointment";
import OtherServices from "./OtherServices";

const PrivateNursing_details = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="service_img">
                <img src={NursingServices} />
              </div>

              <div className="text-start pe-5" lg={8}>
                <h2 className="fs-3 fw-bold" style={{ color: "#012a4a" }}>
                  24 Hours In-Home Nursing services
                </h2>
                <p>
                  Carehub healthcare is a leading provider of in-home care
                  services for individuals in need of assistance with daily
                  living activities. Our 24-hour care services are designed to
                  help individuals maintain their independence and quality of
                  life in the comfort of their own homes.
                </p>
                <p>
                  One of the many benefits of our 24-hour in-home care services
                  is that they allow individuals to receive the care they need
                  without having to leave their home and familiar surroundings.
                  Our team of highly trained and compassionate caregivers is
                  available around the clock to provide assistance with a wide
                  range of activities, including:
                </p>

                <h4 className="fs-5 fw-bold" style={{ color: "#012a4a" }}>
                  Services
                </h4>

                <ul className="service_page_features_list">
                  <li>
                    <img src={FeatureIcon} className="me-2" />
                    <p className="service_feature m-0 fw-semibold">
                      Personal care, such as bathing, grooming, and dressing
                    </p>
                  </li>
                  <li>
                    <img src={FeatureIcon} className="me-2" />
                    <p className="service_feature m-0 fw-semibold">
                      Medication management and administration
                    </p>
                  </li>
                  <li>
                    <img src={FeatureIcon} className="me-2" />
                    <p className="service_feature m-0 fw-semibold">
                      Meal preparation and feeding
                    </p>
                  </li>
                  <li>
                    <img src={FeatureIcon} className="me-2" />
                    <p className="service_feature m-0 fw-semibold">
                      Mobility assistance and transportation
                    </p>
                  </li>
                  <li>
                    <img src={FeatureIcon} className="me-2" />
                    <p className="service_feature m-0 fw-semibold">
                      Light housekeeping and laundry
                    </p>
                  </li>
                  <li>
                    <img src={FeatureIcon} className="me-2" />
                    <p className="service_feature m-0 fw-semibold">
                      Companionship and social engagement
                    </p>
                  </li>
                </ul>

                <p>
                  Our caregivers are also equipped to provide specialized care
                  for individuals with chronic conditions, such as Alzheimer's
                  and dementia, as well as those recovering from surgery or
                  illness.
                </p>
                <p>
                  At Carehub Nursing Services, we understand the importance of
                  maintaining a sense of independence and autonomy for our
                  clients. That's why we work closely with each individual and
                  their loved ones to create a personalized care plan that meets
                  their unique needs and preferences. We also strive to provide
                  continuity of care by assigning a primary caregiver to each
                  client, ensuring that they have a familiar face and trusted
                  companion to provide care and support.
                </p>
                <p>
                  In addition to our 24-hour in-home care services, we also
                  offer respite care, live-in care, and specialized care for
                  individuals with chronic conditions. Our team is available to
                  answer any questions and provide more information about the
                  services we offer.
                </p>
                <p>
                  With Carehub Services, you can have peace of mind knowing that
                  your loved one is receiving the highest quality care and
                  support in the comfort of their own home. Contact us today to
                  learn more about how we can help you and your loved ones.
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
    </>
  );
};

export default PrivateNursing_details;
