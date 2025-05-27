import React from 'react'
import Image from 'next/image'
import { Lobster } from 'next/font/google';

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
});

function About() {
  return (
    <div id='about' className="min-h-[150vh] px-4 mx-auto flex flex-col items-center justify-center py-40 bg-[#F6C103]  relative overflow-hidden " >


      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-full  sm:h-[10px] md:h-[20px] lg:h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,100 C360,0 1080,0 1440,100 L1440,100 L0,100 Z"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className='flex items-center justify-center  flex-wrap gap-20'>
                  <div className='max-w-[600px] lg:h-[700px] overflow-hidden rounded-t-[30px] rounded-b-3xl mx-auto '>
                      <Image className= 'object-cover mx-auto w-full h-full rounded-t-[100%] rounded-b-3xl shadow-2xl'  src='/images/me.jpg' alt='My photo' width={500} height={700}/>
                  </div>


                  <div className='max-w-[600]'>
                      <h1 className={`text-5xl py-10  font-bold ${lobster.className}`}>Get to know the voice behind the newsletter </h1>
                      <p className='text-xl'>
                      Hi, I’m Mercy. I’m a writer, researcher, and the voice behind The Big Bank Theory. <br/><br />
                      This newsletter was born out of two things: a deep obsession with how banking shapes opportunity in Africa, and a desire to explain it in a way that actually makes sense.
                      By day, I lead marketing at a tech company, helping build products and narratives that make digital tools more useful, more trusted, and more human.<br/><br/>
                      Before that, I spent years writing across editorial, strategy, and storytelling for brands and platforms across Africa’s tech and finance space.
                      But I kept coming back to one question: why is African banking, one of the most important economic stories of our time, still so underreported and poorly explained?
                      <br /><br />The Big Bank Theory is my attempt to change that. 
                      I follow the money, the policies, and the power plays shaping finance across the continent. 
                      Each edition goes deep into a single issue or trend and breaks it down with clarity, context, and just enough edge.
                      <br/> <br/>
                      If you care about inclusion, infrastructure, innovation, or just want to understand how the system really works, you’re in the right place.
                      Let’s build something smarter.

                      </p>
                  </div>

              </div>


        <p className='mt-20 text-2xl  font-light'><span className='text-4xl'>{`"`}</span><i>I believe African banking is one of the most important and under-explained stories in the world.</i><span className='text-4xl'>{`"`}</span></p>

        



  
  
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] ">
            <svg
              className="relative block w-full h-[120px] shadow-2xl"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                d="M0,0 C360,120 1080,0 1440,120 L1440,120 L0,120 Z"
              ></path>
            </svg>
          </div>


        

    </div>
  )
}

export default About