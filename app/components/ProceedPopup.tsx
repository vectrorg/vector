"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Outfit } from "next/font/google";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

interface ProceedPopupProps {
  show: boolean;
  onClose: () => void;
}

export default function ProceedPopup({ show, onClose }: ProceedPopupProps) {
  const [showDownloadInfo, setShowDownloadInfo] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

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
            className="relative bg-black border border-[#AD49E1]/40 p-6 sm:p-8 rounded-3xl shadow-2xl text-center w-[92%] max-w-md sm:max-w-lg lg:max-w-xl max-h-[90vh] overflow-y-auto"
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
              className={`text-white text-2xl sm:text-3xl font-bold mb-4 ${outfitFont.className}`}
            >
              Thanks for choosing Vectr!
            </h2>

            {/* Intro Paragraph */}
            <p
              className={`text-gray-300 text-base sm:text-lg leading-relaxed mb-6 ${outfitFont.className}`}
            >
              You’re all set to begin. Check your Google Play app or continue exploring!
            </p>

            {/* Download Vectr Dropdown */}
            <div className="border border-[#AD49E1]/30 rounded-xl mb-4 text-left">
              <button
                onClick={() => setShowDownloadInfo(!showDownloadInfo)}
                className="w-full px-4 py-3 text-white font-semibold flex justify-between items-center transition hover:bg-[#AD49E1]/10 rounded-xl"
              >
                Download Vectr via Google Play
                <span className={`transform transition-transform ${showDownloadInfo ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <AnimatePresence>
                {showDownloadInfo && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-2 text-gray-300 text-sm max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-[#AD49E1]/40">
                      <p>You’re about to be taken to our official Google Play testing page. We made sure. It’s 100% Simple, Safe and it's how we’re letting you download the app before anyone else.</p>

                      <p>Here’s what you will do: </p>

                      <p><strong>Step 1:</strong> Tap “Become a Tester”. </p><p> Once the page opens, you’ll see a blue button that says “Become a Tester.” Just hit that. It tells Google you’re cool with trying out Vectr early. </p>

                      <p><strong>Step 2:</strong> Tap “Download it on Google Play”.</p><p>After you become a tester, a new text will appear saying “Download it on Google Play.” That’s your normal install page link that will redirect to Vectr’s Playstore Page. </p>

                      <p><strong>Step 3:</strong> Use it like any normal app.</p><p>It installs through the Play Store just like any other app and Make sure to Rate us and Drop in feedback.</p>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ Dropdown */}
            <div className="border border-[#AD49E1]/30 rounded-xl mb-6 text-left">
              <button
                onClick={() => setShowFAQ(!showFAQ)}
                className="w-full px-4 py-3 text-white font-semibold flex justify-between items-center transition hover:bg-[#AD49E1]/10 rounded-xl"
              >
                FAQ
                <span className={`transform transition-transform ${showFAQ ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <AnimatePresence>
                {showFAQ && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-2 text-gray-300 text-sm max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-[#AD49E1]/40">
                      <p>Wait - what does “tester” even mean?</p>
                      <p>You’re helping us out by trying Vectr before the full launch. Everything’s secure and verified by Google -you’re just getting in early.</p>
                      <p>Why it’s cool to join now:</p>
                      <p>You get access to the full app early.</p>
                      <p>You’ll help shape how it grows.</p>
                      <p>You’re literally part of the launch story.</p>
                      <p>And don’t worry:</p>
                      <p>✅It’s all through Google Play</p>
                      <p>✅Totally safe and reversible</p>
                      <p>✅You can leave anytime with one click</p>
                      <p><strong>Thanks for jumping in early - Let’s Fix That Prep.</strong></p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>



            {/* Proceed Button */}
            <a
              href="https://play.google.com/apps/testing/com.vectr.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#AD49E1] text-white px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold hover:bg-[#c975f4] transition"
            >
              Proceed to Google Play
            </a>
          </motion.div>
        </motion.div>
      )
      }
    </AnimatePresence >
  );
}
