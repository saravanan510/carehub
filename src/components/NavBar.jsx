import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";

const services = [
  {
    name: "Home Nursing",
    link: "/service",
  },
  {
    name: "24 Hours In-Home Care",
    link: "/service",
  },
  {
    name: "Ventilator Care",
    link: "/service",
  },
  {
    name: "Post Hospitalization",
    link: "/service",
  },
  {
    name: "Nurses Visit",
    link: "/service",
  },
  {
    name: "Palliative care",
    link: "/service",
  },
  {
    name: "Elderly Care Services",
    link: "/service",
  },
  {
    name: "Post Operative Care",
    link: "/service",
  },
  {
    name: "Pediatric Palliative care",
    link: "/service",
  },
  {
    name: "Paralytic Care",
    link: "/service",
  },
];

export default function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Navbar expand="lg" className="py-0">
      <Container>
        <Navbar.Brand>
          <img src={Logo} className="logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={isMobile && "mobile-toggle"}
        >
          <Nav className="ms-auto me-5 nav_item">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              className="dropdown"
            >
              {services.map((item) => {
                return (
                  <NavDropdown.Item className="nav_service_link">
                    <Link to={item.link}>{item.name}</Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
          <button
            type="button"
            className={isMobile ? "custom-button mt-3" : "custom-button"}
          >
            <Link to={"/contact"}>Contact </Link>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
