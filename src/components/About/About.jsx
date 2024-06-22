import React from "react";
import "./About.css";
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
    </div>
  );
};

export default About;
