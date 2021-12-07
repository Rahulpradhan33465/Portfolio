import React, { useState } from 'react';
import './Navbar.css';

const MobileView = ({ isOpenMenu }) => {
  return (
    <div className={isOpenMenu ? 'mv__container show' : 'mv__container hide'}>
      <div className="mv__content">
        <div className="mv__links-container">
          <a href="#home" className="links">
            Home
          </a>
          <a href="#aboutMe" className="links">
            About Me
          </a>
          <a href="#resume" className="links">
            Resume
          </a>
          <a href="#tesimonial" className="links">
            Testimonial
          </a>
          <a href="#contactMe" className="links">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

const Links = () => {
  return (
    <div className="links-container">
      <a href="#home" className="links">
        Home
      </a>
      <a href="#aboutMe" className="links">
        About Me
      </a>
      <a href="#resume" className="links">
        Resume
      </a>
      <a href="#tesimonial" className="links">
        Testimonial
      </a>
      <a href="#contactMe" className="links">
        Contact Me
      </a>
    </div>
  );
};

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };
  return (
    <div className="navbar-container">
      <div className="inner-container">
        <div className="logo">
          <h1>RAHUL</h1>
        </div>
        <div className="links__content">
          <Links />
        </div>
        <div className="menu">
          {!isOpenMenu ? (
            <i
              className="fa fa-bars"
              aria-hidden="true"
              onClick={toggleMenu}
            ></i>
          ) : (
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={toggleMenu}
            ></i>
          )}
          <MobileView isOpenMenu={isOpenMenu} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
