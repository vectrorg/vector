// import React from 'react'
// import whyVectorBg from '../../assets/why_vector_bg.png';
// import { Outfit } from 'next/font/google';

// const outfitFont = Outfit({
//   variable: '--font-outfit',
//   subsets: ["latin"],
// });

// const WhyVectr = () => {
//   return (
//     <div
//   className={`bg-black flex flex-col items-center ${outfitFont.className} p-[1rem]`}
//   style={{
//     backgroundImage: `url(${whyVectorBg.src})`,
//     backgroundPosition: 'center -50px',
//     backgroundRepeat: 'no-repeat', 
//     backgroundSize: 'cover'
//   }}
//   >
//       <p className='text-[2rem] sm:text-[3rem] md:text-[4rem] text-white font-semibold text-center'>
//         Why Vectr?
//       </p>
//       <div className='flex flex-col items-center text-center mt-[1.5rem] sm:mt-[2rem]'>
//         <p className={`text-[1.2rem] sm:text-[1.6rem] md:text-[2rem] text-white font-semibold ${outfitFont.className}`}>
//           93% of JEE/NEET students struggle to focus.
//         </p>
//         <p className={`text-[1.2rem] sm:text-[1.6rem] md:text-[2rem] text-white font-semibold ${outfitFont.className} mt-2`}>
//           Existing platforms push content but don't fix this.
//         </p>
//       </div>
//       <p className={`text-[1.6rem] sm:text-[2rem] md:text-[2.4rem] text-[#AD49E1] font-semibold mt-[1.5rem] sm:mt-[2rem] ${outfitFont.className}`}>
//         Vectr is different
//       </p>
//     </div>
//   );
// }

// export default WhyVectr;


import React from 'react'
// import whyVectorBg from '../../assets/why_vector_bg.webp';
// import topbg from '../../assets/topbg.png';
import { Outfit } from 'next/font/google';
import Card from './ui/Card';
import { BiWindows } from 'react-icons/bi';
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { TbBoltFilled } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi2";
import { FaRedditAlien } from "react-icons/fa";
import { Sparkles } from './ui/Sparkles';


const outfitFont = Outfit({
  variable: '--font-outfit',
  subsets: ["latin"],
});

const WhyVectr = () => {
  return (
    <>
      <div className={`relative bg-gradient-to-b from-[#01051d] to-[#0b0218] flex flex-col items-center overflow-hidden `}>
        
       {/* Grid Effect */}
        {/* <div className=" mt-0 z-0 w-screen">
          <img src={topbg.src} alt="background image" className="w-full object-cover bg-transparent" />
        </div> */}

        {/* Line Animation */}
          {/* <div
          className="w-full h-1 bg-purple-500 rounded-full"
          style={{
            boxShadow: '0 0 5px #8000ff, 0 0 10px #8000ff, 0 0 20px #8000ff, 0 0 40px #8000ff',
            animation: 'pulseGlow 2s infinite alternate',
          }}
        ></div>
        <style jsx>{`
          @keyframes pulseGlow {
            0% {
              box-shadow: 0 0 5px #8000ff, 0 0 10px #8000ff, 0 0 20px #8000ff, 0 0 40px #8000ff;
            }
            100% {
              box-shadow: 0 0 10px #b266ff, 0 0 20px #b266ff, 0 0 40px #b266ff, 0 0 80px #b266ff;
            }
          }
        `}</style> */}

        {/* Simple Grid */}
        {/* <div
        className="absolute inset-0 z-0"
        // style={{
        //   backgroundImage: `url(${whyVectorBg.src})`,
        //   backgroundPosition: 'center -50px',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'auto',
        //   opacity: 0.4,
        // }}
      /> */}

        <div className="relative flex flex-col items-center z-15">
          <Sparkles
            className="absolute inset-0 w-full z-0"
            density={100}
            speed={0.7}
            size={1.7}
            opacity={0.6}
            color="#AC51CA"
            background="transparent"
          />
          <p className={`text-[1.75rem] mt-[3rem] sm:text-[3rem] md:text-[4rem] text-white font-semibold text-center ${outfitFont.className}`}>
            Why Students Struggle Online?
          </p>
          <div className='block sm:flex justify-center gap-[8rem] mt-[5rem]'>
            <Card icon={BiWindows} line1="Too many apps" line2="= No Focus" />
            <Card icon={FaYoutube} line1="Youtube" line2="≠ Real learning" />
            <Card icon={FaTelegramPlane} line1="Telegram" line2="= Chaos" />
          </div>
          <p className='whitespace-nowrap text-white font-semibold text-[1.3rem] sm:text-[3.5rem] mt-[6rem]'>
            <span className='text-purple-600'>Distraction </span>
            pulls you in,
            <span className='text-purple-600'> Vectr </span>
            pulls you out !
          </p>
          <div className='block sm:flex justify-center gap-[8rem] mt-[5rem]'>
            <Card icon={TbBoltFilled} line1="Zero Distraction" line2="Focus tools" />
            <Card icon={HiUserGroup} line1="Friends-Study" line2="Leaderboard" />
            <Card icon={FaRedditAlien} line1="Reddit like" line2="Communities" />
          </div>
          <p className='whitespace-nowrap text-white font-semibold text-[3.25rem] mt-[3rem]'>and Many More!</p>
        </div>
      </div>
    </>
  );
}

export default WhyVectr;
