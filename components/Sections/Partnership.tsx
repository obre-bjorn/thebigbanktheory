'use client'
import React, { useState, FC } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const partnerships =  [
    {
        title: 'Sponsorships',
        description: 'Feature your brand in one of the most trusted newsletters on African banking. Only high-quality, high-alignment partnerships.'
    },

    {
        title: 'Co-branded editorial',
        description: 'Team up on a custom editorial series or special report. Your mission, my voice, our audience.'
    },

    {
        title: 'Insight and research collaborations',
        description: 'The Big Bank Theory reaches bankers, investors, fintech execs, policy professionals, and curious readers in Nigeria, Kenya, Ghana, South Africa, the UK, and the US.They are global, influential, and not here for fluff.Commission sharp, story-led research or reporting that helps shape the narrative around African finance.'
    },

]

type AccordionItemProps = {
    title: string;
    description: string;
    isOpen: boolean;
    onToggle: () => void;
  };
  
  const AccordionItem: FC<AccordionItemProps> = ({
    title,
    description,
    isOpen,
    onToggle,
  }) => (
    <div className="border-b">
      <motion.button
        className="w-full text-left p-4 flex justify-between items-center focus:outline-none pointer"
        onClick={onToggle}
        whileHover={{
          backgroundColor:'yellow',
          color:'black'
        }}
      >
        <span className="text-2xl font-medium" >{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </motion.button>
  
      {/* Animate presence of the dropdown */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden px-4 pb-2 text-gray-700 text-xl"
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
  
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
      <div className="w-full h-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
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

      <section id= "partnerships" className="min-h-screen w-full  bg-gray-100 mx-auto p-4 flex flex-col justify-center  gap-10">


          <div className="flex flex-wrap  items-center justify-center gap-10 mb-10">

              <div className='w-full lg:w-[40%] '>

                  <h1 className='text-6xl font-bold'>Partner with The Big Bank Theory</h1>

                  <h2 className='text-2xl mt-5'>Reach an audience that’s tuned in to the future of finance in Africa.</h2>

              </div>


              <div className="w-full lg:w-[40%] flex flex-col gap-8 justify-center ">

                  <h3 className='text-3xl font-semibold text-center'>Ways to collaborate</h3>

                  <Accordion items={partnerships} />
              </div>

          </div>


            <div className="container mx-auto">

              <p className='text-2xl mb-10'>
                The Big Bank Theory reaches bankers, investors, fintech execs, policy professionals, and curious readers in Nigeria, Kenya, Ghana, South Africa, the UK, and the US.
                They are global, influential, and not here for fluff.
              </p>


              <p className='text-2xl  font-bold' >
                Interested in working together? Let’s build something bold.
              </p>



            </div>

      </section>
    )
    }

export default Partnership