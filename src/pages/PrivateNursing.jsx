import React from "react";
import PrivateNursing_Banner from "../assets/PrivateNursing-Banner.jpg";
import PrivateNursing_list from "../components/PrivateNursing_list";
import PrivateNursing_details from "../components/PrivateNursing_details";
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
      <PrivateNursing_list />
      <PrivateNursing_details />
    </>
  );
};

export default PrivateNursing;
