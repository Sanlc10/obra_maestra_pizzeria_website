import pizzaMargherita from "@/assets/pizza-margherita.webp";
import freshIngredients from "@/assets/fresh-ingredients.webp";
import restaurantInterior from "@/assets/restaurant-interior.webp";
import heroImage from "@/assets/hero-pizza-oven.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Horno de leña artesanal con pizza fresca" },
    { src: pizzaMargherita, alt: "Pizza Margherita con ingredientes frescos" },
    { src: freshIngredients, alt: "Ingredientes frescos locales" },
    { src: restaurantInterior, alt: "Interior acogedor de la pizzería" },
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Galería
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Un vistazo a nuestra pasión por el arte culinario
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-medium aspect-square md:aspect-video"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-wood-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-primary-foreground font-semibold text-lg">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
