import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "Home",
  },
  {
    display: "AboutUs",
    url: "AboutUs",
  },

  {
    display: "Courses",
    url: "Courses",
  },

  {
    display: "Blog",
    url: "Blog",
  },
];


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> Learners Site.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://instagram.com/chaitanya_sai_05?igshid=Njc5ZjliZWU=">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.linkedin.com/in/chaitanya-sai-kota-968721226">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://twitter.com/chaitanyakota05?t=q9rTL3p9yw_dALkKVM6BFw&s=08">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

         

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: vaddeswaram,vijayawada</p>
            <p> Phone 1: +91 8008924724</p>
            <p> Phone 2: +91 8639558161</p>
            <p> Phone 3: +91 7207294430</p>
            <p>Email: LearnersSite@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
