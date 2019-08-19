import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styling/nav.scss";

function Navigation (){
  return(
    <header id="header">
      <nav class="nav-collapse" role="navigation">
        <ul class="tabs primary-nav">
          <li class="tabs__item">
            <a href="#home" class="tabs__link">Home</a>
          </li>
          <li class="tabs__item">
            <a href="#about" class="tabs__link">About</a>
          </li>
          <li class="tabs__item">
            <a href="#contact" class="tabs__link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Navigation;
