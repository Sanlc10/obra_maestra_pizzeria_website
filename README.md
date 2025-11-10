# Obra Maestra Pizzería - Sitio Web Oficial

Sitio web oficial de **Obra Maestra Pizzería**, ubicada en Santiago Momoxpan, Puebla, México. Una pizzería artesanal que combina el arte culinario con ingredientes locales y masa madre fermentada al estilo francés.

## Descripción del Proyecto

Este es el sitio web corporativo de Obra Maestra Pizzería, diseñado para brindar a los clientes una experiencia visual atractiva y facilitar el contacto directo a través de WhatsApp. El sitio incluye información sobre el restaurante, menú, galería de imágenes, reseñas y datos de contacto.

## Características Principales

- **Diseño Responsivo**: Totalmente adaptable a dispositivos móviles, tabletas y escritorio
- **Hero Artístico**: Banner inspirado en pintura renacentista con branding integrado
- **Carousel Interactivo**: Galería dinámica con 13 imágenes, auto-play y navegación múltiple
- **Navegación Fluida**: Scroll suave entre secciones con menú de navegación sticky
- **Integración WhatsApp**: Botones de contacto directo al número del negocio (+52 221 605 0515)
- **Formulario de Contacto**: Envío de mensajes directo a WhatsApp
- **Optimización de Imágenes**: Formato WebP y JPG optimizado para carga rápida
- **Animaciones Suaves**: Efectos hover y transiciones elegantes en botones y controles

## Tecnologías Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca principal de UI
- **TypeScript** - Lenguaje de programación tipado
- **Vite 5.4.19** - Build tool y servidor de desarrollo
- **React Router DOM 6.30.1** - Enrutamiento del lado del cliente

### UI/Styling
- **Tailwind CSS 3.4.17** - Framework de estilos utility-first
- **shadcn/ui** - Componentes de UI basados en Radix UI
- **Embla Carousel React 8.6.0** - Carousel ligero y performante
- **Lucide React** - Iconos modernos
- **Tailwind Animate** - Animaciones personalizadas

### Formularios y Validación
- **React Hook Form 7.61.1** - Manejo de formularios
- **Zod 3.25.76** - Validación de schemas

### Estado y Queries
- **TanStack Query 5.83.0** - Manejo de estado del servidor
- **Sonner** - Notificaciones toast

## Estructura del Proyecto

```
obra-maestra-pizzeria-main/
├── public/                 # Archivos públicos estáticos
│   ├── favicon.ico
│   ├── robots.txt
│   └── placeholder.svg
├── carrousel/             # Imágenes del carousel (13 fotos)
│   ├── banner_obra_maestra.png
│   ├── pizza_horno.jpg
│   ├── el_david_pizza.jpg
│   └── ... (más imágenes)
├── src/
│   ├── assets/            # Imágenes y recursos
│   │   ├── logo.png
│   │   ├── banner_obra_maestra.png
│   │   ├── hero-pizza-oven.jpg
│   │   ├── pizza-margherita.webp
│   │   ├── fresh-ingredients.webp
│   │   ├── restaurant-interior.webp
│   │   └── about-pizza-hq.jpg
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes shadcn/ui
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Menu.tsx
│   │   ├── Gallery.tsx
│   │   ├── Reviews.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilidades
│   ├── pages/            # Páginas
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx           # Componente raíz
│   ├── main.tsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

## Secciones del Sitio Web

### 1. Hero (Inicio)
- Banner artístico inspirado en pintura renacentista
- Logo "OBRA MAESTRA - PIZZERÍA -" integrado en la imagen
- Botones de acción con animaciones hover en la parte inferior:
  - "Ver Menú" (scroll automático a sección menú)
  - "Contactar por WhatsApp" (enlace directo)
- Efectos: Scale hover y shadow elevation
- Posición de imagen: right center

### 2. Nosotros (About)
- Historia y filosofía de Obra Maestra
- Descripción del proceso artesanal
- Información sobre ingredientes locales
- Imagen destacada de pizza artesanal

### 3. Menú
- Listado de pizzas disponibles con descripciones
- Precios y tamaños
- Ingredientes destacados

### 4. Galería - Carousel Interactivo
- **13 imágenes de alta calidad** de Obra Maestra Pizzería:
  - Pizzas artesanales en horno de leña
  - Platillos gourmet (El David, Rafaello, pasta, ensaladas)
  - Proceso artesanal (amasado de masa madre)
  - Servicio y experiencia del cliente
  - Interior acogedor del restaurante
- **Navegación múltiple**:
  - Flechas izquierda/derecha (aparecen al hover)
  - Dots indicadores clickeables
  - Teclado (← →)
  - Touch/swipe en móviles
- **Auto-play**: Cambio automático cada 5 segundos
- **Transiciones**: Slide suave con Embla Carousel
- **Overlay**: Descripción de cada imagen en la parte inferior
- **Contador**: Indica posición actual (ej: "5 / 13")
- **Completamente responsivo**: Aspect ratio 16:9

### 5. Reseñas
- Testimonios de clientes
- Sistema de valoración con estrellas

### 6. Contacto
- Información de ubicación con enlace a Google Maps
- Teléfono de contacto: +52 221 605 0515
- Horarios de atención
- Enlaces a redes sociales (Facebook e Instagram)
- Formulario de contacto que redirige a WhatsApp

### 7. Footer
- Copyright
- Enlaces rápidos
- Información legal

## Instalación y Configuración

### Requisitos Previos
- Node.js 18+ y npm
- Git

### Instalación Local

1. Clonar el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
cd obra-maestra-pizzeria-main
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar servidor de desarrollo:
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:8080`

### Scripts Disponibles

```bash
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Construye para producción
npm run build:dev    # Construye en modo desarrollo
npm run lint         # Ejecuta el linter
npm run preview      # Preview del build de producción
```

## Despliegue en Vercel

### Configuración Automática
Vercel detecta automáticamente proyectos Vite y aplica la configuración óptima.

### Pasos para Desplegar

1. **Conectar Repositorio en Vercel**:
   - Ir a [vercel.com](https://vercel.com)
   - Click en "Add New Project"
   - Importar tu repositorio de GitHub
   - Vercel detectará automáticamente la configuración de Vite

2. **Configuración del Proyecto** (automática):
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Variables de Entorno** (si las hay):
   - No se requieren para este proyecto

4. **Deploy**:
   - Click en "Deploy"
   - Vercel construirá y desplegará automáticamente

### Configuración de Build

El proyecto ya está configurado correctamente con:
- `vite.config.ts` optimizado
- Path aliases configurados (`@/`)
- Plugins de React con SWC para mejor rendimiento
- Servidor configurado para puerto 8080

## Información de Contacto

**Obra Maestra Pizzería**

- **Dirección**: C. Prol. de la 6 Nte. 4402-Local 4, Santiago Momoxpan, San Diego los Sauces, 72760 Puebla, México
- **Teléfono/WhatsApp**: +52 221 605 0515
- **Instagram**: [@obramaestrapizzeria](https://instagram.com/obramaestrapizzeria)
- **Facebook**: [Obra Maestra Pizzería](https://facebook.com/ObraMaestraPizzeria)

### Horarios
- Lunes a Jueves: 1:00 PM - 10:00 PM
- Viernes a Domingo: 1:00 PM - 11:00 PM

## Características Técnicas

### Optimizaciones
- Imágenes en formato WebP para mejor compresión
- Lazy loading de componentes
- Code splitting automático con Vite
- Fuentes optimizadas con Google Fonts (Playfair Display + Inter)
- CSS optimizado con Tailwind CSS y purge automático

### Accesibilidad
- Semantic HTML
- Alt text en todas las imágenes
- Navegación por teclado
- Contrast ratios accesibles

### SEO
- Meta tags optimizados
- Open Graph para redes sociales
- Robots.txt configurado
- Sitemap automático

## Soporte de Navegadores

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)
- Dispositivos móviles iOS y Android

## Licencia

© 2024 Obra Maestra Pizzería. Todos los derechos reservados.

---

**Desarrollado para Obra Maestra Pizzería** - Donde el arte culinario cobra vida
