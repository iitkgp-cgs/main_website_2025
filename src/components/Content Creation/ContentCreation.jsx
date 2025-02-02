import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, Info } from "lucide-react"
import "./ContentCreation.css";

const videos = [
  {
    src: "https://res.cloudinary.com/dodlxtpvx/video/upload/v1738486664/cgs_iitkgp__2024-08-02T213019.000Z_anllxp.mp4",
    thumbnail: "https://res.cloudinary.com/dodlxtpvx/image/upload/v1738487095/Screenshot_2025-02-02_at_2.34.44_PM_mpvrlv.png",
    title: "Project Alpha",
    description: "A futuristic 3D animation",
  },
  {
    src: "https://res.cloudinary.com/dodlxtpvx/video/upload/v1738486664/cgs_iitkgp__2024-07-09T093835.000Z_ribu5g.mp4",
    thumbnail: "https://res.cloudinary.com/dodlxtpvx/image/upload/v1738487525/SCR-20250202-nbdc_owchti.jpg",
    title: "Neon Nights",
    description: "Cyberpunk-inspired short film",
  },
]

const ContentPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const mainVideoRef = useRef(null)
  const thumbnailsRef = useRef(null)

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

      <div className="container">
        <div className="header">
          <h1 className="title">Content Creation </h1>
          <p className="description">Dive into our world of visual storytelling, where creativity meets technology.</p>
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

        <div className="carousel-container">
          <button onClick={() => navigateThumbnails("prev")} disabled={currentIndex === 0} className="nav-button prev">
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

        <div className="portfolio-info">
          <h2>Our Creative Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-icon">💡</div>
              <h3>Ideation</h3>
              <p>Brainstorming and conceptualizing unique visual stories</p>
            </div>
            <div className="step">
              <div className="step-icon">🎨</div>
              <h3>Design</h3>
              <p>Crafting stunning visuals and storyboards</p>
            </div>
            <div className="step">
              <div className="step-icon">🎬</div>
              <h3>Production</h3>
              <p>Bringing ideas to life with cutting-edge technology</p>
            </div>
            <div className="step">
              <div className="step-icon">✨</div>
              <h3>Polish</h3>
              <p>Refining and perfecting every detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentPage

