import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Leaf, Flame } from "lucide-react";

const Menu = () => {
  const menuSections = [
    {
      title: "Entradas & Snacks",
      items: [
        { name: "Pan con ajo", description: "4 piezas", price: "$59" },
        { name: "Bruschettas de la casa", description: "Majestuosa verdura al vino, 2 pzs", price: "$85", vegetarian: true },
        { name: "Bruschettas con Jamón Serrano", description: "2 piezas", price: "$105" },
        { name: "Papas a la francesa", description: "250 gr", price: "$59" },
        { name: "Papas gajo", description: "250 gr", price: "$69" },
        { name: "Aros de cebolla", description: "12 piezas", price: "$80" },
        { name: "Alitas Rubens", description: "Maceración de 24 hs en Lemon Pepper - Orden: 12 pzs / Media orden: 6 pzs", price: "$199 / $105", spicy: true },
        { name: "Alitas naturales", description: "Con salsa Buffalo, Mango habanero, BBQ o Habanero - Orden: 12 pzs / Media orden: 6 pzs", price: "$169 / $96", spicy: true },
      ],
    },
    {
      title: "Pizzas Artesanales Estilo Napolitana",
      subtitle: "Masa suave, ligera y delgada, con bordes altos y anchos",
      items: [
        { name: "Margarita", description: "La diosa de la pizza vestida con rodajas de jitomate, queso y albahaca", price: "CH $89 / M $155 / GDE $199", vegetarian: true },
        { name: "Gioconda", description: "La más famosa, la de pepperoni", price: "CH $89 / M $159 / GDE $224" },
        { name: "Coliseo Romano", description: "Un espectáculo de champiñones al ajillo", price: "CH $99 / M $205 / GDE $295", vegetarian: true },
        { name: "La Roma", description: "Donde el jamón conquista a la piña", price: "CH $89 / M $159 / GDE $245" },
        { name: "Dante", description: "Poema de queso de cabra, parmesano, roquefort y mix de quesos de la casa", price: "CH $105 / M $224 / GDE $349", vegetarian: true },
        { name: "El Renacimiento", description: "Mismo poema que la Dante pero renace al acompañar con manzana", price: "CH $115 / M $224 / GDE $325", vegetarian: true },
        { name: "Donatello", description: "Realizada con una técnica de embutidos artesanales gourmet", price: "CH $115 / M $224 / GDE $299" },
        { name: "Raffaello", description: "Pintura de carne molida, con aceitunas negras y pimientos", price: "CH $115 / M $215 / GDE $331" },
        { name: "Caravaggio", description: "Sensacional mezcla de longaniza, jalapeño y cebolla morada", price: "$199", spicy: true },
        { name: "Florencia", description: "Paisaje de pimientos, cebolla morada, champiñones, aceitunas y espárragos", price: "CH $105 / M $199 / GDE $289", vegetarian: true },
        { name: "El David", description: "Escultural pizza blanca trufada, queso de la montaña, pasta de trufa, hongos y aceite trufado", price: "$181", vegetarian: true },
        { name: "Picasso", description: "Pintura que deleita con col de Bruselas, tomate cherry, alcaparras, aceituna negra y pollo", price: "$129" },
        { name: "Frida Kahlo", description: "Hermoso cuadro de carne al pastor", price: "CH $119 / M $229 / GDE $309", spicy: true },
        { name: "Leonardo Da Vinci", description: "Una genialidad de camarones y espárragos", price: "CH $129 / M $245 / GDE $379" },
        { name: "Miguel Ángel", description: "Monumento de higo, arúgula y jamón serrano", price: "CH $129 / M $275 / GDE $459" },
      ],
      note: "Al pedir mitades diferentes se te cobrará la de mayor precio.",
    },
    {
      title: "Pastas",
      items: [
        { name: "Sicilia individual", description: "Como esta preciosa isla, la lasagna te dejará sin aliento - 220 gr", price: "$145" },
        { name: "Sicilia (para compartir)", description: "La Sicilia original en su versión para compartir - 450 gr", price: "$235" },
        { name: "Venecia", description: "Pasta cubierta de una deliciosa crema de queso roquefort, acompañado de uva verde y panceta - 250 gr", price: "$169" },
        { name: "Amberes", description: "Esta pasta te enamorará en su suculenta crema de quesos chipileños - 250 gr", price: "$189", vegetarian: true },
        { name: "Positano", description: "Esta pasta se distingue por sus coles de Bruselas, alcaparras, aceitunas, pollo y cherry - 350 gr", price: "$215" },
        { name: "Viena", description: "Acompañada de crema, espinaca y panceta - 300 gr", price: "$181" },
        { name: "Valencia", description: "Hermoso paseo de pasta a la bolognesa - 300 gr", price: "$159" },
        { name: "Toscana", description: "Con la original receta de Obra Maestra, esta pasta se acompaña de champiñones al ajillo y camarones - 300 gr", price: "$215" },
        { name: "Verona", description: "Deliciosa pasta a la mantequilla - 220 gr", price: "$135", vegetarian: true },
      ],
    },
    {
      title: "Ensaladas",
      items: [
        { name: "Bocelli", description: "Ópera de frutos rojos, nuez y queso de cabra en vinagreta balsámica", price: "$189", vegetarian: true },
        { name: "María Callas", description: "Divina torre de jitomate y queso mozzarella, acompañado de pesto de Jamaica", price: "$225", vegetarian: true },
        { name: "Caruso", description: "Concierto de aceituna verde, jamón serrano, esferas de queso de cabra, nuez garapinada, durazno en almíbar y alcaparras. Aderezo de queso azul", price: "$235" },
        { name: "Pavarotti", description: "Melodía de pollo marinado, pimiento morrón, aceitunas negras en vinagreta", price: "$169" },
        { name: "Ramazzotti", description: "Mezcla popera de jamón serrano, higo, arúgula y queso de cabra en vinagreta", price: "$225" },
      ],
    },
    {
      title: "Postres",
      items: [
        { name: "Brownie", description: "Precioso cuadro de arte de chocolate clásico con trozos de nuez", price: "$85" },
        { name: "Brownie con helado", description: "Precioso cuadro de chocolate con helado de vainilla", price: "$95" },
        { name: "Pizza de nutella (individual)", description: "Una de las obras más aclamadas por sus frutos rojos y nuez", price: "$95" },
        { name: "Pizza de nutella (30 cm)", description: "Para compartir en familia", price: "$139" },
        { name: "Flan de coco de la Nonna", description: "Receta tradicional de la abuela", price: "$75" },
        { name: "Strudel de manzana con helado", description: "Suculento hojaldre con manzana y helado de vainilla", price: "$109" },
      ],
    },
    {
      title: "Bebidas",
      items: [
        { name: "Clericot Tinto", description: "Preparado con tempranillo con fresa, zarzamora y mora azul - 1,500 ml", price: "$319" },
        { name: "Clericot Rosado", description: "Preparado con Veneto Rosé con uva verde, uva roja y frambuesa - 400 ml", price: "$99" },
        { name: "Limonada", description: "1,500 ml / 400 ml", price: "$159 / $44" },
        { name: "Refresco", description: "Coca Cola, Coca Cola Light, Manzanita, Sprite - 330 ml", price: "$48" },
        { name: "Agua de sabor", description: "1,500 ml / 600 ml", price: "$129 / $59" },
        { name: "Tisana", description: "Infusión caliente - 400 ml", price: "$52" },
        { name: "Agua embotellada", description: "600 ml", price: "$44" },
        { name: "Soda Italiana", description: "Blueberry, maracuyá, mango y tamarindo - 400 ml", price: "$59" },
        { name: "Café", description: "Espresso / Americano / Capuccino - 240 ml", price: "$48" },
        { name: "Cerveza Heineken", description: "355 ml", price: "$65" },
        { name: "Cerveza Artesanal", description: "Indio, XX Lager, Bohemia, Tecate Light - 325-355 ml", price: "$55-$65" },
        { name: "Copa de vino Tempranillo", description: "", price: "$59" },
        { name: "Botella de vino Tempranillo", description: "750 ml", price: "$309" },
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 bg-wood-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-accent">
            Nuestro Menú
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Agradecemos tu paciencia. Los artistas de Obra Maestra preparan los platillos al momento.
          </p>
          <div className="flex gap-4 justify-center mt-6 text-sm">
            <div className="flex items-center gap-2">
              <Leaf className="text-olive-light" size={18} />
              <span>Vegetariano</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="text-primary" size={18} />
              <span>Picante</span>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
          {menuSections.map((section, index) => (
            <AccordionItem
              key={index}
              value={`section-${index}`}
              className="bg-wood-medium/30 backdrop-blur-sm rounded-lg border border-primary/20 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-primary/10 transition-colors">
                <div className="text-left">
                  <h3 className="font-playfair text-2xl font-bold text-accent">
                    {section.title}
                  </h3>
                  {section.subtitle && (
                    <p className="text-sm text-primary-foreground/70 mt-1">{section.subtitle}</p>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 pt-2">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border-b border-primary/10 pb-3 last:border-0"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-lg text-primary-foreground">
                              {item.name}
                            </h4>
                            {item.vegetarian && <Leaf className="text-olive-light flex-shrink-0" size={16} />}
                            {item.spicy && <Flame className="text-primary flex-shrink-0" size={16} />}
                          </div>
                          <p className="text-sm text-primary-foreground/70 mt-1">
                            {item.description}
                          </p>
                        </div>
                        <span className="font-bold text-accent whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                  {section.note && (
                    <p className="text-xs text-primary-foreground/60 italic mt-4">{section.note}</p>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Menu;
