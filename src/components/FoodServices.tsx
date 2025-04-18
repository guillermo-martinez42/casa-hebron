
import { Coffee, Utensils, ShoppingBag, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const FoodServices = () => {
  return (
    <section id="food" className="py-20 bg-food-pattern bg-cover bg-fixed text-white">
      <div className="container mx-auto px-4">
        <div className="bg-black/50 backdrop-blur-sm p-8 md:p-12 rounded-xl max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Nutriendo Cuerpo y Alma</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg font-inter">
              Nuestro dedicado personal de cocina prepara comidas deliciosas y nutritivas que atienden las necesidades y requisitos dietéticos de tu grupo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
              <div className="flex items-center mb-4">
                <Coffee className="h-6 w-6 text-hebron-blue mr-3" />
                <h3 className="font-playfair text-xl font-semibold">Desayuno</h3>
              </div>
              <p className="font-inter mb-4 text-white/80">
                Comienza tu día con un desayuno nutritivo que energiza a tu grupo para el día que les espera.
              </p>
              <ul className="space-y-2 text-white/90">
                <li>• Frutas frescas y yogur</li>
                <li>• Opciones de cereales fríos y calientes</li>
                <li>• Huevos y proteínas para el desayuno</li>
                <li>• Productos horneados frescos</li>
                <li>• Café, té y jugos</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
              <div className="flex items-center mb-4">
                <Utensils className="h-6 w-6 text-hebron-blue mr-3" />
                <h3 className="font-playfair text-xl font-semibold">Almuerzo</h3>
              </div>
              <p className="font-inter mb-4 text-white/80">
                Comidas sustanciosas a mediodía para reabastecer a tu grupo durante sus actividades y programas.
              </p>
              <ul className="space-y-2 text-white/90">
                <li>• Barra de ensaladas frescas</li>
                <li>• Sopas caseras</li>
                <li>• Opciones de sándwiches y wraps</li>
                <li>• Selecciones de platos calientes</li>
                <li>• Guarniciones saludables y postres</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
              <div className="flex items-center mb-4">
                <ShoppingBag className="h-6 w-6 text-hebron-blue mr-3" />
                <h3 className="font-playfair text-xl font-semibold">Cena</h3>
              </div>
              <p className="font-inter mb-4 text-white/80">
                Termina el día con cenas satisfactorias de estilo casero que reúnen a todos.
              </p>
              <ul className="space-y-2 text-white/90">
                <li>• Platos principales rotativos</li>
                <li>• Opciones vegetarianas</li>
                <li>• Verduras frescas y guarniciones</li>
                <li>• Panes caseros</li>
                <li>• Selección de postres</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
            <h3 className="font-playfair text-xl font-semibold mb-3">Adaptaciones Dietéticas</h3>
            <p className="font-inter mb-6 text-white/80 max-w-2xl mx-auto">
              Con gusto acomodamos necesidades dietéticas especiales, incluyendo opciones vegetarianas, veganas, sin gluten, 
              y sensibles a alergias. Por favor, notifícanos de cualquier requerimiento al reservar.
            </p>
            <Button asChild variant="default" className="bg-hebron-blue hover:bg-hebron-blue/80 text-white group">
              <a href="#" className="flex items-center">
                <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                Descargar Menú de Ejemplo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodServices;
