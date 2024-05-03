import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
const services = [
  "24 Hours In-Home Nursing services",
  "Post Operative Care",
  "Ventilator Care",
  "Palliative Care",
  "Elderly Care",
  "Pediatric Palliative",
  "Paralytic Care",
  "Parkinson Care",
  "Physiotherapy Services",
  "Doctor Home Visits",
  "Medical Tourism",
  "Injection Services",
  "Blood Test",
  "Hydrafacial Services",
];

const BookAppointment = () => {
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
    <AnimatedOnScroll animationIn="animate__slideInUp ">
      <div className="booking text-start rounded-4 animate__animated ">
        <h3 className="fs-5 fw-bold mb-3" style={{ color: "#012a4a" }}>
          Book Appointment
        </h3>
        <form onSubmit={handleSubmit}>
          <label className="fw-semibold">Full Name</label>
          <br />
          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            value={form.fullName}
            onChange={handleChange}
            className="border-0 mb-3 p-2"
            required
          />
          <br />
          <label className="fw-semibold">Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className="border-0 mb-3 p-2"
            required
          />
          <br />
          <label className="fw-semibold">Phone Number</label>
          <br />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter your phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            className="border-0 mb-3 p-2"
            required
          />
          <br />
          <label className="fw-semibold">Appointment Date</label>
          <br />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="border-0 mb-3 p-2"
            required
          />
          <br />
          <label className="fw-semibold">Choose Service</label>
          <br />
          <select
            value={form.service}
            name="service"
            onChange={handleChange}
            className="servicedrop border mb-3 p-2"
            required
          >
            <option>Select category</option>
            {services.map((ele, i) => {
              return <option value={ele}>{ele}</option>;
            })}
          </select>
          <br />
          <input type="submit" className="formbtn fw-semibold" />
        </form>
      </div>
    </AnimatedOnScroll>
  );
};

export default BookAppointment;
