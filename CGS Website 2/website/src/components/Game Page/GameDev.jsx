
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import game1 from '../../assets/Vansh.png';
import game2 from '../../assets/RND.png';
import game3 from '../../assets/cgsLogoWithoutBg.png';
import Flip from './fl';
import { useNavigate } from 'react-router-dom';

const GameDev = () => {
  const [currentGame, setCurrentGame] = useState(0);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const carouselGames = [game1, game2, game3]; 

  const actionGames = [
    { id: 1, name: 'Game 1', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
    { id: 2, name: 'Game 2', image: game2, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
    { id: 3, name: 'Game 3', image: game3, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
    { id: 4, name: 'Game 4', image: game3, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
    { id: 5, name: 'Game 5', image: game3, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
  ];
  const storyGames = [  
        { id: 6, name: 'Game 6', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
        { id: 7, name: 'Game 7', image: game2, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
        { id: 8, name: 'Game 8', image: game3, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
        { id: 9, name: 'Game 9', image: game1, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
        { id: 10, name: 'Game 10', image: game2, creator: 'Ajitesh', linkedin: 'https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/' },
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
        const selected = actionGames.find(game => game.id === parseInt(gameId));
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
  }, [carouselGames, actionGames]);

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
          <h1 className="text-5xl text-pink-400 mb-8 text-center"  data-aos-once='true'data-aos="zoom-in">Action Games</h1>
          <div className="flex flex-wrap gap-8 justify-center">
            {actionGames.map((game) => (
              <Flip
              key={game.id}
              title={game.name}
              image={game.image}
              description={game.creator}
              details={game.linkedin}
            />
            ))}
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl text-pink-400 mb-8 text-center" data-aos-once='true' data-aos="zoom-in">Story Games</h1>
          <div className="flex flex-wrap gap-8 justify-center">
            {storyGames.map((game) => (
              <Flip
              key={game.id}
              title={game.name}
              image={game.image}
              description={game.creator}
              details={game.linkedin}
            />
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl text-pink-400 mb-8 text-center" data-aos-once='true' data-aos="zoom-in">Puzzle Games</h1>
          <div className="flex flex-wrap gap-8 justify-center">
            {puzzleGames.map((game) => (
              <Flip
              key={game.id}
              title={game.name}
              image={game.image}
              description={game.creator}
              details={game.linkedin}
            />
            ))}
          </div>
        </div>
      </div>

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

{/* <div
                key={game.id}
                className="w-[20vw] h-[20vw] bg-black border-2 border-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
                data-aos="zoom-in"
                data-aos-once='true'
                onClick={() => handleCardClick(game)}
              >
                <div className="relative w-full h-full">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-75 py-2">
                    <h2 className="text-center text-lg text-white">{game.name}</h2>
                  </div>
                </div>
              </div> */}