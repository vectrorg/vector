"use client";
import React, { useState } from 'react';
import appLogo from '../../../assets/logo.webp';
import { Outfit } from 'next/font/google';

const outfitFont = Outfit({
    variable: '--font-outfit',
    subsets: ["latin"],
});

const CreatorForm = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setIsButtonClicked(true);
        //handle form submission
    };

    return (
        <div className='bg-gradient-to-br from-[#19172a] to-[#080d12] p-[3rem] flex flex-col pb-[4rem]'>
            <h1 className={`text-white font-semibold w-full text-center text-[2.8rem] ${outfitFont.className}`}>
                Launch your community. Shape what comes next.
            </h1>
            <div className='flex flex-row items-center justify-center mt-[2rem]'>
                <div className='flex flex-col'>
                    <input 
                        className='w-[20rem] bg-[#EDEDED] h-[2.3rem] rounded-[0.5rem] text-[0.9rem] text-[#492454] pl-[1rem] focus:outline-none font-semibold'
                        placeholder='Enter your name'
                    />
                    <input 
                        className='w-[20rem] bg-[#EDEDED] h-[2.3rem] rounded-[0.5rem] text-[0.9rem] text-[#492454] pl-[1rem] focus:outline-none font-semibold mt-[2rem]'
                        placeholder='Enter your E-mail address'
                    />
                    <div className='flex items-center justify-end mt-[2rem]'>
                        <button 
                            onClick={handleButtonClick}
                            className='
                                bg-gradient-to-tr from-[#81129d] to-[#5c0d6d] 
                                px-[1rem] py-[0.5rem] rounded-[0.5rem] 
                                font-semibold text-white 
                                hover:brightness-110 
                                active:brightness-90 active:scale-[0.98] 
                                transition-all duration-200
                            '>
                            Apply as a Creator
                        </button>
                    </div>
                </div>
                <img 
                    src={appLogo.src}
                    className={`w-[12rem] rounded-[2rem] ml-[15rem] transition duration-300 ease-in-out ${
                        isButtonClicked ? "drop-shadow-[0_0_15px_theme('colors.purple.500')]" : ""
                    }`}
                />
            </div>
        </div>
    );
};

export default CreatorForm;