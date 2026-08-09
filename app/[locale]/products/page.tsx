import Navbar from "@/components/layout/Navbar";
import ProductsHero from "@/components/products/Hero";
import ProductGrid from "@/components/products/ProductGrid";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function ProductsPage() {
  return (
    <>
    <Navbar />
      <ProductsHero />
      <ProductGrid />
      <CTA />
       <Footer />
    </>
  );
}