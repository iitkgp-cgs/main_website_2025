
// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import Earth from "../../assets/cgsLogoWithoutBg.png";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   const navigate = useNavigate();

//   const handleNavigation = (name) => {
//     navigate(`/${name}`);
//   };

//   return (
//     <nav className="bg-black fixed w-full z-10 top-0">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <div className="text-3xl font-bold text-white">
//           <a href="/" className="hover:text-pink-700"><img src={Earth} className="w-[2.5rem] aspect-square"/></a>
//         </div>

//         {/* Hamburger Icon */}
//         <div className="lg:hidden">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex space-x-8 text-lg text-white">
//           <a href="#" className="hover:text-pink-500 " onClick={()=>{handleNavigation("Team")}}>Team</a>
//           <a href="#" className="hover:text-pink-500" onClick={()=>{handleNavigation("GameDev")}}>Game Dev</a>
//           <a href="#" className="hover:text-pink-500" onClick={()=>{handleNavigation("Graphics")}}>Graphics</a>
//           <a href="#" className="hover:text-pink-500" onClick={()=>{handleNavigation("Research")}}>Research</a>
          
//           <a href="#" className="block hover:text-pink-500" onClick={()=>{handleNavigation("ContentCreation")}}>Content</a>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-black`}>
//         <div className="space-y-4 py-2 px-4 text-white text-lg text-center">
//           <a href="#" className="block hover:text-pink-500" onClick={()=>{handleNavigation("Team")}}>Team</a>
//           <a href="#" className="block hover:text-pink-500" onClick={()=>{handleNavigation("GameDev")}}>Game Dev</a>
//           <a href="#" className="block hover:text-pink-500" onClick={()=>{handleNavigation("Graphics")}}>Graphics</a>
//           <a href="#" className="block hover:text-pink-500" onClick={()=>{handleNavigation("Research")}}>Research</a>
//           <a href="#" className="block hover:text-pink-500" onClick={()=>{handleNavigation("ContentCreation")}}>Content</a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Earth from "../../assets/cgsLogoWithoutBg.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleNavigation = (name) => {
    navigate(`/${name}`);
  };

  return (
    <nav className="bg-black fixed w-full z-10 top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="text-3xl font-bold text-white">
          <a href="/" className="hover:text-pink-700">
            <img src={Earth} className="w-[2.5rem] aspect-square" alt="Earth logo"/>
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu (visible on large screens) */}
        <div className="hidden lg:flex space-x-8 text-lg text-white">
          <a href="#" className="hover:text-pink-500" onClick={() => handleNavigation("Team")}>Team</a>
          <a href="#" className="hover:text-pink-500" onClick={() => handleNavigation("GameDev")}>Game Dev</a>
          <a href="#" className="hover:text-pink-500" onClick={() => handleNavigation("Graphics")}>Graphics</a>
          <a href="#" className="hover:text-pink-500" onClick={() => handleNavigation("Research")}>Research</a>
          <a href="#" className="hover:text-pink-500" onClick={() => handleNavigation("ContentCreation")}>Content</a>
        </div>
      </div>

      {/* Mobile Menu (visible on small screens) */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-black text-white text-lg`}>
        <div className="space-y-4 py-4 px-6 text-center">
          <a href="#" className="block hover:text-pink-500" onClick={() => handleNavigation("Team")}>Team</a>
          <a href="#" className="block hover:text-pink-500" onClick={() => handleNavigation("GameDev")}>Game Dev</a>
          <a href="#" className="block hover:text-pink-500" onClick={() => handleNavigation("Graphics")}>Graphics</a>
          <a href="#" className="block hover:text-pink-500" onClick={() => handleNavigation("Research")}>Research</a>
          <a href="#" className="block hover:text-pink-500" onClick={() => handleNavigation("ContentCreation")}>Content</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
