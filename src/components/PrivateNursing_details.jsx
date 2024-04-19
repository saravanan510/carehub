import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from "@emailjs/browser";
import FeatureIcon from "../assets/features.svg";
// service_rfhez58
// service_rfhez58
const services = [
  "24 HOURS IN-HOME NURSING SERVICES",
  "POST OPERATIVE CARE",
  "VENTILATOR CARE AT HOME",
  "PALLIATIVE CARE",
  "ELDERLY CARE SERVICES/CARETAKERS",
  "PEDIATRIC PALLIATIVE CARE SERVICES AT HOME",
  "PARALYTIC CARE SERVICES AT HOME",
  "PARKINSON CARE",
  "PHYSIOTHERAPY SERVICES",
  "DOCTOR HOME VISITS",
  "MEDICAL TOURISM",
  "INJECTION SERVICES AT HOME",
  "BLOOD TEST AT HOME",
  "HYDRAFACIAL SERVICES AT HOME",
];

const PrivateNursing_details = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    date: "",
    service: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    emailjs
      .send("service_rfhez58", "template_yvq22yp", form, {
        publicKey: "9oAfAPIpODABx48KN",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <>
      <section>
        <Container>
          <Row className="g-5">
            <Col className="text-start pe-5" lg={9}>
              <h2 className="fs-3 fw-bold" style={{ color: "#012a4a" }}>
                24 Hours In-Home Nursing services
              </h2>
              <p>
                Carehub healthcare is a leading provider of in-home care
                services for individuals in need of assistance with daily living
                activities. Our 24-hour care services are designed to help
                individuals maintain their independence and quality of life in
                the comfort of their own homes.
              </p>
              <p>
                One of the many benefits of our 24-hour in-home care services is
                that they allow individuals to receive the care they need
                without having to leave their home and familiar surroundings.
                Our team of highly trained and compassionate caregivers is
                available around the clock to provide assistance with a wide
                range of activities, including:
              </p>

              <h4 className="fs-5 fw-bold" style={{ color: "#012a4a" }}>
                Services
              </h4>
              <Row>
                <Col>
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
                </Col>
              </Row>
              <p>
                Our caregivers are also equipped to provide specialized care for
                individuals with chronic conditions, such as Alzheimer's and
                dementia, as well as those recovering from surgery or illness.
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
                In addition to our 24-hour in-home care services, we also offer
                respite care, live-in care, and specialized care for individuals
                with chronic conditions. Our team is available to answer any
                questions and provide more information about the services we
                offer.
              </p>
              <p>
                With Carehub Services, you can have peace of mind knowing that
                your loved one is receiving the highest quality care and support
                in the comfort of their own home. Contact us today to learn more
                about how we can help you and your loved ones.
              </p>
            </Col>
            <Col className="booking text-start rounded-4">
              <h4 className="fs-5 fw-bold mb-3" style={{ color: "#012a4a" }}>
                Book Appointment
              </h4>
              <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <br />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  value={form.fullName}
                  onChange={handleChange}
                  className="border mb-2"
                  required
                />
                <br />
                <label>Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className="border mb-2"
                  required
                />
                <br />
                <label>Phone Number</label>
                <br />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className="border mb-2"
                  required
                />
                <br />
                <label>Appointment Date</label>
                <br />
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="border mb-2"
                  required
                />
                <br />
                <label>Choose Service</label>
                <br />
                <select
                  value={form.service}
                  name="service"
                  onChange={handleChange}
                  className="servicedrop border mb-3"
                  required
                >
                  <option>Select category</option>
                  {services.map((ele, i) => {
                    return <option value={ele}>{ele}</option>;
                  })}
                </select>
                <br />
                <input type="submit" className="formbtn" />
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PrivateNursing_details;
