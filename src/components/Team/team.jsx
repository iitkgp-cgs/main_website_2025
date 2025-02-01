// import React from 'react';
// import './team.css';
// import teamMembers from './team.json';
// import upanshu from '../../assets/Team/upanshu.png';
// import vedant from '../../assets/Team/vedant.png';
// import ojas from '../../assets/Team/ojas.png';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
// import team from '../../assets/team.png';
// import AOS from "aos";

// const Team = () => {

//   React.useEffect(() => {
//     AOS.init({
//       duration: 1300,
//       easing: "ease-in-out",
//     });
//   }, []);

//   // Map the image paths to the members
//   const images = {
//     "upanshu.png": upanshu,
//     "vedant.png": vedant,
//     "ojas.png": ojas
//   };

//   const getSocialIcon = (platform) => {
//     switch (platform) {
//       case 'linkedin':
//         return faLinkedin;
//       case 'google-plus':
//         return faGoogle;
//       default:
//         return '';
//     }
//   };

//   // Separate team members by position
//   const governors = teamMembers.filter(member => member.position === 'governors');
//   const advisors = teamMembers.filter(member => member.position === 'advisors');

//   return (
//     <>
//       <div className="relative w-full h-[60vh] overflow-hidden">
//         <div
//           className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//           style={{ backgroundImage: `url(${team})` }}
//         >
//           <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
//             <h1 className="text-5xl font-bold text-white drop-shadow-lg"><b>COMPUTER GRAPHICS SOCIETY</b></h1>
//           </div>
//         </div>
//       </div>

//       <div className="demo">
//         <div className="container">
//           <h2 className='headi'>Current Governors</h2>
//           <div className="row">
//             {governors.map((member) => (
//               <div className="col-lg-3 col-md-4 col-sm-6" key={member.id} data-aos="fade-up">
//                 <div className="our-team">
//                   <img src={images[member.image]} alt={member.name} />
//                   <div className="team-content">
//                     <h3 className="title">{member.name}</h3>
//                     <span className="post">{member.position}</span>
//                     <ul className="social">
//                       {member.socials.map((social, index) => (
//                         <li key={index}>
//                           <a href={member.socialLinks[index]} target="_blank" rel="noopener noreferrer">
//                             <FontAwesomeIcon icon={getSocialIcon(social)} />
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="container">
//           <h2 className='headi'>Advisors</h2>
//           <div className="row">
//             {advisors.map((member) => (
//               <div className="col-lg-3 col-md-4 col-sm-6" key={member.id} data-aos="fade-up">
//                 <div className="our-team">
//                   <img src={images[member.image]} alt={member.name} />
//                   <div className="team-content">
//                     <h3 className="title">{member.name}</h3>
//                     <span className="post">{member.position}</span>
//                     <ul className="social">
//                       {member.socials.map((social, index) => (
//                         <li key={index}>
//                           <a href={member.socialLinks[index]} target="_blank" rel="noopener noreferrer">
//                             <FontAwesomeIcon icon={getSocialIcon(social)} />
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Team;


// import React from 'react';
// import './Team.css'; // Optional: Use external CSS if needed
// import upanshu from '../../assets/Team/upanshu.png';
// import vedant from '../../assets/Team/vedant.png';
// import ojas from '../../assets/Team/ojas.png';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook,faLinkedin,faGithub, faInstagram, faGoogle} from "@fortawesome/free-brands-svg-icons"

// import SideBar from '../sideBar/SideBar';
// import team from '../../assets/team.png';

// import AOS from "aos";

// import { getContent} from '../contentful/ContentfulClient';

// const Team = () => {
//   const [members, setMembers] = React.useState([]);
//     React.useEffect(() => {
//       async function fetchData() {
//         const data = await getContent('members');
//         setMembers(data);
//       }

//       fetchData();
      
//         AOS.init({
//           duration: 1300,
//           easing: "ease-in-out",
//         });
//       }, []);


//       const governors=  [
//             {id: 1,
//             name: "Ajitesh Jamulkar",
//             position: "Game Dev Head ",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/7aXEy0PcCudid3CfrPA5OW/4c62b5fb79c600921393014e75de03c4/ajitesh.jpeg",
//             socials: [ "https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/", "mailto:ajitesh.jam@gmail.com" ]},
        
//           { id: 2,
//             name: "Parikshit Dave",
//             position: "Public Relation Head",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/1DAk028JHgxBpz0076yvNT/d35d65ecfd8df15114809930c44164a2/parikshit.png",
//             socials: [ "https://www.linkedin.com/in/parikshit-dave-ba2983257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "mailto:parikshitdave14@gmail.com" ]},
        
//           {  id: 3,
//             name: "Vedanta Hazra",
//             position: "RnD Head",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/49mRXSBJQUfLhFpgCdwF6J/d1f95e986710317b8eb9ba1954ea167b/vedant.jpeg",
//             socials: [ "https://www.linkedin.com/in/vedanta-hazra-97859724b/", "mailto:vedanatahazra2004@gmail.com"]},
        
//             {id: 4,
//             name: "Sahil Patel",
//             position: "Rnd Head",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/47zqeuISSiapCaffmn9rp2/ccf07b72842afe0683da6cda46c5418b/Sahil.png",
//             socials: [ "https://www.linkedin.com/in/siddharth-singh-7b1b3b1b3/", "mailto:sahil9123patel@gmail.com"]},
        
//             {id: 5,
//             name: "Upanshu Jain",
//             position: "Graphics Head",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/3R3E4MmfgRA4bYRvLRM2F/9d0c25f513fcb37edb351155825092f1/upanshu.png",
//             socials: [ "https://www.linkedin.com/in/siddharth-singh-7b1b3b1b3/", "mailto: upanshujpanchori16@gmail.com"]},
        
//           {  id: 6,
//             name: "Yash Daga",
//             position: "Graphics Head",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/2c9AJVY7P6YMiaCi0uIvTN/cf925b1314229a631b82971f758f1d9d/Screenshot_2024-10-01_at_2.29.02_AM.png",
//             socials: [ "https://www.linkedin.com/in/yash-daga-0b2041257/", "mailto:yash@gmail.com"]},
        
//             {id: 7,
//             name: "Krishna Paikine ",
//             position: "Web Dev Head",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/2715Ccq5Jw00UMi26MzPxW/3cae4d0f911fe005361800c8f540198c/Krishna.png",
//             socials: [ "http://www.linkedin.com/in/krishnapaikine/", "mailto:krishnapaikine777@gmail.com"]},
        
//             {id: 8,
//             name: "Sai Avinash Seemakurthi",
//             position: "Web Dev Head",
//             image: "https://images.ctfassets.net/7ghyf81o1fuo/6DvuLC00ZiKozzjnzLSLJa/39e9249cb023c12d4881adecb72ebc75/Screenshot_2024-10-01_at_2.30.30_AM.png",
//             socials: [ "https://www.linkedin.com/in/sai-avinash-seemakurthi-446195261", "mailto:"]},

        
//         {id: 9,
//         name: "Shubhankar das",
//         position: "Game Dev Head",
//         image: "https://images.ctfassets.net/7ghyf81o1fuo/3579nliT4FowxSmj6CYWYj/8d78f5fccda6489e31afec49f6e60389/WhatsApp_Image_2024-10-01_at_02.31.30.jpeg",
//         socials: [ "https://www.linkedin.com/in/shubhankar-das-380267261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "mailto:rikidas5621@gmail.com"]}
//           ]
     
    

//   const governors1 = [
//     { id: 1, name: 'Upanshu ', position: '', image: upanshu, socials: [ 'linkdin', 'google-plus'] ,socialLinks:['https://www.linkedin.com/in/upanshu-jain-601b28276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','mailto:upanshujpanchori16@gmail.com']},
//     { id: 2, name: 'Vedanta Hazra', position: 'RnD Head', image: vedant, socials: [ 'linkdin', 'google-plus'] },
//     { id: 3, name: 'John Doe', position: 'Project Manager', image: upanshu, socials: [ 'linkdin', 'google-plus'] },
//     { id: 4, name: 'Jane Smith', position: 'Graphic Designer', image: upanshu, socials: [ 'linkdin', 'google-plus'] },
//     { id: 5, name: 'Mark Brown', position: 'UX Designer', image: upanshu, socials: [ 'linkdin', 'google-plus'] }
//   ];

//   const advisors = [
//     { id: 1, name: 'Ojas Deshmukh', position: '', image: ojas, socials: [ 'linkdin', 'google-plus'] },
//     { id: 2, name: 'Bob White', position: 'Strategy Advisor', image: ojas, socials: [ 'linkdin', 'google-plus'] },
//     { id: 3, name: 'Charlie Black', position: 'Business Advisor', image: ojas, socials: [ 'linkdin', 'google-plus'] },
//     { id: 4, name: 'Diana Blue', position: 'Technical Advisor', image: ojas, socials: [ 'linkdin', 'google-plus'] },
//     { id: 4, name: 'Diana Blue', position: 'Technical Advisor', image: ojas, socials: [ 'linkdin', 'google-plus'] }
//   ];

//   const getSocialIcon = (platform) => {
//     console.log(platform);
//     switch (platform) {
//       case 'linkdin':   return faLinkedin ;
//       case 'google-plus': return faGoogle;
//       default: return '';
//     }
//   };

//   return (
//   <>
//      {/* <div className="carousel">
//       <div
//         className="carousel-image"
//         style={{ backgroundImage: `url(${team})`}}
//       >
//         <div className="carousel-overlay">
//           <h1><b>COMPUTER GRAPHICS SOCIETY</b></h1>
//         </div>
//       </div>
//      </div> */}
//      <div className="relative w-full h-[60vh] overflow-hidden">
//         <div
//           className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//           style={{ backgroundImage: `url(${team})` }}
//         >
//           <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
//             <h1 className="text-5xl font-bold text-white drop-shadow-lg"><b>COMPUTER GRAPHICS SOCIETY</b></h1>
//           </div>
//         </div>
//     </div>


//      <div className="demo">
//       {/* Current Governors Section */}
//       <div className="container">
//         <h2 className='headi'>Current Governors</h2>
//         <div className="members">
//           {governors.map((member) => (
//             <div className="" key={member.id} data-aos="fade-up"> {/* Adjusted columns */}
//               <div className="our-team">
//                 <img src={member.image} alt={member.name}/>
//                 <div className="team-content" >
//                   <h3 className="title">{member.name}</h3>
//                   <span className="post">{member.position}</span>
//                   <ul className="social"  >
//                     {member.socials.map((social, index) => (
//                       <li key={index}>
//                         <a href>
//                           <FontAwesomeIcon icon={getSocialIcon(social)}></FontAwesomeIcon>
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Advisors Section */}
//       <div className="container">
//         <h2 className='headi'>Advisors</h2>
//         <div className="members">
//           {advisors.map((member) => (
//             <div className="" key={member.id} data-aos="fade-up"> {/* Adjusted columns */}
//               <div className="our-team ">
//                 <img src={member.image} alt={member.name} />
//                 <div className="team-content">
//                   <h3 className="title">{member.name}</h3>
//                   <span className="post">{member.position}</span>
//                   <ul className="social">
//                     {member.socials.map((social, index) => (
//                       <li key={index}>
//                         <a href="#">
//                         <FontAwesomeIcon icon={getSocialIcon(social)}></FontAwesomeIcon>
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Testing Section */}
//       <div className="container">
//         <h2 className='headi'>Testing</h2>
//         <div className="members">
//           {Array.isArray(members) && members?.map((member) => (
//             <div className="okay" key={member?.id} data-aos="fade-up"> {/* Adjusted columns */}
//               <div className="our-team ">
//                 <img src={member?.fields.img.fields.file.url} alt={member?.fields.name} />
//                 <div className="team-content">
//                   <h3 className="title">{member?.fields.name}</h3>
//                   <span className="post">{member?.fields.position}</span>
//                   <ul className="social">
//                     {Object.entries(member?.fields.socials).map((social, index) => (
//                       <li key={index}>
//                         <a href={social[1]?.link}>
//                         <FontAwesomeIcon icon={getSocialIcon(social[1]?.social)}></FontAwesomeIcon>
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Team;


// import React from 'react';
// import './Team.css'; // Optional: Use external CSS if needed
// import team from '../../assets/team.png';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";

// import AOS from "aos";
// import { getContent } from '../contentful/ContentfulClient';

// const Team = () => {
//   const [members, setMembers] = React.useState([]);

//   React.useEffect(() => {
//     async function fetchData() {
//       const data = await getContent('members');
//       setMembers(data);
//     }

//     fetchData();

//     AOS.init({
//       duration: 1300,
//       easing: "ease-in-out",
//     });
//   }, []);

//   const governors = [
//     {
//       id: 1,
//       name: "Ajitesh Jamulkar",
//       position: "Game Dev Head ",
//       image: "https://images.ctfassets.net/7ghyf81o1fuo/7aXEy0PcCudid3CfrPA5OW/4c62b5fb79c600921393014e75de03c4/ajitesh.jpeg",
//       socials: ["https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/", "mailto:ajitesh.jam@gmail.com"]
//     },
//     {
//       id: 2,
//       name: "Parikshit Dave",
//       position: "Public Relation Head",
//       image: "https://images.ctfassets.net/7ghyf81o1fuo/1DAk028JHgxBpz0076yvNT/d35d65ecfd8df15114809930c44164a2/parikshit.png",
//       socials: ["https://www.linkedin.com/in/parikshit-dave-ba2983257", "mailto:parikshitdave14@gmail.com"]
//     },
    


//   ];

//   const getSocialIcon = (platform) => {
//     if (platform.includes("linkedin")) return faLinkedin;
//     if (platform.includes("mailto")) return faGoogle;
//     return '';
//   };

//   return (
//     <>
//       <div className="relative w-full h-[60vh] overflow-hidden">
//         <div
//           className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//           style={{ backgroundImage: `url(${team})` }}
//         >
//           <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
//             <h1 className="text-5xl font-bold text-white drop-shadow-lg"><b>COMPUTER GRAPHICS SOCIETY</b></h1>
//           </div>
//         </div>
//       </div>

//       <div className="demo">
//         {/* Current Governors Section */}
//         <div className="container">
//           <h2 className='headi'>Current Governors</h2>
//           <div className="members">
//             {governors.map((member) => (
//               <div className="" key={member.id} data-aos="fade-up"> {/* Adjusted columns */}
//                 <div className="our-team">
//                   <img src={member.image} alt={member.name} />
//                   <div className="team-content">
//                     <h3 className="title">{member.name}</h3>
//                     <span className="post">{member.position}</span>
//                     <ul className="social">
//                       {member.socials.map((social, index) => (
//                         <li key={index}>
//                           <a href={social}>
//                             <FontAwesomeIcon icon={getSocialIcon(social)}></FontAwesomeIcon>
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Team;

import React from 'react';
import './team.css'; // External CSS for styling
import team from '../../assets/team.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import { getContent } from '../contentful/ContentfulClient';
import Teamcard from './Teamcard';
import team2 from "./team2.json";

const Team = () => {
  const [members, setMembers] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const data = await getContent('members');
      setMembers(data);
    }

    fetchData();

    AOS.init({
      duration: 1300,
      easing: "ease-in-out",
    });
  }, []);

  const governors = [
    {
      id: 1,
      name: "Ajitesh Jamulkar",
      position: "Game Dev Head",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/7aXEy0PcCudid3CfrPA5OW/4c62b5fb79c600921393014e75de03c4/ajitesh.jpeg",
      socials: ["https://www.linkedin.com/in/ajitesh-jamulkar-2a5351260/", "mailto:ajitesh.jam@gmail.com"]
    },
    {
      id: 2,
      name: "Parikshit Dave",
      position: "Public Relation Head",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/1DAk028JHgxBpz0076yvNT/d35d65ecfd8df15114809930c44164a2/parikshit.png",
      socials: ["https://www.linkedin.com/in/parikshit-dave-ba2983257", "mailto:parikshitdave14@gmail.com"]
    },
    {
      id: 3,
      name: "Vedanta Hazra",
      position: "RnD Head",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/49mRXSBJQUfLhFpgCdwF6J/d1f95e986710317b8eb9ba1954ea167b/vedant.jpeg",
      socials: ["https://www.linkedin.com/in/vedanta-hazra-97859724b/", "mailto:vedantahazra2004@gmail.com"]
    },
    {
      id: 4,
      name: "Sahil Patel",
      position: "RnD Head",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/47zqeuISSiapCaffmn9rp2/ccf07b72842afe0683da6cda46c5418b/Sahil.png",
      socials: [ "https://www.linkedin.com/in/sahil-patel-21b30a255/", "mailto:sahil9123patel@gmail.com"]},
  
      {id: 5,
      name: "Upanshu Jain",
      position: "Graphics Head",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/3R3E4MmfgRA4bYRvLRM2F/9d0c25f513fcb37edb351155825092f1/upanshu.png",
      socials: [ "https://www.linkedin.com/in/siddharth-singh-7b1b3b1b3/", "mailto: upanshujpanchori16@gmail.com"]},
  
    {  id: 6,
      name: "Yash Daga",
      position: "Graphics Head",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/2c9AJVY7P6YMiaCi0uIvTN/cf925b1314229a631b82971f758f1d9d/Screenshot_2024-10-01_at_2.29.02_AM.png",
      socials: [ "https://www.linkedin.com/in/yash-daga-0b2041257/", "mailto:daga.yashhh@gmail.com"]},
  
      {id: 7,
      name: "Krishna Paikine ",
      position: "Content Creation Head",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/2715Ccq5Jw00UMi26MzPxW/3cae4d0f911fe005361800c8f540198c/Krishna.png",
      socials: [ "http://www.linkedin.com/in/krishnapaikine/", "mailto:krishnapaikine777@gmail.com"]},
        
      {id: 9,
        name: "Shubhankar das",
        position: "Game Dev Head",
        image: "https://images.ctfassets.net/7ghyf81o1fuo/3579nliT4FowxSmj6CYWYj/8d78f5fccda6489e31afec49f6e60389/WhatsApp_Image_2024-10-01_at_02.31.30.jpeg",
        socials: [ "https://www.linkedin.com/in/shubhankar-das-380267261", "mailto:rikidas5621@gmail.com"]},  
      {id: 8,
      name: "Sai Avinash Seemakurthi",
      position: "Web Dev Head",
      image: "https://images.ctfassets.net/7ghyf81o1fuo/6DvuLC00ZiKozzjnzLSLJa/39e9249cb023c12d4881adecb72ebc75/Screenshot_2024-10-01_at_2.30.30_AM.png",
      socials: [ "https://www.linkedin.com/in/sai-avinash-seemakurthi-446195261", "mailto:"]},



  ];

  const gameDev =[
    {
      id: 1,
      name: "Himesh Kundal",
      position: "GameDev",
      image: "",
      socials: [
        "https://www.linkedin.com/in/himesh-kundal-140059287/",
        "mailto:himesh.kundal@gmail.com"
      ]
    },
    {
      id: 2,
      name: "Abyan Hussain",
      position: "GameDev",
      image: "https://drive.google.com/open?id=1JsDucGm84F9408a1vfXmnMCgRN4dqnkj",
      socials: [
        "https://www.linkedin.com/in/abyan-hussain-9009b0286/",
        "mailto:abyanhussain05@gmail.com"
      ]
    },
    {
      id: 3,
      name: "Ayushman Majhi",
      position: "GameDev",
      image: "https://drive.google.com/open?id=1xTfoB3aNx9b8hz4JwRyMEceMFNI0b4tG",
      socials: [
        "https://www.linkedin.com/in/ayushman-majhi-635941298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "mailto:ayushmandbpc@gmail.com"
      ]
    },
    {
      id: 4,
      name: "Harsh Verma",
      position: "GameDev",
      image: "https://drive.google.com/open?id=1ZUyaGDgiiucStmhcIfxSIoUe0SYRkyAr",
      socials: [
        "www.linkedin.com/in/harsh-verma-572167287",
        "mailto:ayush2412200@gmail.com"
      ]
    },
    {
      id: 5,
      name: "Vansh Pali",
      position: "GameDev",
      image: "https://drive.google.com/open?id=1RsGbBypBYWBzEvaem2O20MiK8K2LU6v_",
      socials: [
        "www.linkedin.com/in/vansh-pali-47b315287",
        "mailto:vanshrpali905@gmail.com"
      ]
    },
    {
      id: 6,
      name: "Manijith Dameruppala",
      position: "GameDev",
      image: "https://drive.google.com/open?id=1TOktlmKKfDliTvm5dXZk5lCVn-v_IpRM",
      socials: [
        "https://www.linkedin.com/in/manijith-dameruppala-239530330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "mailto:chinnu2nd@gmail.com"
      ]
    },
    {
      id: 7,
      name: "Shaurya Baranwal",
      position: "GameDev",
      image: "https://drive.google.com/open?id=1EPJ25awBEqYKkqoqn1VkHB1FGRwoIdDm",
      socials: [
        "https://www.linkedin.com/in/shaurya-baranwal-6a240817b/",
        "mailto:shauryabaranwal1102@gmail.com"
      ]
    },
    {
      id: 8,
      name: "Harshwardhan Walunjkar",
      position: "GameDev",
      image: "https://drive.google.com/open?id=1HnH-qbJkJu5POytxkbi7zBsPkxI_LJFj",
      socials: [
        "https://www.linkedin.com/in/harshwardhan-walunjkar-93035628b/",
        "mailto:harshwardhanwada@gmail.com"
      ]
    },
    {
      id: 9,
      name: "Dhanvith Nayak",
      position: "GameDev",
      image: "https://drive.google.com/open?id=1ovgXlNYUeP9xQKbYjAyaD-ti3qey0iTw",
      socials: [
        "https://www.linkedin.com/in/dhanvith-nayak-72a9b9211/",
        "mailto:dhanpran3@gmail.com"
      ]
    },
    {
      id: 10,
      name: "Kshitij Agarwal",
      position: "GameDev",
      image: "https://drive.google.com/open?id=1u-bvioYCT9pMSAcYdxQ9H3BkzFKqSt1A",
      socials: [
        "https://linkedin.com/in/kshitij-agarwal-5361a42a0",
        "mailto:kshagarwal373@gmail.com",
      ]
    },
  ]

  const graphics =[
    {
      id: 1,
      name: "Kshetrimayum Abo",
      position: "Graphics",
      image: "https://drive.google.com/open?id=1HkZLZ41MUqk98v0_s51eefobGP1Te9by",
      socials: [
        "https://www.linkedin.com/in/kshetrimayum-abo-0384a528a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "mailto:kshabo2004@gmail.com"
      ]
    },
    {
      id: 2,
      name: "Pratyush Parackal",
      position: "Graphics",
      image: "https://drive.google.com/open?id=1etazQ4ll7kYl6UtnD-TTeT6TSOcgSjrk",
      socials: [
        "https://www.linkedin.com/in/pratyush-parackal-4b7b77287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "mailto:pratyushparackal9@gmail.com"
      ]
    },
    {
      id: 3,
      name: "Sudhanshu",
      position: "Graphics",
      image: "https://drive.google.com/open?id=18kiV-XE8T3IprDcx6hSmjfo_XVwDBKGY",
      socials: [
        "https://www.linkedin.com/in/sudhanshu-3174a9294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "mailto:sudhanshumahar2401@gmail.com"
      ]
    },
    {
      id: 4,
      name: "Jay Gheewala",
      position: "Graphics",
      image: "https://drive.google.com/open?id=1s63rpLrQaXPINxGO-3wLfpUQsmi9KRd5",
      socials: [
        "https://www.linkedin.com/in/jay-gheewala-1b886728b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "mailto:jaygheewala06@gmail.com"
      ]
    },
    {
      id: 5,
      name: "Adeetya Uppal",
      position: "Graphics",
      image: "https://drive.google.com/open?id=1CYUeckxLrp_8gG_Bn5CJ29s390vhHCtR",
      socials: [
        "https://www.linkedin.com/in/adeetya-uppal-a552a1290/",
        "mailto:adeetyauppal1@gmail.com"
      ]
    },
    {
      id: 6,
      name: "Adhiraj Singh Brar",
      position: "Graphics",
      image: "https://drive.google.com/open?id=1BYhTMjEsf-a7YEYYh4CiwPNf8ZPvTjGc",
      socials: [
        "www.linkedin.com/in/adhiraj-brar-a32aa2289",
        "mailto:prmoadhiraj2021@gmail.com"
      ]
    },
    {
      id: 7,
      name: "Kartik Kaushal",
      position: "Graphics",
      image: "https://drive.google.com/open?id=1RaHxbPShFi902NeTAziou69xuCZS9WT7",
      socials: [
        "Kartik Kaushal",
        "mailto:kartikkaushal131103@gmail.com"
      ]
    },
    {
      id: 8,
      name: "Siddharth Konnur",
      position: "Graphics",
      image: "https://drive.google.com/open?id=1ScNYaJlSKZqufGWMVxSOTuW_PdBB1B2r",
      socials: [
        "https://in.linkedin.com/in/siddharth-konnur-21b0a128b?original_referer=https%3A%2F%2Fwww.google.com%2F",
        "mailto:sidkonnur29@gmail.com"
      ]
    },
    {
      id: 9,
      name: "Atreya Bordoloi",
      position: "Graphics",
      image: "https://drive.google.com/open?id=1XQEqxYOoYas2Wm-sQYullcANI79-M6Oe",
      socials: [
        "http://www.linkedin.com/in/atreya-bordoloi-94279727b",
        "mailto:atreyabordoloi@gmail.com"
      ]
    },
    {
      id: 10,
      name: "Satwik Midya",
      position: "Graphics",
      image: "https://drive.google.com/open?id=1fmgwXHdDLWoMoTASlg01v-aVwsDj3YXF",
      socials: [
        "https://www.linkedin.com/in/satwik-midya-47b618270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "mailto:satwikmidya@gmail.com"
      ]
    },
    {
      id: 11,
      name: "Dheeraj Balaji",
      position: "Graphics",
      image: "https://drive.google.com/open?id=1u_a0O57SCc8yYka-hQBaQ-Ajs6DkvETN",
      socials: [
        "https://www.linkedin.com/in/dheeraj-balaji-12884627b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "mailto:dheerajbalajibellamkonda@gmail.com"
      ]
    },
    {
      id: 12,
      name: "Zoya Alam",
      position: "Graphics",
      image: "https://drive.google.com/open?id=1fHIJ3LLgZeeZlvHQoJwg4OFdEGSO_eAt",
      socials: [
        "https://www.linkedin.com/in/zoya-alam-a02914297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "mailto:alamzoya2004@gmail.com"
      ]
    },
    {
      id: 13,
      name: "Sri Charan Budumuru",
      position: "Graphics",
      image: "https://drive.google.com/open?id=1c5RCWv1MIyF1XabsUfLNpwM7uEl5_yZO",
      socials: [
        "https://www.linkedin.com/in/sri-charan-budumuru-76bb77330/",
        "mailto:bsricharan14@gmail.com"
      ]
    }
  ]

  const webdev=[{
    id:1,
    name: 'Saketh Akella',
    position: 'Web development',
    image:'',
    socials:['https://www.linkedin.com/in/saketh-akella-aa7886270/','mailto:sakethakella05@gmail.com'],
  },
  {
    id: 1,
      name: "Himesh Kundal",
      position: "GameDev",
      image: "",
      socials: [
        "https://www.linkedin.com/in/himesh-kundal-140059287/",
        "mailto:himesh.kundal@gmail.com"
      ]
  }]

  const pr =[
    {
      id: 1,
      name: "Ankit Anand",
      position: "Public Relations",
      image: "https://drive.google.com/open?id=1xYX1yg2e5Z-g66Zjt0rBcI1mm2SyDUaR",
      socials: [
        "www.linkedin.com/in/ankit-anand-159442295",
        "mailto:ankitanand3027@gmail.com"
      ]
    },
    {
      id: 2,
      name: "Kavya Nagar",
      position: "Public Relations",
      image: "https://drive.google.com/open?id=1QWsyFaBNjHiSSP5-K_MfR10aa4DoWMmZ",
      socials: [
        "https://www.linkedin.com/in/kavya-nagar-a8b468288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "mailto:kavyanagar@kgpian.iitkgp.ac.in"
      ]
    }
  ];
  const cc =[
    {    
      id: 14,
      name: "Pranav Bhujbal",
      position: "Content Creation",
      image: "https://drive.google.com/open?id=1PwkMDhVn46disx2Znv7Mi-0hBdBA7nfw",
      socials: [
        "https://www.linkedin.com/in/pranavbhujbal",
        "mailto:ppbhujbal11@gmail.com"
      
      ]
    },
  ];

  const getSocialIcon = (platform) => {
    if (platform.includes("linkedin")) return faLinkedin;
    if (platform.includes("mailto")) return faGoogle;
    return '';
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] overflow-hidden bg-black bg-opacity-50">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${team})` }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
              <b>COMPUTER GRAPHICS SOCIETY</b>
            </h1>
          </div>
        </div>
       </div>

      {/* Team Members Section */}
      <div className="team-section py-16 bg-black">
        <div className="container mx-auto">
          <h2 className="headi text-center text-2xl md:text-4xl font-bold mb-10 text-pink-500">
            Current Governors
          </h2>
          <div className="members grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {governors.map((member) => (
              // <div className="team-card" key={member.id} data-aos="fade-up" data-aos-once='true'>
              //   <div className="our-team bg-black rounded-lg overflow-hidden shadow-lg">
              //     <img src={member.image} alt={member.name} className="team-image rounded-t-lg" />
              //     <div className="team-content p-4">
              //       <h3 className="title text-lg font-semibold text-white">{member.name}</h3>
              //       <span className="post text-sm text-pink-500">{member.position}</span>
              //       <ul className="social mt-4 flex justify-center space-x-4">
              //         {member.socials.map((social, index) => (
              //           <li key={index}>
              //             <a href={social} target="_blank" rel="noreferrer">
              //               <FontAwesomeIcon icon={getSocialIcon(social)} className="text-pink-500 hover:text-white transition duration-300" />
              //             </a>
              //           </li>
              //         ))}
              //       </ul>
              //     </div>
              //   </div>
              // </div>
              <Teamcard key={member.id}
              name={member.name}
              position={member.position}
              social={member.socials[0]}
              mail={member.socials[1]}
              image={member.image}/>
            ))}
          </div>

          {/* GameDev Section */}
          {/* <h2 className="headi text-center text-2xl md:text-4xl font-bold mt-16 mb-10 text-pink-500">
            Game Developers
          </h2>
          <div className="members grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {gameDev.map((member) => (
              <div className="team-card" key={member.id} data-aos="fade-up" data-aos-once='true'>
                <div className="our-team bg-black rounded-lg overflow-hidden shadow-lg">
                  <img src={member.image} alt={member.name} className="team-image rounded-t-lg" />
                  <div className="team-content p-4">
                    <h3 className="title text-lg font-semibold text-white">{member.name}</h3>
                    <span className="post text-sm text-pink-500">{member.position}</span>
                    <ul className="social mt-4 flex justify-center space-x-4">
                      {member.socials.map((social, index) => (
                        <li key={index}>
                          <a href={social} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={getSocialIcon(social)} className="text-pink-500 hover:text-white transition duration-300" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          {/* Graphics Section */}
          {/* <h2 className="headi text-center text-2xl md:text-4xl font-bold mt-16 mb-10 text-pink-500">
            Graphics Team
          </h2>
          <div className="members grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {graphics.map((member) => (
              <div className="team-card" key={member.id} data-aos="fade-up" data-aos-once='true'>
                <div className="our-team bg-black rounded-lg overflow-hidden shadow-lg">
                  <img src={member.image} alt={member.name} className="team-image rounded-t-lg" />
                  <div className="team-content p-4">
                    <h3 className="title text-lg font-semibold text-white">{member.name}</h3>
                    <span className="post text-sm text-pink-500">{member.position}</span>
                    <ul className="social mt-4 flex justify-center space-x-4">
                      {member.socials.map((social, index) => (
                        <li key={index}>
                          <a href={social} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={getSocialIcon(social)} className="text-pink-500 hover:text-white transition duration-300" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="headi text-center text-2xl md:text-4xl font-bold mt-16 mb-10 text-pink-500">
            Web Developers
          </h2>
          <div className="members grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {webdev.map((member) => (
              <div className="team-card" key={member.id} data-aos="fade-up" data-aos-once='true'>
                <div className="our-team bg-black rounded-lg overflow-hidden shadow-lg">
                  <img src={member.image} alt={member.name} className="team-image rounded-t-lg" />
                  <div className="team-content p-4">
                    <h3 className="title text-lg font-semibold text-white">{member.name}</h3>
                    <span className="post text-sm text-pink-500">{member.position}</span>
                    <ul className="social mt-4 flex justify-center space-x-4">
                      {member.socials.map((social, index) => (
                        <li key={index}>
                          <a href={social} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={getSocialIcon(social)} className="text-pink-500 hover:text-white transition duration-300" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
<<<<<<< Updated upstream
          </div>
          <h2 className="headi text-center text-2xl md:text-4xl font-bold mt-16 mb-10 text-pink-500">
            Public Relations
          </h2>
          <div className="members grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pr.map((member) => (
              <div className="team-card" key={member.id} data-aos="fade-up" data-aos-once='true'>
                <div className="our-team bg-black rounded-lg overflow-hidden shadow-lg">
                  <img src={member.image} alt={member.name} className="team-image rounded-t-lg" />
                  <div className="team-content p-4">
                    <h3 className="title text-lg font-semibold text-white">{member.name}</h3>
                    <span className="post text-sm text-pink-500">{member.position}</span>
                    <ul className="social mt-4 flex justify-center space-x-4">
                      {member.socials.map((social, index) => (
                        <li key={index}>
                          <a href={social} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={getSocialIcon(social)} className="text-pink-500 hover:text-white transition duration-300" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="headi text-center text-2xl md:text-4xl font-bold mt-16 mb-10 text-pink-500">
            Content Creation
          </h2>
          <div className="members grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cc.map((member) => (
              <div className="team-card" key={member.id} data-aos="fade-up" data-aos-once='true'>
                <div className="our-team bg-black rounded-lg overflow-hidden shadow-lg">
                  <img src={member.image} alt={member.name} className="team-image rounded-t-lg" />
                  <div className="team-content p-4">
                    <h3 className="title text-lg font-semibold text-white">{member.name}</h3>
                    <span className="post text-sm text-pink-500">{member.position}</span>
                    <ul className="social mt-4 flex justify-center space-x-4">
                      {member.socials.map((social, index) => (
                        <li key={index}>
                          <a href={social} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={getSocialIcon(social)} className="text-pink-500 hover:text-white transition duration-300" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
=======
          </div>*/}
        </div> 

      </div>


      <div className="team-section py-16 bg-black">
        <div className="container mx-auto">
          <h2 className="headi text-center text-2xl md:text-4xl font-bold mb-10 text-pink-500">
            Core Team Members
          </h2>
          <div className="members grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team2.map((member) => (
              // <div className="team-card" key={member.id} data-aos="fade-up" data-aos-once='true'>
              //   <div className="our-team bg-black rounded-lg overflow-hidden shadow-lg">
              //     <img src={member.image} alt={member.name} className="team-image rounded-t-lg" />
              //     <div className="team-content p-4">
              //       <h3 className="title text-lg font-semibold text-white">{member.name}</h3>
              //       <span className="post text-sm text-pink-500">{member.position}</span>
              //       <ul className="social mt-4 flex justify-center space-x-4">
              //         {member.socials.map((social, index) => (
              //           <li key={index}>
              //             <a href={social} target="_blank" rel="noreferrer">
              //               <FontAwesomeIcon icon={getSocialIcon(social)} className="text-pink-500 hover:text-white transition duration-300" />
              //             </a>
              //           </li>
              //         ))}
              //       </ul>
              //     </div>
              //   </div>
              // </div>
              <Teamcard key={member.id}
              name={member.name}
              position={member.position}
              social={member.socialLinks[0]}
              mail={member.socialLinks[3]}
              image={member.image}/>
            ))}
          </div>

          {/* GameDev Section */}
          {/* <h2 className="headi text-center text-2xl md:text-4xl font-bold mt-16 mb-10 text-pink-500">
            Game Developers
          </h2>
          <div className="members grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {gameDev.map((member) => (
              <div className="team-card" key={member.id} data-aos="fade-up" data-aos-once='true'>
                <div className="our-team bg-black rounded-lg overflow-hidden shadow-lg">
                  <img src={member.image} alt={member.name} className="team-image rounded-t-lg" />
                  <div className="team-content p-4">
                    <h3 className="title text-lg font-semibold text-white">{member.name}</h3>
                    <span className="post text-sm text-pink-500">{member.position}</span>
                    <ul className="social mt-4 flex justify-center space-x-4">
                      {member.socials.map((social, index) => (
                        <li key={index}>
                          <a href={social} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={getSocialIcon(social)} className="text-pink-500 hover:text-white transition duration-300" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          {/* Graphics Section */}
          {/* <h2 className="headi text-center text-2xl md:text-4xl font-bold mt-16 mb-10 text-pink-500">
            Graphics Team
          </h2>
          <div className="members grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {graphics.map((member) => (
              <div className="team-card" key={member.id} data-aos="fade-up" data-aos-once='true'>
                <div className="our-team bg-black rounded-lg overflow-hidden shadow-lg">
                  <img src={member.image} alt={member.name} className="team-image rounded-t-lg" />
                  <div className="team-content p-4">
                    <h3 className="title text-lg font-semibold text-white">{member.name}</h3>
                    <span className="post text-sm text-pink-500">{member.position}</span>
                    <ul className="social mt-4 flex justify-center space-x-4">
                      {member.socials.map((social, index) => (
                        <li key={index}>
                          <a href={social} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={getSocialIcon(social)} className="text-pink-500 hover:text-white transition duration-300" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="headi text-center text-2xl md:text-4xl font-bold mt-16 mb-10 text-pink-500">
            Web Developers
          </h2>
          <div className="members grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {webdev.map((member) => (
              <div className="team-card" key={member.id} data-aos="fade-up" data-aos-once='true'>
                <div className="our-team bg-black rounded-lg overflow-hidden shadow-lg">
                  <img src={member.image} alt={member.name} className="team-image rounded-t-lg" />
                  <div className="team-content p-4">
                    <h3 className="title text-lg font-semibold text-white">{member.name}</h3>
                    <span className="post text-sm text-pink-500">{member.position}</span>
                    <ul className="social mt-4 flex justify-center space-x-4">
                      {member.socials.map((social, index) => (
                        <li key={index}>
                          <a href={social} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={getSocialIcon(social)} className="text-pink-500 hover:text-white transition duration-300" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
<<<<<<< Updated upstream
          </div>
          <h2 className="headi text-center text-2xl md:text-4xl font-bold mt-16 mb-10 text-pink-500">
            Public Relations
          </h2>
          <div className="members grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pr.map((member) => (
              <div className="team-card" key={member.id} data-aos="fade-up" data-aos-once='true'>
                <div className="our-team bg-black rounded-lg overflow-hidden shadow-lg">
                  <img src={member.image} alt={member.name} className="team-image rounded-t-lg" />
                  <div className="team-content p-4">
                    <h3 className="title text-lg font-semibold text-white">{member.name}</h3>
                    <span className="post text-sm text-pink-500">{member.position}</span>
                    <ul className="social mt-4 flex justify-center space-x-4">
                      {member.socials.map((social, index) => (
                        <li key={index}>
                          <a href={social} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={getSocialIcon(social)} className="text-pink-500 hover:text-white transition duration-300" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="headi text-center text-2xl md:text-4xl font-bold mt-16 mb-10 text-pink-500">
            Content Creation
          </h2>
          <div className="members grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cc.map((member) => (
              <div className="team-card" key={member.id} data-aos="fade-up" data-aos-once='true'>
                <div className="our-team bg-black rounded-lg overflow-hidden shadow-lg">
                  <img src={member.image} alt={member.name} className="team-image rounded-t-lg" />
                  <div className="team-content p-4">
                    <h3 className="title text-lg font-semibold text-white">{member.name}</h3>
                    <span className="post text-sm text-pink-500">{member.position}</span>
                    <ul className="social mt-4 flex justify-center space-x-4">
                      {member.socials.map((social, index) => (
                        <li key={index}>
                          <a href={social} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={getSocialIcon(social)} className="text-pink-500 hover:text-white transition duration-300" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
=======
          </div>*/}
        </div> 

      </div>

    </>
  );
};

export default Team;
