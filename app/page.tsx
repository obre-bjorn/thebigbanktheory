import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const services = [
  {
    title: "Social Media Marketing",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ratione sunt tenetur? Laborum, nihil magni necessitatibus a laboriosam ex rerum. Mollitia cupiditate odio, iusto error ullam adipisci deleniti necessitatibus aspernatur."
  },
  {
    title: "Social Media Marketing",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ratione sunt tenetur? Laborum, nihil magni necessitatibus a laboriosam ex rerum. Mollitia cupiditate odio, iusto error ullam adipisci deleniti necessitatibus aspernatur."
  },
  {
    title: "Social Media Marketing",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ratione sunt tenetur? Laborum, nihil magni necessitatibus a laboriosam ex rerum. Mollitia cupiditate odio, iusto error ullam adipisci deleniti necessitatibus aspernatur."
  }
]

export default function Home() {



  return (
    <div className="w-full"> {/* Changed from w-screen to w-full and added overflow-x-hidden */}
      <Header/>
      <Hero/>
      <div id="services" className="mt-20 px-16">
        <h1 className="text-4xl font-semibold text-center">Our Services</h1>

        {/*Service Card */}

        <div className="card-container flex gap-10 flex-wrap p-8 justify-center">

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="bg-amber-300">
              <Image className="mask mask-star-2 min-w-md max-w-md" src="/images/social-media.png" alt="Shoes" width={500} height={500}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="bg-amber-300 h-100">
              <Image className="mask mask-star-2 w-[100] max-w-[100]" src="/images/social-media.png" alt="Shoes" width={500} height={500}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>


          <div className="card bg-base-100 image-full w-96 shadow-sm">
          <figure>
            <Image src="/images/social-media.png" alt="Shoes" width={500} height={500}/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Social Media Marketing</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        

        <div className="card bg-base-100 image-full w-96 shadow-sm">
          <figure>
            <Image src="/images/social-media.png" alt="Shoes" width={500} height={500}/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Social Media Marketing</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>


        <div className="card bg-base-100 image-full w-96 shadow-sm">
          <figure>
            <Image src="/images/social-media.png" alt="Shoes" width={500} height={500}/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Social Media Marketing</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>


        </div>
        

      </div>      
    </div>
  );
}