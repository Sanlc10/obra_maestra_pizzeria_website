import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, MessageCircle, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const whatsappNumber = "522216050515"; // (+52) 221 605 0515
  const address = "C. Prol. de la 6 Nte. 4402-Local 4, Santiago Momoxpan, San Diego los Sauces, 72760 Santiago Momoxpan, Pue., México";
  const phoneDisplay = "+52 221 605 0515";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `Hola! Soy ${formData.name}.\nEmail: ${formData.email}\n\nMensaje: ${formData.message}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
    
    toast({
      title: "¡Perfecto!",
      description: "Te estamos redirigiendo a WhatsApp",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-foreground/70">
            Estamos aquí para servirte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Dirección</h3>
                    <p className="text-foreground/70">{address}</p>
                    <Button
                      variant="link"
                      className="text-primary hover:text-primary/80 p-0 h-auto mt-2"
                      onClick={() =>
                        window.open(
                          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
                          "_blank"
                        )
                      }
                    >
                      Ver en Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Teléfono</h3>
                    <p className="text-foreground/70">{phoneDisplay}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Horarios</h3>
                    <div className="space-y-1 text-foreground/70">
                      <p>Lunes a Jueves: 1:00 PM - 10:00 PM</p>
                      <p>Viernes a Domingo: 1:00 PM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={() => window.open("https://facebook.com/obramaestrapizzeria", "_blank")}
              >
                <Facebook className="mr-2" size={20} />
                Facebook
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={() => window.open("https://instagram.com/obramaestrapizzeria", "_blank")}
              >
                <Instagram className="mr-2" size={20} />
                Instagram
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <h3 className="font-playfair text-2xl font-bold mb-6">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Enviar por WhatsApp
                </Button>
                <p className="text-xs text-center text-foreground/60">
                  Al enviar, serás redirigido a WhatsApp para completar tu mensaje
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
