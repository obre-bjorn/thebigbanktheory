import Blog from "@/components/Sections/Blog";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Sections/Hero";
import Services from "@/components/Sections/Services";
import About from "@/components/Sections/About";
import Partnership from "@/components/Sections/Partnership";


export default function Home() {



  return (
      <>
      
        <Header/>
        <Hero/>
        <Blog/>
        <About/>
        <Services/>
        <Partnership/>
        <Contact/>
        <Footer/>
      
      </>
      
      
  );
}