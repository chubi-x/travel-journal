import React from "react";
import logo from "../images/logo.png";
export default function Header() {
  return (
    <nav id="logo">
      <img src={logo} alt="logo" />
      <span>my travel journal.</span>
    </nav>
  );
}
