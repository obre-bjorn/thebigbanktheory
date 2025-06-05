'use client'

import React from 'react'

function Contact() {
    return (
        <section id="contact" className="bg-white flex flex-col lg:flex-row-reverse min-h-screen py-20 px-4 justify-center gap-10 container mx-auto">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6">
            <p className="menu-title text-xl">CONTACT US</p>
            <h1 className="text-5xl md:text-8xl font-bold">{`Let’s connect`}</h1>
            <p className="text-xl">
            Have an idea, project, or pitch? Want to collaborate or sponsor the newsletter?
            Get in touch. I’m always up for good people and bold ideas.
            </p>

            <nav className=''>
            <h6 className="footer-title w-full">Social</h6>
            <div className="grid grid-flow-col gap-4 mt-2 items-center">
                <a
                href="https://www.linkedin.com/in/awitiawuor/"
                className="w-[40px] hover:scale-105 transition"
                target="_blank"
                rel="noopener noreferrer"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    className="fill-current hover:fill-[#0A66C2]"
                >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
                    2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 
                    19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 
                    1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 
                    1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 
                    0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 
                    7 2.476v6.759z" />
                </svg>
                </a>
            </div>
            </nav>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-[#FFDE59] p-10 flex-1 shadow-2xl rounded-xl">
            <p className="text-xl font-semibold">Send me a message!</p>

            <form className="flex flex-col mt-5 space-y-6">
            {/* Name Input */}
            <label className="input input-xl bg-white w-full rounded-2xl shadow-2xl flex items-center gap-3">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </g>
                </svg>
                <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter your name"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minLength={3}
                maxLength={30}
                title="Only letters, numbers or dash"
                className="bg-white w-full outline-none"
                />
            </label>
            <p className="validator-hint text-sm text-gray-500 ml-2">
                Must be 3 to 30 characters containing only letters, numbers or dash
            </p>

            {/* Email Input */}
            <label className="input input-xl bg-white w-full rounded-2xl shadow-2xl flex items-center gap-3">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
                </svg>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email Address"
                required
                className="bg-white w-full outline-none"
                />
            </label>

            {/* Message Textarea */}
            <textarea
                name="message"
                id="message"
                required
                className="textarea textarea-lg bg-white w-full min-h-[200px] rounded-2xl shadow-2xl p-4"
                placeholder="Your Message"
            ></textarea>

            {/* Submit Button */}
            <button
                type="submit"
                className="btn btn-lg btn-neutral rounded-3xl text-white font-medium px-6 py-3 w-fit mt-4 shadow-xl"
            >
                Send message
            </button>
            </form>
        </div>
        </section>
  )
}

export default Contact
