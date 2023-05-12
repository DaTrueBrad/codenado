import React from "react";
import { HiNewspaper, HiUserCircle } from "react-icons/hi2";
import { FaMedal, FaSearch, FaPencilAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to="/">
        <HiNewspaper size="40px" />
      </NavLink>
      <NavLink to="/search">
        <FaSearch size="40px" />
      </NavLink>
      <NavLink to="/create">
        <FaPencilAlt size="40px" />
      </NavLink>
      <NavLink to="/leaderboard">
        <FaMedal size="40px" />
      </NavLink>
      <NavLink to="/profile">
        <HiUserCircle size="40px" />
      </NavLink>
    </nav>
  );
};

export default Menu;
