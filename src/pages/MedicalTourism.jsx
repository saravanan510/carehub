import React from "react";
import MedicalTourism_details from "../components/MedicalTourism_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const MedicalTourism = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-2 fw-bold text-white">Medical Tourism</h2>
          <ul class="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Medical Tourism</li>
          </ul>
        </Container>
      </div>
      <MedicalTourism_details />
    </>
  );
};

export default MedicalTourism;
