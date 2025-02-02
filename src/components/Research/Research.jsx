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
    <div className="bg-black py-12">
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



const Satellite = () => {
  return (
    <>
      <section className="bg-black text-white py-10 border-b-2 border-white" id="satellite">
        <div className="container bg-black ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 rounded-2xl ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once='true'
                className="text-pink-500 uppercase "
              >
               VIRTUAL REALITY
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-once='true'
                className="uppercase text-5xl"
              >
               AquaVR
              </h1>
              <p data-aos="fade-up"  data-aos-once='true' className="text-lg m-1" data-aos-delay="700">
AquaVR is an immersive VR underwater adventure game designed for Meta Quest devices, built using Unity3D. Players are transported to vibrant ocean environments, from colourful coral reefs to eerie shipwrecks, where they can explore marine ecosystems and engage in interactive learning. Gameplay includes quests to uncover hidden treasures, solve environmental puzzles, and interact with diverse marine life to understand their behaviours and habitats. Unity3D's tools were used to sculpt detailed underwater scenes, optimise performance for VR, and create intuitive, gaze-based interactions and gesture controls, ensuring a smooth and immersive user experience.
              </p>
              
            </div>
            <div data-aos="zoom-in" data-aos-once='true'>
            <video
              autoPlay
              loop
              muted
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 "
                        >
              <source src={AquaVR} type="video/mp4" />
            </video>


            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-10 border-b-2 border-white" id="satellite">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 rounded-2xl ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once='true'
                className="text-pink-500 uppercase "
              >
                OPEN CV 
              </p>  
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-once='true'
                className="uppercase text-5xl"
              >
               BodySync Rush
              </h1>
              <p data-aos="fade-up"  data-aos-once='true' className="text-lg m-1" data-aos-delay="700">
              
        A project which utilises Computer Vision techniques to use webcam to track the player’s body movements and play an endless runner’s game like Temple Run. 

              </p>
              
            </div>
            <div data-aos="zoom-in" data-aos-once='true'>
            <video
              autoPlay
              loop
              muted
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 "
                        >
              <source src={BodySync} type="video/mp4" />
            </video>


            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-10 border-b-2 border-white" id="satellite">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 rounded-2xl ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once='true'
                className="text-pink-500 uppercase "
              >
                Shaders and Graphics
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-once='true'
                className="uppercase text-5xl"
              >
               RayMarching
              </h1>
              <p data-aos="fade-up"  data-aos-once='true' className="text-lg m-1" data-aos-delay="700">
              
RayMarching involves using a technique in computer graphics to render complex 3D scenes, especially for generating volumetric effects like fog, smoke, and fractals. Unlike traditional ray tracing, which calculates intersections with surfaces, ray marching steps through the scene in small increments to evaluate how light interacts with volumetric objects or distance fields. This allows for highly detailed, dynamic visuals that are computationally intensive but visually striking, often used in real-time rendering or shader development in environments like Unity or Unreal Engine.


              </p>
              
            </div>
            <div data-aos="zoom-in" data-aos-once='true'>
            <video
              autoPlay
              loop
              muted
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 "
                        >
              <source src={RayMarching} type="video/mp4" />
            </video>


            </div>
          </div>
        </div>
      </section>



      <section className="bg-black text-white py-10 border-b-2 border-white" id="satellite">
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
      </section>






    </>
  );
};


