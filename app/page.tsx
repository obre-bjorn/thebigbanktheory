import Blog from "@/components/Sections/Blog";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Sections/Hero";
import Services from "@/components/Sections/Services";


export default function Home() {



  return (
      <>
      
        <Header/>
        
        <Hero/>
        <Services/>
        <Blog/>
        <Contact/>
        <Footer/>
      
      </>
      
      
  );
}