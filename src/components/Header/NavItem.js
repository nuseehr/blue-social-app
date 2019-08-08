import React from "react";

const NavItem = ({ text, to }) => {
  return (
    <li className="nav-item">
      <a href={to} className="nav-link">
        {text}
      </a>
    </li>
  );
};

export default NavItem;
