import React, { useState, useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';  // Import AOS styles
import game1 from "../../assets/Vansh.png";
import game2 from "../../assets/RND.png";
import game3 from "../../assets/cgsLogoWithoutBg.png";
import './graphics.css'; // Custom styles for the page




const Graphics = () => {

  const [currentGame, setCurrentGame] = useState(0);
  const [selectedGame, setSelectedGame] = useState(null); // State to track selected game for popup
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to track popup visibility

  const carouselGames = ['https://images.ctfassets.net/7ghyf81o1fuo/89HjoEauCLVwk4ZyKqGEz/e4582e146489c2eabc43c38e5acf08bb/icecream.png', 'https://images.ctfassets.net/7ghyf81o1fuo/573G2hgbJp2FoNSRPE2hiK/23092d333add74a338781e531aee598b/Screenshot_2024-10-07_at_3.00.46_AM.png', 'https://images.ctfassets.net/7ghyf81o1fuo/6zio4ZhDt3dEtWiktLXTCM/87ced42ffc6e78a5ca37bbedbc92a1b0/Screenshot_2024-10-07_at_3.00.29_AM.png','https://images.ctfassets.net/7ghyf81o1fuo/17Lj9q9nWQUf7M47jwo1rN/3134485d8ae4eec3753b7a8036f3f6fc/Screenshot_2024-10-07_at_3.04.57_AM.png'];

  const graphics = [
    { id: 1, name: 'Sea ', image: 'https://images.ctfassets.net/7ghyf81o1fuo/5xZWORv1h2A1evfxfEAl01/82dcd7f841bba0574cdf0d090ab308fe/pratyush.png'},
    { id: 2, name: 'Whale', image: 'https://images.ctfassets.net/7ghyf81o1fuo/5ETNTaJRmLF8sKVCSusotq/5bf7d9df3f409ef1fbd8b59446f18a12/Whale.png'},
    { id: 3, name: 'Ring', image: 'https://images.ctfassets.net/7ghyf81o1fuo/7EVarOK7aHmPlv2Shk1h27/149659ec21e27e7d8e3394372d437b50/Ring.png'},
    { id: 4, name: 'waterfall', image: 'https://images.ctfassets.net/7ghyf81o1fuo/3HhsghKkWV1om8lcGAu8Uh/d396aad63c1b840b42fe0b8d30c8b799/waterfall.png'},
    { id: 5, name: 'CGS Wall E', image: 'https://images.ctfassets.net/7ghyf81o1fuo/3PAzxTXZV8mUQXCp7jCVkF/cb4e13eb59850c99ffcd637b879ad335/CGSwalle2.png'},
    { id: 6, name: 'Beach', image: 'https://images.ctfassets.net/7ghyf81o1fuo/7L7hxi7KrWvToNsFBlAfBz/2e11dff63114cd5aef73769cd907d8ab/adeetya.png'},
  ];

  

  useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: "ease-in-out",
    });

    const interval = setInterval(() => {
      setCurrentGame((prevGame) => (prevGame + 1) % carouselGames.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselGames]);

  const handleCardClick = (game) => {
    setSelectedGame(game);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="graphics-page">

  
      {/* Carousel Section */}
      <div className="carousel">
        <div
          className="carousel-image"
          style={{ backgroundImage: `url(${carouselGames[currentGame]})` }}
        >
          <div className="carousel-overlay">
            <h1>Graphics</h1>
          </div>
        </div>
      </div>

      {/* Circular Cards Section */}

      {/* <div
      style={{
        backgroundImage: `url('https://images.ctfassets.net/7ghyf81o1fuo/5cTMb9viFIajrFIuOmFH19/4a522f64a5627944305802861bbcc53c/Screenshot_2024-10-07_at_3.40.21_AM.png')`,
        backgroundSize: 'cover', // This ensures the image covers the whole area
        backgroundPosition: 'center',
        height: '100vh', // Set the height of the div to cover the whole view
        width: '100%',
      }}
    > */}
      <div className="cards-section">
  <div className="cards-container flex flex-wrap justify-center gap-6">
    {graphics.map((game) => (
      <div
        key={game.id}
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-black border-2 border-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        data-aos="zoom-in"
        data-aos-once="true"
        onClick={() => handleCardClick(game)}
      >
        <div className="relative w-full h-full transition-transform duration-300 hover:scale-110">
          <img
            src={game.image}
            alt={game.name}
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-75 py-2 rounded-b-full">
            <h2 className="text-center text-xl text-white">{game.name}</h2>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* </div> */}



      <Satellite/>

      
    </div>
  );
};

export default Graphics;



import coffee from "../../assets/animation.mp4";
import feni from "../../assets/animation2.mp4";


const graphics = [
  {
    id: 1,
    name: 'Music Visualizer',
    video: "https://res.cloudinary.com/dodlxtpvx/video/upload/v1738519774/musicVisualize_dr0eom.mp4",
    creators: ['Kartik Kaushal', 'Rishabh Parihar', 'Kshetrimayum Abo'],
    linkedin: [
      'https://www.linkedin.com/in/kartik-kaushal-5b4992293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      'https://www.linkedin.com/in/rishabh-parihar-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      'https://www.linkedin.com/in/kshetrimayum-abo-0384a528a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    ],
    description:
      'The project focuses on making an interactive music reactor that reacts accordingly to the beats of the music. It makes an attempt to make the audio be enjoyed as a visual medium too and not only through audio.',
  },

  {
    id: 2,
    name: 'Motion tacking and VFX ',
    video: 'https://videos.ctfassets.net/7ghyf81o1fuo/5VffwIYnDdFlToi9ILAVyh/ba4d0d75c9b3c68ecad9ac709369ff48/vfx.mp4',
    creators: ['Sri Charan', 'Atreya Bordoloi', 'Sudhanshu'],
    linkedin: [
      'https://www.linkedin.com/in/sri-charan-budumuru-76bb77330',
      'https://www.linkedin.com/in/atreya-bordoloi-94279727b ',
      'https://www.linkedin.com/in/sudhanshu-mahar',
    ],
    description:
      'This video was created using Blender`s motion tracking and VFX techniques. It demonstrates advanced visual effects, where a car is selected through a smartwatch and appears in front of the viewer, blending real-world footage with CGI.',
  },

  {
    id: 3,
    name: 'Motion Capture',
    video: 'https://videos.ctfassets.net/7ghyf81o1fuo/7ofTVOic40MbZPtJQK2PYH/9be2bb8388f7f9cb92dea24bbe46dd64/AboMotionCapture.mp4',
    creators: ['Kshetrimayum Abo'],
    linkedin: [
      
      'https://www.linkedin.com/in/kshetrimayum-abo-0384a528a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    ],
    description:
      'Motion Capture: Utilizing motion capture technology to track a person’s movements and replicate them in a graphical character, creating lifelike animations and seamless transitions.',
  },
 
  {
    Id: 4,
    name: 'Product Advertisement ',
    video: "https://res.cloudinary.com/dodlxtpvx/video/upload/v1738519970/coffee_gbfrrg.mov",
    creators: ['Jay Gheewala', 'Adhiraj Singh Brar', 'Pratyush Parackal','Zoya Alam','Jasmeet Singh', 'Aryan Dongre', 'Vishal Bagada'],
    linkedin: [
      'https://www.linkedin.com/in/jay-gheewala-1b886728b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      'https://www.linkedin.com/in/adhiraj-brar-a32aa2289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      'https://www.linkedin.com/in/pratyush-parackal-4b7b77287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  'https://www.linkedin.com/in/zoya-alam-a02914297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  'https://www.linkedin.com/in/jasmeet-singh-3b8b95282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
'https://www.linkedin.com/in/aryan-dongre-29b858313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
'https://www.linkedin.com/in/bagada-vishal-jayantilal-0444aa2a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    ],
    description:
      'Our team created a visually stunning advertisement of a coffee company, which includes a detailed process of coffee bean roasting . The quality of this project highlights our ability to deliver professional content that can elevate a brand`s appearance. ',
  },

  {
    id: 5,
    name: ' product add',
    video: "https://res.cloudinary.com/dodlxtpvx/video/upload/v1738519966/product_degzwt.mov",
    creators: ['Adeetya Uppal', 'Satwik Midya', 'Shriya Sinha','Siddharth Konnur'],
    linkedin: [
      'https://www.linkedin.com/in/adeetya-uppal-a552a1290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      'https://www.linkedin.com/in/satwik-midya-47b618270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    ' https://www.linkedin.com/in/shriya-sinha-2022a2298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 'https://www.linkedin.com/in/siddharth-konnur-21b0a128b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
    ],
    description:
'Our project focuses on developing a visually engaging commercial for a Feni company by creating captivating visuals that highlight the product’s qualities.',
  },
  // You can add more objects here for additional sections
];


//https://videos.ctfassets.net/7ghyf81o1fuo/7ofTVOic40MbZPtJQK2PYH/9be2bb8388f7f9cb92dea24bbe46dd64/AboMotionCapture.mp4

//https://videos.ctfassets.net/7ghyf81o1fuo/5VffwIYnDdFlToi9ILAVyh/ba4d0d75c9b3c68ecad9ac709369ff48/vfx.mp4

const Satellite = () => {
  return (
    <>
      {/* Dynamic Sections for Graphics */}
      <div className="shadow-lg shadow-black m-0">
        {graphics.map(({ id, name, video, creators, linkedin, description }) => (
          <section
            key={id}
            className="bg-black text-white py-12 border-b-2 border-white"
            id={`graphic-${id}`}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Text Section */}
                <div className="space-y-4 p-4">
                  <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-once="true"
                    className="text-pink-500 uppercase"
                  >
                    {name}
                  </p>
                  <h1
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-once="true"
                    className="uppercase text-4xl md:text-5xl font-bold"
                  >
                    {name}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="700"
                    data-aos-once="true"
                    className="text-base md:text-lg leading-relaxed"
                  >
                    {description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="900"
                    data-aos-once="true"
                    className=" text-white  rounded-lg "
                  >
                    {/* List of creators */}
                    <div className="mt-4">
                    <span className="text-lg font-bold">Creators</span>
                    <ul className="list-disc">
                      {creators.map((creator, index) => (
                        <li key={index} className="inline-block mx-1 my-1.5">
                          <a
                            href={linkedin[index]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black border-2 border-pink-500 text-white px-2 py-1 rounded-full text-sm font-medium hover:bg-pink-500"
                          >
                            {creator}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  </div>

                  
                </div>

                {/* Video Section */}
                <div data-aos="zoom-in">
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full max-h-[350px] object-cover rounded-lg shadow-lg"
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};




