import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, Info } from "lucide-react"
import "./ContentCreation.css"
import { AnimatedBackground } from "./AnimatedBackground"
import { AnimatedPortfolioSteps } from "./AnimatedPortfolioSteps"
import MouseParticles from 'react-mouse-particles';

const videos = [
  {
    src: "https://res.cloudinary.com/dodlxtpvx/video/upload/v1738486664/cgs_iitkgp__2024-08-02T213019.000Z_anllxp.mp4",
    thumbnail:
      "https://res.cloudinary.com/dodlxtpvx/image/upload/v1738487095/Screenshot_2025-02-02_at_2.34.44_PM_mpvrlv.png",
    title: "Project Alpha",
    description: "Introduction to the society and its activities",
  },
  {
    src: "https://res.cloudinary.com/dodlxtpvx/video/upload/v1738486664/cgs_iitkgp__2024-07-09T093835.000Z_ribu5g.mp4",
    thumbnail: "https://res.cloudinary.com/dodlxtpvx/image/upload/v1738487525/SCR-20250202-nbdc_owchti.jpg",
    title: "Neon Nights",
    description: "Project Collaboration of Game Development and Graphic Design",
  },
]

const generateShapes = () => {
  const shapes = [];
  const shapeTypes = ['star', 'circle', 'triangle', 'planet', 'moon'];
  const colors = ['#9f7aea', '#4299e1', '#f5f5f5', '#e0e0e0'];

  for (let i = 0; i < 60; i++) {
    const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.floor(Math.random() * 30) + 10;
    const top = Math.floor(Math.random() * 100); // Use percentage to cover the entire page
    const left = Math.floor(Math.random() * 100); // Use percentage to cover the entire page

    shapes.push(
      <div
        key={i}
        className={`shape ${shapeType}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`, // Use percentage for better responsiveness
          left: `${left}%`, // Use percentage for better responsiveness
          background: `linear-gradient(45deg, ${color}, ${color})`,
          animation: 'move 3s infinite alternate',
          zIndex: 0,
        }}
      ></div>
    );
  }

  return shapes;
};

const ContentPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const mainVideoRef = useRef(null)
  const thumbnailsRef = useRef(null)
    const trailRef = useRef([]);


  useEffect(() => {
    const video = mainVideoRef.current
    if (video) {
      isPlaying ? video.play() : video.pause()
    }
  }, [isPlaying])

  const loadVideo = (index) => {
    const videoSrc = videos[index].src
    setCurrentIndex(index)
    setIsPlaying(true)

    if (mainVideoRef.current) {
      mainVideoRef.current.src = videoSrc
      mainVideoRef.current.load()
      mainVideoRef.current.play()
    }
  }

  const navigateThumbnails = (direction) => {
    let newIndex = currentIndex

    if (direction === "next" && currentIndex < videos.length - 1) {
      newIndex++
    } else if (direction === "prev" && currentIndex > 0) {
      newIndex--
    }

    loadVideo(newIndex)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  


  return (
    <div className="content-page" style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
      <MouseParticles
        g={1}
        color="random"
        cull="MuiSvgIcon-root,MuiButton-root"
        level={6}
      />
      <div className="shapes-container">{generateShapes()}

      <div className="content-wrapper">
        <div className="container">
          <div className="header">
            <h1 className="title">Content Creation </h1>
            <p className="description">
              Dive into our world of visual storytelling, where creativity meets technology.
            </p>
          </div>

          <div className="main-video-container">
            <video ref={mainVideoRef} className="main-video" onClick={togglePlayPause}>
              <source src={videos[currentIndex].src} type="video/mp4" />
              <div className="gradient-fallback">No Video Available</div>
            </video>
            <div className="video-controls">
              <button onClick={togglePlayPause} className="control-button">
                {isPlaying ? <Pause className="icon" /> : <Play className="icon" />}
              </button>
              <button onClick={toggleInfo} className="control-button">
                <Info className="icon" />
              </button>
            </div>
            {showInfo && (
              <div className="video-info">
                <h2>{videos[currentIndex].title}</h2>
                <p>{videos[currentIndex].description}</p>
              </div>
              
              
            )}
          </div>

          <div className="carousel-container modern-carousel">
            <button
              onClick={() => navigateThumbnails("prev")}
              disabled={currentIndex === 0}
              className="nav-button prev"
            >
              <ChevronLeft className="icon" />
            </button>

            <div className="thumbnails-wrapper">
              <div
                ref={thumbnailsRef}
                className="thumbnails"
                style={{
                  transform: `translateX(-${currentIndex * (200 + 16)}px)`,
                }}
              >
                {videos.map((video, index) => (
                  <button
                    key={index}
                    onClick={() => loadVideo(index)}
                    className={`thumbnail ${index === currentIndex ? "active" : ""}`}
                  >
                    <img src={video.thumbnail || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} />
                    <div className="thumbnail-overlay">
                      <h3>{video.title}</h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => navigateThumbnails("next")}
              disabled={currentIndex === videos.length - 1}
              className="nav-button next"
            >
              <ChevronRight className="icon" />
            </button>
          </div>

          <AnimatedPortfolioSteps />
        </div>
      </div>
      </div>
      </div>
  )
}

export default ContentPage

