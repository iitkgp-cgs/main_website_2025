// import React from "react";
// import MountainPng from "../../assets/moon-surface-hd.png";
// import Earth from "../../assets/cgsLogoWithoutBg.png";
// import './Hero.css'

// const Hero = () => {
//   return (
//     <div className="bg-black/0 h-full m-1 pt-20 pb-20">
//       <div className="h-full flex justify-center items-center p-4">
//         <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="bg-black/80 p-10 text-white space-y-4 lg:pr-36 rounded-lg">
//             <h1 data-aos="fade-up"data-aos-once='true' className="text-5xl font-bold text-pink-500">
//               Computer Graphics Society
//             </h1>
//             <p data-aos="fade-up" data-aos-delay="300" data-aos-once='true' className="text-xl">
//             We ,the Computer Graphics Society at IIT Kharagpur is a passionate group of students dedicated to exploring the world of game development, using Unity and Unreal engines. We specialize in graphics, animations, short films, and shader development, while actively researching cutting-edge technologies like virtual reality, augmented reality, and blockchain gaming. Our members regularly participate in national and international hackathons, pushing the boundaries of innovation and creativity.
//             </p>
//             <button
//               data-aos="fade-up"
//               data-aos-delay="500"
//               data-aos-once='true'
//               className="inline-block bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
//             >
//               Explore..
//             </button>
//           </div>
//         </div>
//         {/* <div className="relative earth-container" style={{ zIndex: 2, position: "relative" }}>
//           <img src={Earth} alt="" className="earth-image" />
//         </div> */}
//       </div>
      
//       {/* <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div> */}
//     </div>
//   );
// };

//  export default Hero;
// export default function Hero() {
//   return (
//     <section className="bg-black/80 text-white py-20 pb-20">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
//         {/* Image Section */}
//         <div className="md:w-1/2">
//           <img
//             src="https://via.placeholder.com/500x500"
//             alt="Website Overview"
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="md:w-1/2 md:pl-10 mt-10 md:mt-0">
//           <h1 className="text-4xl font-bold mb-6" data-aos="fade-up">
//             Welcome to <span className="text-pink-500">C G S</span>
//           </h1>
//           <p className="text-lg mb-6" data-aos="fade-up">
//           We the Computer Graphics Society at IIT Kharagpur is a passionate group of students dedicated to exploring the world of game development, using Unity and Unreal engines. We specialize in graphics, animations, short films, and shader development, while actively researching cutting-edge technologies like virtual reality, augmented reality, and blockchain gaming. Our members regularly participate in national and international hackathons, pushing the boundaries of innovation and creativity.
//           </p>
//           <a
//             data-aos="fade-up"
//             data-aos-delay="500"
//             href="#organisation"
//             className="inline-block bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
//           >
//             Explore
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import Earth from "../../assets/cgsLogoWithoutBg.png"; // Ensure the path is correct
import './Hero.css';

const Hero = () => {
  return (
    <div className="bg-black/80 text-white py-10 md:py-20 shawdow-black shawdow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Text Section */}
          <div className="w-full md:w-1/2 lg:w-2/3 p-4" id="2">
            <div className="bg-black/80 p-6 md:p-10 rounded-lg">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-3xl md:text-5xl font-bold text-pink-500 leading-tight"
              >
                Computer Graphics Society
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="true"
                className="mt-4 text-base md:text-lg leading-relaxed"
              >
                We, the Computer Graphics Society at IIT Kharagpur, are a passionate group of students dedicated to exploring the world of game development using Unity and Unreal engines. We specialize in graphics, animations, short films, and shader development, while actively researching cutting-edge technologies like virtual reality, augmented reality, and blockchain gaming. Our members regularly participate in national and international hackathons, pushing the boundaries of innovation and creativity.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-once="true"
                className="mt-6 bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                
              >
                Explore..
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 flex justify-center md:justify-end">
            <img
              src={Earth}
              alt="CGS Logo"
              className="w-3/4 md:w-full lg:max-w-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
