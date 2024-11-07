import React from "react";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Foo.css";

const Foo = () => {
  return (
    <div className="footer">
      <div className="social-logo">
        <FaYoutube />
        <FaInstagram />
        <FaTwitter />
      </div>

      {/* Copy Text */}
      <div className="copy-text">
        <p>&copy;2024 Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Foo;
