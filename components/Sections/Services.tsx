'use client'
import React from 'react'
import { motion } from "framer-motion";
// import {motion} from 'motion/react'
import Card from '../Card';
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa';


function Services() {

    const phoneNumber = +254792093576

    const services = [
        {
            title: "Editorial strategy and ghostwriting",
            src: "/images/editorial.jpg",
            description: "From founder letters to whitepapers, I write with authority, warmth, and insight. Perfect for leaders with something to say."
        },
        {
            title: "Research and insight briefs",
            src: "/images/research.jpg",
            description: "Custom, digestible research on African banking trends, policies, or sectors. Built for busy execs and smart teams."
        },
        {
            title: "Brand storytelling and content design",
            src: "/images/story.jpg",
            description: "Especially for fintechs, digital banks, and mission-driven orgs. I craft narratives that inform, inspire, and move people to act."
        },
        {
            title: "Speaking and moderation",
            src: "/images/speak.jpg",
            description: "I speak and host conversations on financial inclusion, digital infrastructure, gender gaps, and the future of African banking"
        }
    ];
    

    console.log('MOTION', motion.div)

    return (
        <section id="services" className=" py-20 px-4 bg-white container mx-auto flex flex-col ">

            <h1 className="text-5xl mb-20 font-bold text-center">Work With Me</h1>


            <div className="mb-20">

                <h2 className='text-4xl font-semibold mb-4'>Smart storytelling for bold ideas</h2>

                <h3 className='text-3xl'> I help brands, platforms, and leaders in finance and tech bring clarity to complex ideas. <br/> {`Here's how: `}</h3>

            </div>



            <div  className="card-container w-full flex flex-wrap py-20 justify-center gap-8 mx-auto">

                { services.map((service,index) => (

                    <div className="bg-white shadow-md rounded-t-full overflow-hidden text-center  max-w-[300px] " key={index} >
                        {/* Domed Image Section */}
                            <div className="mx-auto shadow-md overflow-hidden h-80">
                                <Image
                                    width={1500}
                                    height={1500}
                                    src={service.src}
                                    alt={service.title}
                                    className="w-full h-full object-fill"
                                />
                            </div>

                        {/* Text Content */}
                        <div className="flex flex-col text-center p-6">
                            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    </div>


                    ))
                }

            </div>

            <h1 className='text-3xl mb-10'>Got a project in mind? Let’s talk.</h1>

            <motion.a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-900 text-white px-4 py-2 rounded-md transition max-w-50"
                whileHover={{
                    scale:1.3
                }}
                >
                <FaWhatsapp size={20} />
                Chat on WhatsApp
            </motion.a>

                <Card/>
            
        </section>
    )

}

export default Services