import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; 
import img1 from '../../assets/img1.jpg';
import img4 from '../../assets/img4.jpg';
import img3 from '../../assets/img3.jpg';

const images = [img1, img4, img3]

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
      <button className="left-arrow" onClick={prevSlide}>
      </button>
      <img src={images[currentIndex]} alt="slide" className="slide-image" />
      <button className="right-arrow" onClick={nextSlide}>
      </button>
    </div>
  );
};

export default ImageSlider;
