// components/BackToTop.tsx
'use client'; // Required for interactivity

import { useState, useEffect } from 'react';
// import { FaArrowUp } from 'react-icons/fa'; // Using react-icons

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-[#FFDE59] text-black shadow-2xl transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } !hover:bg-blue-300 z-100`}
    >
      {/* <FaArrowUp className="text-xl" /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="hover:scale-110 transition-transform duration-200 hover:fill-blue-500"
      >
        <path d="M12 4l-8 8h5v8h6v-8h5z"/>
      </svg>
    </button>
  );
}