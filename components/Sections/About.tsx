import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className='container mx-auto flex flex-col items-center justify-center py-20' >


        <div className='flex items-center justify-center  flex-wrap gap-20'>
            <div className='max-w-[600]'>
                <Image className='object-fill mx-auto w-full' src='/images/hero-image.jpg' alt='My photo' width={500} height={500}/>
            </div>


            <div className='max-w-[600]'>
                <h1 className='text-4xl py-10 uppercase font-bold'>Get to know the voice behind the newsletter </h1>
                <p className='text-xl'>
                Hi, I’m Mercy. I’m a writer, researcher, and the voice behind The Big Bank Theory. <br/><br />
                This newsletter was born out of two things: a deep obsession with how banking shapes opportunity in Africa, and a desire to explain it in a way that actually makes sense.
                By day, I lead marketing at a tech company, helping build products and narratives that make digital tools more useful, more trusted, and more human.
                Before that, I spent years writing across editorial, strategy, and storytelling for brands and platforms across Africa’s tech and finance space.
                But I kept coming back to one question: why is African banking, one of the most important economic stories of our time, still so underreported and poorly explained?
                The Big Bank Theory is my attempt to change that. <br />
                I follow the money, the policies, and the power plays shaping finance across the continent. 
                Each edition goes deep into a single issue or trend and breaks it down with clarity, context, and just enough edge.
                <br/> <br/>
                If you care about inclusion, infrastructure, innovation, or just want to understand how the system really works, you’re in the right place.
                Let’s build something smarter.

                </p>
            </div>

        </div>


        <p className='mt-20 text-2xl  font-bold'>{`"I believe African banking is one of the most important and under-explained stories in the world."`}</p>

        

        

    </div>
  )
}

export default About