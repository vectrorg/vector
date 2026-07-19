'use client';

import React from 'react';
import { Outfit } from 'next/font/google';
import dynamic from 'next/dynamic';
import { AnimateOnScroll } from '@/app/components/ui/AnimateOnScroll';
import { Sparkles } from '@/app/components/ui/Sparkles';
import community from '../../../assets/img2D/communities.webp';
import creator from '../../../assets/img2D/creator.webp';

const Creators = dynamic(() => import('../../components/3D-models/Creators'), { ssr: false });

const Community2 = dynamic(() => import('../../components/3D-models/Community2'), { ssr: false });

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
          <img src={image} alt={title} className="w-75% " />
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
          title="Teach Without Limits."
          subtitle="Grow Without Algorithms. Build a following. Share content. Earn as an Educator—on your terms."
          description="Earn as an Educator"
          model={<Creators />}
          image={creator.src}
        />

        <FeatureBlock
          title=" Creator Communities"
          subtitle="Notes, posts, mentorship—inside a distraction-free ecosystem."
          description="Build more than a channel. Build a space."
          reversed
          model={<Community2 />}
          image={community.src}
        />

        <FeatureBlock
          title="Course Marketplace"
          subtitle="No upfront fees. No hidden barriers. Just teach and earn Independently"
          description="Monetization, the way it should be."
          model={<Community1 />}
          image={community.src}
        />

      </AnimateOnScroll>
    </div>
  );
};

export default Features;
