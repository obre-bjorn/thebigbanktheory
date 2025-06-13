'use client';

import React, { useState, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const partnerships = [
  {
    title: 'Sponsorships',
    description:
      'Feature your brand in one of the most trusted newsletters on African banking. Only high-quality, high-alignment partnerships.',
  },
  {
    title: 'Co-branded editorial',
    description:
      'Team up on a custom editorial series or special report. Your mission, my voice, our audience.',
  },
  {
    title: 'Insight and research collaborations',
    description:
      'The Big Bank Theory reaches bankers, investors, fintech execs, policy professionals, and curious readers in Nigeria, Kenya, Ghana, South Africa, the UK, and the US. They are global, influential, and not here for fluff. Commission sharp, story-led research or reporting that helps shape the narrative around African finance.',
  },
];

type AccordionItemProps = {
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
};

const AccordionItem: FC<AccordionItemProps> = ({ title, description, isOpen, onToggle }) => {
  return (
    <motion.div
      layout
      initial={{ borderRadius: 12 }}
      className={`bg-gradient-to-r from-white to-gray-50 shadow-md rounded-xl overflow-hidden cursor-pointer ${
        isOpen ? 'ring-4 ring-yellow-400' : 'ring-0'
      }`}
    >
      <motion.button
        layout
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 focus:outline-none"
        whileHover={{ backgroundColor: '#fef3c7' }} // light yellow
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <motion.h3 layout className="text-lg sm:text-xl font-semibold text-gray-900">
          {title}
        </motion.h3>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-yellow-500 text-3xl select-none"
          aria-hidden="true"
        >
          +
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: 10 },
              collapsed: { opacity: 0, height: 0, marginTop: 0 },
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="px-6 pb-6 text-gray-700 text-base sm:text-lg leading-relaxed break-words select-text"
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

type AccordionProps = {
  items: {
    title: string;
    description: string;
  }[];
};

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-xl mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          description={item.description}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

function Partnership() {
  return (
    <section
      id="partnership"
      className="min-h-screen w-full bg-gray-50 mx-auto p-8 flex flex-col justify-center gap-16"
    >
      <div className="flex flex-wrap items-center justify-center gap-16 mb-12 max-w-6xl mx-auto">
        <div className="w-full lg:w-2/5">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Partner with The Big Bank Theory
          </h1>
          <h2 className="text-lg sm:text-2xl mt-6 text-gray-700">
            Reach an audience that’s tuned in to the future of finance in Africa.
          </h2>
        </div>

        <div className="w-full lg:w-2/5">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 mb-6">
            Ways to collaborate
          </h3>
          <Accordion items={partnerships} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
        <p className="text-lg sm:text-2xl text-gray-800 leading-relaxed">
          The Big Bank Theory reaches bankers, investors, fintech execs, policy
          professionals, and curious readers in Nigeria, Kenya, Ghana, South
          Africa, the UK, and the US. They are global, influential, and not here
          for fluff.
        </p>

        <p className="mt-10 text-lg sm:text-2xl font-bold text-black bg-[#FFDE59] p-4 rounded-xl shadow-2xl">
          Interested in working together? Let’s build something bold.
        </p>
      </div>
    </section>
  );
}

export default Partnership;
