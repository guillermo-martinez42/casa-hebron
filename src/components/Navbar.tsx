
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-95 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <h1 className={`font-playfair font-bold text-2xl ${isScrolled ? 'text-primary' : 'text-white'}`}>Hebrón</h1>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className={`font-inter ${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors`}>Acerca de</a>
          <a href="#accommodations" className={`font-inter ${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors`}>Alojamiento</a>
          <a href="#food" className={`font-inter ${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors`}>Servicios de Comida</a>
          <a href="#gallery" className={`font-inter ${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors`}>Galería</a>
          <Button asChild variant="default" size="sm" className={`rounded-full px-6 ${isScrolled ? '' : 'bg-white text-primary hover:bg-opacity-90 hover:text-primary'}`}>
            <a href="#contact">Reservar Ahora</a>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="font-inter text-foreground hover:text-primary transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Acerca de
            </a>
            <a 
              href="#accommodations" 
              className="font-inter text-foreground hover:text-primary transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Alojamiento
            </a>
            <a 
              href="#food" 
              className="font-inter text-foreground hover:text-primary transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios de Comida
            </a>
            <a 
              href="#gallery" 
              className="font-inter text-foreground hover:text-primary transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Galería
            </a>
            <Button 
              asChild 
              variant="default" 
              size="sm" 
              className="w-full mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <a href="#contact">Reservar Ahora</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
