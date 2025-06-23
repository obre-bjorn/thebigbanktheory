'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Services() {

  const services = [
   
    {
      title: "Research and insight briefs",
      src: "/images/research.webp",
      description: "Custom, digestible research on African banking trends, policies, or sectors. Built for busy execs and smart teams."
    },
    {
      title: "Brand storytelling and content design",
      src: "/images/story.webp",
      description: "Especially for fintechs, digital banks, and mission-driven orgs. I craft narratives that inform, inspire, and move people to act."
    },
    {
      title: "Speaking and moderation",
      src: "/images/speak.webp",
      description: "I speak and host conversations on financial inclusion, digital infrastructure, gender gaps, and the future of African banking"
    }
  ];

  // Animation variants for the cards
  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 50
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 15px 25px rgba(255, 222, 89, 0.6)", // yellow glow
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="services" className="py-20 px-4 bg-white container mx-auto flex flex-col">

      <h1 className="text-4xl md:text-5xl mb-16 font-extrabold text-center text-gray-900">Work With Me</h1>

      <div className="mb-16 max-w-4xl mx-auto text-center">
        <h2 className='text-2xl md:text-4xl font-semibold mb-3 text-gray-800'>Smart storytelling for bold ideas</h2>
        <h3 className='text-lg md:text-2xl text-gray-600 leading-relaxed'>
          I help brands, platforms, and leaders in finance and tech bring clarity to complex ideas.<br /> {`Here's how:`}
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative max-w-xs bg-white rounded-3xl flex flex-col items-center overflow-hidden"
            style={{borderTop: '8px solid #ffde59'}}
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
        >
            {/* Circular Image container */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden mt-8 shadow-lg ring-4 ring-yellow-400">
                <Image
                    src={service.src}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={true}
                />
            </div>

            {/* Text Content */}
            <div className="p-6 text-center">
              <h2 className="text-xl md:text-xl font-semibold text-gray-900 mb-3">{service.title}</h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">{service.description}</p>
            </div>

            {/* Bottom decorative shape */}
            <div className="absolute bottom-0 left-0 w-full h-6 bg-yellow-100 rounded-b-3xl hidden sm:block"></div>
          </motion.div>
        ))}
      </div>

      <h2 className='mt-20 text-center text-2xl md:text-3xl font-semibold text-gray-800'>Got a project in mind? Let’s talk.</h2>

    </section>
  )
}

export default Services
