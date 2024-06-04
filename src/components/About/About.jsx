import React from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./About.css";
import MenProducts from "../Shop/Men";
import about1 from "../../assets/about1.jpg";

const About = () => {
  return (
    <div className="aboutContent">
      <div className="aboutHead">
        <h3>About us</h3>
        <hr className="aboutDivider" />
      </div>
      <div className="aboutDesc">
        <h1>Who We Are.</h1>
        <br />
        <div className="descImg">
          <h2>
            At Clotever, we're more than just craftmen; we're curators of style
            and creators of timeless fashion.
          </h2>
          <img src={about1} />
        </div>
      </div>

      <div className="aboutFooter">
        <div className="footCont">
          <div className="aboutFirst">
            <ul>
              <li className="mailIcon">
                <CiMail />
                <a href="clotever@gmail.com">clotever321@gmail.com</a>
              </li>
              <li className="abFacebook">
                <a href="" title="Facebook">
                  {<FaFacebook />}
                </a>
              </li>
              <li className="abInstagram">
                <a href="" title="Instagram">
                  {<FaInstagram />}
                </a>
              </li>
            </ul>
          </div>
          <div className="aboutSecond">
            <h2> Our Categories</h2>
            <ul>
              <li>
                <a href="/shop/men" src={MenProducts}>
                  - Men's Clothing
                </a>
              </li>
              <li>
                <a href="">- Women's Clothing</a>
              </li>
            </ul>
          </div>
          <div className="aboutThird">
            <h2>Customer service</h2>
            <ul>
              <li>
                <a href="/orders" src={MenProducts}>
                  - Orders
                </a>
              </li>
              <li>
                <a href="">- Privacy Policy</a>
              </li>
              <li>
                <a href="">- Refund Policy</a>
              </li>
            </ul>
          </div>
          <div className="aboutFourth">
            <h2>Useful links</h2>
            <ul>
              <li>
                <a href="/contact" src={MenProducts}>
                  - Contact us
                </a>
              </li>
              <li>
                <a href="">- About us</a>
              </li>
              <li>
                <a href="">- Blogs</a>
              </li>
            </ul>
          </div>
          {/* <div className="aboutMap">
            <h2>Our Location</h2>
            <Map />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
