import React from 'react';
import Tilt from 'react-parallax-tilt'; // Importing react-tilt for 3D effect
import './team.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';


const Teamcard = ({ name, position, social, mail,  image }) => {
  console.log(social);
  return (
    <Tilt
      tiltMaxAngleX={15} // Controls the max tilt on the X-axis
      tiltMaxAngleY={15} // Controls the max tilt on the Y-axis
      glareEnable={true} // Enable glare effect
      glareMaxOpacity={0.3} // Set glare intensity
      scale={1.05} // Slightly scales the card on hover
      transitionSpeed={500} // Transition duration for the tilt and scale
      className="relative max-w-sm bg-black border-2 border-pink-500 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl group"
    >
      {/* Card Image */}
      <div className="relative">
        <img
          className="w-full  object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={name}
        />
        {/* Floating overlay on image */}
        <div className="absolute inset-0 bg-pink-600 opacity-0 transition-opacity duration-500 group-hover:opacity-30"></div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white text-center mb-2 transition-colors duration-500 group-hover:text-pink-500">
          {name}
        </h2>
        <p className="text-pink-400 text-sm mb-4 text-center transition-opacity duration-500 group-hover:opacity-80">
          {position}
        </p>
        <div className="flex justify-center align-center space-x-4 mt-6">
          {/* LinkedIn Icon */}
          <a
            href={social}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-600 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>

          {/* Email Icon */}
          <a
            href={`mailto:${mail}`}
            className="text-white hover:text-pink-600 transition-colors duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </Tilt>
  );
};

export default Teamcard;
