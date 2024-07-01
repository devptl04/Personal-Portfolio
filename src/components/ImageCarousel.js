import React, { useState } from 'react';

const images = [
  'images/suit.jpg',
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-full h-full">
        <img
          src={images[currentIndex]}
          alt="Carousel"
          className="object-cover w-full h-full"
        />
        <button
          onClick={handlePrev}
          className="hidden absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#082f49] text-white p-3 rounded-full hover:bg-sky-400 focus:outline-none"
        >
          <span className="fas fa-arrow-left"></span>
        </button>
        <button
          onClick={handleNext}
          className="hidden absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#082f49] text-white p-3 rounded-full hover:bg-sky-400 focus:outline-none"
        >
          <span className="fas fa-arrow-right"></span>
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;
