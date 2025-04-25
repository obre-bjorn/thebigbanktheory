import React from 'react'
import Image from 'next/image'

function Hero() {
    


    return (
        <div className="hero bg-base-200 min-h-[90vh] w-full px-8" > {/* Added px-4 for mobile padding */}
            <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-[100%] h-[100%] lg:px-16 lg:gap-3 "> {/* Removed min-w-lg */}
                <div className="w-full h-full lg:w-1/2 flex justify-center"> {/* Constrained image container */}
                    <Image
                        src="/images/hero-noback.png"
                        className="w-[100%]  rounded-lg shadow-2xl" // Responsive width
                        width={2000} // Reduced from 2000
                        height={2000}
                        alt="Hero welcome image"
                        priority
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold">Transform Your Brand with Data-Driven Marketing</h1>
                    <p className="py-6 text-xl md:text-2xl">
                        Get expert insights, trends, and strategies to grow your business.
                    </p>
                    <a href="#services">
                        <button className="btn btn-primary font-bold">Explore Our Services</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero