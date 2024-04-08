import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../assets/carehub-logo.jpg";

const services = [
  "Private at Home Nursing Care Services",
  "24 Hours In-Home Care",
  "Ventilator Care at Home",
  "Post Hospitalization Home Health Care services",
  "Nurses that come to your house",
  "Palliative care Services at home",
  "Elderly Care Services",
  "Post Operative Care Services at Home",
  "Pediatric Palliative care Services at Home",
  "Paralytic Care Services at home",
];

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-white d-flex py-0">
      <Container>
        <Navbar.Brand>
          <img src={Logo} className="logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav_item">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              {services.map((item) => {
                return <NavDropdown.Item>{item}</NavDropdown.Item>;
              })}
            </NavDropdown>
          </Nav>
          <button type="button" className="custom-button border border-0">
            Contact Us
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
