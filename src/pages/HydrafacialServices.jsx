import React from "react";
import PrivateNursing_list from "../components/PrivateNursing_list";
import HydrafacialServices_details from "../components/HydrafacialServices_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const HydrafacialServices = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-2 fw-bold text-white">Hydrafacial Services</h2>
          <ul class="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Hydrafacial Services</li>
          </ul>
        </Container>
      </div>
      <HydrafacialServices_details />
      <PrivateNursing_list />
    </>
  );
};

export default HydrafacialServices;
