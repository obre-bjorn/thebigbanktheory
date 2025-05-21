import React from 'react'
import Image from 'next/image'

function Services() {

    const services = [
        {
            title: "Editorial strategy and ghostwriting",
            src: "/images/editorial.jpg",
            description: "From founder letters to whitepapers, I write with authority, warmth, and insight. Perfect for leaders with something to say."
        },
        {
            title: "Research and insight briefs",
            src: "/images/research.jpg",
            description: "Custom, digestible research on African banking trends, policies, or sectors. Built for busy execs and smart teams."
        },
        {
            title: "Brand storytelling and content design",
            src: "/images/story.jpg",
            description: "Especially for fintechs, digital banks, and mission-driven orgs. I craft narratives that inform, inspire, and move people to act."
        },
        {
            title: "Speaking and moderation",
            src: "/images/speak.jpg",
            description: "I speak and host conversations on financial inclusion, digital infrastructure, gender gaps, and the future of African banking"
        }
    ];
    



    return (
        <section id="services" className=" py-20 px-4 bg-white container mx-auto flex flex-col ">

            <h1 className="text-5xl mb-20 font-bold text-center">Work With Me</h1>


            <div className="mb-20">

                <h2 className='text-4xl font-semibold mb-4'>Smart storytelling for bold ideas</h2>

                <h3 className='text-3xl'> I help brands, platforms, and leaders in finance and tech bring clarity to complex ideas. <br/> {`Here's how: `}</h3>

            </div>



            <div  className="card-container w-full flex flex-wrap py-20 justify-center gap-8 mx-auto">

                { services.map((service,index) => (

                    <div className="bg-white shadow-md rounded-t-full overflow-hidden text-center  max-w-[300]" key={index}>
                        {/* Domed Image Section */}
                            <div className="mx-auto shadow-md overflow-hidden h-80">
                                <Image
                                    width={1500}
                                    height={1500}
                                    src={service.src}
                                    alt={service.title}
                                    className="w-full h-full object-fill"
                                />
                            </div>

                        {/* Text Content */}
                        <div className="flex flex-col text-center p-6">
                            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    </div>


                    ))
                }

            </div>

            <h1 className='text-3xl'>Got a project in mind? Let’s talk.</h1>
                
        </section>
    )

}

export default Services