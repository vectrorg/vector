"use client";
import { ParallaxCard, ParallaxCardContainer } from "react-card-parallax";
import AbhinavImg from '../../../public/profilePics/admin/Abhinav.jpg'
import SaifuddinImg from '../../../public/profilePics/admin/M4.jpg';
import AyusImg from '../../../public/profilePics/admin/ayush.jpg';
import { FaLinkedin } from "react-icons/fa";
// import { Sparkles } from "@/frontend/app/components/ui/Sparkles";

const Founder = () => {
  const founders = [
    {
      name: "Abhinav Pentani",
      role: "",
      description: "Abhinav drives growth, product vision, and investor strategy at Vectr drawing from experience across multiple startups and a sharp eye for user behavior. Big on clean GTM, sharp copy, and meaningful traction.",
      linkedin: "https://www.linkedin.com/in/abhinav-pentani/",
      img: `${AbhinavImg.src}`
    },
    {
      name: "Saifuddin Shaik",
      role: "",
      description: "Saif oversees Vectr's day-to-day ops, community structure, and platform logic. A founder who's as good with people as he is with product workflows and always two steps ahead on execution.",
      linkedin: "https://www.linkedin.com/in/shaik-saifuddin-482947272/",
      img: `${SaifuddinImg.src}`
    },
    {
      name: "Ayus Pathak",
      role: "",
      description: "Ayus is the full-stack mind behind Vectr's code. Leading the app's engineering, he turns ideas into fast, functional product experiences that scale. Calm under pressure, committed to building scalable products.",
      linkedin: "https://www.linkedin.com/in/ayus-pathak/",
      img: `${AyusImg.src}`
    }
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 w-full bg-black mb-[1rem] flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div
            className="absolute w-[10rem] h-[5rem] rounded-full blur-[4rem] z-0"
            style={{
              background: "radial-gradient(circle at center, #A359FF, #351A59)",
            }}
          />
          <p className="relative z-10 font-semibold text-4xl md:text-6xl text-white px-8 mt-[2rem]">
            Founders
          </p>
        </div>
      </div>

      {/* Parallax Cards Container */}
      <ParallaxCardContainer style={{ minHeight: "100vh", backgroundColor: 'black', marginTop:'-6rem'}}>
        {founders.map((founder, index) => (
          <ParallaxCard 
            key={index} 
            color="transparent" 
            rangeMultiplier={0.3} 
            scaleMultiplier={0.07}
          >
            <div className="bg-gradient-to-br from-[#2f1a53] to-[#1c1c48] h-[40rem] sm:h-[32rem] w-full max-w-4xl lg:max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-start rounded-3xl p-6 lg:p-12">
              {/* Image Section */}
              <div className="bg-gradient-to-br from-[#422574] to-[#262663] w-full lg:w-80 h-96 lg:h-[29rem] rounded-3xl p-4 flex flex-col lg:mb-0">
                <img 
                  src={founder.img}
                  className="rounded-xl h-64 lg:h-80 w-full object-cover"
                  alt={`${founder.name} profile`}
                />
                <div className="flex justify-center pb-[2rem] mt-auto">
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-5xl hover:text-blue-400 transition-colors cursor-pointer" />
                  </a>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col lg:ml-12 w-full">
                <h1 className="text-3xl lg:text-5xl font-bold text-left">{founder.name}</h1>
                <h2 className="text-xl lg:text-2xl text-purple-300 mt-2">{founder.role}</h2>
                <p className="text-left text-base lg:text-xl text-gray-300 -mt-0.5 sm:mt-4">
                  {founder.description}
                </p>
              </div>
              
            </div>
          </ParallaxCard>
        ))}
      </ParallaxCardContainer>
    </div>
  );
};

export default Founder;