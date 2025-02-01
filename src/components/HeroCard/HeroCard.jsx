import React from "react";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

const ServiceData = [
  {
    title: "Game Development",
    description:
      "We specialize in crafting engaging and interactive games using Unity, delivering dynamic gameplay experiences with an emphasis on smooth mechanics, intuitive controls, and immersive storytelling. Our approach combines innovation with technical precision to create games that captivate and challenge players.",
    icon: <FaReact className="text-7xl text-white" />,
    aosDelay: "300",
  },
  {
    title: "Graphics",
    description:
      "Our expertise in graphics ensures high-quality visuals, from detailed environments to dynamic lighting and textures, enhancing player engagement and realism.Beyound this we create Animations , Short Films , ArtWork Music Visulalizer and many more.",
    icon: <FaShuttleSpace className="text-7xl text-white" />,
    aosDelay: "500",
  },
  {
    title: "Research and Development",
    description:
      "We focus on the frontier of game technology, conducting research in shaders, AI, and machine learning. Our work with OpenCV in Unity enables intelligent object recognition and interaction, while our shader development enhances real-time rendering. This R&D allows us to pioneer innovative visual effects and AI-driven gameplay mechanics",
    icon: <FaSpaceAwesome className="text-7xl text-white" />,
    aosDelay: "700",
  },
];

const HeroCard = () => {
  return (
    <>
    <div className="bg-black/30 shadow-2xl shadow-black">
      <section className="bg-black/80 pt-7" id="services">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 relative z-10">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-once='true'
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl space-y-3 p-4 border-white space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-white border-b-white"
                    >
                      {data.icon}
                      <h1 className="text-white">{data.title}</h1>
                      <p className="text-white">{data.content}</p>
                      <p className="text-sm text-white">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default HeroCard;
