// import React from "react";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

// const ServiceData = [
//   {
//     title: "Game Development",
//     description:
//       "We specialize in crafting engaging and interactive games using Unity, delivering dynamic gameplay experiences with an emphasis on smooth mechanics, intuitive controls, and immersive storytelling. Our approach combines innovation with technical precision to create games that captivate and challenge players.",
//     icon: <FaReact className="text-7xl text-white" />,
//     aosDelay: "300",
//   },
//   {
//     title: "Graphics",
//     description:
//       "Our expertise in graphics ensures high-quality visuals, from detailed environments to dynamic lighting and textures, enhancing player engagement and realism.Beyound this we create Animations , Short Films , ArtWork Music Visulalizer and many more.",
//     icon: <FaShuttleSpace className="text-7xl text-white" />,
//     aosDelay: "500",
//   },
//   {
//     title: "Research and Development",
//     description:
//       "We focus on the frontier of game technology, conducting research in shaders, AI, and machine learning. Our work with OpenCV in Unity enables intelligent object recognition and interaction, while our shader development enhances real-time rendering. This R&D allows us to pioneer innovative visual effects and AI-driven gameplay mechanics",
//     icon: <FaSpaceAwesome className="text-7xl text-white" />,
//     aosDelay: "700",
//   },
// ];

// const HeroCard = () => {
//   return (
//     <>
//     <div className="bg-black/30 shadow-2xl shadow-black">
//       <section className="bg-black/80 pt-7" id="services">
//         <div className="container">
//           <div className="min-h-[400px]">
//             <div>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 relative z-10">
//                 {ServiceData.map((data, index) => {
//                   return (
//                     <div
//                       key={index}
//                       data-aos="fade-up"
//                       data-aos-once='true'
//                       data-aos-delay={data.aosDelay}
//                       className="min-h-[180px] flex flex-col justify-center items-center rounded-xl space-y-3 p-4 border-white space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-white border-b-white"
//                     >
//                       {data.icon}
//                       <h1 className="text-white">{data.title}</h1>
//                       <p className="text-white">{data.content}</p>
//                       <p className="text-sm text-white">{data.description}</p>
//                     </div>
//                   );
//                 })}
//               </div>
              
//             </div>
//           </div>
//         </div>
//       </section>
//       </div>
//     </>
//   );
// };

// export default HeroCard;

import { useEffect } from "react";
import { FaGamepad, FaPaintBrush, FaMicrochip } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceData = [
  {
    title: "Game Development",
    description:
      "We craft engaging and interactive games using Unity, delivering dynamic gameplay experiences with smooth mechanics, intuitive controls, and immersive storytelling.",
    icon: <FaGamepad className="text-7xl  text-white" />,
    route:"Gamedev"
  },
  {
    title: "Graphics & Animation",
    description:
      "Our expertise ensures high-quality visuals, from detailed environments to dynamic lighting and textures. We create stunning animations and artwork that push creative boundaries.",
    icon: <FaShuttleSpace className="text-7xl text-white" />,
    route:"Graphics"
  },
  {
    title: "R&D in Game Tech",
    description:
      "We're at the forefront of game technology, researching advanced shaders, AI, and machine learning to pioneer innovative visual effects and AI-driven gameplay mechanics.",
    icon: <FaSpaceAwesome className="text-7xl text-white" />,
    route:"Reseach"
  },
];

const HeroCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleNavigation = (route) => {
    window.location.href = `/${route}`;
  };
  return (
    <section className="bg-black/80 shawdow-black shawdow-2xl py-16 px-4 sm:px-6 lg:px-8" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServiceData.map((data, index) => (
            <motion.div
              key={index}
              className="bg-black/80 rounded-lg overflow-hidden border border-pink-500 shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              transition={{ duration: 0.3 }}
            >
              <motion.div className="p-6 flex flex-col h-full">
                <motion.div
                  className="flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {data.icon}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                  {data.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base flex-grow">
                  {data.description}
                </p>
                <motion.div
                  className="mt-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <button className="text-pink-500 hover:text-white transition-colors duration-300 text-sm sm:text-base font-medium"
                  onClick={() => handleNavigation(data.route)}>
                    Learn More →
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCard;