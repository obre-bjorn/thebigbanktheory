import React from 'react'
import Image from 'next/image'

function Services() {

    const services = [
        {
            title: "Editorial strategy and ghostwriting",
            description: "From founder letters to whitepapers, I write with authority, warmth, and insight. Perfect for leaders with something to say."
        },
        {
            title: "Research and insight briefs",
            description: "Custom, digestible research on African banking trends, policies, or sectors. Built for busy execs and smart teams."
        },
        {
            title: "Brand storytelling and content design",
            description: "Especially for fintechs, digital banks, and mission-driven orgs. I craft narratives that inform, inspire, and move people to act."
        },
        {
            title: "Speaking and moderation",
            description: "I speak and host conversations on financial inclusion, digital infrastructure, gender gaps, and the future of African banking"
        }
    ];
    



    return (
        <section id="services" className=" pt-20 shadow-sm bg-white">
            <h1 className="text-5xl font-bold text-center">Work With Me</h1>

            <div  className="card-container w-full flex flex-wrap py-20 justify-center gap-8">


            { services.map((service,index) => (

                // <div key={index} className="card bg-base-200 max-w-72 max-h-96 shadow-md">

                //     <figure className="h-[50%] bg-amber-300">
                //         <Image className="mask mask-star-2 min-w-md max-w-md" src="/images/social-media.png" alt="Social Media" width={500} height={500}/>
                //     </figure>

                //     <div className="flex-none card-body">

                //         <h2 className="card-title text-2xl border-b w-full">{service.title}</h2>
                //         <p>{service.description}</p>

                //     </div>
                // </div>


                <div className="bg-white shadow-md rounded-t-full overflow-hidden text-center  max-w-[300]" key={index}>
                    {/* Domed Image Section */}
                        <div className="mx-auto -top-16 shadow-md overflow-hidden ">
                            <Image
                                width={1500}
                                height={1500}
                                src="/images/social-media.png"
                                alt={service.title}
                                className="w-full h-full object-cover"
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
                
        </section>
    )

}

export default Services