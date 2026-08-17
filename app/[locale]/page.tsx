import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";

import Features from "@/components/home/Features";

import About from "@/components/home/About";
import WhyChoose from "@/components/home/WhyChoose";
import Companies from "@/components/home/Companies";
import Statistics from "@/components/home/Statistics";

import Certificates from "@/components/home/Certificates";
import Gallery from "@/components/home/Gallery";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
     
      <About />
      <WhyChoose />
      <Companies />
      <Statistics />
      <Certificates />
      <Gallery />
      <CTA />
      <Footer />
    </>
  );
}
