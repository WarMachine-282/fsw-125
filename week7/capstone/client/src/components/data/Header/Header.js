import React from "react";
import "./Header.css";
import Search from "../Search/Search"
import logo from "../../images/avenger-icon.svg"

const Header = (props) => {
  return (
    <header className="head-container">
    <img src={logo} alt="Logo" />
      <div>
      <h1 className="header">We Want You!</h1>
      </div>
      <Search searchAvengers={props.searchAvengers}/>
    </header>
  );
};

export default Header