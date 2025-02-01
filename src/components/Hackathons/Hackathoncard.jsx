import React from 'react';
import Carousel from './Carousel';

const HackathonCard = ({ title, date, description, images }) => {
  return (
    <div className="relative bg-black border border-pink-500 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      
      {/* Carousel Component */}
      <Carousel images={images} />

      {/* Card Content */}
      <div className="p-4 sm:p-5 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-pink-500 mb-2 text-center">
            {title}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm text-center mb-3">
            {date}
          </p>
        </div>

        {/* Description with Clamping */}
        <p className="text-white text-xs sm:text-sm mb-4 line-clamp-3 overflow-hidden">
          {description}
        </p>

        {/* Button */}
        <div className="flex justify-center mt-auto">
          <a
            href="#"
            className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-400 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
