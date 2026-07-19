// import { HoverEffect } from "../../../components/ui/card-hover-effect";
 
// export default function Card() {
//   return (
//     <div className=" mx-auto px-8">
//       <HoverEffect items={projects} />
//     </div>
//   );
// }
// export const projects = [
//   {
//     title: "Stripe",
//     description:
//       "A technology company that builds economic infrastructure for the internet.",
//     link: "https://stripe.com",
//   },
//   {
//     title: "Netflix",
//     description:
//       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//     link: "https://netflix.com",
//   },
//   {
//     title: "Google",
//     description:
//       "A multinational technology company that specializes in Internet-related services and products.",
//     link: "https://google.com",
//   }
// ];



import React from 'react'
import { Outfit } from 'next/font/google'
import { IconType } from 'react-icons'


const outfitFont = Outfit({
  variable: '--font-outfit',
  subsets: ["latin"],
});

type CardProps = {
    icon: IconType;
    line1: string;
    line2: string;
  };
  

const Card: React.FC<CardProps> = ({ icon: Icon, line1, line2 }) => {
  return (
    <div className="w-[24rem]">
        <div 
        className={`card-container relative flex flex-col items-center px-[2rem] py-[3rem] rounded-[1rem] h-[24rem] justify-center min-w-max border-t-2 border-t-[#6641FC] transition-all duration-300 ease-in-out ${outfitFont.className}`}
        style={{
            background: 'radial-gradient(ellipse at top left, rgba(102, 65, 252, 0.2) 0%, rgba(86, 54, 209, 0.05) 70%, rgba(102, 65, 252, 0) 100%)'
        }}
        >
        <div className="relative inline-block">
          <svg width="0" height="0">
            <defs>
              <linearGradient id="icon-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#601393" />
                <stop offset="100%" stopColor="#5636D1" />
              </linearGradient>
            </defs>
          </svg>
          <Icon className='text-[7rem]' style={{ fill: "url(#icon-gradient)" }} />
        </div>

        <p className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-[#FEFEFE] to-[#9e9ea4] font-semibold text-[2rem] mt-[1rem]">
            {line1}
        </p>
        <p className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-[#FEFEFE] to-[#9e9ea4] font-semibold text-[2rem]">
          {line2}
        </p>

        {/* Custom animated borders */}
        <span className="border-anim border-left"></span>
        <span className="border-anim border-right"></span>
        <span className="border-anim border-bottom"></span>

        <style jsx>{`
          .card-container {
            position: relative;
            overflow: hidden;
            transition: box-shadow 0.4s ease;
          }

          .card-container:hover {
            box-shadow: 0 0 15px 3px rgba(102, 65, 252, 0.55); 
          }

          .border-anim {
            position: absolute;
            background: linear-gradient(to bottom, #6641FC, #601393);
            transition: transform 0.4s ease;
          }

          .border-left,
          .border-right {
            width: 4px;
            height: 100%;
            top: 0;
            transform: scaleY(0);
          }

          .border-left {
            left: 0;
            transform-origin: top;
          }

          .border-right {
            right: 0;
            transform-origin: bottom;
          }

          .border-bottom {
            height: 4px;
            width: 100%;
            bottom: 0;
            left: 0;
            background: linear-gradient(to right, #6641FC, #601393);
            transform: scaleX(0);
            transform-origin: left;
          }

          .card-container:hover .border-left {
            transform: scaleY(1);
          }

          .card-container:hover .border-right {
            transform: scaleY(1);
          }

          .card-container:hover .border-bottom {
            transform: scaleX(1);
          }
        `}</style>
      </div>
    </div>
  );
};

export default Card;
