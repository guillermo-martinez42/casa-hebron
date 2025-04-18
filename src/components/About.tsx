
import { Heart, Users, Leaf } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">Nuestra Misión y Propósito</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground font-inter">
            Hebrón fue establecido como un lugar donde individuos y grupos pueden conectarse con Dios en la belleza de la naturaleza,
            lejos de las distracciones de la vida cotidiana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform hover:-translate-y-2">
            <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-playfair text-xl font-bold mb-3">Fe y Comunidad</h3>
            <p className="text-muted-foreground font-inter">
              Creamos espacios donde la fe crece y las comunidades fortalecen sus lazos a través de experiencias compartidas en la creación de Dios.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform hover:-translate-y-2">
            <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-playfair text-xl font-bold mb-3">Retiros y Crecimiento</h3>
            <p className="text-muted-foreground font-inter">
              Nuestras instalaciones proporcionan el ambiente perfecto para retiros espirituales, campamentos juveniles y experiencias grupales transformadoras.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform hover:-translate-y-2">
            <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-playfair text-xl font-bold mb-3">Servicio y Hospitalidad</h3>
            <p className="text-muted-foreground font-inter">
              Servimos con calidez y hospitalidad genuinas, asegurando que tu tiempo en Hebrón nutra tanto el cuerpo como el espíritu.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-testimonial-pattern bg-cover bg-center p-10 rounded-xl shadow-lg text-white">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-playfair italic text-xl md:text-2xl mb-6">
              "El Señor es mi pastor; nada me faltará. En lugares de delicados pastos me hará descansar; junto a aguas de reposo me pastoreará. Confortará mi alma."
            </p>
            <p className="font-semibold">Salmo 23:1-3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
