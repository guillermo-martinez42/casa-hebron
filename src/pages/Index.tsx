
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Accommodations from "@/components/Accommodations";
import FoodServices from "@/components/FoodServices";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <About />
      <Accommodations />
      <FoodServices />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
