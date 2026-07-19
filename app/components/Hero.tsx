"use client";

import React, { useEffect, useState } from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";
import heroBg from "../../assets/hero_bg.webp";
import googlePlayLogo from "../../assets/google-play-logo.webp";
import { Sparkles } from "./ui/Sparkles";
import { FlipWords } from "@/components/ui/flip-words";
import ProceedPopup from "./ProceedPopup"; // import the popup component

import CountUp from "react-countup";
import { motion } from "framer-motion";
const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const Hero = () => {
  const [mobileOS, setMobileOS] = useState<string>("");
  const [showProceedPopup, setShowProceedPopup] = useState<boolean>(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent || window.navigator.vendor;
    if (/android/i.test(userAgent)) {
      setMobileOS("android");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setMobileOS("ios");
    } else {
      setMobileOS("desktop");
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      />

      {/* Sparkles */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Sparkles className="w-full h-full" />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 mt-3">
        <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
          {/* Tagline */}
          <p
            className={`text-white text-[1.5rem] md:text-[3.5rem] mt-0 sm:mt-[5rem] font-bold ${outfitFont.className}`}
          >
            Where
            <span className="text-[#AD49E1]"> Magnitude </span>
            meets
            <span className="text-[#AD49E1]"> Direction </span>
          </p>

          <div className="flex flex-col justify-between items-center">
            <h1
              className={`text-white font-bold text-[5rem] md:text-[16rem] [text-shadow:6px_6px_0_#AD49E1] md:[text-shadow:12px_12px_0_#AD49E1] select-none ${outfitFont.className}`}
            >
              Vectr.
            </h1>
                <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mt-2"
            >
              <p className="text-white text-l md:text-lg">
                Join{" "}
                <span className="text-[#AD49E1] font-bold text-lg md:text-xl drop-shadow-[0_0_8px_#AD49E1]">
                  <CountUp end={10000} duration={1.2} separator="," />+
                </span>{" "}
                students already getting ahead
              </p>
            </motion.div>
            <p
              className={`text-white font-bold text-[1rem] md:text-[2.7rem] mb-0 select-none ${outfitFont.className}`}
            >
              Distraction-free prep, built just for{" "}
              <span className="relative inline-block w-auto">
                <FlipWords
                  words={["JEE", "NEET", "Board Exams", "Exams"]}
                  // words={["JEE", "NEET", "NDA", "CUET", "CLAT", "Board Exams"]}
                  duration={1500}
                  className={`top-0 left-0 text-white font-bold text-[1rem] md:text-[2.7rem] select-none ${outfitFont.className}`}
                />
              </span>
            </p>

            {/* Centered Google Play download button for desktop/tablet only */}
            <div className="hidden md:flex justify-center mt-3 w-full">
              <div
                onClick={() => setShowProceedPopup(true)}
                className="text-black bg-white px-6 py-3 rounded-[3rem] flex flex-row items-center justify-center hover:scale-[1.04] transition cursor-pointer shadow-lg"
              >
                <Image
                  src={googlePlayLogo}
                  alt="Google Play logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 mr-3 select-none"
                />
                <div className="flex flex-col items-start">
                  <p className={`${outfitFont.className} text-xs text-gray-600`}>
                    Get it from
                  </p>
                  <p className={`${outfitFont.className} font-semibold text-base`}>
                    Google Play
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile download button */}
        <div className="flex flex-col items-center justify-center w-full max-w-6xl px-4 mt-8 md:mt-12">
          <div className="block md:hidden w-full max-w-md">
            <div className="flex flex-col justify-center gap-4 w-full">
              <div
                onClick={() => setShowProceedPopup(true)}
                className="text-black bg-white w-full px-[2rem] py-2 rounded-[3rem] flex flex-row hover:cursor-pointer items-center justify-center"
              >
                <Image
                  src={googlePlayLogo}
                  alt="Google Play logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 mr-2 select-none"
                />
                <div className="flex flex-col">
                  <p className={`${outfitFont.className} text-xs`}>
                    Get it from
                  </p>
                  <p className={`${outfitFont.className} font-semibold text-sm`}>
                    Google Play
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proceed Popup */}
      <ProceedPopup
        show={showProceedPopup}
        onClose={() => setShowProceedPopup(false)}
      />
    </div>
  );
};

export default Hero;
        