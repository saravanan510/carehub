import React from "react";
import PrivateNursing_list from "../components/PrivateNursing_list";
import InjectionServices_details from "../components/InjectionServices_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const InjectionServices = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-2 fw-bold text-white">Injection Services</h2>
          <ul class="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Injection Services</li>
          </ul>
        </Container>
      </div>
      <InjectionServices_details />
      <PrivateNursing_list />
    </>
  );
};

export default InjectionServices;
