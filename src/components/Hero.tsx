import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import bannerImage from "@/assets/banner_obra_maestra.png";

const Hero = () => {
  const whatsappNumber = "522216050515"; // (+52) 221 605 0515
  const whatsappMessage = encodeURIComponent(
    "Hola! Me gustaría hacer una reservación en Obra Maestra Pizzería."
  );

  return (
    <section id="inicio" className="relative min-h-screen flex items-end justify-center pt-20 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 hero-background"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "92.5% center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Media query para desktop */}
          <style>{`
            @media (min-width: 768px) {
              .hero-background {
                background-position: right center !important;
              }
            }
          `}</style>
        </div>
        {/* Overlay sutil para mejorar legibilidad de botones */}
        <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/70 via-wood-dark/20 to-transparent md:from-wood-dark/60 md:via-transparent" />
      </div>

      {/* Botones de acción en la parte inferior */}
      <div className="container mx-auto px-4 relative z-10 pb-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => {
              document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver Menú
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-primary-foreground/95 hover:bg-primary-foreground border-2 border-primary text-wood-dark hover:text-wood-dark font-semibold px-8 py-6 text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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
