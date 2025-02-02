import React from "react";
import Earth from "../../assets/cgsLogoWithoutBg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGoogle, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (name) => {
    navigate(`/${name}`);
  };
  return (
    <div className="bg-dark ">
      <section className="max-w-[1400px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5 mx-2">
          {/* first column */}
          <div className="py-8 px-4">
            <div className="">
              <img src={Earth} className="w-[7rem] aspect-[3/3]"/>
            </div>
            <h1 className="sm:text-3xl text-xl text-pink-500 font-bold sm:text-left text-justify mb-3">
              Computer Graphics Society
            </h1>
            <p className="text-white">
              Indian Institute of Technology Kharagpur, West Bengal-721302
            </p>
          </div>
          {/* Second column */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold text-pink-500 sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3 `}>
                  <li className="cursor-pointer"><a href='/'>Home</a></li>
                  <li className="cursor-pointer"><a href='/GameDev' >Game development</a></li>
                  <li className="cursor-pointer"><a href='/Graphics'>Graphics</a></li>
                  <li className="cursor-pointer"><a href='/Team'>Team</a></li>
                  <li className="cursor-pointer"><a href='/Research'>Research</a></li>
                  <li className="cursor-pointer"><a href='/ContentCreation'>Content</a></li>
                  
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold text-pink-500 sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-row gap-3 ">
                  <li className="cursor-pointer text-3xl"><a href="https://www.linkedin.com/company/computer-graphics-lab/"> <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> </a> </li>
                  <li className="cursor-pointer text-3xl"><a href="mailto:cgsiitkgp@gmail.com"> <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> </a> </li>
                  <li className="cursor-pointer text-3xl"><a href="https://www.facebook.com/cgsiitkgp?mibextid=ZbWKwL"> <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </a> </li>
                  <li className="cursor-pointer text-3xl"><a href="https://www.instagram.com/cgs_iitkgp?igsh=ZThzdW9taXg5Y2o5"> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> </a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-between items-center text-center py-6 border-t-2 border-gray-300/40 mx-auto">
            <span className="text-gray-400">
              @ Copyrights Computer Graphics Society, IIT Kharagpur
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
