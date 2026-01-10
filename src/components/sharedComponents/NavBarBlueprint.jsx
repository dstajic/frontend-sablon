import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbarBlueprintStyle.scss";
const NavbarBlueprint = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/item1">
        <p>Item1</p>
      </Link>
      <Link className="link" to="/item2">
        <p>Item2</p>
      </Link>
      <Link className="link" to="/createItem">
        <p>Create item</p>
      </Link>
      <Link className="link" to="/popups">
        <p>Popups</p>
      </Link>
    </div>
  );
};
export default NavbarBlueprint;
