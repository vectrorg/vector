import React from 'react'
import headingBg from '../../../assets/for_students_bg.webp';
import { Outfit } from 'next/font/google';

const outfitFont = Outfit({
  variable: '--font-outfit',
  subsets: ["latin"],
});

const Heading = () => {
  return (
    <>
      <div className="w-full h-[5rem] bg-gradient-to-r from-[#1b012c] via-[#24014d] to-[#66007c] "></div>
      <div className='h-[15rem] bg-cover bg-center bg-no-repeat flex text-center items-center justify-center'
        style={{ backgroundImage: `url(${headingBg.src})` }}>
        <h1
          className={`text-white font-bold text-[5rem] md:text-[8rem] [text-shadow:6px_6px_0_#AD49E1] md:[text-shadow:12px_12px_0_#AD49E1] select-none ${outfitFont.className} mt-[1rem] md:mt-[4rem]`}
        >
          Students
        </h1>
      </div>
    </>


  )
}

export default Heading