'use client'

import dynamic from "next/dynamic";

// Dynamically import sections
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Hero = dynamic(() => import('@/components/Sections/Hero'), { ssr: false });
const Blog = dynamic(() => import('@/components/Sections/Blog'), { ssr: false });
const Partnership = dynamic(() => import('@/components/Sections/Partnership'), { ssr: false });
const About = dynamic(() => import('@/components/Sections/About'), { ssr: false });
const Services = dynamic(() => import('@/components/Sections/Services'), { ssr: false });
const Contact = dynamic(() => import('@/components/Sections/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Blog />
      <Partnership />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
