"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import googlePlayLogo from "../../assets/google-play-logo.webp";
import { useState, useEffect } from "react";
import { Outfit } from "next/font/google";
import Link from "next/link";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

interface DownloadPopupProps {
  show: boolean;
  onClose: () => void;
  onProceed: () => void; // NEW
}


export default function DownloadPopup({ show, onProceed, onClose }: DownloadPopupProps) {

  const renderDownloadButton = () => {
    return (
      <div
        onClick={onProceed}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onProceed()}
        className="outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-[2rem]"
        aria-label="Download Vectr from Google Play"
      >
        <div className="bg-white w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-[2rem] flex flex-row items-center justify-center hover:cursor-pointer hover:scale-[1.02] transition">
          <Image
            src={googlePlayLogo}
            alt="Google Play logo"
            width={24}
            height={24}
            className="w-5 h-5 sm:w-6 sm:h-6 mr-2 select-none"
          />
          <div className="flex flex-col">
            <p className={`${outfitFont.className} text-[10px] sm:text-xs text-gray-600`}>
              Get it from
            </p>
            <p className={`${outfitFont.className} font-semibold text-sm sm:text-base`}>
              Google Play
            </p>
          </div>
        </div>
      </div>
    );
  };


  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative bg-black border border-[#AD49E1]/40 p-6 sm:p-8 rounded-3xl shadow-2xl text-center w-[92%] max-w-md sm:max-w-lg lg:max-w-xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-[#AD49E1] transition"
            >
              <X size={25} />
            </button>

            {/* Title */}
            <h2
              className={`text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-3 ${outfitFont.className}`}
            >
              Ready to Start?
            </h2>
            <p
              className={`text-gray-300 mb-6 text-sm sm:text-base lg:text-lg leading-relaxed ${outfitFont.className}`}
            >
              Download <span className="text-[#AD49E1] font-semibold">Vectr&nbsp;</span>
              today and boost your prep journey!
            </p>

            {renderDownloadButton()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
