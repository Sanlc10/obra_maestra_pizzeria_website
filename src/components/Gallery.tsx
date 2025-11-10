import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Importar imágenes del carousel
const carouselImages = [
  { src: "/carrousel/pizza_horno.jpg", alt: "Pizza artesanal saliendo del horno de leña" },
  { src: "/carrousel/el_david_pizza.jpg", alt: "Pizza El David - Especialidad de la casa" },
  { src: "/carrousel/pizza_masa_madre.jpg", alt: "Pizza con masa madre fermentada" },
  { src: "/carrousel/mesa_compartiendo.jpg", alt: "Familia compartiendo pizza" },
  { src: "/carrousel/pizza_al_horno.jpg", alt: "Pizza cocinándose en horno de leña" },
  { src: "/carrousel/ensalada_caruso.jpg", alt: "Ensalada Caruso fresca" },
  { src: "/carrousel/mesero_pizza.jpg", alt: "Servicio de pizza recién horneada" },
  { src: "/carrousel/sandwich_crocante.jpg", alt: "Sandwich crocante artesanal" },
  { src: "/carrousel/pizza_rafaello.jpg", alt: "Pizza Rafaello gourmet" },
  { src: "/carrousel/pasta_toscana.jpg", alt: "Pasta Toscana casera" },
  { src: "/carrousel/bruchetas.jpg", alt: "Bruchetas con ingredientes frescos" },
  { src: "/carrousel/hombre_amasando.jpg", alt: "Artesano amasando masa madre" },
  { src: "/carrousel/place_pic.jpg", alt: "Interior acogedor de Obra Maestra" },
];

const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    duration: 20,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Navegar a la imagen anterior
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Navegar a la siguiente imagen
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Navegar a una imagen específica
  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Actualizar el índice seleccionado
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Configurar eventos y auto-play
  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Auto-play cada 5 segundos
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPrev, scrollNext]);

  return (
    <section id="galeria" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Galería
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Un vistazo a nuestra pasión por el arte culinario
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto relative group">
          {/* Embla Carousel */}
          <div className="overflow-hidden rounded-lg shadow-medium" ref={emblaRef}>
            <div className="flex">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 relative"
                  style={{ aspectRatio: "16/9" }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  {/* Overlay con descripción */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/80 via-transparent to-transparent flex items-end p-6 md:p-8">
                    <p className="text-primary-foreground font-semibold text-lg md:text-xl drop-shadow-lg">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles de navegación */}
          <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
            {/* Botón anterior */}
            <Button
              onClick={scrollPrev}
              variant="outline"
              size="icon"
              className="pointer-events-auto h-12 w-12 rounded-full bg-primary-foreground/90 hover:bg-primary-foreground border-none shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-6 w-6 text-wood-dark" />
            </Button>

            {/* Botón siguiente */}
            <Button
              onClick={scrollNext}
              variant="outline"
              size="icon"
              className="pointer-events-auto h-12 w-12 rounded-full bg-primary-foreground/90 hover:bg-primary-foreground border-none shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="h-6 w-6 text-wood-dark" />
            </Button>
          </div>

          {/* Indicadores (dots) */}
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-foreground/30 hover:bg-foreground/50"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador de imágenes */}
          <div className="text-center mt-4">
            <p className="text-sm text-foreground/60">
              {selectedIndex + 1} / {carouselImages.length}
            </p>
          </div>
        </div>

        {/* Instrucciones de navegación */}
        <div className="text-center mt-8">
          <p className="text-sm text-foreground/50">
            Usa las flechas del teclado o desliza para navegar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
