import React from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { AiOutlineDollarCircle, AiOutlineQuestionCircle } from "react-icons/ai";
import { RiMenu5Line } from "react-icons/ri";

import LOGO_PNG from "./../../assets/images/logo.png";

export default function Header() {
  return (
    <div className="HeaderBar--root">
      <NavLink className="logobox" to="/">
        <img src={LOGO_PNG} alt="logo" className="logo_img" />
        <span className="fs-inter logo_text">Pod</span>
      </NavLink>
      <ul className="navs">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/">
            <BiHomeAlt className="nav_icon" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about">
            <HiOutlineOfficeBuilding className="nav_icon" />
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/pricing">
            <AiOutlineDollarCircle className="nav_icon" />
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/faqs">
            <AiOutlineQuestionCircle className="nav_icon" />
            FAQs
          </NavLink>
        </li>
        <li>
          <button className="btn btn-primary">Get Started</button>
        </li>
      </ul>
      <div className="nav_btn">
        <button className="btn btn-primary">
          <RiMenu5Line />
        </button>
      </div>
    </div>
  );
}
