import React from "react";
import { NavLink } from "react-router-dom";
import MyTripNav from "./MyTripNav";
import "./nav.css";
import ProfileNav from "./ProfileNav";

const Navbar = () => {
  return (
    <nav className="w-full h-full flex items-center px-[50px] justify-start">
      <div className="nav-logo mx-4 w-[115px] h-[40px] shrink-0"></div>
      {/* Logo */}
      <div className="nav-links flex h-full items-center gap-6 font-medium text-slate-500 mx-5 flex-1">
        <NavLink to={"/flight"} className="flights nav-item">
          <span className="logo-flight logo-nav-item"></span> Flights
        </NavLink>
        <NavLink to={"/hotels"} className="hotels nav-item">
          <span className="logo-hotels logo-nav-item"></span> Hotels
        </NavLink>
        <NavLink to={"/trains"} className="trains nav-item">
          <span className="logo-trains logo-nav-item"></span> Trains
        </NavLink>
        {/* <NavLink  className="cabs nav-item">
          <span className="logo-cabs logo-nav-item"></span> Cabs
        </NavLink> */}
        <NavLink to={"/bus"} className="bus nav-item">
          <span className="logo-bus logo-nav-item"></span> Bus
        </NavLink>
      </div>
      
      <MyTripNav/>
      <ProfileNav/>


    </nav>
  );
};

export default Navbar;
