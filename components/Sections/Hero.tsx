'use client'
import Image from 'next/image';
// import { motion } from 'framer-motion';



function Hero() {
  return (
    <section className="hero relative min-h-[100vh] w-full px-4 lg:px-8 overflow-hidden ">


      {/* 🔤 Main Content */}
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-7xl mx-auto z-20 relative ">
        {/* 🖼 Image */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-[800px] lg:max-w-none lg:pl-8 z-20">
          <Image
            src="/images/media-hero.gif"
            className="w-full h-auto object-contain rounded-lg shadow-2xl"
            width={1800}
            height={1800}
            alt="Hero welcome image"
            priority
          />
        </div>

        {/* 📃 Text & Form */}
        <div className="w-full lg:w-1/2 z-20 text-white drop-shadow-[0_1px_3px_rgba(255,255,255,0.6)]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight uppercase mb-4 text-[#010101]">
            Telling the real story of African banking
          </h1>
          <p className="py-6 text-lg md:text-2xl lg:text-2xl font-semibold text-[#010101]">
            Money, power, and policy. The Big Bank Theory explains what’s shaping African finance and who it’s leaving behind.
          </p>

          {/* 📬 Newsletter Form */}
          <form className='w-full'>
            <h6 className="font-extrabold text-lg mb-1">Newsletter</h6>
            <label className='font-bold mb-2 inline-block text-[#F6C103] text-3xl'>Start reading the newsletter</label>
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered input-lg bg-white text-black w-full max-w-xs"
              />
              <button className="btn bg-yellow-500 hover:bg-yellow-600 text-black btn-lg ml-2">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
