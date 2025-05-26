'use client'

import Image from 'next/image'
import Link from 'next/link'


import { motion } from "framer-motion";

function Blog() {

  return (
    <section id="blog" className=" mx-auto py-20 px-4 flex flex-col justify-center relative">


                <h1 className="text-5xl  font-bold text-center mb-6">The newsletter breaking down African finance with clarity and bite</h1>

                <div className="container mx-auto py-20 flex gap-6 flex-wrap align-center justify-center">

                    <div className="p-6 bg-[#F6C103] rounded-sm min-w-[400px] max-w-[600px] shadow-md">

                        <h1 className="text-2xl font-bold text-center">What You’ll Get</h1>

                        <ul className='mx-auto list-disc p-6 lg:text-xl flex flex-col gap-3'>
                            <li>Deep dives on central bank policy, credit access, fintech regulation, and more</li>
                            <li>Fresh takes on leadership moves and market shifts</li>
                            <li>Stories that connect the dots between power and policy</li>
                        </ul>

                    </div>

                    <div className="p-6 bg-[#F6C103] rounded-sm  min-w-[400px] max-w-[600px] shadow-md">

                        <h1 className="text-2xl font-bold text-center">Reader Favorites</h1>

                        <ul className='mx-auto list-disc p-6 pb-10 lg:text-xl flex flex-col gap-3'>
                            <li>Performance Scorecard: Who is getting it right, who is fumbling, and why it matters</li>
                            <li>Three Things on My Mind: Fast, smart takes on the week’s top headlines</li>
                            <li>How They Built It: Profiles of the people shaping the future of finance</li>
                        </ul>

                    </div>

                                        
                    


                </div>

                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-full h-1 my-8  border-0 bg-[#F6C103] max-w-1/2"/>
                            <span className="absolute px-3 font-medium -translate-x-1/2left-1/2 bg-white text-xl">Top Stories</span>
                        </div>





    
                <div  className="card-container w-full flex flex-wrap p-10 justify-center gap-2">
    
    
                    {/* <a className="flex flex-col sm:flex-row sm:max-w-2xl max-w-xs mx-auto overflow-hidden bg-gray-700 rounded-lg shadow-lg dark:bg-gray-800 p-2" href='https://the-big-bank-theory.beehiiv.com/p/nigerian-women-cracked-the-ceiling-621f947d113f9b1a' target='blank'>
                        <div className="p-2 sm:w-1/2">
                            <Image className="rounded object-cover w-full sm:h-80 h-60" src="https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/86110655-b552-4118-a4b1-865e12f6037d/GJDUjVzWsAALLst.jpeg" alt="Article" width={500} height={500}/>
                        </div>
                        <div className="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
                            <div>
                                <p 
                                    className="block sm:mt-2 text-2xl font-semibold text-gray-50 dark:text-white hover:text-gray-600 hover:underline">Nigerian Women Cracked the Ceiling</p>
                                <p className="mt-2 text-sm text-gray-200 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Tenetur labore, cum rem facere obcaecati beatae sunt numquam architecto delectus dignissimos
                                    explicabo quod pariatur at consequatur sint esse aut Facere. <br/> Numquam architecto delectus dignissimos
                                </p>
                            </div>


                            <div className="mt-4">
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <img className="object-cover h-10 w-10 rounded-full" src="https://i.pinimg.com/564x/1d/1e/16/1d1e16ad5227a9c726b61bd7cc4eca33.jpg" alt="Avatar" />
                                        <p  className="mx-2 font-semibold text-gray-50 dark:text-gray-200">Tocino Code</p>
                                    </div>
                                    <span className="mx-1 text-xs text-gray-400 dark:text-gray-300">21 SEP 2015</span>
                                    <span className="hover:cursor-pointer relative sm:left-12 text-xs text-gray-400 dark:text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#f2f2f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="18" cy="5" r="3"></circle>
                                            <circle cx="6" cy="12" r="3"></circle>
                                            <circle cx="18" cy="19" r="3"></circle>
                                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a> */}

                <motion.a className="flex flex-col sm:flex-row sm:max-w-2xl max-w-xs mx-auto overflow-hidden bg-gray-700 rounded-lg shadow-lg dark:bg-gray-800 p-2" href='https://the-big-bank-theory.beehiiv.com/p/nigerian-women-cracked-the-ceiling-621f947d113f9b1a' target='blank'>
                    <div className="p-2 sm:w-1/2">
                        <Image className="rounded object-cover w-full sm:h-80 h-60" src="https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/86110655-b552-4118-a4b1-865e12f6037d/GJDUjVzWsAALLst.jpeg" alt="Article" width={500} height={500}/>
                    </div>
                    <div className="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
                        <div>
                            <p 
                                className="block sm:mt-2 text-2xl font-semibold text-gray-50 dark:text-white hover:text-gray-600 hover:underline ">Nigerian Women Cracked the Ceiling</p>

                                <div className='h-[200px] overflow-hidden'>

                                    <p className="mt-2 text-sm text-gray-200 dark:text-gray-400 overflow-ellipsis">{`Now Let's Fix the Floor`} <br/> In June last year, I saw a video of women cheering at a Nigerian bank.

                                        One of their own had made history.

                                        Dr. Adaora Umeoji had been named CEO of Zenith Bank - one of Nigeria’s most profitable banks.

                                        She was the first woman to ever hold that role in the bank’s 30-year history.

                                        After nearly three decades in banking, 
                                        One of their own had made history.

                                        Dr. Adaora Umeoji had been named CEO of Zenith Bank - one of Nigeria’s most profitable banks.

                                        She was the first woman to ever hold that role in the bank’s 30-year history.

                                        After nearly three decades in banking, 
                                    </p>
                                </div>
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <img className="object-cover h-10 w-10 rounded-full" src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/user/profile_picture/9cc787fc-7d61-41de-ab94-960ca5357966/thumb_WhatsApp_Image_2025-01-08_at_14.48.48.jpeg" alt="Avatar" />
                                    <p  className="mx-2 font-semibold text-gray-50 dark:text-gray-200">Mercy Awiti</p>
                                </div>
                                <span className="mx-1 text-xs text-gray-400 dark:text-gray-300">21 SEP 2015</span>
                                <span className="hover:cursor-pointer relative sm:left-12 text-xs text-gray-400 dark:text-gray-300">


                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#f2f2f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                            </svg>

                            
                        </span>
                            </div>
                        </div>
                    </div>
                    </motion.a>


                
    
                </div>


                <Link href="https://the-big-bank-theory.beehiiv.com/" className='mx-auto'>
                
                    <motion.button 
                        className="link btn btn-lg bg-[#F6C103] rounded-4xl text-black font-md p-8 border-0"
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