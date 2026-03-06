import Image from "next/image";
import NextNodeServer from "next/dist/server/next-server";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Project/>
      <About/>
      <Footer/>
      <Skills/>
      <Contact/>
    </>
      

  
   
  );
}
