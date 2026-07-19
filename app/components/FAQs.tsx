"use client";
import React, { useState, useRef, useEffect } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { Outfit } from "next/font/google";
import { Sparkles } from "./ui/Sparkles";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

interface IFAQ {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: IFAQ[] = [
    {
      question: `How is Vectr. different from other study platforms?`,
      answer: `Vectr. has features like focus mode and pomodoro timer that help you manage time more effectively and stay more productive during study sessions.`,
    },
    {
      question: `Can I use Vectr. to boost productivity?`,
      answer: 'Absolutely! Vectr has focus mode and peer study leaderboard features that help you stay focused and motivated during study sessions.',
    },
    {
      question: `Is Vectr. for creators?`,
      answer: 'Absolutely. Creators can create and share their content, while also benefiting from our platform for increased visibility and engagement.',
    },
    {
      question: 'What are "Communities"?',
      answer: 'Communities are groups where users can share their doubts, ask questions, and connect with like-minded individuals.',
    },
    {
      question: `How does Vectr. deal with distractions?`,
      answer: 'Unlike YouTube or other platforms, we ensure ad-free content delivery and a distraction-free environment for our users.',
    }
  ];

  return (
    <div className="relative w-full min-h-screen p-8 md:p-20 pt-10 overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full">
        <Sparkles
          className="w-full h-full"
          density={70}
          speed={1}
          size={1.2}
          opacity={0.6}
          color="#f700ff"
          background="rgba(0,0,0,0.7)" 
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col lg:ml-12">
          <p className="hidden lg:block text-white text-lg uppercase tracking-wider">FAQ&apos;S</p>
          <h2 className={`${outfitFont.className} text-4xl md:text-6xl mb-8 text-white leading-tight`}>
            Frequently Asked Questions
          </h2>
          <p className="text-white text-lg text-center lg:text-left mb-4">
            Ask us anything!
          </p>
          <a 
            href="mailto:Abhinav.vectr@gmail.com" 
            className="text-xl md:text-3xl text-purple-500 font-semibold hover:underline transition-colors duration-300 text-center lg:text-left"
          >
            Abhinav.vectr@gmail.com
          </a>
        </div>
        
        <div className="w-full lg:max-w-2xl mx-auto border-b border-gray-800 lg:mr-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentRef = useRef<HTMLDivElement>(null);
            const [maxHeight, setMaxHeight] = useState("0px");

            useEffect(() => {
              if (isOpen && contentRef.current) {
                setMaxHeight(`${contentRef.current.scrollHeight}px`);
              } else {
                setMaxHeight("0px");
              }
            }, [isOpen]);

            return (
              <div 
                key={index} 
                className={`mb-7 border-t border-gray-800 transition-colors ${isOpen ? 'border-purple-500' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full px-4 py-6 text-white hover:text-purple-300 text-lg md:text-xl focus:outline-none transition-colors"
                >
                  <span className={`${outfitFont.className} font-medium text-left pr-4`}>
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <BiMinus className="flex-shrink-0 w-6 h-6 text-purple-500" />
                  ) : (
                    <BiPlus className="flex-shrink-0 w-6 h-6 text-purple-500" />
                  )}
                </button>
                <div
                  ref={contentRef}
                  style={{
                    maxHeight,
                    transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    overflow: "hidden"
                  }}
                  className="px-4"
                >
                  <div className="pb-6 text-gray-300">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;