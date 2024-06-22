import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import MenProducts from "../Shop/Men";
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="Footer">
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
        </div>
      </div>
    </div>
  )
}

export default Footer
