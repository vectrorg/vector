"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/logo.webp';
import { Outfit } from 'next/font/google';
import { FiMenu, FiX } from 'react-icons/fi';
import ProceedPopup from "./ProceedPopup"; // import the popup component

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProceedPopup, setShowProceedPopup] = useState<boolean>(false);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          setShowNavbar(false);
          setMobileMenuOpen(false);
        } else {
          setShowNavbar(true);
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full h-20 bg-transparent backdrop-blur-md transition-transform duration-600 ${showNavbar ? 'transform-none' : '-translate-y-full'
          }`}
      >
        <div className="h-full flex items-center">
          <div className="w-full flex mx-auto px-5">

            {/* Logo and Name */}
            <div className="flex items-center space-x-2 px-2.5 group">
              <Image
                src={Logo}
                alt="Vectr Logo"
                width={48}
                height={48}
                className="rounded-xl transition-all duration-300 group-hover:scale-120"
              />
              <Link
                href="/"
                className={`tracking-widest text-[1.5rem] font-bold text-white hover:text-purple-500 transition-all duration-300 ${outfitFont.className} 
                  hover:text-[1.6rem] hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.3)]`}
              >
                Vectr<span className={`text-purple-500 group-hover:text-white transition-colors duration-200 ${outfitFont.className}`}>.</span>
              </Link>
            </div>
            <div className="flex-1"></div>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-7">
              <nav className="hidden md:flex items-center">
                <div className="flex space-x-7 h-[1.2rem] items-center">
                  <Link
                    href="/"
                    className={`text-white hover:text-purple-500 transition-all duration-300 text-lg ${outfitFont.className} 
                      hover:font-semibold hover:text-[1.2rem] hover:drop-shadow-[0_5px_12px_rgba(99,102,241,0.3)]justify-end`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/our-team"
                    className={`text-white hover:text-purple-500 transition-all duration-300 text-lg ${outfitFont.className} 
                      hover:font-semibold hover:text-[1.2rem] hover:drop-shadow-[0_8px_12px_rgba(99,102,241,0.3)]`}
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/for-students"
                    className={`text-white hover:text-purple-500 transition-all duration-300 text-lg ${outfitFont.className} 
                      hover:font-semibold hover:text-[1.2rem] hover:drop-shadow-[0_8px_12px_rgba(99,102,241,0.3)]`}
                  >
                    For Students
                  </Link>
                  <Link
                    href="/for-creators"
                    className={`text-white hover:text-purple-500 transition-all duration-300 text-lg ${outfitFont.className} 
                      hover:font-semibold hover:text-[1.2rem] hover:drop-shadow-[0_8px_12px_rgba(99,102,241,0.3)]`}
                  >
                    For Creators
                  </Link>
                  <Link
                    href="/community"
                    className={`text-white hover:text-purple-500 transition-all duration-300 text-lg ${outfitFont.className} 
                      hover:font-semibold hover:text-[1.2rem] hover:drop-shadow-[0_8px_12px_rgba(99,102,241,0.3)]`}
                  >
                    Our Communities
                  </Link>
                  <Link
                    href="/careers"
                    className={`text-white hover:text-purple-500 transition-all duration-300 text-lg ${outfitFont.className} 
                      hover:font-semibold hover:text-[1.2rem] hover:drop-shadow-[0_8px_12px_rgba(99,102,241,0.3)]`}
                  >
                    Careers
                  </Link>
                </div>
              </nav>

              <div className="flex items-center group">
                <div
                  onClick={() => setShowProceedPopup(true)}
                  className={`bg-white text-black px-4 py-2 rounded-lg transition-all duration-300 font-medium ${outfitFont.className} 
                    hover:shadow-lg hover:text-[1.05rem] hover:font-semibold hover:text-purple-900`}
                >
                  Download
                </div>
              </div>


              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white p-2 focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed top-20 left-0 w-full bg-transparent backdrop-blur-md z-40 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center py-4 space-y-6">
          <Link
            href="/"
            className={`text-white hover:text-purple-500 transition-all duration-300 text-lg ${outfitFont.className} 
              hover:font-semibold`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/our-team"
            className={`text-white hover:text-purple-500 transition-all duration-300 text-lg ${outfitFont.className} 
              hover:font-semibold`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Team
          </Link>
          <Link
            href="/for-students"
            className={`text-white hover:text-purple-500 transition-all duration-300 text-lg ${outfitFont.className} 
              hover:font-semibold`}
            onClick={() => setMobileMenuOpen(false)}
          >
            For Students
          </Link>
          <Link
            href="/for-creators"
            className={`text-white hover:text-purple-500 transition-all duration-300 text-lg ${outfitFont.className} 
              hover:font-semibold`}
            onClick={() => setMobileMenuOpen(false)}
          >
            For Creators
          </Link>

          <Link
            href="/community"
            className={`text-white hover:text-purple-500 transition-all duration-300 text-lg ${outfitFont.className} 
              hover:font-semibold`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Communities
          </Link>
          <Link
            href="/careers"
            className={`text-white hover:text-purple-500 transition-all duration-300 text-lg ${outfitFont.className} 
                      hover:font-semibold hover:text-[1.2rem] hover:drop-shadow-[0_8px_12px_rgba(99,102,241,0.3)]`}
          >
            Careers
          </Link>
          {/* <Link 
            href="/waitlist" 
            className={`bg-white text-black px-6 py-2 rounded-lg transition-all duration-300 font-medium ${outfitFont.className} 
              hover:shadow-lg hover:font-semibold hover:text-purple-900 mt-2`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Waitlist
          </Link> */}
          <div onClick={() => setShowProceedPopup(true)}
            className={`bg-white text-black px-6 py-2 rounded-lg transition-all duration-300 font-medium ${outfitFont.className} 
              hover:shadow-lg hover:font-semibold hover:text-purple-900 mt-2`}
          >
            Download
          </div>
        </nav>
      </div>
      <ProceedPopup
        show={showProceedPopup}
        onClose={() => setShowProceedPopup(false)}
      />
    </>
  );
};

export default Header;