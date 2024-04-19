import React from "react";
import PrivateNursing_list from "../components/PrivateNursing_list";
import PostOperativeCare_details from "../components/PostOperativeCare_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const PostOperativeCare = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-2 fw-bold text-white">Post Operative Care</h2>
          <ul class="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Post Operative Care</li>
          </ul>
        </Container>
      </div>
      <PostOperativeCare_details />
      <PrivateNursing_list />
    </>
  );
};

export default PostOperativeCare;
