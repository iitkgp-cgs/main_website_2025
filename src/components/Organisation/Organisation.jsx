import React from "react";
import sateliteImg from "../../assets/GameDev.png";
import sateliteImg1 from "../../assets/Graphics.png";
import sateliteImg2 from "../../assets/RND.png";
import { useNavigate } from 'react-router-dom';

const Organisation = () => {
  const navigate = useNavigate();

  const handleNavigation = (name) => {
    navigate(`/${name}`);
  };

  return (
    <div className="m-1 p-3">
      {/* Game Development Section */}
      <section className="text-white pb-12 font-roboto m-1" id="organisation">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div data-aos="zoom-in" data-aos-once="true">
              <img
                src={sateliteImg}
                alt="Game Development"
                className="w-full max-h-[350px] object-cover rounded-xl border-white border-r-2 border-b-4"
              />
            </div>
            <div className="space-y-6 p-6 bg-black/80 rounded-xl border-r-2 border-b-2 border-pink-500">
              <h1 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="uppercase text-2xl md:text-4xl text-pink-500 font-bold">
                Game Development
              </h1>
              <p className="text-sm md:text-lg" data-aos="fade-up" data-aos-once="true" data-aos-delay="700">
                We specialize in crafting engaging and interactive games using Unity, delivering dynamic gameplay experiences with an emphasis on smooth mechanics, intuitive controls, and immersive storytelling.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-once="true"
                onClick={() => handleNavigation("GameDev")}
                className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition duration-300"
              >
                EXPLORE MORE..
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Graphics Section */}
      <section className="text-white pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div data-aos="zoom-in" data-aos-once="true">
              <img
                src={sateliteImg1}
                alt="Graphics"
                className="w-full max-h-[350px] object-cover rounded-xl border-white border-r-2 border-b-4"
              />
            </div>
            <div className="space-y-6 p-6 bg-black/80 rounded-xl border-r-2 border-b-2 border-pink-500">
              <h1 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="uppercase text-2xl md:text-4xl text-pink-500 font-bold">
                Graphics
              </h1>
              <p className="text-sm md:text-lg" data-aos="fade-up" data-aos-once="true" data-aos-delay="700">
                Our expertise in graphics ensures high-quality visuals, from detailed environments to dynamic lighting and textures, enhancing player engagement and realism. We also create animations, short films, artwork, and more.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-once="true"
                onClick={() => handleNavigation("Graphics")}
                className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition duration-300"
              >
                EXPLORE MORE..
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section className="text-white pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div data-aos="zoom-in" data-aos-once="true">
              <img
                src={sateliteImg2}
                alt="Research and Development"
                className="w-full max-h-[350px] object-cover rounded-xl border-white border-r-2 border-b-4"
              />
            </div>
            <div className="space-y-6 p-6 bg-black/80 rounded-xl border-r-2 border-b-2 border-pink-500">
              <h1 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="uppercase text-2xl md:text-4xl text-pink-500 font-bold">
                Research & Development
              </h1>
              <p className="text-sm md:text-lg" data-aos="fade-up" data-aos-delay="700" data-aos-once="true">
                We focus on the frontier of Virtual Reality and Augmented Reality game technology, conducting research in shaders, AI, and machine learning. Our work allows us to pioneer innovative visual effects and AI-driven gameplay mechanics.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-once="true"
                onClick={() => handleNavigation("Research")}
                className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition duration-300"
              >
                EXPLORE MORE..
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organisation;
