// import React, { useState, useEffect } from 'react';
// import AOS from "aos";
// import './GameDev.css';
// import game1 from "../../assets/Vansh.png";
// import game2 from "../../assets/Rnd.png";
// import game3 from "../../assets/cgsLogoWithoutBg.png";
// import { useNavigate } from 'react-router-dom';

// const GameDev = () => {
//   const [currentGame, setCurrentGame] = useState(0);
//   const [selectedGame, setSelectedGame] = useState(null); // State to track selected game for popup
//   const [isPopupVisible, setIsPopupVisible] = useState(false); // State to track popup visibility

//   const carouselGames = [game1, game2, game3]; 

//   const actionGames = [
//     { id: 1, name: 'Game 1', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
//     { id: 2, name: 'Game 2', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
//     { id: 3, name: 'Game 3', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
//     { id: 4, name: 'Game 4', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
//     { id: 5, name: 'Game 5', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
//   ];  
  
//   const storyGames = [  
//     { id: 6, name: 'Game 6', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
//     { id: 7, name: 'Game 7', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
//     { id: 8, name: 'Game 8', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
//     { id: 9, name: 'Game 9', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
//     { id: 10, name: 'Game 10', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
//   ];

//   const puzzleGames = [
//     { id: 11, name: 'Game 11', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
//     { id: 12, name: 'Game 12', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
//     { id: 13, name: 'Game 13', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
//     { id: 14, name: 'Game 14', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
//     { id: 15, name: 'Game 15', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
//   ];

//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({
//       duration: 1300,
//       easing: "ease-in-out",
//     });

//     const interval = setInterval(() => {
//       setCurrentGame((prevGame) => (prevGame + 1) % carouselGames.length);
//     }, 3000);

//     // Listen for URL hash changes and trigger popup if a valid game ID is found
//     const handleHashChange = () => {
//       const gameId = window.location.hash.replace('#', ''); // Get the ID from the URL hash
//       if (gameId) {
//         const allGames = [...actionGames, ...storyGames, ...puzzleGames];
//         const selected = allGames.find(game => game.id === parseInt(gameId));
//         if (selected) {
//           setSelectedGame(selected);
//           setIsPopupVisible(true);
//         }
//       }
//     };

//     // Attach event listener for hashchange
//     window.addEventListener('hashchange', handleHashChange);

//     // Call handler for initial page load
//     handleHashChange();

//     return () => {
//       clearInterval(interval);
//       window.removeEventListener('hashchange', handleHashChange);
//     };
//   }, [carouselGames, actionGames, storyGames, puzzleGames]);

//   const handleCardClick = (game) => {
//     setSelectedGame(game);
//     setIsPopupVisible(true);
//     window.history.pushState(null, '', `/GameDev#${game.id}`);
//   };

//   const handleClosePopup = () => {
//     setIsPopupVisible(false);
//     window.history.pushState(null, '', '/GameDev');
//   };

//   return (
//     <div className="netflix-page">
//       <br></br>
//       <br></br>
//       <br></br>

//       {/* Main Carousel Section */}
//       <div className="carousel">
//         <div
//           className="carousel-image"
//           style={{ backgroundImage: `url(${carouselGames[currentGame]})` }}
//         >
//           <div className="carousel-overlay">
//             <h1>Game Development</h1>
//           </div>
//         </div>
//       </div>

//       {/* Action Games Section */}
//       <div className="card-sections">
//         <div className="card-section-container">
//           <h2 className="section-title" data-aos="zoom-in">Action Games</h2>
//           <div className="card-section">
//             {actionGames.map((game) => (
//               <div className="card" key={game.id} data-aos="zoom-in">
//                 <div className="card-inner" onClick={() => handleCardClick(game)}>
//                   <div className="card-front">
//                     <div className="card-image" style={{ backgroundImage: `url(${game.image})` }}>
//                       <div className="card-name">
//                         <h2>{game.name}</h2>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card-back">
//                     <h2>{game.name} Made by <a href={game.linkedin}> {game.creator}</a></h2>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Story Games Section */}
//         <div className="card-section-container">
//           <h2 className="section-title">Story Games</h2>
//           <div className="card-section">
//             {storyGames.map((game) => (
//               <div className="card" key={game.id} onClick={() => handleCardClick(game)}>
//                 <div className="card-inner">
//                   <div className="card-front">
//                     <div className="card-image" style={{ backgroundImage: `url(${game.image})` }}>
//                       <div className="card-name">
//                         <h2>{game.name}</h2>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card-back">
//                     <h2>{game.name}</h2>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Puzzle Games Section */}
//         <div className="card-section-container">
//           <h2 className="section-title">Puzzle Games</h2>
//           <div className="card-section">
//             {puzzleGames.map((game) => (
//               <div className="card" key={game.id} onClick={() => handleCardClick(game)}>
//                 <div className="card-inner">
//                   <div className="card-front">
//                     <div className="card-image" style={{ backgroundImage: `url(${game.image})` }}>
//                       <div className="card-name">
//                         <h2>{game.name}</h2>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card-back">
//                     <h2>{game.name}</h2>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Popup Modal for Selected Game */}
//       {isPopupVisible && (
//         <div className="game-popup">
//           <div className="game-popup-content">
//             <div className="popup-header">
//               <h2>{selectedGame.name}</h2>
//               <button className="close-popup" onClick={handleClosePopup}>X</button>
//             </div>
//             <div className="popup-body">
//               <img src={selectedGame.image} alt={selectedGame.name} className="popup-image" />
//               <h3>Creator: <a href={selectedGame.linkedin}>{selectedGame.creator}</a></h3>
//               <p>Description: This is a sample description for the selected game. Replace this with actual game description.</p>
//               <p>Download Link: <a href="#">Download {selectedGame.name}</a></p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GameDev;
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
    { id: 1, name: 'SOUL MAGICIAN', image: 'https://images.ctfassets.net/7ghyf81o1fuo/6qW0Sjsv4lok77z8oOpKIo/a7a21f32fc337b3168cbaf1f03e7a1b2/parag.png', creator: 'Parag Chimankar', linkedin: 'https://www.linkedin.com/in/chimankarparag/' ,play:'https://chimankarparag.itch.io/soul-magician' , description:'2D rpg map clear game', video:parag},
    { id: 2, name: 'socerers-realm', image: 'https://images.ctfassets.net/7ghyf81o1fuo/5is9mWnsC0Np5w8sFgv7M9/a3a2a63b37e28c8cd9ae4dcd6f0c6a83/Vansh.png', creator: 'Vansh Pali', linkedin: 'https://www.linkedin.com/in/vansh-pali-47b315287/' ,play:'https://vanshpali24.itch.io/socerers-realm' , description:'2D dungeon based game', video:'https://videos.ctfassets.net/7ghyf81o1fuo/6d6EhXGpplKEWkRdT7WcL5/a5e74c4118a914448542a97dd550d455/REC-20241006183232.mp4'},
    { id: 3, name: 'Backless', image: 'https://images.ctfassets.net/7ghyf81o1fuo/6RI1XPIY9thmmhbkycdzlJ/42318543a44f31a30e0463f6c03171f7/harswardhan.png', creator: 'Hashwardhan Walunjkar', linkedin: 'https://www.linkedin.com/in/harshwardhan-walunjkar-93035628b/' ,play:'https://harshuiuiui.itch.io/backless' , description:'An endless runner with a twist, lose all your lives, and the direction should reverse, only now your score starts decreasing. Collect all orbs and return to your path!', video:'https://videos.ctfassets.net/7ghyf81o1fuo/EPsNRkL2IuzehrWUuFLbI/1e3a3102021fb771c3a5bedfa7c8b4ed/harshwardhan.mp4'},

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