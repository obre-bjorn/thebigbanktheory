import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {



    return (

        <footer className="footer lg:footer-horizontal lg:footer-center  bg-neutral text-neutral-content p-10 py-20 place-items-center">

            
            <aside>

                <Link href="#home" className='flex items-center gap-4'>
                    <Image width="50" height="50" src="/images/logo_yellow.png" alt="Logo" />
                    <p>The Big Bank Theory</p>
                </Link>
                
                <p>
                    What Matters In African Banking
                </p>
            </aside>

           

            <nav>
                <h6 className="footer-title w-full text-center">Social</h6>

                <div className="grid grid-flow-col gap-4">
                    <a className=' link link-hover hover:scale-110 transition-transform duration-200'>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current hover:fill-[#1DA1F2]">
                        <path
                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
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
            </form>
            
            <p >Copyright © {new Date().getFullYear()} - All right reserved</p>
    </footer> 

    )
}

export default Footer