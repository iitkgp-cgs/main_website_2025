import React from "react";
import featuredGame from "../../assets/parag.mp4";
import featuredAnimation from "../../assets/animation.mp4";
import featuredAnimation2 from "../../assets/animation2.mp4";

const Satellite = () => {
  const handleNavigation = (route) => {
    window.location.href = `/${route}`;
  };
  return (
    <>
      {/* Featured Game Section */}
      <div className="shadow-lg shadow-black m-0">
      <section className="bg-black text-white py-12 border-b-2 border-white" id="satellite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="space-y-4 p-4">
              <p data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="text-pink-500 uppercase">
                FEATURED NEW GAME
              </p>
              <h1 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="uppercase text-4xl md:text-5xl font-bold">
                Soul Magician
              </h1>
              <p data-aos="fade-up" data-aos-delay="700" data-aos-once="true" className="text-base md:text-lg leading-relaxed">
                In this 2D RPG map-clear game, players unlock unique powers and cast powerful spells to defeat enemies.
                Navigate through dynamic levels, use strategic spellcasting, and shoot projectiles to clear waves of
                enemies while upgrading abilities and discovering new powers along the way.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-once="true"
                onClick={() => handleNavigation("Gamedev")}
                className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Play Game...
              </button>
            </div>
            {/* Video Section */}
            <div data-aos="zoom-in">
              <video autoPlay loop muted className="w-full max-h-[350px] object-cover rounded-lg shadow-lg">
                <source src={featuredGame} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Animation Section */}
      <section className="bg-black text-white py-12 border-b-2 border-white" id="satellite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="space-y-4 p-4">
              <p data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="text-pink-500 uppercase">
                FEATURED ANIMATIONS
              </p>
              <h1 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="uppercase text-4xl md:text-5xl font-bold">
                Product Advertisement
              </h1>
              <p data-aos="fade-up" data-aos-delay="700" data-aos-once="true" className="text-base md:text-lg leading-relaxed">
                An engaging animated product advertisement that brings your brand to life with captivating visuals,
                dynamic motion, and creative storytelling. Perfect for showcasing features, explaining concepts, and
                grabbing attention with vibrant animations that leave a lasting impression.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-once="true"
                onClick={() => handleNavigation("Graphics")}
                className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Play Animations...
              </button>
            </div>
            {/* Video Section */}
            <div data-aos="zoom-in">
              <video autoPlay loop muted className="w-full max-h-[350px] object-cover rounded-lg shadow-lg">
                <source src={featuredAnimation} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Second Featured Animation Section */}
      <section className="bg-black text-white py-12 border-b-2 border-white" id="satellite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="space-y-4 p-4">
              <p data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="text-pink-500 uppercase">
                FEATURED ANIMATIONS
              </p>
              <h1 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="uppercase text-4xl md:text-5xl font-bold">
                Product Advertisement
              </h1>
              <p data-aos-once="true" data-aos="fade-up" data-aos-delay="700" className="text-base md:text-lg leading-relaxed">
                An engaging animated product advertisement that brings your brand to life with captivating visuals,
                dynamic motion, and creative storytelling. Perfect for showcasing features, explaining concepts, and
                grabbing attention with vibrant animations that leave a lasting impression.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-once="true"
                onClick={() => handleNavigation("Graphics")}
                className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Play Animations...
              </button>
            </div>
            {/* Video Section */}
            <div data-aos="zoom-in">
              <video autoPlay loop muted className="w-full max-h-[350px] object-cover rounded-lg shadow-lg">
                <source src={featuredAnimation2} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Satellite;
