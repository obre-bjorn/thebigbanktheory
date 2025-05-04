import Image from 'next/image';

function Hero() {


  return (
    <section className="hero  min-h-[90vh] w-full px-4 sm:px-6 lg:px-8 ">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-7xl mx-auto">
        {/* Image Container - Constrained with max-width */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-[800px] lg:max-w-none lg:pl-8 ">
          <Image
            src="/images/hero-noback.png"
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
            What matters in African Banking
          </h1>
          <p className="py-6 text-lg md:text-2xl lg:text-2xl font-semibold">
            Get expert insights, trends, and strategies to grow your business.
          </p>
          {/* <a href="#services" className="inline-block">
            <button className="btn btn-primary font-bold text-lg">
              Explore Our Services
            </button>
          </a> */}
        
        <form>
                <h6 className="footer-title font-extrabold">Newsletter</h6>
                <fieldset className="w-80">
                <label className='text-lg font-bold'>Enter your email address to Subscribe</label>
                <div className="join">
                    <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item" />
                    <button className="btn btn-primary join-item">Subscribe</button>
                </div>
                </fieldset>
            </form>

        </div>
      </div>
    </section>
  );
}

export default Hero;