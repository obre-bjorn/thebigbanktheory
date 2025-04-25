import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-80 h-[10vh] w-full">
        <div className="flex-1">
           <Image className= "btn btn-ghost" src="/images/logo.png" alt="Logo" width={1000} height="1000"/>
          <a className="btn btn-ghost text-xl">The Big Bank Theory</a>
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