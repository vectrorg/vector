// import React from 'react';
// import DownloadButton from './ui/DownloadButton';
// import bottombg from '../../assets/bottombg.webp'

// const Download = () => {
//   return (
//     <div className="w-full h-[100vh] overflow-y-hidden flex flex-col overflow-x-hidden items-center relative bg-[#0b0119]">
//       {/* Lunar moon typa effect but not responsive :( */}
//       {/* <div className='relative h-[15rem] w-full overflow-hidden'>
//       <div 
//         className="absolute -top-[385vh] left-1/2 -translate-x-1/2 w-[200%] h-[400vh] bg-black rounded-full rotate-90 z-10"
//         style={{
//           transform: 'rotate(180deg)',
//           marginTop: '3rem',
//           marginBottom: '2rem',
//         }}
//       />
//       </div> */}

//       <div 
//         className="w-[120%] h-[480px] rounded-full mt-[1rem]"
//         style={{ 
//           background: 'radial-gradient(50% 50% at 50% 50%, rgba(136, 30, 213, 1) 0%, rgba(11, 1, 25, 1) 100%)',
//           transform: 'rotate(180deg)',
//           marginTop: '-20rem',
//         }}
//       />

//       <div className="w-screen mt-[2rem] relative ">
//         <p className="text-[6.5rem] text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#EFEEF1] to-[#cdcbd279]">
//           Don't just let Everyone
//         </p>                
//         <p className="text-[6.5rem] text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#EFEEF1] to-[#cdcbd279]">
//           get ahead !
//         </p>
//       </div>

//       <div className="mt-[3rem] relative z-20">
//         <DownloadButton />
//       </div>

//       <div className='mt-[-3rem] bottom-0 absolute'>
//   <img src={bottombg.src} alt='background image'/>
// </div>

//     </div>
//   );
// };

// export default Download;




// TO DO:
import React, { useState } from 'react';
import DownloadButton from './ui/DownloadButton';
import bottombg from '../../assets/bottombg.jpg';
import Link from 'next/link';
import ProceedPopup from "./ProceedPopup"; // import the popup component
// import topbg from '../../assets/topbg.png';

const Download = () => {

  const [showProceedPopup, setShowProceedPopup] = useState<boolean>(false);

  return (
    <div className="min-h-screen w-full flex flex-col items-center relative bg-gradient-to-b from-[#0b0218] to-[#0b0119] px-4 ">
      <div className=" mt-auto z-0 w-screen">
        {/* <img src={topbg.src} alt="background image" className="w-full object-cover"/> */}

        {/* Line Animation */}
        <div
          className="w-full h-1 bg-purple-500 rounded-full my-8"
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
        `}</style>

      </div>

      {/* Heading text */}
      <div className="mt-32 text-center z-10 px-2">
        <p className="text-6xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#EFEEF1] to-[#cdcbd279] leading-tight">
          Don&apos;t just let Everyone
        </p>
        <p className="text-6xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#EFEEF1] to-[#cdcbd279] leading-tight">
          get ahead!
        </p>
      </div>

      {/* Download button */}
      <div className="mt-12 z-20">
        <div onClick={() => setShowProceedPopup(true)}
        >
          <DownloadButton />
        </div>
      </div>

      {/* Bottom background image */}
      <div className=" mt-auto z-0 w-screen">
        <img src={bottombg.src} alt="background image" className="w-full object-cover" />
      </div>

      {/* Proceed Popup */}
      <ProceedPopup
        show={showProceedPopup}
        onClose={() => setShowProceedPopup(false)}
      />
    </div>
  );
};

export default Download;
