
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    groupType: "",
    groupSize: "",
    dates: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData);
    alert("¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      groupType: "",
      groupSize: "",
      dates: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">Reserva Tu Estancia</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground font-inter">
            ¿Listo para experimentar Hebrón? Completa el formulario a continuación para consultar sobre disponibilidad y comenzar a planificar el retiro de tu grupo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-muted rounded-lg p-8">
            <h3 className="font-playfair text-2xl font-semibold mb-6">Formulario de Consulta</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium text-sm">Nombre Completo</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium text-sm">Correo Electrónico</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="font-medium text-sm">Número de Teléfono</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Tu número de teléfono"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="groupType" className="font-medium text-sm">Tipo de Grupo</label>
                  <select
                    id="groupType"
                    name="groupType"
                    value={formData.groupType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Selecciona tipo de grupo</option>
                    <option value="church">Grupo de Iglesia</option>
                    <option value="school">Escuela</option>
                    <option value="youth">Organización Juvenil</option>
                    <option value="family">Reunión Familiar</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="groupSize" className="font-medium text-sm">Tamaño del Grupo</label>
                  <select
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Selecciona tamaño del grupo</option>
                    <option value="small">Pequeño (10-25)</option>
                    <option value="medium">Mediano (26-50)</option>
                    <option value="large">Grande (51-100)</option>
                    <option value="xlarge">Extra Grande (101+)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="dates" className="font-medium text-sm">Fechas Preferidas</label>
                  <Input
                    id="dates"
                    name="dates"
                    value={formData.dates}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="dd/mm/aaaa - dd/mm/aaaa"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-medium text-sm">Información Adicional</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[120px]"
                  placeholder="Cuéntanos sobre tu grupo y cualquier requisito específico o pregunta..."
                />
              </div>

              <Button type="submit" className="w-full">Enviar Consulta</Button>
            </form>
          </div>

          <div className="lg:pl-8">
            <h3 className="font-playfair text-2xl font-semibold mb-6">Ponte en Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold mb-1">Ubicación</h4>
                  <p className="text-muted-foreground">
                    123 Calle Valle Tranquilo<br />
                    Colinas de Serenidad, ST 12345<br />
                    Estados Unidos
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold mb-1">Teléfono</h4>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold mb-1">Correo Electrónico</h4>
                  <p className="text-muted-foreground">reservas@hebroncamp.org</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold mb-1">Horario de Oficina</h4>
                  <p className="text-muted-foreground">
                    Lunes - Viernes: 9:00 AM - 5:00 PM<br />
                    Sábado: 9:00 AM - 12:00 PM<br />
                    Domingo: Cerrado
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-primary shrink-0 mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold mb-1">Información de Reserva</h4>
                  <p className="text-muted-foreground">
                    Recomendamos reservar con al menos 3-6 meses de anticipación para retiros de fin de semana y 
                    6-12 meses para campamentos de verano. Contáctanos para conocer la disponibilidad actual.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-primary/10 p-6 rounded-lg border border-primary/20">
              <h4 className="font-playfair text-lg font-semibold mb-2">¿Listo para visitar?</h4>
              <p className="text-muted-foreground mb-4">
                Estaremos encantados de programar un recorrido por nuestras instalaciones para líderes de grupo. 
                Contáctanos para organizar una visita y ver todo lo que Hebrón tiene para ofrecer.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <a href="tel:5551234567">Llamar para Programar un Recorrido</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
