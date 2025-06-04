import React from 'react'

function Contact() {


  return (
    <section id="contact" className="bg-white flex flex-col lg:flex-row-reverse min-h-screen py-20 p-4 justify-center gap-10 container mx-auto">
        <div className="flex-1 flex flex-col gap-6">

            <p className='menu-title text-xl'>CONTACT US</p>
            <p className='text-8xl'>{`Let’s connect`}</p>
            <p className='text-xl'>Have an idea, project, or pitch? Want to collaborate or sponsor the newsletter?
                Get in touch. I’m always up for good people and bold ideas.
            </p>

            <nav>
                <h6 className="footer-title w-full">Social</h6>

                <div className="grid grid-flow-col ">
                    <a className=" link link-hover w-[40px] hover:scale-110 transition-transform duration-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            className="fill-current hover:fill-[#000000]"> 
                            <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
                            </path>
                        </svg>
                        </a>
                    <a className='w-[40px]'> 
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a className='w-[40px]'>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/awitiawuor/" className='w-[40px]'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            className="fill-current hover:fill-[#0A66C2]"> 
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                            </path>
                        </svg>
                    </a>

                </div>
            </nav>

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