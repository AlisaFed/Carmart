import React, { useState, useRef } from 'react';
import "./slider.scss";

const CardSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);
  const slideWidth = 264;

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;
    const threshold = slideWidth / 2;

    if (deltaX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (deltaX < -threshold && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    const startX = event.clientX;

    const handleMouseUp = (event) => {
      const endX = event.clientX;
      const deltaX = endX - startX;
      const threshold = slideWidth / 2;

      if (deltaX > threshold && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (deltaX < -threshold && currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }

      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mouseup', handleMouseUp);
  };

  const transformStyle = {
    transform: `translateX(-${currentIndex * 275}px)`,
  };

  return (
    <div className="slider"       
    onMouseDown={handleMouseDown}
    onTouchStart={handleTouchStart}
    onMouseUp={handleMouseDown}
    onTouchEnd={handleTouchEnd}>
      <div className="slider-container" ref={containerRef} style={transformStyle}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Slide ${index + 1}`}
            className="slider-image"
            style={{ width: `${slideWidth}px`}}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
