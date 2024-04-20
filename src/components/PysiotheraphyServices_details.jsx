import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from "@emailjs/browser";
import FeatureIcon from "../assets/features.svg";
import NursingServices from "../assets/Nursing-services.png";

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

const PysiotheraphyServices_details = () => {
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
    <section>
      <Container>
        <Row className="g-4">
          <Col className="service_img me-6 d-block d-sm-none">
            <img src={NursingServices} />
          </Col>
          <Col className="text-start pe-5" lg={9}>
            <h2 className="fs-3 fw-bold" style={{ color: "#012a4a" }}>
              Best Home Physiotherapists at Your Doorstep
            </h2>
            <p>
              Physical therapy has made remarkable strides over the years, from
              its earliest documented history with Hippocrates to modern-day
              electronic and scientific treatments. Today, Physiotherapy at Home
              include a diverse range of practices such as cardiovascular and
              pulmonary physiotherapy, community physiotherapy, sports
              physiotherapy, physical therapy for skin, and orthopaedic physical
              therapy.
            </p>
            <p>
              At Carehub, we understand the importance of physical therapy in
              rehabilitating patients with various illnesses and disabilities.
              This form of therapy utilizes specific movements and mechanical
              forces on the affected areas of the body to increase mobility,
              reduce impairments, and improve the overall quality of life in
              patients. From neonatal to geriatric patients, our team of expert
              physiotherapists provides personalized care to meet the individual
              needs of each patient.
            </p>
            <p>
              Physical therapy has been a part of Indian medicine for centuries,
              with techniques like proper breathing and physical exercises
              described in Sushruta Samhita, a comprehensive medical treatise
              written around 600 BC. Yoga, a practice with strong links to
              physiotherapy, also originated in India over 5000 years ago.
              Combining the benefits of yoga and physiotherapy, Physioyoga is a
              popular rehabilitation therapy that promotes overall wellness of
              the body and mind.
            </p>

            <h4 className="fs-5 fw-bold" style={{ color: "#012a4a" }}>
              Physiotherapy at home
            </h4>
            <p>
              Physiotherapy at home is gaining acceptance as a mainstream form
              of treatment in India. It is a holistic, effective, and
              long-lasting alternative to conventional forms of treatment for
              many conditions, including arthritis, frozen shoulder, dizziness
              and vertigo, backache, headache, sciatica, and athletic injuries.
            </p>
            <h4 className="fs-5 fw-bold" style={{ color: "#012a4a" }}>
              Physiotherapy services near me
            </h4>
            <p>
              With state-of-the-art equipment and skilled techniques, our team
              of physiotherapists at Carehub can provide better care to patients
              with each passing day. As UAE faces a growing need for
              physiotherapy treatment for conditions like diabetes, arthritis,
              cancer, and cardiovascular diseases, our preventive and curative
              approach can save patients money and provide better long-term
              outcomes.
            </p>
            <p>
              If you or a loved one could benefit from physiotherapy, don't
              hesitate to consult Carehub BEST PHYSIOTHEPY AT HOMEtoday. Our
              personalized approach to care ensures that every patient receives
              the treatment they need to achieve optimal physical health.
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
  );
};

export default PysiotheraphyServices_details;
