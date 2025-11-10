import freshIngredientsImage from "@/assets/about-pizza-hq.jpg";

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={freshIngredientsImage}
              alt="Ingredientes frescos para pizza artesanal"
              className="rounded-lg shadow-medium w-full h-auto"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hacemos del arte, tu casa
            </h2>
            
            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              <p>
                Obra Maestra nace para brindar una experiencia que busca destacar el detalle, 
                amor y talento de nuestra comunidad: colaboradores, proveedores, comensales, 
                músicos, artistas, vecinos y colegas.
              </p>
              
              <p>
                Como buenos artistas disfrutamos el proceso artesanal y es por ello que, bajo 
                un método francés, fermentamos nuestra masa madre para con ella elaborar nuestras 
                pizzas y panes. Asimismo, la mayoría de los insumos que usamos son de San Pedro 
                Cholula, Chipilo y Zacatlán, logrando así el sabor y textura que tanto gusta.
              </p>
              
              <p>
                Obra Maestra nace para visibilizar el arte como algo cotidiano pero muy bello, 
                porque un pan con ajo, una pasta al dente, una pizza con la orilla suave, un 
                servicio cálido, una cena compartida con quienes más amas, no podría ser posible, 
                si cada persona no hiciera su trabajo con el amor con el que trabaja un artista.
              </p>
              
              <p className="font-semibold text-primary text-xl mt-6">
                Estamos para servirte, gracias por disfrutar con nosotros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
