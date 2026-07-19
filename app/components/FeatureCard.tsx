'use client';

import React from 'react';
import { Outfit } from 'next/font/google';
import dynamic from 'next/dynamic';
import { Sparkles } from './ui/Sparkles';
import { AnimateOnScroll } from './ui/AnimateOnScroll';

const Focus = dynamic(() => import('./3D-models/Focus'), { ssr: false });
const LeaderBoard = dynamic(() => import('./3D-models/LeaderBoard'), { ssr: false });
const Creators = dynamic(() => import('./3D-models/Creators'), { ssr: false });
const Community2 = dynamic(() => import('./3D-models/Community2'), { ssr: false });

const outfitFont = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

interface FeatureBlockProps {
  title: string;
  subtitle: string;
  description: string;
  reversed?: boolean;
  bottomText: string;
  model: React.ReactNode;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, subtitle, description, reversed = false, bottomText, model }) => {
  return (
    <div
      className={`relative h-150 m-5 p-5 bg-black/60 flex flex-row ${
          reversed ? 'flex-row-reverse' : ''
        } justify-between text-white rounded-2xl z-10 my-5`}
    >
      <div className="flex items-center relative w-1/4 justify-center">
        <div
          className="absolute w-[7rem] h-[30rem] rounded-full z-0 blur-[4rem]"
          style={{ background: 'radial-gradient(circle at right, #A359FF, #351A59)' }}
        />
        {model}
      </div>
      <div className={`flex flex-col text-wrap p-10mb-[2rem]  ${reversed ? 'mr-[3rem]' : 'ml-[3rem]'} w-[40rem] mt-[2rem]`}>
        <p className={`${outfitFont.className} text-[3.5rem] text-left font-bold`}>
          {title}
        </p>
        <p className={`${outfitFont.className} text-[1.7rem] mb-[1.5rem] text-left mt-[1rem] text-gray-200`}>
          {subtitle}
        </p>
        <p className={`${outfitFont.className} text-[1.3rem] mb-[2.5rem] text-left`}>
          {description}
        </p>
        <p className={`${outfitFont.className} text-[1.3rem] text-left`} style={{ color: '#F0A4DD' }}>
          {bottomText}
        </p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center w-full overflow-hidden">
      <Sparkles
        className="absolute inset-0 w-full h-full z-0"
        density={200}
        speed={1}
        size={2}
        opacity={0.6}
        color="#ffffff"
        background="transparent"
      />
      <AnimateOnScroll>
        <FeatureBlock
          title="Focus Mode"
          subtitle="Lock In. Zone Out. Get It Done"
          description="Ever started a study session, only to find yourself scrolling through your phone 10 minutes later? Vectr shuts the distractions down—so you can finally sit, study, and actually get things done. No more “just five more minutes” on social media. Just focus, locked in."
          bottomText="Distractions Won’t Even Stand a Chance"
          model={<Focus />}
        />

        <FeatureBlock
          title="Peer Study Leaderboard"
          subtitle="Climb the Leaderboard. Beat Your Friends. Stay on Top"
          description="Studying alone is tough, but let's be real—beating your friends makes it fun. The Peer Study Leaderboard turns your focus time into a game, where every minute counts and every session pushes you ahead. Compete, rank up, and stay accountable. You're not just studying anymore—you’re winning."
          reversed
          bottomText="Your Friends Are Your Competition"
          model={<LeaderBoard />}
        />

        <FeatureBlock
          title="Creator Channels"
          subtitle="Own Your Content. Reach More Students"
          description="You shouldn't have to fight algorithms to reach your students. With Creator Channels, you finally get the control you deserve—a structured, distraction-free space to share knowledge, grow your audience, and monetize effortlessly. No more hidden content, no engagement traps—just you, your students, and the impact you’re meant to make."
          bottomText="No Algorithms. No Barriers. Just Teaching"
          model={<Creators />}
        />

        <FeatureBlock
          title="Communities"
          subtitle='Tired of "PeeDablu vs Pogi" Shitposts on JEENEETards?'
          description="Sorry, we're not that different. But with Vectr's in-app communities, your posts—whether doubts or shitposts—end up in the right place. Study, interact, and stay accountable without the chaos."
          reversed
          bottomText="Same Reddit-Like Communities, Just More Organized."
          model={<Community2 />}
        />
      </AnimateOnScroll>
    </div>
  );
};

export default Features;
