import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {

  // bg-base-100 
  return (
    <div className="navbar  lg:px-80 h-[10vh] w-full justify-between">
        <div className="flex">
          <Link className='flex items-center gap-2' href="/">
            <Image className="max-w-10 h-full" src="/images/logo.png" alt="Logo" width={1000} height="1000"/>
            <p className=" text-xl font-bold">The Big Bank Theory </p>
          </Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
          </button>
        </div>
      </div>
  )
}

export default Header