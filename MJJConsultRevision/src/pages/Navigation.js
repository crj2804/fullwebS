import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styling/nav.scss";

function Navigation () {
  return(
    <header id="header">
      <nav className="nav-collapse" role="navigation">
        <ul className="tabs primary-nav">
          <li className="tabs__item">
            <a href="#home" className="tabs__link">Home</a>
          </li>
          <li className="tabs__item">
            <a href="#about" className="tabs__link">About</a>
          </li>
          <li className="tabs__item">
            <a href="#contact" className="tabs__link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Navigation;
