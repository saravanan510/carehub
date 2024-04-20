import React from "react";
import VentilatorCare_details from "../components/VentilatorCare_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const VentilatorCare = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-2 fw-bold text-white">Ventilator Care</h2>
          <ul class="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Ventilator Care</li>
          </ul>
        </Container>
      </div>
      <VentilatorCare_details />
    </>
  );
};

export default VentilatorCare;
