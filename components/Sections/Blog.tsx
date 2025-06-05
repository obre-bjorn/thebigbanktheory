'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FaMoneyBill } from 'react-icons/fa';

import { motion } from "framer-motion";

function Blog() {

  return (
    <section id="blog" className=" mx-auto py-20 px-4 flex flex-col justify-center relative">


                {/* <h1 className="text-5xl  font-bold text-center mb-6">The newsletter breaking down African finance with clarity and bite</h1> */}

                <div className="container mx-auto py-20 flex gap-6 flex-wrap align-center justify-center">

                <div className="bg-[#FFDE59] text-black rounded-2xl shadow-xl p-8 min-w-[300px] max-w-[600px] w-full transition-transform hover:scale-[1.02] hover:shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center mb-6">What You’ll Get</h1>
        <ul className="space-y-6 text-lg font-medium">
          {[
            "Deep dives on central bank policy, credit access, fintech regulation, and more",
            "Fresh takes on leadership moves and market shifts",
            "Stories that connect the dots between power and policy"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className="bg-white text-green-700 p-2 rounded-full shadow-md">
                <FaMoneyBill className="text-xl" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card 2 */}
      {/* <div className="bg-[#FFDE59] text-black rounded-2xl shadow-xl p-8 min-w-[300px] max-w-[600px] w-full transition-transform hover:scale-[1.02] hover:shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center mb-6">Reader Favorites</h1>
        <ul className="space-y-6 text-lg font-medium">
          {[
            "Performance Scorecard: Who is getting it right, who is fumbling, and why it matters",
            "Three Things on My Mind: Fast, smart takes on the week’s top headlines",
            "How They Built It: Profiles of the people shaping the future of finance"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className="bg-white text-green-700 p-2 rounded-full shadow-md">
                <FaMoneyBill className="text-xl" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div> */}

                                        
                    


                </div>

                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-full h-1 my-8  border-0 bg-[#FFDE59] max-w-1/2"/>
                            <span className="absolute px-3 font-medium -translate-x-1/2left-1/2 bg-white text-xl">Top Stories</span>
                        </div>





    
                <div  className="card-container w-full flex flex-wrap p-10 justify-center gap-2">
    
    
                    

                <motion.a
      href="https://the-big-bank-theory.beehiiv.com/p/nigerian-women-cracked-the-ceiling-621f947d113f9b1a"
      target="_blank"
      className="group flex flex-col sm:flex-row sm:max-w-xl max-w-sm mx-auto overflow-hidden bg-[#1a1a1a] text-white rounded-xl shadow-md transition-transform hover:scale-105 hover:shadow-2xl duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Image with hover overlay */}
      <div className="sm:w-1/2 w-full relative overflow-hidden">
        <Image
          src="https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/86110655-b552-4118-a4b1-865e12f6037d/GJDUjVzWsAALLst.jpeg"
          alt="Article"
          width={800}
          height={421}
          className="object-cover w-full h-52 sm:h-full transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Text Section */}
      <div className="sm:w-1/2 w-full flex flex-col justify-between p-4 space-y-3">
        <div>
          <h2 className="text-lg sm:text-xl font-bold group-hover:underline">
            Nigerian Women Cracked the Ceiling
          </h2>

          <p className="text-sm text-white/80 mt-2 line-clamp-4">
            Now Let's Fix the Floor. In June last year, I saw a video of women cheering at a Nigerian bank. One of their own had made history.
          </p>
        </div>

        {/* Author + Meta Info */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div className="flex items-center gap-3 mt-2">
            <img
              src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/user/profile_picture/9cc787fc-7d61-41de-ab94-960ca5357966/thumb_WhatsApp_Image_2025-01-08_at_14.48.48.jpeg"
              alt="Author"
              className="h-8 w-8 rounded-full object-cover shadow-md"
            />
            <p className="text-sm font-medium text-white">Mercy Awiti</p>
          </div>

          <div className="text-xs text-white/60 flex items-center gap-2">
            <span>21 SEP 2015</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-60"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </div>
        </div>
      </div>
    </motion.a>


                
    
                </div>


                <Link href="https://the-big-bank-theory.beehiiv.com/" className='mx-auto'>
                
                    <motion.button 
                        className="link btn btn-lg bg-[#FFDE59] rounded-4xl text-black font-md p-8 border-0"
                        whileHover={{
                            backgroundColor: 'black',
                            color:'white'
                        }}
                    >
                            Read More Articles
                    </motion.button>
                
                </Link>   
            </section>
    )
}

export default Blog