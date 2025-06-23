'use client';

import { useState,} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackToTop from './BackToTop';

import { IoNewspaperOutline  } from 'react-icons/io5';
import { CgProfile } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi2";
import { TfiEmail } from "react-icons/tfi";



import {motion} from 'framer-motion'

const navs  = [
  {
    name: "Newsletter",
    url : "#newsletter",
    icon: <IoNewspaperOutline/>
  },
  {
    name: "About ",
    url : "#about",
    icon: <CgProfile/>
  },
  {
    name: "Partnership",
    url : "#partnership",
    icon: <HiUserGroup/> 
  },
  {
    name: "Contact",
    url : "#contact",
    icon: <TfiEmail/> 
  }

] 



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
    <header  id="home" className=" bg-[#FFFFFF] max-h-[10vh] p- min-h-10 w-screen pb-2 fixed z-45">


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

              
              <p className={` text-md md:text-xl font-bold `}>The Big Bank Theory</p>
            </Link>
          </div>
          
          <div className="flex flex-none items-center gap-4">
            <div className='flex gap-4 items-center justify-center'>

              <Link href="#newsletter" className={`hidden lg:inline-block  text-2xl font-semibold `}>

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

              <Link href="#partnership" className={`hidden lg:inline-block  text-2xl font-semibold`}>
                
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
                        className="fill-black"
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

          <div className="drawer-side z-50 w-screen h-screen p-0">
            <label
              htmlFor="my-drawer"
              className="drawer-overlay"
              onClick={closeDrawer}
            />
            <ul className="menu bg-[#ffffff]  w-screen  h-screen text-base-100 p-0">
            <svg className="min-h-28 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFDE59" fill-opacity="1" d="M0,96L30,96C60,96,120,96,180,128C240,160,300,224,360,261.3C420,299,480,309,540,272C600,235,660,149,720,144C780,139,840,213,900,224C960,235,1020,181,1080,154.7C1140,128,1200,128,1260,144C1320,160,1380,192,1410,208L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
            
              <div className=' w-full  flex items-center justify-center mb-12 gap-2'>
                
                  <Image src="/images/logo.webp" alt="Logo" width={40} height={40} />
                <p className='text-[#010101]'>The Big Bank Theory</p>

              </div>

              {navs.map((nav) => (
                <li key={nav.name}>
                  <Link href={nav.url} onClick={handleLinkClick} className='text-4xl font-semibold text-[#010101]'>
                    {nav.icon}
                    <label htmlFor="my-drawer" className='drawer-button'>
                      {nav.name}
                    </label>
                  </Link>
                </li>
              ))}
              
              {/* <button className='btn-xl'>Subscribe</button> */}

            </ul>

              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#FFDE59" fill-opacity="1" d="M0,96L30,96C60,96,120,96,180,128C240,160,300,224,360,261.3C420,299,480,309,540,272C600,235,660,149,720,144C780,139,840,213,900,224C960,235,1020,181,1080,154.7C1140,128,1200,128,1260,144C1320,160,1380,192,1410,208L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg> */}
            
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