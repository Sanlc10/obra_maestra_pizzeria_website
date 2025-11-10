import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-pizza-oven.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  const whatsappNumber = "522216050515"; // (+52) 221 605 0515
  const whatsappMessage = encodeURIComponent(
    "Hola! Me gustaría hacer una reservación en Obra Maestra Pizzería."
  );

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/80 via-wood-dark/70 to-wood-dark/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex justify-center mb-6 animate-fade-in">
          <img src={logo} alt="Obra Maestra Pizzería" className="h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl" />
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 drop-shadow-2xl animate-fade-in">
          Obra Maestra
          <span className="block text-3xl md:text-5xl lg:text-6xl text-accent mt-2">
            Pizzería
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
          Donde el arte culinario cobra vida. Masa madre fermentada al estilo francés con 
          ingredientes locales de Cholula, Chipilo y Zacatlán.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-medium"
            onClick={() => {
              document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver Menú
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-wood-dark font-semibold px-8 py-6 text-lg shadow-medium"
            onClick={() =>
              window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")
            }
          >
            <MessageCircle className="mr-2" size={20} />
            Contactar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
