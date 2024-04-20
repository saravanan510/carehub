import React from "react";
import PediatricPalliative_details from "../components/PediatricPalliative_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const PediatricPalliative = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-2 fw-bold text-white">Pediatric Palliative</h2>
          <ul class="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Pediatric Palliative</li>
          </ul>
        </Container>
      </div>
      <PediatricPalliative_details />
    </>
  );
};

export default PediatricPalliative;
