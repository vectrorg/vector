'use client';

import React from 'react';
import { Outfit } from 'next/font/google';
import dynamic from 'next/dynamic';
import { AnimateOnScroll } from '@/app/components/ui/AnimateOnScroll';
import { Sparkles } from '@/app/components/ui/Sparkles';
import tasks from '../../../assets/img2D/task.webp';
import ai from '../../../assets/img2D/ai_assisstant.webp';
import community from '../../../assets/img2D/communities.webp';
import creator from '../../../assets/img2D/creator.webp';
import chat from '../../../assets/img2D/chats.webp';
import leader from '../../../assets/img2D/leaderboard.webp';


const Focus = dynamic(() => import('../../components/3D-models/Focus'), { ssr: false });

const LeaderBoard = dynamic(() => import('../../components/3D-models/LeaderBoard'), { ssr: false });

const Creators = dynamic(() => import('../../components/3D-models/Creators'), { ssr: false });

const Community2 = dynamic(() => import('../../components/3D-models/Community2'), { ssr: false });

const Chat = dynamic(() => import('../../components/3D-models/Chat'), { ssr: false });

const Chatbot = dynamic(() => import('../../components/3D-models/Chatbot'), { ssr: false });

const Community1 = dynamic(() => import('../../components/3D-models/Community1'), { ssr: false });


const outfitFont = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

interface FeatureBlockProps {
  title: string;
  subtitle: string;
  description: string;
  reversed?: boolean;
  model?: React.ReactNode;
  image: string;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, subtitle, description, reversed = false, model, image }) => {
  return (
    <div
      className={`h-auto mx-5 p-5 bg-black/60 flex flex-col sm:flex-row justify-between text-white rounded-2xl z-10 my-5 ${reversed ? 'sm:flex-row-reverse' : ''
        }`}
    >

      <div className="relative flex items-center justify-center w-full sm:w-1/2 mb-6 sm:mb-0">
        <div
          className="absolute w-[7rem] h-[30rem] rounded-full z-0 blur-[4rem] hidden sm:block"
          style={{ background: 'radial-gradient(circle at right, #A359FF, #351A59)' }}
        />
        {/* 3D model */}
        <div className="hidden sm:block">
          {model}
        </div>

        {/* Static image */}
        <div className="block sm:hidden">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
      </div>

      <div
        className={`flex flex-col text-wrap p-4 w-full sm:w-[40rem] mt-0 sm:mt-[2rem] ${reversed ? 'sm:mr-[3rem]' : 'sm:ml-[3rem]'}`}
      >

        <p className={`${outfitFont.className} text-[3rem] text-center font-bold`}>{title}</p>
        <p className={`${outfitFont.className} text-[1.7rem] mb-[1.5rem] text-center mt-[1rem] text-gray-200`}>
          {subtitle}
        </p>
        <p
          className={`${outfitFont.className} text-[1.8rem] mb-[2rem] text-center font-light`}
          style={{ color: '#F0A4DD' }}
        >
          {description}
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
          subtitle="Block distractions. Set daily targets. Hit your flow state."
          description="Study, uninterrupted."
          model={<Focus />}
          image={tasks.src}
        />

        <FeatureBlock
          title="Peer Leaderboard"
          subtitle="Rank with friends, track real-time progress, and stay accountable."
          description="Turn focus into friendly competition."
          reversed
          model={<LeaderBoard />}
          image={leader.src}
        />

        <FeatureBlock
          title="AI Doubt Solver"
          subtitle="Instant solutions to questions—Just type and upload."
          description="Ask once. Get answers fast."
          model={<Chatbot />}
          image={ai.src}
        />

        <FeatureBlock
          title="In-App YouTube"
          subtitle="No shorts. No distractions. Everything is now in the ecosystem."
          description="Only the videos that help."
          reversed
          model={<Creators />}
          image={creator.src}
        />

        <FeatureBlock
          title="Chats"
          subtitle="DMs, groups, discussions—Your online social life without getting Distracted"
          description="Stay social. Stay focused."
          model={<Chat />}
          image={chat.src}
        />

        <FeatureBlock
          title="Shared by Learners. For Learners."
          subtitle="Get notes, resources, and cheat sheets shared by students like you—curated by the community."
          description="Your shortcut to the right material, without endless scrolling."
          reversed
          model={<Community1 />}
          image={community.src}
        />

        <FeatureBlock
          title="Stay In The Loop. Stay Connected."
          subtitle="Community-driven updates, campus happenings, and group highlights—right where you study."
          description="No more FOMO. Your space. Your people. Your news."
          model={<Community2 />}
          image={community.src}
        />
      </AnimateOnScroll>

    </div>
  );
};

export default Features;
