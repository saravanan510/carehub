import React from "react";
import ParalyticCare_details from "../components/ParalyticCare_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const ParalyticCare = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-2 fw-bold text-white">Paralytic Care</h2>
          <ul class="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Paralytic Care</li>
          </ul>
        </Container>
      </div>
      <ParalyticCare_details />
    </>
  );
};

export default ParalyticCare;
