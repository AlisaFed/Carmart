import React, { useState, useRef } from 'react';

const CardSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const slideWidth = 264;

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
    transform: `translateX(-${currentIndex * slideWidth}px)`,
  };

  return (
    <div className="slider" onMouseDown={handleMouseDown}>
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
