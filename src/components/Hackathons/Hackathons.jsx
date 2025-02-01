import React, { useState } from "react";
import featuredGame from "../../assets/parag.mp4";
import featuredAnimation from "../../assets/animation.mp4";
import featuredAnimation2 from "../../assets/animation2.mp4";
import game1 from '../../assets/Vansh.png';
import game2 from '../../assets/RND.png';
import game3 from '../../assets/cgsLogoWithoutBg.png';
import HackathonCard from "./Hackathoncard";
import glob1 from '../../assets/Hackathon/7-glob1.png';
import glob2 from '../../assets/Hackathon/7-glob2.png';
import vr11 from '../../assets/Hackathon/VR_game_11.png';
import vr12 from '../../assets/Hackathon/VR_game_12.png';
import vr21 from '../../assets/Hackathon/VR_game_21.png';
import vr22 from '../../assets/Hackathon/VR_game_22.png';
import vr23 from '../../assets/Hackathon/VR_game_23.png';
import jit from '../../assets/Hackathon/JIT.png';

const hackathons = [
  {
    title: "7th Global Competition on Design for Future Education (2024)",
    date: "25th July 2024",
    description: "The 7th Global Competition on Design for Future Education, jointly organised by Beijing Normal University (BNU) and UNESCO IITE,With the themes of AIGC in Education, Metaverse and Education, Rural Education, Inclusive Education, and Educational Neuroscience this hackathon invites 1000+ teams to compete.Two of our teams have secured a spot in finals which will be held in Beijing.",
    image: [glob1, glob2]
  },
  {
    title: "IEEE X IIIT BANGALORE",
    date: "July 15, 2024",
    description: "Secured a first position in the Hack the Metaverse, organised by IEEE x IIIT Bangalore.",
    image: [game1,game2,game3]
  },
  {
    title: "VR GAME-A-THON - Project 1",
    date: "September 5, 2023",
    description: "Secured a third position in the VR Game-a-thon, organised by IHUB Drishti, IIT Jodhpur.",
    image: [vr11, vr12]
  },
  {
    title: "VR GAME-A-THON - Project 2",
    date: "November 20, 2023",
    description: "VR game based on Ancient Mysteries for VR Game-a-thon, organised by IHUB Drishti, IIT Jodhpur.",
    image: [vr21, vr22, vr23]
  },
  {
    title: "OPTIMA, IIT KHARAGPUR 2023",
    date: "November 20, 2023",
    description: "Secured a first position and second runner-up in the optima, IIT Kharagpur 2023 edition.",
    image: [game3, game2, game1]
  },
  {
    title: "JIT Hack 2k24",
    date: "November 20, 2023",
    description: "24 Hour long Offline hackathon in Jyothi Institute of Technology ,Bangalore where we made an Augmented Reality Decentralised Multiplayer Combat game and a Ḥsite to trade game skins.We have built this within specified time and received positive responses from the judges.",
    image: [jit]
  },
  {
    title: 'ETH Global',
    date: "september 20, 2024",
    description: "A decentralised webapp was built that provides seamless contact between the ecosystem of games that use a common currency. This helps the uder to enjoy all the games in the ecosystemfully,despite having limited funds. This project uses Web3Auth and its both gas and non gas functions of the likes of Buy, Sell, Fetch, etc.",
    image: [game3, game2, game1]
  }
];

const Hackathons = () => {
  const [currentGame, setCurrentGame] = useState(0);
  const carouselGames = [jit, vr11, vr12,vr22];
  const interval = setInterval(() => {
    setCurrentGame((prevGame) => (prevGame + 1) % carouselGames.length);
  }, 3000);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans">
      <div className="relative w-full h-[60vh] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${carouselGames[currentGame]})` }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <h1 className="text-5xl font-bold text-white drop-shadow-lg text-center">Hackathons</h1>
          </div>
        </div>
      </div>

      {/* Hackathon Cards */}
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl text-pink-400 mb-8 text-center"  data-aos-once='true'data-aos="zoom-in">Our Achievements</h1>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-12 px-4 md:px-8 lg:px-16" data-aos-once='true'data-aos="zoom-in">
        {hackathons.map((hackathon, index) => (
          <HackathonCard
            key={index}
            title={hackathon.title}
            date={hackathon.date}
            description={hackathon.description}
            images={hackathon.image}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Hackathons;
