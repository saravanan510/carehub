import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from "@emailjs/browser";
// service_rfhez58
// service_rfhez58
const services = [
  "Home Nursing",
  "24 Hours In-Home Care",
  "Ventilator Care",
  "Post Hospitalization",
  "Nurses Visit",
  "Palliative care",
  "Elderly Care Services",
  "Post Operative Care",
  "Pediatric Palliative care",
  "Paralytic Care",
];

const ServicePage_details = () => {
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
              <h2 className="fs-3 fw-semibold">Private Nursing</h2>
              <p>
                At Carehub Healthcare, we offer a wide range of comprehensive
                services designed to cater to the unique needs of our clients.
                At Carehub Healthcare, we offer a wide range of comprehensive
                services designed to cater to the unique needs of our clients.
              </p>
              <p>
                At Carehub Healthcare, we offer a wide range of comprehensive
                services designed to cater to the unique needs of our clients.
                At Carehub Healthcare, we offer a wide range of comprehensive
                services designed to cater to the unique needs of our clients.
              </p>
              <h4 className="fs-5 fw-semibold">Private Nursing</h4>
              <p>
                At Carehub Healthcare, we offer a wide range of comprehensive
                services designed to cater to the unique needs of our clients.
                At Carehub Healthcare, we offer a wide range of comprehensive
                services designed to cater to the unique needs of our clients.
              </p>
            </Col>
            <Col className="booking text-start rounded-4">
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

export default ServicePage_details;
