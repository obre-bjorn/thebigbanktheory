import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Blog() {
  return (
    <section id="blog" className=" py-20 bg-base-200 flex flex-col justify-center ">

                <h1 className="text-5xl font-bold text-center">Our Top Stories</h1>
    
                <div  className="card-container w-full flex flex-wrap py-20 justify-center gap-8">
    
    
                
    
                    <a  className="card rounded-2xl bg-base-200 max-w-72 max-h-96 shadow-md hover:scale-75" href='https://the-big-bank-theory.beehiiv.com/p/nigerian-women-cracked-the-ceiling-621f947d113f9b1a'>
    
                        <figure className="h-[50%] bg-amber-300">
                            <Image className="mask min-w-md max-w-md" src="https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/86110655-b552-4118-a4b1-865e12f6037d/GJDUjVzWsAALLst.jpeg" alt="Social Media" width={500} height={500}/>
                        </figure>
    
                        <div className="flex-none card-body">
    
                            <h2 className="card-title border-b font-bold py-2">Nigerian Women Cracked the Ceiling</h2>
                            <p>{`Now Let's Fix the Floor`}</p>
    
                        </div>


                    </a>
                    
                
    
                </div>


                <Link href="https://the-big-bank-theory.beehiiv.com/" className='link btn btn-lg btn-neutral rounded-4xl mx-auto text-white font-md p-8'>Read More Articles</Link>   
            </section>
  )
}

export default Blog