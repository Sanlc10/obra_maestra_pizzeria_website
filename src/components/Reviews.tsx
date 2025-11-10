import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "María González",
      text: "La mejor pizza que he probado en Puebla. La masa madre es increíble y los ingredientes de primera calidad. El ambiente es acogedor y el servicio excepcional.",
      rating: 5,
    },
    {
      name: "Carlos Ramírez",
      text: "Auténtica pizza napolitana en Puebla. Me encanta que usen ingredientes locales y la atención del personal siempre es cálida. Totalmente recomendado.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      text: "Un lugar mágico donde cada platillo es una obra de arte. Las pastas son deliciosas y las pizzas tienen el sabor perfecto. Definitivamente volveremos.",
      rating: 5,
    },
  ];

  return (
    <section id="resenas" className="py-20 bg-wood-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-accent mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Testimonios reales de nuestros comensales
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-wood-medium/30 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="fill-accent text-accent" size={20} />
                  ))}
                </div>
                <p className="text-primary-foreground/90 mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-semibold text-accent">— {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
