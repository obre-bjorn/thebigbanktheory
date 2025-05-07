import Image from 'next/image';

function Hero() {


  return (
    <section className="hero bg-base-100 min-h-[90vh] w-full px-4 lg:px-8 ">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-7xl mx-auto">
        {/* Image Container - Constrained with max-width */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-[800px] lg:max-w-none lg:pl-8 ">
          <Image
            src="/images/media-hero.gif"
            className="w-full h-auto object-contain rounded-lg shadow-2xl"
            width={1200}
            height={1200}
            alt="Hero welcome image"
            priority
          />

        </div>
        
        {/* Content Container */}
        <div className="w-full lg:w-1/2 ">
          <h1 className="text-3xl md:text-4xl lg:text-8xl font-semibold leading-tight">
            What matters in African Banking.
          </h1>
          <p className="py-6 text-lg md:text-2xl lg:text-2xl font-semibold">
            Get expert insights, trends, and strategies to grow your business.
          </p>
          {/* <a href="#services" className="inline-block">
            <button className="btn btn-primary font-bold text-lg">
              Explore Our Services
            </button>
          </a> */}
        
        <form className='w-full'>
                <h6 className="footer-title font-extrabold">Newsletter</h6>
                <fieldset className="w-full">
                <label className='text-lg font-bold'>Subscribe to our newsletter</label>
                <div className="flex w-full">
                    <input
                    type="text"
                    placeholder="Email Address"
                    className="input input-bordered input-lg join-item bg-white" />
                    <button className="btn btn-primary btn-lg join-item">Subscribe</button>
                </div>
                </fieldset>
            </form>

        </div>
      </div>
    </section>
  );
}

export default Hero;