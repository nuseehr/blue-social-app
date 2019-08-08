import React from "react";
import toggle from "../../hoc/toggle";
const NavItem = ({ text, to, action }) => {
  const onClickAnchor = e => {
    if (action) {
      e.preventDefault();
      e.stopPropagation();
      action();
    }
  };

  return (
    <li className="nav-item">
      <a href={to} className="nav-link" onClick={onClickAnchor}>
        {text}
      </a>
    </li>
  );
};

export default toggle(NavItem);
