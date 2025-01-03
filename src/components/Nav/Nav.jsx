import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { TbHomeFilled } from "react-icons/tb";
import { ImHammer2 } from "react-icons/im";
import { FaClipboardQuestion } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";

function Nav() {
  return (
    <nav className="Nav">
      <Link to="/home">
        <img src="assets/PipPropelLogo.png" alt="" />
      </Link>
      <ul className="nav-list">
        <li>
          <Link to="/home">
            <TbHomeFilled /> Home
          </Link>
        </li>
        <li>
          <Link to="/home">
            {" "}
            <ImHammer2 /> Rules
          </Link>
        </li>
        <li>
          <Link to="/home">
            <FaClipboardQuestion /> FAQ
          </Link>
        </li>
        <li>
          <Link to="/home">
            <RiContactsFill /> Contact US
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
