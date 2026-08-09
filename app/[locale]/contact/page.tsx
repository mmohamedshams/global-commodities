import Navbar from "@/components/layout/Navbar";
import ContactHero from "@/components/contact/Hero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import WhyContact from "@/components/contact/WhyContact";
import ContactMap from "@/components/contact/Map";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
    <Navbar />
      <ContactHero />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>

      <WhyContact />

      <ContactMap />
         <Footer />
    </>
  );
}