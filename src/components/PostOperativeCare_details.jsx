import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from "@emailjs/browser";
import FeatureIcon from "../assets/features.svg";

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

const PostOperativeCare_details = () => {
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
                Post Operative Care
              </h2>
              <p>
                Anybody's life can be completely upended by a serious sickness,
                accident, or other health incident. So it might be easy to think
                of a loved one being released from the hospital as the point at
                which everything returns to normal. Sadly, this is frequently
                not the case. The month or months following a hospital release
                reflect a high-risk period with frequent hospital visits.
                Seniors returning from the hospital frequently need assistance,
                including non-medical in-home care.
              </p>
              <p>
                Unfortunately, a lot of individuals underestimate the
                difficulties and risks associated with leaving the hospital.
                Therefore, the in-home care team at Carehub Services has created
                this brief guide to help you or a loved one close to you decide
                whether or not post-hospital discharge care is the correct
                choice
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
                        Comprehensive care: Carehub Services provides a wide
                        range of home health care services that are tailored to
                        meet the unique needs of each patient after
                        hospitalization. This includes everything from wound
                        care and medication management to physical therapy and
                        occupational therapy.
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Skilled and experienced staff: Our team of nurses,
                        therapists, and other healthcare professionals are
                        highly skilled and experienced in providing
                        post-hospitalization care. They are dedicated to helping
                        patients regain their strength and independence as
                        quickly and safely as possible.
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Convenience and comfort: With home health care services
                        from Carehub healthcare Services, patients can recover
                        in the comfort of their own home rather than in a
                        hospital or nursing home. This can be a more comfortable
                        and less stressful option for many people.
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Coordination with other healthcare providers: Our staff
                        works closely with patients' physicians, hospitals, and
                        other healthcare providers to ensure that all aspects of
                        their care are coordinated and that their recovery is on
                        track.
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Continuous monitoring: Our staff will keep a watchful
                        eye on the patient's condition and report any changes or
                        concerns to the physician. They will also provide
                        education and support to the patient and their family so
                        that they can manage their care at home.
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Cost-effective: Getting post-hospitalization home health
                        care services can often be a more cost-effective option
                        than staying in a hospital or nursing home. It can also
                        help to avoid unnecessary readmissions to the hospital.
                      </p>
                    </li>
                    <li>
                      <img src={FeatureIcon} className="me-2" />
                      <p className="service_feature m-0 fw-semibold">
                        Quality care: At Carehub healthcare Services, we are
                        committed to providing high-quality care to our
                        patients. Our staff is regularly trained and updated
                        with the latest techniques and technologies to provide
                        the best care possible.
                      </p>
                    </li>
                  </ul>
                </Col>
              </Row>
              <p>
                In conclusion, Carehub Services is a great option for
                post-hospitalization home health care services. We provide
                comprehensive care, have a skilled and experienced staff, offer
                convenience and comfort, coordinate with other healthcare
                providers, continuously monitor the patient, cost-effective and
                provide quality care. Contact us today to learn more about how
                we can help you or your loved one recover after a hospital stay.
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

export default PostOperativeCare_details;
