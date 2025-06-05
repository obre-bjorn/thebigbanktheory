'use client';

import { useState,} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackToTop from './BackToTop';

import {motion} from 'framer-motion'



const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);



  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    // Manually uncheck the checkbox to ensure DaisyUI gets the state change
    const drawerCheckbox = document.getElementById('my-drawer') as HTMLInputElement;
    
    console.log(drawerCheckbox)
    
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  const handleLinkClick = () => {
    closeDrawer();
  };

  return (
    <header  id="home" className=" bg-[#FFFFFF] h-[10vh] min-h-10 w-screen  fixed z-45">


    <div className="container mx-auto navbar justify-between items-center">
        <div className="flex bg-[#FFDE59] py-3 px-6 rounded-md">
            <Link href="/" className="flex items-center gap-2" passHref>
              <Image 
                src="/images/logo.webp" 
                alt="Logo" 
                width={40}
                height={40}
                priority={false}
                className='max-w-[40]'
              />

              
              <p className={`text-xl font-bold `}>The Big Bank Theory</p>
            </Link>
          </div>
          
          <div className="flex flex-none items-center gap-4">
            <div className='flex gap-4 items-center justify-center'>

              <Link href="#blog" className={`hidden lg:inline-block  text-2xl font-semibold `}>

                  <motion.div className="py-4 px-2 transition-all "
                  whileHover={{
                    textDecoration: 'underline',
                    scale: '1.2'
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    Newsletter
                  </motion.div>
              </Link>

              <Link href="#about" className={`hidden lg:inline-block  text-2xl font-semibold`}>
                
              <motion.div className="py-4 px-2 transition-all"
                  whileHover={{
                    textDecoration: 'underline',
                    scale: '1.2'
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    About
                  </motion.div>

              </Link>

              <Link href="#partnerships" className={`hidden lg:inline-block  text-2xl font-semibold`}>
                
              <motion.div className="py-4 px-2 transition-all"
                  whileHover={{
                    textDecoration: 'underline',
                    scale: '1.2'
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    Partnership
                  </motion.div>

              </Link>

              <Link href="#contact" className={`hidden lg:inline-block  text-2xl font-semibold `}>
              <motion.div className="py-4 px-2 transition-all"
                  whileHover={{
                    textDecoration: 'underline',
                    scale: '1.2',
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    Contact
                  </motion.div>
              </Link>

              <div className="drawer drawer-end ">
                <input 
                  id="my-drawer" 
                  type="checkbox" 
                  className="drawer-toggle" 
                  // onChange={toggleDrawer}
                />
                
                <div className="drawer-content lg:hidden">
                  <label htmlFor='my-drawer'
                    className=" btn-ghost btn-xl btn-circle swap swap-rotate z-55"
                    onClick={toggleDrawer}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                  >
                    {isOpen ? (
                      <svg
                        className="fill-[#F6C103]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 512 512"
                      >
                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                      </svg>
                    ) : ( 
                      <svg
                        className="fill-[black]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 512 512"
                      >
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                      </svg>
                    ) }
                  </label>
                </div>

          <div className="drawer-side z-50 w-screen h-screen">
            <label
              htmlFor="my-drawer"
              className="drawer-overlay"
              onClick={closeDrawer}
            />
            <ul className="menu bg-gray-950 p-4 px-10 w-screen min-h-full  text-base-100 justify-center">
              <div className='mx-auto flex justify-center items-center  mb-15 gap-2'>
                
                <Image src="/images/logo_yellow.png" alt="Logo" width={40} height={40} className=''/>
                <p>The Big Bank Theory</p>

              </div>

              <li>
                <Link href="#home" onClick={handleLinkClick} className='text-6xl font-semibold transition-all'>
                  Newsletter
                </Link>
              </li>

              <li>
                <Link href="#about" onClick={handleLinkClick} className='text-6xl font-semibold'>
                  <label htmlFor="my-drawer" >
                    About
                  </label>
                </Link>
              </li>

              <li>
                <Link href="#blog" onClick={handleLinkClick} className='text-6xl font-semibold'>
                  <label htmlFor="my-drawer" className='drawer-button'>
                    Patrnership
                  </label>
                </Link>
              </li>

              <li>
                <Link href="#contact" onClick={handleLinkClick} className='text-6xl font-semibold'>
                  <label htmlFor="my-drawer" className='drawer-button hover:text-red-600'>
                    Contact
                  </label>
                </Link>
              </li>
              
              {/* <button className='btn-xl'>Subscribe</button> */}
            </ul>
          </div>

      </div>
        </div>
      <BackToTop/>
      </div>
            </div>
            

          
    </header>
  );
};

export default Header;