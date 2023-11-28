import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from '../../assests/images/tsem1.jpg'
import courseImg2 from "../../assests/images/appsc.jpg";
import courseImg3 from "../../assests/images/jeemainsday2shift1.png";
import courseImg4 from "../../assests/images/klee.jpg";
import courseImg5 from "../../assests/images/tseamcet2022.png";
import courseImg6 from "../../assests/images/jeemainsday2shift2.png";
import courseImg7 from '../../assests/images/jeemainsday3shift1.png';
import courseImg8 from '../../assests/images/jeemainsday3shift2.png';
import "./courses.css";
import CourseCard from "./CourseCard";
import ChooseUs from "../Choose-us/ChooseUs";
import FreeCourse from "../Free-course-section/FreeCourse";
import Header from "../Header/Header";
const coursesData = [
  {
    id: "01",
    title: "Ts eamcet paper for learners 2021",
    page: 99,
    students: 0.5,
    rating: 1.9,
    imgUrl: courseImg1,
   But:<a href="https://in.docworkspace.com/d/sIF3068tYuMamnAY?sa=00&st=0t">read</a>
  },

  {
    id: "02",
    title: "Ap eamcet paper for learners 2021",
    page: 84,
    students: 0.2,
    rating: 0.6,
    imgUrl: courseImg2,
    But:<a href="https://in.docworkspace.com/d/sIKP068tYge6tmgY?sa=00&st=0">read</a>
  },

  {
    id: "03",
    title: " JEE mains 2022 day2 shift-1 exam paper",
    page: 29,
    students: 0.175,
    rating: 0.78,
    imgUrl: courseImg3,
    But:<a href="https://in.docworkspace.com/d/sIGD068tYqLimnAY?sa=00&st=0t">read</a>
  },

  {
    id: "04",
    title: "KLEEE entrance exam",
    page: 1,
    students: 0.175,
    rating: 0.78,
    imgUrl: courseImg4,
    But:<a href="https://in.docworkspace.com/d/sIKP068tYge6tmgY?sa=00&st=0">read</a>
  },
  {
    id: "05",
    title: "JEE mains 2022 day2 shift-2 exam paper",
    page: 22,
    students: 0.175,
    rating: 0.78,
    imgUrl: courseImg6,
    But:<a href="https://in.docworkspace.com/d/sIFH068tYzrimnAY?sa=00&st=0t">read</a>
  },
  {
    id: "06",
    title: "Ts eamcet paper for learners 2022",
    page: 101,
    students: 0.5,
    rating: 1.9,
    imgUrl: courseImg5,
    But:<a href="https://in.docworkspace.com/d/sIEX068tY4MamnAY?sa=00&st=0t">read</a>
  },
  {
    id: "06",
    title: "JEE mains 2022 day3 shift-1 exam paper",
    page: 24,
    students: 0.03,
    rating: 0.78,
    imgUrl: courseImg7,
    But:<a href="https://in.docworkspace.com/d/sIFH068tY8bimnAY?sa=00&st=0t">read</a>
  },
  {
    id: "07",
    title: "JEE mains 2022 day3 shift-2 exam paper",
    page: 30,
    students: 0.15,
    rating: 0.78,
    imgUrl: courseImg8,
    But:<a href="https://in.docworkspace.com/d/sIPv068tYkbmmnAY?sa=00&st=0t">read</a>
  },
];
const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Contents</h2>
                <p>
                This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content.
                </p>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item}  />
            </Col>
          ))}
        </Row>
      </Container>
      <div>
      
     
      </div>
    </section>
  );
};

export default Courses;
