import React from 'react'

function Contact() {


  return (
    <section id="contact" className="bg-white flex flex-col lg:flex-row lg:flex-row-reverse min-h-screen py-20 p-4 justify-center gap-10 container mx-auto">
        <div className="flex-1 flex flex-col gap-6">

            <p className='menu-title text-xl'>CONTACT US</p>
            <p className='text-8xl'>{`Let’s connect`}</p>
            <p className='text-xl'>Have an idea, project, or pitch? Want to collaborate or sponsor the newsletter?
                Get in touch. I’m always up for good people and bold ideas.
            </p>
        </div>

        <div className="bg-base-200 p-10 px-15 flex-1 shadow-2xl rounded-xl">

            <p className='text-xl font-semibold'>Send me a message!</p>
            <form action="" className='flex flex-col mt-5'>

                <label className="input input-xl bg-white w-full validator rounded-2xl shadow-2xl">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </g>
                    </svg>
                    <input
                        className='bg-white'
                        type="text"
                        required
                        placeholder="Enter your name"
                        pattern="[A-Za-z][A-Za-z0-9\-]*"
                        minLength={3}
                        maxLength={30}
                        title="Only letters, numbers or dash"
                    />
                </label>
                    <p className="validator-hint ">
                        Must be 3 to 30 characters
                        <br />containing only letters, numbers or dash
                    </p>


                <label className="input input-xl bg-white w-full validator rounded-2xl shadow-2xl">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="email" placeholder="Enter your Email Address" required />
                </label>
                    <div className="validator-hint hidden">Enter valid email address</div>

                <textarea className="textarea textarea-lg bg-white w-full mt-10 min-h-[200] rounded-2xl shadow-2xl" placeholder="Your Message"></textarea>

                <button type="submit" className='btn btn-lg btn-neutral rounded-4xl  text-white font-md p-8 max-w-[200] mt-10 shadow-2xl'>Send message</button>
            </form>
        </div>
        
    </section>
  )
}

export default Contact