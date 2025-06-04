'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

function About() {
  return (
    <div
      id="about"
      className="min-h-screen container px-4 py-16 mx-auto flex flex-col items-center justify-center"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Image Section */}
        <motion.div
          className="max-w-[600px] w-full lg:h-[700px] overflow-hidden rounded-t-[30px] rounded-b-3xl shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/images/me.webp"
            alt="My photo"
            width={600}
            height={700}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full max-w-[600px] bg-[#FFDE59] p-8 rounded-t-[100%] rounded-b-3xl shadow-xl"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h1 className="text-3xl lg:text-5xl font-bold mb-6">
            Get to know the voice behind the newsletter
          </h1>
          <p className="text-lg leading-7">
            <strong>Hi, I’m Mercy</strong>. I’m a writer, researcher, and the voice behind The Big Bank Theory.
            <br /><br />
            This newsletter was born out of two things: a deep obsession with how banking shapes opportunity in Africa, and a desire to explain it in a way that actually makes sense.
            <br /><br />
            By day, I lead marketing at a tech company, helping build products and narratives that make digital tools more useful, more trusted, and more human.
            <br /><br />
            Before that, I wrote across editorial, strategy, and storytelling for platforms across Africa’s tech and finance space.
            <br /><br />
            But I kept coming back to one question: why is African banking, one of the most important economic stories of our time, still so underreported and poorly explained?
            <br /><br />
            <strong>The Big Bank Theory</strong> is my attempt to change that — following money, policies, and power plays shaping finance across the continent.
            <br /><br />
            If you care about inclusion, innovation, or just want to understand how the system works, you’re in the right place.
            <br /><br />
            Let’s build something smarter.
          </p>
        </motion.div>
      </div>

      {/* Quote */}
      <motion.p
        className="mt-16 text-xl text-center font-light max-w-2xl px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="text-4xl">“</span>
        <i>I believe African banking is one of the most important and under-explained stories in the world.</i>
        <span className="text-4xl">”</span>
      </motion.p>
    </div>
  )
}

export default About
