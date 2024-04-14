import React from "react";
import PrivateNursing_Banner from "../assets/PrivateNursing-Banner.jpg";
import ServicePage_list from "../components/ServicePage_list";
import ServicePage_details from "../components/ServicePage_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
const PrivateNursing = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-1 fw-semibold text-white">Private Nursing</h2>
          <ul class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>Private Nursing</li>
          </ul>
        </Container>
      </div>
      <ServicePage_list />
      <ServicePage_details />
    </>
  );
};

export default PrivateNursing;
