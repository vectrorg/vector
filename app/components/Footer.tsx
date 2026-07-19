import React from 'react'
import footerBg from '../../assets/footer_bg.webp';
import Image from 'next/image';
import logo from '../../assets/logo.webp';
import { Outfit } from 'next/font/google';
import { Instagram, Linkedin } from 'lucide-react';
import { RiRedditFill } from 'react-icons/ri';
import Link from 'next/link';

const outfitFont = Outfit({
  variable: '--font-outfit',
  subsets: ["latin"],
});
const Footer = () => {
  return (
    <div className='w-full bg-cover bg-center bg-no-repeat flex flex-col sm:flex-row pr-0 sm:pr-[2rem] pl-0 sm:pl-[5rem] pt-[1rem] pb-[1rem] items-center justify-between'
      style={{ backgroundImage: `url(${footerBg.src})` }}>
      <div className='flex flex-col items-center gap-[2rem]'>
        <div className='flex flex-row items-center gap-[1rem]'>
          <Image
            src={logo}
            alt="Logo"
            className="w-[5rem] transition duration-150 ease-in hover:drop-shadow-[0_0_15px_theme('colors.purple.500')] rounded-[1rem]"
          />
          <Link
            href="/"
            className={`group tracking-widest text-[1.5rem] font-bold text-white transition-all duration-300 ${outfitFont.className} 
              hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.3)]`}
          >
            <span className="group-hover:text-purple-500 transition-colors duration-300">
              Vectr
            </span>
            <span className="text-purple-500 group-hover:text-white transition-colors duration-300">
              .
            </span>
          </Link>
        </div>

        <div className='flex flex-row gap-[1rem] mb-5'>
          <a href="https://www.reddit.com/r/Vectr_co_in" target="_blank" rel="noopener noreferrer">
            <RiRedditFill className='text-white hover:cursor-pointer hover:text-orange-500 w-[1.5rem] h-[1.5rem]' />
          </a>
          <a href='https://www.linkedin.com/company/vectrs' target="_blank" rel="noopener noreferrer">
            <Linkedin className='text-white hover:cursor-pointer hover:text-blue-500' />
          </a>
          <a href="https://www.instagram.com/vectr.productivity" target="_blank" rel="noopener noreferrer">
            <Instagram className='text-white hover:cursor-pointer hover:text-pink-500' />
          </a>
        </div>
      </div>

      <div className='flex flex-row gap-[1.25rem] sm:gap-[10rem] max-sm:w-screen'>
        <div className='flex flex-col gap-[0.5rem] sm:gap-[1rem]'>
          <Link href="/for-students" className={`text-white hover:cursor-pointer hover:text-purple-500 ${outfitFont.className}`}>Features</Link>

          {/* <Link href="/waitlist" target="_blank" rel="noopener noreferrer" className={`text-white hover:cursor-pointer hover:text-purple-500 ${outfitFont.className}`}>Waitlist</Link> */}

          <Link href="/privacy" className={`text-white hover:cursor-pointer hover:text-purple-500 ${outfitFont.className}`}>Privacy & Policy</Link>

          <Link href="/delete-account" className={`text-white hover:cursor-pointer hover:text-purple-500 ${outfitFont.className}`}>Delete Account</Link>
        </div>

        <div className='flex flex-col gap-[0.5rem] sm:gap-[1rem]]'>
          {/* <Link href="/our-team" className={`text-white hover:cursor-pointer hover:text-purple-500 ${outfitFont.className}`}>Our Team</Link> */}
          <Link href="/for-students" className={`text-white hover:cursor-pointer hover:text-purple-500 ${outfitFont.className}`}>For Students</Link>
          <Link href="/for-creators" className={`text-white hover:cursor-pointer hover:text-purple-500 ${outfitFont.className}`}>For Creators</Link>
        </div>
        <div className='flex flex-col gap-[0.5rem] sm:gap-[1rem]]'>
          <p className={`text-[#F0A4DD] font-bold ${outfitFont.className} text-right`}>Contact us</p>
          <a className={`text-[#F0A4DD] hover:cursor-pointer  ${outfitFont.className} text-right`}
            href='mailto:hello@vectr.com'>Email: hello@vectr.com</a>
          <a className={`text-[#F0A4DD] hover:cursor-pointer  ${outfitFont.className} text-right`} href='tel:+91 7898859164'>Phone: +91 78988 59164</a>
        </div>
      </div>
      {/* <span className="block mt-40 md:text-center text-white px-6">
          <p>
            Copyright &copy; {new Date().getFullYear()} Vectr. All rights reserved.
          </p>
        </span> */}
    </div>
  )
}

export default Footer
