import React from "react";
import "./nav.css";

const Navbar = () => {
  return (
    <nav className="w-full h-full flex items-center px-[50px] justify-between">
      <div className="nav-logo"></div>
      <div className="nav-links"></div>
    </nav>
  );
};

export default Navbar;
