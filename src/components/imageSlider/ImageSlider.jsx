import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import img1 from "../../assets/img1.jpg";
import img4 from "../../assets/img4.jpg";
import img3 from "../../assets/img3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const images = [img1, img4, img3];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="slider">
      <div className="arrow">
        {/* <button className="left-arrow" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button> */}
        <img src={images[currentIndex]} alt="slide" className="slide-image" />
        {/* <button className="right-arrow" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button> */}
      </div>
    </div>
  );
};

export default ImageSlider;
