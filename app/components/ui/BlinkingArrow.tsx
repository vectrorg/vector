'use client';

import { ChevronDown } from 'lucide-react';

const BlinkingArrow = () => {
  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <button
        onClick={handleClick}
        className="animate-bounce  text-purple-800 hover:text-purple-500 transition"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </button>
    </div>
  );
};

export default BlinkingArrow;
