import React from "react";
import PostStrokeRecovery_details from "../components/PostStrokeRecovery_details";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const PostStrokeRecovery = () => {
  return (
    <>
      <ScrollToTop />
      <div className="servicepage_banner">
        <Container>
          <h2 className="fs-2 fw-bold text-white">Post Stroke Recovery</h2>
          <ul class="breadcrumb">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Post Stroke Recovery</li>
          </ul>
        </Container>
      </div>
      <PostStrokeRecovery_details />
    </>
  );
};

export default PostStrokeRecovery;
