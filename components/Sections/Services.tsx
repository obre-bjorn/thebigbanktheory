import React from 'react'
import Image from 'next/image'

function Services() {

    const services = [
    {
        title: "Media",
        description: "Get expert insights, trends, and strategies on African Banking"
    },
    {
        title: "Community",
        description: ""
    },
    {
        title: "Social Media Marketing",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ratione sunt tenetur? Laborum, nihil magni necessitatibus a laboriosam ex rerum. Mollitia cupiditate odio, iusto error ullam adipisci deleniti necessitatibus aspernatur."
    }
    ]



    return (
        <section id="services" className=" pt-20 shadow-sm bg-white">
            <h1 className="text-5xl font-bold text-center">What We Do</h1>

            <div  className="card-container w-full flex flex-wrap py-20 justify-center gap-8">


            { services.map((service,index) => (

                <div key={index} className="card bg-base-200 max-w-72 max-h-96 shadow-md">

                    <figure className="h-[50%] bg-amber-300">
                        <Image className="mask mask-star-2 min-w-md max-w-md" src="/images/social-media.png" alt="Social Media" width={500} height={500}/>
                    </figure>

                    <div className="flex-none card-body">

                        <h2 className="card-title border-b">{service.title}</h2>
                        <p>{service.description}</p>

                      

                    </div>
                </div>
                ))
            }

            </div>
                
        </section>
    )

}

export default Services