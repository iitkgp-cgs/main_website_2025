import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



import parag from '../../assets/GameDev/parag.mp4';
import game1 from '../../assets/Vansh.png';
import game2 from '../../assets/RND.png';
import game3 from '../../assets/cgsLogoWithoutBg.png';
import Flip from './fl';
import { useNavigate } from 'react-router-dom';
import { desc } from 'framer-motion/client';

const GameDev = () => {
  const [currentGame, setCurrentGame] = useState(0);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const carouselGames = ['https://images.ctfassets.net/7ghyf81o1fuo/6qW0Sjsv4lok77z8oOpKIo/a7a21f32fc337b3168cbaf1f03e7a1b2/parag.png', 'https://images.ctfassets.net/7ghyf81o1fuo/4pQ4TYJSKCV4xRYsRgSbs0/2d85e89f9e7b8592d3e783f3d3f2befc/shaurya.png', 'https://images.ctfassets.net/7ghyf81o1fuo/6RI1XPIY9thmmhbkycdzlJ/42318543a44f31a30e0463f6c03171f7/harswardhan.png','https://images.ctfassets.net/7ghyf81o1fuo/6gHMd7wcqO463x4AjYdFfl/2d4b2afcc9b59a6056d1e297de599cf1/harsh.png']; 

  const Game2D = [
    { id: 1, name: 'SOUL MAGICIAN', image: 'https://images.ctfassets.net/7ghyf81o1fuo/6qW0Sjsv4lok77z8oOpKIo/a7a21f32fc337b3168cbaf1f03e7a1b2/parag.png', creator: 'Parag Chimankar', linkedin: 'https://www.linkedin.com/in/chimankarparag/' ,play:'https://chimankarparag.itch.io/soul-magician' , description:'2D rpg map clear game', video:parag },
    { id: 2, name: 'socerers-realm', image: 'https://images.ctfassets.net/7ghyf81o1fuo/5is9mWnsC0Np5w8sFgv7M9/a3a2a63b37e28c8cd9ae4dcd6f0c6a83/Vansh.png', creator: 'Vansh Pali', linkedin: 'https://www.linkedin.com/in/vansh-pali-47b315287/' ,play:'https://vanshpali24.itch.io/socerers-realm' , description:'2D dungeon based game', video:'https://videos.ctfassets.net/7ghyf81o1fuo/6d6EhXGpplKEWkRdT7WcL5/a5e74c4118a914448542a97dd550d455/REC-20241006183232.mp4'},
    { id: 3, name: 'Backless', image: 'https://images.ctfassets.net/7ghyf81o1fuo/6RI1XPIY9thmmhbkycdzlJ/42318543a44f31a30e0463f6c03171f7/harswardhan.png', creator: 'Harshwardhan Walunjkar', linkedin: 'https://www.linkedin.com/in/harshwardhan-walunjkar-93035628b/' ,play:'https://harshuiuiui.itch.io/backless' , description:'An endless runner with a twist, lose all your lives, and the direction should reverse, only now your score starts decreasing. Collect all orbs and return to your path!', video:'https://videos.ctfassets.net/7ghyf81o1fuo/EPsNRkL2IuzehrWUuFLbI/1e3a3102021fb771c3a5bedfa7c8b4ed/harshwardhan.mp4'},
    { id: 4, name: 'Chrono-chrome', image: 'https://res.cloudinary.com/dodlxtpvx/image/upload/v1738503328/Screenshot_2025-02-02_at_7.02.50_PM_yhycws.png', creator: 'Harshwardhan Walunjkar', linkedin: 'https://www.linkedin.com/in/harshwardhan-walunjkar-93035628b/' ,play:'https://harshuiuiui.itch.io/chrono-chrome' , description:'Collect colors from the tiles to pass through the laser of that color. Collect all purple orbs and reach the purple tile to finish the level. You can rewind time or spawn a clone of yourself that will trace and repeat your previous motions! The objective is simple enough solve the 5 levels!', video:'https://res.cloudinary.com/dodlxtpvx/video/upload/v1738503681/REC-20250202190931_epqqtr.mp4'},

  ];
  const Game3D = [  
        { id: 6, name: 'Sins Unveiled ', image: 'https://images.ctfassets.net/7ghyf81o1fuo/4pQ4TYJSKCV4xRYsRgSbs0/2d85e89f9e7b8592d3e783f3d3f2befc/shaurya.png', creator: 'Shaurya', linkedin: 'https://www.linkedin.com/in/shaurya-baranwal-6a240817b/',play:'',description:'3d Dark Horror Game ',video:'https://videos.ctfassets.net/7ghyf81o1fuo/3gaqWRh0PGHgNO3SKEIP9s/bc8c3e99e6b3afdf8f866e35cbb61b8c/shaurya.mp4' },
        { id: 7, name: '3d Parkour Game', image: 'https://images.ctfassets.net/7ghyf81o1fuo/016o8C8VM9Id3z4dNN5bSF/8581c6b1fbb94648b922f410845820d5/shazain.png', creator: 'Md Shahzain Misbah', linkedin: 'https://www.linkedin.com/in/md-shahzain-misbah-593724294/',play:'https://kaxyon.itch.io/parkour-afterlife',description:'3D World where you have to complete challenging levels. ',video:'' },
        { id: 8, name: 'Point Blank', image: 'https://images.ctfassets.net/7ghyf81o1fuo/6gHMd7wcqO463x4AjYdFfl/2d4b2afcc9b59a6056d1e297de599cf1/harsh.png', creator: 'Harsh Verma', linkedin: 'https://www.linkedin.com/in/harsh-verma-572167287/' ,play:'https://vermaharsh.itch.io/point-blank',description:'3D top Down shooter Game',video:''},
      ];
    
      const puzzleGames = [
        { id: 11, name: 'Game 11', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
        { id: 12, name: 'Game 12', image: game2, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
        { id: 13, name: 'Game 13', image: game3, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
        { id: 14, name: 'Game 14', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
        { id: 15, name: 'Game 15', image: game2, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
      ];
  const navigate = useNavigate();



  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
    });

    const interval = setInterval(() => {
      setCurrentGame((prevGame) => (prevGame + 1) % carouselGames.length);
    }, 3000);

    const handleHashChange = () => {
      const gameId = window.location.hash.replace('#', '');
      if (gameId) {
        const selected = Game2D.find(game => game.id === parseInt(gameId));
        if (selected) {
          setSelectedGame(selected);
          setIsPopupVisible(true);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      clearInterval(interval);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [carouselGames, Game2D]);

  const handleCardClick = (game) => {
    setSelectedGame(game);
    setIsPopupVisible(true);
    navigate(`/GameDev#${game.id}`);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    navigate('/GameDev');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Carousel Section */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${carouselGames[currentGame]})` }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <h1 className="text-5xl font-bold text-white drop-shadow-lg text-center">Game Development</h1>
          </div>
        </div>
      </div>

      {/* Action Games Section */}
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl text-pink-400 mb-8 text-center"  data-aos-once='true'data-aos="zoom-in">2D Games</h1>
          <div className="flex flex-wrap gap-8 justify-center">
            {Game2D.map((game) => (
              <Flip
              key={game.id}
              title={game.name}
              image={game.image}
              creator={game.creator}
              description={game.description}
              linkdin={game.linkedin}
              playGame={game.play}
              video={game.video}
            />
            ))}
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl text-pink-400 mb-8 text-center" data-aos-once='true' data-aos="zoom-in">3D Games</h1>
          <div className="flex flex-wrap gap-8 justify-center">
            {Game3D.map((game) => (
              <Flip
              key={game.id}
              title={game.name}
              image={game.image}
              creator={game.creator}
              description={game.description}
              linkdin={game.linkedin}
              playGame={game.play}
              video={game.video}
            />
            ))}
          </div>
        </div>
      </div>
      
      {/* <div className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl text-pink-400 mb-8 text-center" data-aos-once='true' data-aos="zoom-in">Puzzle Games</h1>
          <div className="flex flex-wrap gap-8 justify-center">
            {puzzleGames.map((game) => (
              <Flip
              key={game.id}
              title={game.name}
              image={game.image}
              creator={game.creator}
              description={game.description}
              details={game.linkedin}
            />
            ))}
          </div>
        </div>
      </div> */}


      {/* <section className="bg-black text-white py-10 border-b-2 border-white" id="satellite">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 rounded-2xl ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once='true'
                className="text-pink-500 uppercase "
              >
                Motion Tracking
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-once='true'
                className="uppercase text-5xl"
              >
               Open CV motion tracking
              </h1>
              <p data-aos="fade-up"  data-aos-once='true' className="text-lg m-1" data-aos-delay="700">
                    The project focuses on real-time 3D body tracking in Augmented Reality (AR), utilizing motion capture technology to track a user’s body movements, and accurately replicating the movements on a 3D avatar in real time. This enables applications in gaming, fitness, virtual meetings, and training simulations, offering immersive, interactive experiences by mirroring real-world actions in virtual environments.
              </p>
              
            </div>
            <div data-aos="zoom-in" data-aos-once='true'>
            <video
              autoPlay
              loop
              muted
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 "
                        >
              <source src="https://res.cloudinary.com/dodlxtpvx/video/upload/v1738504580/RPReplay_Final1730662135_ndi9vm.mp4" type="video/mp4" />
            </video>


            </div>
          </div>
        </div>
      </section> */}









      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-gray-800 p-6 rounded-lg w-[90%] max-w-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl text-pink-400">{selectedGame.name}</h2>
              <button className="text-white text-3xl focus:outline-none" onClick={handleClosePopup}>
                &times;
              </button>
            </div>
            <div className="text-center">
              <img src={selectedGame.image} alt={selectedGame.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl text-pink-400">
                Creator: <a href={selectedGame.linkedin} className='cursor-pointer' target='_blank'>{selectedGame.creator}</a>
              </h3>
              <p className="mt-4 text-white">Description: This is a sample description for the selected game.</p>
              <p className="mt-2 text-pink-400 cursor-pointer">Download Link: Download {selectedGame.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDev;

// <div
//                 key={game.id}
//                 className="w-[20vw] h-[20vw] bg-black border-2 border-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
//                 data-aos="zoom-in"
//                 data-aos-once='true'
//                 onClick={() => handleCardClick(game)}
//               >
//                 <div className="relative w-full h-full">
//                   <img
//                     src={game.image}
//                     alt={game.name}
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                   <div className="absolute bottom-0 w-full bg-black bg-opacity-75 py-2">
//                     <h2 className="text-center text-lg text-white">{game.name}</h2>
//                   </div>
//                 </div>
//               </div>
