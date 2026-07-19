"use client";

import React from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";
import communityBg from "../../../assets/our_team_bg.webp";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaDiscord,
  FaLinkedin,
  FaReddit,
  FaXTwitter,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const socials = [
  {
    name: "Discord",
    description:
      "Your prep tribe lives here. Pomodoro battles, voice rooms, peer groups & late-night grind squads.",
    link: "https://discord.gg/eJDRM96Zpy",
    icon: <FaDiscord className="text-indigo-500" />,
    color: "hover:ring-indigo-400 hover:bg-indigo-900/10",
  },
  {
    name: "WhatsApp",
    description:
      "Group chats that actually help. Join like-minded aspirants, live updates & peer study links.",
    link: "https://chat.whatsapp.com/CXQEG16AXDhEaEAQXzxs1X",
    icon: <FaWhatsapp className="text-green-400" />,
    color: "hover:ring-green-400 hover:bg-green-900/10",
  },
  {
    name: "Telegram",
    description:
      "Join the inner circle - exam alerts, peer network & secret study sprints, all in real-time.",
    link: "https://t.me/+D3HurpFKi2QyYzI1",
    icon: <FaTelegram className="text-sky-400" />,
    color: "hover:ring-sky-400 hover:bg-sky-900/10",
  },
  {
    name: "X (Twitter)",
    description:
      "Opinions, prep culture, and all the nerd rage in 280 characters or less.",
    link: "https://twitter.com/Vectr_co_in",
    icon: <FaXTwitter className="text-white" />,
    color: "hover:ring-gray-300 hover:bg-gray-800/10",
  },
  {
    name: "Reddit",
    description:
      "Unfiltered prep talk, honest reviews, and study banter. All rage and ZERO noise.",
    link: "https://www.reddit.com/r/Vectr_co_in",
    icon: <FaReddit className="text-red-500" />,
    color: "hover:ring-red-500 hover:bg-red-900/10",
  },
  {
    name: "Instagram",
    description:
      "Daily prep dopamine, study memes & everything on how others like you are getting it done.",
    link: "https://www.instagram.com/vectr.productivity",
    icon: <FaInstagram className="text-pink-500" />,
    color: "hover:ring-pink-400 hover:bg-pink-900/10",
  },
  {
    name: "LinkedIn",
    description:
      "Interested in the startup, internship ops, or what we're building behind the scenes? Join here.",
    link: "https://www.linkedin.com/company/vectrs",
    icon: <FaLinkedin className="text-blue-500" />,
    color: "hover:ring-blue-400 hover:bg-blue-900/10",
  },
];

const Cards = () => {
  return (
    <div className="relative min-h-screen bg-black text-white pb-15">
      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          src={communityBg}
          alt="Community Banner"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-5xl md:text-6xl font-bold mb-4 ${outfitFont.className} bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent`}
          >
            Join the Vectr Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl max-w-3xl ${outfitFont.className} text-zinc-300`}
          >
            Connect with thousands of aspirants across platforms. Your study tribe awaits.
          </motion.p>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="relative max-w-7xl mx-auto px-5 -mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {socials.map((social, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative h-full block rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 p-6 flex flex-col space-y-4 transition-all duration-300 hover:ring-2 ${social.color} hover:shadow-xl`}
                >
                  {/* Icon + Title */}
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 transition-all">
                      <div className="text-2xl">{social.icon}</div>
                    </div>
                    <div>
                      <h2
                        className={`text-xl font-semibold tracking-wide ${outfitFont.className}`}
                      >
                        {social.name}
                      </h2>
                      <div className="w-8 h-0.5 bg-current mt-1 opacity-70"></div>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-zinc-300 text-sm leading-relaxed ${outfitFont.className}`}
                  >
                    {social.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto pt-2">
                    <div className="inline-flex items-center text-sm font-medium text-current opacity-80 hover:opacity-100 transition-opacity">
                      Join now
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;