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
    <section
      id="about"
      className="min-h-screen container px-6 py-20 mx-auto flex flex-col items-center justify-center"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-20 w-full">
        {/* Image Section */}
        <motion.div
          className="w-full max-w-[500px] h-auto overflow-hidden rounded-t-[40px] rounded-b-[30px] shadow-2xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/images/me.webp"
            alt="Mercy - The Big Bank Theory"
            width={500}
            height={700}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full max-w-[600px] bg-[#FFDE59] p-10 rounded-t-[80px] rounded-b-[40px] shadow-xl text-black"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Meet the mind behind the movement
          </h1>
          <p className="text-[1.05rem] leading-8 font">
            <strong>Hi, I’m Mercy</strong> — a writer, researcher, and the voice behind <em>The Big Bank Theory</em>.
            <br /><br />
            This newsletter is my answer to a deep obsession: how African banking shapes power, access, and opportunity — and why so few explain it in ways that truly resonate.
            <br /><br />
            By day, I lead marketing at a tech firm, weaving human stories into product strategy. By night (and newsletter mornings), I trace the currents of cash, policy, and promise across the continent’s financial infrastructure.
            <br /><br />
            I’ve spent years writing across Africa’s tech and finance space — strategy decks, editorial reports, brand narratives — but one question kept echoing:
          </p>
        </motion.div>
      </div>

      {/* Quote */}
      <motion.p
        className="mt-20 text-center text-xl lg:text-2xl font-light italic text-gray-800 max-w-5xl px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <span className="text-5xl font-serif text-yellow-500">“</span>
        African banking is one of the most important and under-explained stories in the world.
        <span className="text-5xl font-serif text-yellow-500">”</span>
      </motion.p>
    </section>
  )
}

export default About
