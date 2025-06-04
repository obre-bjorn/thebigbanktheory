'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    function onLoad() {
      setAnimateOut(true);
      setTimeout(() => setShow(false), 800);
    }

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="preloader"
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          initial={{ opacity: 1 }}
          animate={animateOut ? { opacity: 0 } : { opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-3">
            <img
              src="/images/logo.webp"
              alt="Logo"
              width={40}
              height={40}
              className="mx-auto pulse-scale"
              style={{ backgroundColor: '#e5e7eb' }} // Tailwind gray-200 fallback bg
            />
            <span className="text-2xl font-bold text-center pulse-color">
              The Big Bank Theory
            </span>
          </div>

          <style>{`
            @keyframes pulseScale {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.05); }
            }
            @keyframes pulseColor {
              0%, 100% { color: black; }
              50% { color: #facc15; }
            }
            .pulse-scale {
              animation: pulseScale 1.2s ease-in-out infinite;
            }
            .pulse-color {
              animation: pulseColor 1.5s ease-in-out infinite;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
