import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WhyChoose from "@/components/home/WhyChoose";
import Companies from "@/components/home/Companies";
import Statistics from "@/components/home/Statistics";
import Certificates from "@/components/home/Certificates";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
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
      
   <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      <CTA />
      <Footer />
    </>
  );
}
