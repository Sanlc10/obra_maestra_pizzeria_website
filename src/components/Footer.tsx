const Footer = () => {
  return (
    <footer className="bg-wood-dark text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-playfair text-2xl font-bold text-accent mb-2">
          Obra Maestra Pizzería
        </h3>
        <p className="text-sm text-primary-foreground/70 mb-4">
          Hacemos del arte, tu casa
        </p>
        <p className="text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Obra Maestra Pizzería. Todos los derechos reservados.
        </p>
        <p className="text-xs text-primary-foreground/60 mt-2">
          @obramaestrapizzeria
        </p>
      </div>
    </footer>
  );
};

export default Footer;
