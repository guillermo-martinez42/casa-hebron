
import { Facebook, Instagram, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="font-playfair text-2xl font-bold mb-4">Hebrón</h3>
            <p className="font-inter text-white/80 mb-4">
              Un santuario para el crecimiento espiritual, la comunión y la conexión con la creación de Dios.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Youtube />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair font-bold mb-4 text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">Acerca de Nosotros</a>
              </li>
              <li>
                <a href="#accommodations" className="text-white/70 hover:text-white transition-colors">Alojamiento</a>
              </li>
              <li>
                <a href="#food" className="text-white/70 hover:text-white transition-colors">Servicios de Comida</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-white transition-colors">Galería</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-bold mb-4 text-lg">Actividades</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Servicios de Adoración</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Retiros Grupales</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Campamentos Juveniles</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Estudios Bíblicos</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Formación de Equipos</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-bold mb-4 text-lg">Suscríbete</h4>
            <p className="text-white/80 mb-4">
              Únete a nuestra lista de correo para recibir actualizaciones sobre disponibilidad, eventos especiales y más.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Tu correo" 
                className="px-4 py-2 rounded-l-md focus:outline-none text-foreground flex-grow"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Unirse
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 mt-8 text-center text-white/60 text-sm">
          <p className="flex items-center justify-center">
            © {currentYear} Campamento Hebrón. Todos los derechos reservados. Hecho con <Heart className="h-4 w-4 mx-1 text-primary" /> para la gloria de Dios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
