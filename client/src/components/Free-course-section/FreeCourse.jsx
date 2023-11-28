import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import courseImg01 from "../../assests/images/web-development.png";
import courseImg02 from "../../assests/images/kids-learning.png";
import courseImg03 from "../../assests/images/seo.png";
import courseImg04 from "../../assests/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";
import Header from "../Header/Header";
import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Mern Stack web developmet",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
    start: <a href="https://www.youtube.com/watch?v=VsUzmlZfYNg">Watch</a>
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
    start: <a href="https://www.youtube.com/watch?v=HIj8wU_rGIU">Watch</a>
  },

  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
    start: <a href="https://www.youtube.com/watch?v=MYE6T_gd7H0">Watch</a>
  },
  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    start: <a href="https://www.youtube.com/watch?v=c9Wg6Cb_YlU">Watch</a>
  },
 
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Free Courses</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
