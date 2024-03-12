import React from "react";
import { Link } from "react-scroll";

import "src/static/navbar.css";

const NavbarLink = ({ to = "", title = "" }) => {
  const offset = -55;

  return (
    <Link
      activeClass="navbar_active"
      className="navbar_link"
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={500}
    >
      {title}
    </Link>
  );
};

export default NavbarLink;
