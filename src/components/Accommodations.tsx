
import { Home, Users, Trees, Shield } from "lucide-react";

const Accommodations = () => {
  return (
    <section id="accommodations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">Nuestras Instalaciones</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground font-inter">
            Hebrón ofrece alojamientos cómodos y tranquilos diseñados para facilitar la conexión, la reflexión y el crecimiento espiritual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1974" 
                alt="Cabañas rodeadas de pinos" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
            <div className="p-6 bg-white">
              <div className="flex items-center mb-4">
                <Home className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-playfair text-xl font-semibold">Cabañas y Alojamiento</h3>
              </div>
              <p className="text-muted-foreground font-inter mb-4">
                Nuestras cabañas, rústicas pero cómodas, pueden acomodar grupos de varios tamaños, desde pequeñas reuniones hasta grandes retiros, 
                con instalaciones separadas para grupos juveniles y liderazgo adulto.
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-primary mr-2" />
                  <span>Cabañas con calefacción y ropa de cama cómoda</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-primary mr-2" />
                  <span>Baños modernos y duchas</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-primary mr-2" />
                  <span>Alojamiento para 10-150 personas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1974" 
                alt="Área de reuniones con vista al agua y árboles" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
            <div className="p-6 bg-white">
              <div className="flex items-center mb-4">
                <Users className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-playfair text-xl font-semibold">Espacios de Reunión y Adoración</h3>
              </div>
              <p className="text-muted-foreground font-inter mb-4">
                Nuestros espacios de reunión versátiles están equipados para adoración, enseñanza y actividades grupales, con hermosas
                vistas de la naturaleza que inspiran reflexión y conexión espiritual.
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-primary mr-2" />
                  <span>Capilla con equipo audiovisual</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-primary mr-2" />
                  <span>Múltiples salas para grupos pequeños</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-primary mr-2" />
                  <span>Áreas de adoración al aire libre en entornos naturales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Trees className="h-5 w-5 text-primary mr-2" />
              <h3 className="font-playfair text-lg font-semibold">Áreas Recreativas</h3>
            </div>
            <p className="text-muted-foreground font-inter">
              Campos deportivos, senderos para caminatas y espacios de reunión al aire libre para actividades de formación de equipos y recreación.
            </p>
          </div>
          
          <div className="bg-muted p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Users className="h-5 w-5 text-primary mr-2" />
              <h3 className="font-playfair text-lg font-semibold">Comedor</h3>
            </div>
            <p className="text-muted-foreground font-inter">
              Amplio comedor donde los grupos pueden disfrutar de comidas nutritivas y comunión juntos.
            </p>
          </div>
          
          <div className="bg-muted p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Shield className="h-5 w-5 text-primary mr-2" />
              <h3 className="font-playfair text-lg font-semibold">Espacios de Oración</h3>
            </div>
            <p className="text-muted-foreground font-inter">
              Áreas tranquilas dedicadas para reflexión individual, oración y conexión con Dios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
