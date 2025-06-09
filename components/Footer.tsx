import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {



    return (

        <footer className="footer lg:footer-horizontal lg:footer-center  bg-gray-950 text-neutral-content p-10 py-20 place-items-center">

            
            <aside>

                <Link href="#home" className='flex items-center gap-4'>
                    <Image width="50" height="50" src="/images/logo_yellow.webp" alt="Logo" />
                    <p>The Big Bank Theory</p>
                </Link>
                <p>
                    What Matters In African Banking
                </p>
            </aside>

{/* 
            <nav>
                <h6 className="footer-title w-full text-center">Social</h6>

                <div className="grid grid-flow-col gap-4">
                    <a className=" link link-hover hover:scale-110 transition-transform duration-200">
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
                    <a>
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
                    <a>
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

                    <a href="https://www.linkedin.com/in/awitiawuor/">
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

            <form className='flex flex-col items-center justify-center'>
                <h6 className="footer-title w-full text-center">Newsletter</h6>
                <fieldset className="w-80 mx-auto">
                    <label className='text-neutral-content'>Enter your email address</label>
                    <div className="join">
                        <input 
                        type="text"
                        placeholder="username@site.com"
                        className="input input-bordered join-item text-base-content bg-white" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form> */}
            
            <p >Copyright © {new Date().getFullYear()} - All right reserved</p>
    </footer> 

    )
}

export default Footer