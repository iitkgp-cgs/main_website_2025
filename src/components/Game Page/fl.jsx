// import React, { useState } from 'react';
// import './fl.css'; // Custom CSS for flip effect

// const Flip = ({ title, image, creator,description, linkdin ,playGame,video}) => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       {/* Flipping Card */}
//       <div className="flip-card w-80 h-64 m-4 cursor-pointer" onClick={() => setShowModal(true)}>
//         {/* Card Inner */}
//         <div className="flip-card-inner">
//           {/* Card Front */}
//           <div className="flip-card-front absolute w-full h-full bg-gray-800 shadow-lg rounded-lg">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-48 object-cover rounded-t-lg"
//             />

//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-white">{title}</h3>
//             </div>
//           </div>

//           {/* Card Back */}
//           <div className="flip-card-back absolute w-full h-full bg-pink-500 text-white rounded-lg">
//             <div className="p-4 h-full flex flex-col justify-center items-center">
//               <h3 className="text-lg font-semibold mb-2">{title}</h3>
//               <p>{description}</p>
//               <p className="mt-4">Click to know more!</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-gray-800 w-11/12 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg overflow-hidden">
//             <div className="p-6">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-2xl font-semibold text-white">{title}</h2>
//                 <button onClick={() => setShowModal(false)}>
//                   X
//                 </button>
//               </div>
//               <div className="mt-4">
//               <video
//                     autoPlay
//                     loop
//                     muted
//                     className="w-full h-full object-cover rounded-t-lg"
//                     alt='Trailer not released '

//                   >
//                     <source src={video} type="video/mp4" />
//                   </video>
//                 <p> Created by <a href= {linkdin} >{creator} </a> </p>
//                 <br></br>
//                 <p>{description}</p>
                
//                 <button
//                 className="mt-4 w-full bg-pink-500 text-white py-2 px-4 rounded-lg"
//               >
//                   <a href={playGame}>PLAY GAME...</a>
//               </button>
//               </div>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="mt-4 w-full bg-pink-500 text-white py-2 px-4 rounded-lg"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Flip;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Users, Trophy, X } from "lucide-react";

export default function Flip({ title, image, creator, description, players = "1-4", achievements = 12,linkdin ,playGame,video }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleModal = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={toggleModal}
      >
        <div className="relative overflow-hidden w-80 shadow-md rounded-lg bg-black shadow-lg box-sha border border-white">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              className="absolute bottom-0 left-0 w-full p-4 text-pink-300"
            >
              <p className="text-sm">{description}</p>
            </motion.div>
          </div>
          <div className="p-4">
            <h3 className="text-2xl font-bold text-pink-500">{title}</h3>
            <p className="text-sm white">by {creator}</p>
            <div className="mt-2 flex items-center gap-4 text-sm text-white">
              {/* <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{players}</span>
              </div>
              <div className="flex items-center gap-1">
                <Trophy className="h-4 w-4" />
                <span>{achievements}</span>
              </div> */}
              <div className="flex items-center gap-1">
                <Gamepad2 className="h-4 w-4" />
                <span>Action</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={toggleModal}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-11/12 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg overflow-hidden bg-black p-6 border border-pink-500 backdrop-blur-lg"
            >

              <div className="relative aspect-video rounded-lg overflow-hidden">
                {/* <img src={image || "/placeholder.svg"} alt={title} className="w- h-full object-cover" /> */}
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover rounded-t-lg"
                    alt='Trailer not released '

                  >
                    <source src={video} type="video/mp4" />
                  </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>

              <div className="space-y-4 mt-4">
                <h2 className="text-3xl font-bold text-pink-500">{title}</h2>
                <p className="text-sm text-pink-300">by <a className="text-sm text-pink-300" href={linkdin} target="_blank">{creator}</a></p>
                <p className="text-white">{description}</p>

                <div className="flex flex-wrap gap-6 text-sm text-white">
                  {/* <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{players} Players</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4" />
                    <span>{achievements} Achievements</span>
                  </div> */}
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="h-4 w-4" />
                    <span>Action, Adventure</span>
                  </div>
                </div>
                <button
                className="mt-4 w-full bg-pink-500 text-white py-2 px-4 rounded-lg"
              >
                  <a href={playGame}>PLAY GAME...</a>
              </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
