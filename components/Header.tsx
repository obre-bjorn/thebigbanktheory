'use client';

import { useState,} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackToTop from './BackToTop';

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
    <header  id="home" className="navbar bg-base-100  lg:px-40 h-[10vh] w-full justify-between shadow-xl">     <div className="flex">
        <Link href="/" className="flex items-center gap-2" passHref>
          <Image 
            src="/images/logo.png" 
            alt="Logo" 
            width={100}
            height={100}
            priority
            className='max-w-[40]'
          />

          
          <p className="text-xl font-bold">The Big Bank Theory</p>
        </Link>
      </div>
      
      <div className="flex flex-none items-center gap-4">
        <div className='flex gap-4 items-center justify-center'>

          <Link href="#blog" className="hidden lg:inline-block hover:text-primary text-2xl font-semibold">
            Blog
          </Link>

          <Link href="#about" className="hidden lg:inline-block hover:text-primary text-2xl font-semibold">
            About
          </Link>

          <Link href="#contact" className="hidden lg:inline-block hover:text-primary text-2xl font-semibold">
            Contact
          </Link>

        </div>
        

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
                  className="fill-base-100 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              ) : ( 
                <svg
                  className="fill-current"
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
          
          <div className="drawer-side z-50">
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
                  Home
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
                    Blog
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
    </header>
  );
};

export default Header;