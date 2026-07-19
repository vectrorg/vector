"use client";

import React, { useRef } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import MembersDetails from './ui/MemberDetails';
import design from "./ui/memberData/designTeam/data.json";
import './style/carousel.css';
import './style/customBullet.css';
// import { Sparkles } from '@/frontend/app/components/ui/Sparkles';

function TeamMembers() {
    const scrollContainerRef = useRef(null);

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return (`<span class="custom-pagination-bullet ${className}">Design Team</span>`);
        },
    };

    return (
        <div className='bg-black overflow-x-hidden'>
            <div className="relative w-full text-center py-8 bg-black mb-[6rem]">
                <div className="relative flex items-center justify-center">
                    <div
                        className="absolute w-[10rem] h-[5rem] rounded-full blur-[4rem] z-0 mt-10"
                        style={{
                            background: "radial-gradient(circle at center, #A359FF, #351A59)",
                        }}
                    />
                    <p className="relative z-10 font-semibold text-4xl md:text-6xl text-white px-8 mt-[2rem]">
                        Team
                    </p>
                </div>
            </div>
            <div ref={scrollContainerRef} className='relative w-full bg-[black] overflow-auto '>
                <Swiper
                    className='w-full h-full overflow-y-hidden'
                    modules={[Autoplay, Pagination]}
                    spaceBetween={100}
                    pagination={pagination}
                    slidesPerView={1}
                    autoHeight={true}
                >
                    <SwiperSlide>
                        <MembersDetails data={design} team="Design Team" />
                    </SwiperSlide>
                </Swiper>
                <div className="absolute bottom-0 left-0 w-full flex justify-center mb-4">
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
    );
}

export default TeamMembers;