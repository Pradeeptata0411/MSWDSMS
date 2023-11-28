import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";
import Footer from '../Footer/Footer';
import Header from "../Header/Header";
const HeroSection = () => {
  return (
    <section>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
              Nor is there anyone who loves or pursues or desires to obtain pain of itself,<br />because it is pain.
              It helps show how text will look once a piece of content is finished, during the planning phase.<br /> a display of letters, 
                to be viewed as a sample with given graphical elements in a file !
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <Footer></Footer>
    </section>
  );
};

export default HeroSection;
