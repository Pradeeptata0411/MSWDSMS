import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import AboutUs from "../About-us/AboutUs";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
 
  {
    display: "Courses",
    url: "Courses",
  },
  
  {
    display: "Pages",
    url: "Pages",
  },
  {
    display: "About-us",
    url: "AboutUs",
  },
  {
    display: "Blog",
    url: "Blog",
  },
];
const navLinks1 = [
  {
    display: "Logout",
    URL : "Login"
  }
]

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> Learners Site.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={handleLogout}>
              <ul className="nav__list">
                {navLinks1.map((item, index) => (
                  <li key={index} className="nav__item">
                  <a href={item.URL}>{item.display} </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
               
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={handleLogout}></i>
            </span>
          </div>
        </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;