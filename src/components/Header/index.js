import React from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import Profile from "./Profile";

const Header = ({ user }) => {
  return (
    <nav className="navbar fixed-top bg-blue">
      <Logo />
      <ul className="nav">
        <NavItem text="로그인" to="/login" show={!user} />
        <NavItem text="회원가입" to="/signup" show={!user} />
        <Profile user={user} show={user} />
        <NavItem text="로그아웃" to="/logout" show={user} />
      </ul>
    </nav>
  );
};

export default Header;
