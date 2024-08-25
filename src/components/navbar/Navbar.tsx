import React, { useState } from "react";
import "./navbar.css";
import logo from "./../../images/pngwing.com (6) (2).png";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useToggle } from "../../common/toggole";

function Navbar() {
  const [isToggled, toggle] = useToggle();

  return (
    <div className="navbar">
      <img src={logo} alt="starwars-logo" />
      <nav>
        <ul className={isToggled ? "menu nvactiv" : "menu"}>
          <li onClick={toggle}>
            <Link to="/">Search Page</Link>
          </li>
        </ul>
      </nav>
      <div onClick={toggle} className="menuBtn">
        {isToggled ? <AiOutlineClose size={25} /> : <IoIosMenu color="gold" size={25} />}
      </div>
    </div>
  );
}

export default Navbar;
