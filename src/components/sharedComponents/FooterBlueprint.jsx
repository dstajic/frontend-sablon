import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footerBlueprintStyle.scss";

const FooterBlueprint = () => {
  return (
    <footer className="footer">
      {/* Left: text */}
      <div className="footerText">
        &copy; {new Date().getFullYear()} My Company. All rights reserved.
      </div>

      {/* Right: links */}
      <div className="footerLinks">
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
        <Link className="link" to="/privacy">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default FooterBlueprint;
