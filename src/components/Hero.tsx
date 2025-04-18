
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen bg-hero-pattern bg-cover bg-center bg-fixed flex items-center justify-center text-white relative">
      <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Encuentra Paz. Encuentra Propósito. Encuentra Hebrón.
        </h1>
        <p className="font-inter text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          Un campamento evangélico que sirve a grupos de iglesias, escuelas y organizaciones basadas en la fe en un entorno natural y pacífico.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 shadow-lg transition-transform hover:scale-105"
          >
            Reserva Tu Estancia
          </Button>
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white text-white rounded-full px-8 py-6 shadow-lg transition-transform hover:scale-105"
          >
            <a href="#about">Conoce Más</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-delay">
        <a href="#about" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <span className="mb-2 text-sm font-inter">Desplázate para descubrir</span>
          <ArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
