'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import {Merriweather} from 'next/font/google'
import { Lobster } from 'next/font/google';

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
});

const merriweather = Merriweather({ subsets: ['latin'], weight: ['300'] });

function Hero() {
  return (
    <section className="hero relative min-h-[100vh] w-full px-4 lg:px-8 overflow-hidden ">


      {/* 🔤 Main Content */}
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-7xl mx-auto z-20 relative ">
        {/* 🖼 Image */}
        <motion.div className="w-full lg:w-1/2 flex flex-col justify-center max-w-[800px] lg:max-w-none lg:pl-8 z-20"
          initial={{ opacity: 0, scale: 0}}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.5 }}
        
        >
          <Image
            src="/images/media-hero.gif"
            className="w-full h-auto object-contain rounded-lg shadow-2xl"
            width={1800}
            height={1800}
            alt="Hero welcome image"
            priority
          />
        </motion.div>

        {/* 📃 Text & Form */}
        <div className="w-full lg:w-1/2 z-20 text-white drop-shadow-[0_1px_3px_rgba(255,255,255,0.6)]">
          <motion.h1 className={`text-3xl md:text-4xl lg:text-7xl font-bold leading-tight mb-4 text-[#010101] ${lobster.className}`} 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.5 }}
          
          >
            Telling the real story of <motion.span className='' 
              initial={{ color: '#000000'}}
              whileInView={{  color: '#FFB847'}}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.5 }}
            >
                African Banking
              </motion.span>
          </motion.h1>
          <motion.p className={`py-6 text-lg md:text-2xl lg:text-2xl font-semibold text-[#010101] ${merriweather.className}`}  
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.5 }}
          >
            Money, power, and policy. The Big Bank Theory explains what’s shaping African finance and who it’s leaving behind.
          </motion.p>

          {/* 📬 Newsletter Form */}
          <form className='w-full'>
            <h6 className="font-extrabold text-lg mb-1">Newsletter</h6>
            <label className={`font-bold mb-2 inline-block text-yellow-500 text-3xl ${merriweather.className}`}>Start reading the newsletter</label>
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered input-lg bg-white text-black w-full max-w-xs"
              />
              <motion.button className="btn bg-yellow-500 hover:bg-yellow-600 text-black btn-lg ml-2 border-0"
                  whileHover={{
                    backgroundColor: 'black',
                    color: 'white'
                  }}>
                Subscribe
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
