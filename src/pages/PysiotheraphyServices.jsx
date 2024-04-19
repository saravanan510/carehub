import React from "react";
import PrivateNursing_list from "../components/PrivateNursing_list";
import PysiotheraphyServices_details from "../components/PysiotheraphyServices_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const PysiotheraphyServices = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-2 fw-bold text-white">Pysiotheraphy Services</h2>
          <ul class="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Pysiotheraphy Services</li>
          </ul>
        </Container>
      </div>
      <PysiotheraphyServices_details />
      <PrivateNursing_list />
    </>
  );
};

export default PysiotheraphyServices;
