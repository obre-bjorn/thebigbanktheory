'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
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
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://subscribe-forms.beehiiv.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="hero bg-[#FFFFFF] relative min-h-screen w-full px-4 overflow-hidden ">
      <motion.div
        className="hero-content flex-col-reverse lg:flex-row-reverse w-full max-w-7xl mx-auto z-20 relative mt-[10vh]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center items-center max-w-[800px] rounded-full will-change-transform"
          variants={scaleUp}
        >
          <Image
            src="/images/hero_image_bank.webp"
            className="w-full shadow-xl object-contain mx-auto rounded-lg"
            width={500}
            height={500}
            alt="Hero welcome image"
            priority={false}
          />
        </motion.div>

        {/* Text & CTA */}
        <motion.div
          className="w-full lg:w-1/2 z-20 text-white drop-shadow-[0_1px_3px_rgba(255,255,255,0.6)]"
          variants={fadeUp}
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mt-10 mb-4 text-[#010101]">
            Telling the real story of <span className="">African Banking</span>
          </h1>

          <p className="py-6 text-lg md:text-2xl text-[#010101]">
            Money, power, and policy. The Big Bank Theory explains what’s shaping African finance and who it’s leaving behind.
          </p>

          {/* <motion.button
            className="btn bg-[#FFDE59] btn-lg border-0 w-full rounded-xl"
            whileHover={{ backgroundColor: 'black', color: 'white' }}
          >
            <a href="https://the-big-bank-theory.beehiiv.com/" target="_blank" rel="noopener noreferrer">
              Subscribe
            </a>
          </motion.button> */}

      <div className="w-full">
        <iframe
          src="https://subscribe-forms.beehiiv.com/3f3a20ea-54a5-447a-9f54-1bdfc0e19586"
          className="w-full max-w-3xl "
          frameBorder="0"
          scrolling="no"
          // style={{
          //   width: '100%',
          //   height: '320px',
          //   // margin: '0 auto',
          //   borderRadius: '8px',
          //   backgroundColor: 'transparent',
          //   boxShadow: '0 0 #0000',
          // }}
        />
      </div>
        </motion.div>
      </motion.div>

      {/* ✅ Embedded Beehiiv form */}
      
    </section>
  );
}

export default Hero;
