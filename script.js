
const config = {
  nombre: "Mi Negocio",
  rubro: "Comercio",
  titulo: "Todo lo que tu negocio necesita",
  descripcion: "Conocé nuestros productos y contactanos fácilmente por WhatsApp.",
  textoSuperior: "BIENVENIDO A NUESTRO NEGOCIO",
  textoBoton: "Contactanos por WhatsApp",
  textoInferior: "Estamos para ayudarte.",
  fotoPortada: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  altFotoPortada: "Espacio de trabajo moderno",
  tituloFoto: "Tu negocio",
  subtituloFoto: "Un espacio para crecer",


  whatsapp: "",
  googleMaps: "",

  mensajeContacto:
    "Escribinos o encontranos en el mapa. ¡Te esperamos!",

  

tituloProductos: "Nuestros productos y servicios",
subtituloProductos: "Descubrí lo que tenemos para ofrecerte",
descripcionProductos: "Explorá nuestra selección y consultanos por WhatsApp.",



productos: [
  {
    categoria: "DESTACADOS",
    nombre: "Nuestro producto estrella",
    foto: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=85",
    alt: "Productos destacados"
  },
  {
    categoria: "NOVEDADES",
    nombre: "Descubrí lo nuevo",
    foto: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=700&q=85",
    alt: "Novedades del negocio"
  },
  {
    categoria: "RECOMENDADOS",
    nombre: "Elegidos para vos",
    foto: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=700&q=85",
    alt: "Selección de productos"
  }
],

  colores: {
  verde: "#2f6b3f",
  verdeClaro: "#e8f3e8",
  naranja: "#f29a38"
}
};

// Colores del diseño
document.documentElement.style.setProperty(
  "--green",
  config.colores.verde
);

// Colores del diseño
document.documentElement.style.setProperty(
  "--green",
  config.colores.verde
);

document.documentElement.style.setProperty(
  "--green-light",
  config.colores.verdeClaro
);

document.documentElement.style.setProperty(
  "--orange",
  config.colores.naranja
);

// Nombre del negocio
document.title = `${config.nombre} | Fresco y natural`;

// Título y descripción principal
document.getElementById("hero-title").innerHTML =
  config.titulo;

document.getElementById("hero-description").textContent =
  config.descripcion;

// Otros textos de la portada
document.getElementById("hero-eyebrow").textContent =
  config.textoSuperior;

document.getElementById("hero-button").firstChild.textContent =
  config.textoBoton + " ";

document.getElementById("hero-note").textContent =
  config.textoInferior;

document.getElementById("hero-image").src =
  config.fotoPortada;

document.getElementById("hero-image").alt =
  config.altFotoPortada;

document.getElementById("hero-image-title").textContent =
  config.tituloFoto;

document.getElementById("hero-image-note").textContent =
  config.subtituloFoto;

document.getElementById("products-eyebrow").textContent =
  config.subtituloProductos;

document.getElementById("products-title").innerHTML =
  config.tituloProductos;

document.getElementById("products-description").innerHTML =
  config.descripcionProductos;

// Crear las tarjetas automáticamente
document.getElementById("product-grid").innerHTML =
  config.productos.map((producto, indice) => `
    <article class="product-card">
      <img
        src="${producto.foto}"
        alt="${producto.alt}"
        loading="lazy"
      >

      <div class="product-info">
        <span>${String(indice + 1).padStart(2, "0")} / ${producto.categoria}</span>
        <h3>${producto.nombre}</h3>
      </div>
    </article>
  `).join("");

// Año automático
document.getElementById("year").textContent =
  new Date().getFullYear();

// Mensaje de contacto
document.getElementById("contact-message").textContent =
  config.mensajeContacto;

// Botón de WhatsApp
const whatsappLink = document.getElementById("whatsapp-link");
const numero = config.whatsapp.replace(/\D/g, "");

if (numero) {
  whatsappLink.href =
    `https://wa.me/${numero}?text=${encodeURIComponent(
      "Hola, quería hacer una consulta."
    )}`;

  whatsappLink.hidden = false;
} else {
  whatsappLink.hidden = true;
}

// Botón de Google Maps
const mapsLink = document.getElementById("maps-link");

if (config.googleMaps.trim()) {
  mapsLink.href = config.googleMaps;
  mapsLink.hidden = false;
} else {
  mapsLink.hidden = true;
}
