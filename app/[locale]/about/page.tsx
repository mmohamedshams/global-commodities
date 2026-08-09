import Navbar from "@/components/layout/Navbar";
import AboutHero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import MissionVision from "@/components/about/MissionVision";
import Markets from "@/components/about/Markets";
import Highlights from "@/components/about/Highlights";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Story />
      <MissionVision />
      <Highlights />
      <Markets />
      <CTA />
      <Footer />
    </>
  );
}