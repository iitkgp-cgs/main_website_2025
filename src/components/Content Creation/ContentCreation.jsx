import React, { useState, useRef } from "react";
import "./ContentCreation.css";

const videos = [
	{ src: "video1.mp4", thumbnail: "thumbnail1.jpg" },
	{ src: "video2.mp4", thumbnail: "thumbnail2.jpg" },
	{ src: "video3.mp4", thumbnail: "thumbnail3.jpg" },
	{ src: "video4.mp4", thumbnail: "thumbnail4.jpg" },
	{ src: "video5.mp4", thumbnail: "thumbnail5.jpg" },
	{ src: "video6.mp4", thumbnail: "thumbnail6.jpg" },
	{ src: "video7.mp4", thumbnail: "thumbnail7.jpg" },
];

const ContentCreation = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const mainVideoRef = useRef(null);
	const thumbnailsRef = useRef(null);

	const loadVideo = index => {
		const videoSrc = videos[index].src;
		setCurrentIndex(index);

		if (mainVideoRef.current) {
			mainVideoRef.current.src = videoSrc;
			mainVideoRef.current.load();
			mainVideoRef.current.play();
		}

		const thumbnails = thumbnailsRef.current.children;
		Array.from(thumbnails).forEach((thumbnail, i) => {
			if (i === index) {
				thumbnail.classList.add("active");
				thumbnail.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "center",
				});
			} else {
				thumbnail.classList.remove("active");
			}
		});
	};

	const navigateThumbnails = direction => {
		let newIndex = currentIndex;

		if (direction === "next" && currentIndex < videos.length - 1) {
			newIndex++;
		} else if (direction === "prev" && currentIndex > 0) {
			newIndex--;
		}

		loadVideo(newIndex);
	};

	return (
    <div className="content-creation-page">
		<div className="content-container">
			{/* Main Video Section */}
			<div className="main-video">
				<video ref={mainVideoRef} controls>
					<source src={videos[currentIndex].src} type="video/mp4" />
					<div className="gradient-fallback">No Video Available</div>
				</video>
			</div>

			{/* Thumbnails Carousel */}
			<div className="thumbnails-container">
				<button
					className="nav-btn prev"
					onClick={() => navigateThumbnails("prev")}
				>
					❮
				</button>
				<div className="thumbnails-wrapper">
					<div className="thumbnails" ref={thumbnailsRef}>
						{videos.map((video, index) => (
							<div
								key={index}
								className={`thumbnail ${
									index === currentIndex ? "active" : ""
								}`}
								onClick={() => loadVideo(index)}
							>
								{video.thumbnail ? (
									<img
										src={video.thumbnail}
										alt={`Thumbnail ${index + 1}`}
									/>
								) : (
									<div className="gradient-fallback">
										No Thumbnail
									</div>
								)}
							</div>
						))}
					</div>
				</div>
				<button
					className="nav-btn next"
					onClick={() => navigateThumbnails("next")}
				>
					❯
				</button>
			</div>
		</div>
    </div>
	);
};

export default ContentCreation;
