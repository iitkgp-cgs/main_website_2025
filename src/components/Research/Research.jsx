import React from 'react';
import FlippingCard from './flip'; // Import the FlippingCard component
import VR from '../../assets/RnD/VR.png';
import AR from '../../assets/RnD/AR.png';
import openCV from '../../assets/RnD/openCV.png';

const Team = () => {
  const members = [
    {
      id: 1,
      title: 'Virtual reality',
      image: VR,
      description: '',
      details: 'Virtual Reality (VR): VR immerses users in a fully digital environment, typically using headsets and motion tracking, enabling them to interact with simulated worlds.'
    },
    {
      id: 2,
      title: 'Augmented Reality',
      image: AR,
      description: '',
      details: 'Augmented Reality (AR): AR overlays digital information, such as images or text, onto the real world via devices like smartphones or smart glasses, blending virtual content with the physical environment'
    },
    {
      id: 3,
      title: 'Computer Vision',
      image: openCV,
      description: '',
      details: 'OpenCV: OpenCV (Open Source Computer Vision Library) is a popular open-source library that provides tools for computer vision tasks such as image processing, object detection, and facial recognition.'
    }
   
  ];

  return (
    <div className="bg-black py-12 ">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold text-pink-500 mb-8"> Research Domains </h1>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {members.map((member) => (
            <FlippingCard
              key={member.id}
              title={member.title}
              image={member.image}
              description={member.description}
              details={member.details}
            />
          ))}
        </div>
      </div>


      <Satellite />
    </div>
  );
};

export default Team;

import AquaVR from "../../assets/RnD/AquaVR.mp4";
import BodySync from "../../assets/RnD/BodySync.mp4";
import RayMarching from "../../assets/RnD/RayMarching.mp4";

const projects = [
  {
    id: 1,
    title: "VIRTUAL REALITY",
    name: "AquaVR",
    description: "AquaVR is an immersive VR underwater adventure game designed for Meta Quest devices, built using Unity3D. Players explore marine ecosystems, uncover treasures, and solve environmental puzzles. The game utilizes gaze-based interactions and gesture controls for an immersive experience.",
    video: AquaVR,
    reverse: false, // Normal order (text first, video second)
  },
  {
    id: 2,
    title: "OPEN CV",
    name: "BodySync Rush",
    description: "A project utilizing Computer Vision to track player movements via a webcam and play an endless runner game similar to Temple Run.",
    video: BodySync,
    reverse: true, // Reverse order (video first, text second)
  },
  {
    id: 3,
    title: "SHADERS AND GRAPHICS",
    name: "RayMarching",
    description: "RayMarching is a graphics technique used for rendering complex 3D scenes, allowing for detailed volumetric effects such as fog, smoke, and fractals. It is commonly used in real-time rendering and shader development.",
    video: RayMarching,
    reverse: false, // Normal order
  },
  {
    id: 4,
    title: "MOTION TRACKING",
    name: "Open CV Motion Tracking",
    description: "This project utilizes motion capture technology to track real-time 3D body movements and replicate them onto a 3D avatar. Applications include gaming, virtual meetings, and fitness simulations.",
    video: "https://res.cloudinary.com/dodlxtpvx/video/upload/v1738504580/RPReplay_Final1730662135_ndi9vm.mp4",
    reverse: true, // Reverse order
  },
];

const Satellite = () => {
  return (
    <>
      {projects.map((project) => (
        <section key={project.id} className="bg-black text-white py-10">
          <div className="container mx-auto max-w-screen-lg px-4">
            <div className={`flex flex-col sm:flex-row ${project.reverse ? "sm:flex-row-reverse" : ""} items-center gap-8`}>
              {/* Text Content */}
              <div className="sm:w-1/2 p-6 space-y-4">
                <p data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="text-pink-500 uppercase">
                  {project.title}
                </p>
                <h1 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="uppercase text-4xl sm:text-5xl">
                  {project.name}
                </h1>
                <p data-aos="fade-up" data-aos-delay="700" data-aos-once="true" className="text-lg">
                  {project.description}
                </p>
              </div>

              {/* Video */}
              <div data-aos="zoom-in" data-aos-once="true" className="sm:w-1/2">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full max-h-[350px] object-cover rounded-xl"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

