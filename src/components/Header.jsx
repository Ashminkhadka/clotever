import React from "react";
import "./Header.css"
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";


const Header = () => {
  return (
    <div className="header">
      <div className="columnOne">
        <ul className="social">
          <li className="slogan">Get a free gift with your purchase</li>
          <li className="mail">
            <li className="mailIcon"><CiMail/></li>
            <a href="clotever@gmail.com">clotever321@gmail.com</a>
          </li>
        </ul>
        <ul className="social-media">
          <li className="facebook">
            <a href="" title="Facebook">{<FaFacebook/>}</a>
          </li>
          <li className="instagram">
            <a href="" title="Instagram">{<FaInstagram/>}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
