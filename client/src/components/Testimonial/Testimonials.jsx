import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import img from "../../assests/images/testimonial01.png";
import Header from "../Header/Header";
const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <div>
      <Header></Header>
      </div>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        we have learnt so many things from this website
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Chaithanya sai.K</h6>
                        <p>Hyderabad, India</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      Strong Voice is a practice that establishes the teacher's authority in the classroom. It is the teacher's ability to present themselves to their students to encourage compliance and on-task behavior. Having a strong voice makes the use of excessive consequences unnecessary. State clear expectations.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Manoj.A</h6>
                        <p>Mumbai,India</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      Simply put, your tone of voice as a teacher helps establish authority, create a structured learning environment, and set the tone for the class in terms of behaviour, engagement and even your rapport with your students.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Akshay.K</h6>
                        <p>Pune, India</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
