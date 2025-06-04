'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({ subsets: ['latin'], weight: ['300'] });

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // delay between child animations
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Hero() {
  return (
    <section className="hero relative min-h-screen w-full px-4 overflow-hidden">
      <motion.div
        className="hero-content flex-col-reverse lg:flex-row-reverse w-full max-w-7xl mx-auto z-20 relative mt-[10vh]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* 🖼 Image */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col py-10 justify-center items-center max-w-[800px] bg-[#FFDE59] rounded-full will-change-transform"
          variants={scaleUp}
        >
          <Image
            src="/images/hero-noback.webp"
            className="w-full h-auto object-contain mx-auto rounded-lg"
            width={300}
            height={300}
            alt="Hero welcome image"
            priority={false}
          />
        </motion.div>

        {/* 📃 Text & CTA */}
        <motion.div
          className="w-full lg:w-1/2 z-20 text-white drop-shadow-[0_1px_3px_rgba(255,255,255,0.6)]"
          variants={fadeUp}
        >
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold leading-tight mb-4 text-[#010101]">
            Telling the real story of{' '}
            <span className="text-[#FFDE59]">African Banking</span>
          </h1>

          <p className="py-6 text-lg md:text-2xl font-semibold text-[#010101]">
            Money, power, and policy. The Big Bank Theory explains what’s shaping African finance and who it’s leaving behind.
          </p>

          <label className={`font-bold mb-4 inline-block text-yellow-500 text-3xl ${merriweather.className}`}>
            Start reading the newsletter
          </label>

          <motion.button
            className="btn bg-[#FFFC00] btn-lg border-0 ml-2"
            whileHover={{ backgroundColor: 'black', color: 'white' }}
          >
            Subscribe
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
