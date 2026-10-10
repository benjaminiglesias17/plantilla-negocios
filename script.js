
const config = {
  nombre: "Mi Negocio",
  rubro: "Comercio",
  titulo: "Todo lo que tu negocio necesita",
  descripcion: "Conocé nuestros productos y contactanos fácilmente por WhatsApp.",
  textoSuperior: "BIENVENIDO A NUESTRO NEGOCIO",
  textoBoton: "Contactanos por WhatsApp",
  textoInferior: "Estamos para ayudarte.",

  whatsapp: "",
  googleMaps: "",

  mensajeContacto:
    "Escribinos o encontranos en el mapa. ¡Te esperamos!",

  
tituloProductos: "Color que hace <em>bien.</em>",
subtituloProductos: "NUESTRA SELECCIÓN",
descripcionProductos: "Productos para disfrutar<br>todos los días.",

productos: [
  {
    categoria: "FRUTAS",
    nombre: "Dulces y naturales",
    foto: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=700&q=85",
    alt: "Frutas frescas"
  },
  {
    categoria: "VERDURAS",
    nombre: "Frescura en tu mesa",
    foto: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=85",
    alt: "Verduras frescas"
  },
  {
    categoria: "VIDA NATURAL",
    nombre: "Ideas para disfrutar",
    foto: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85",
    alt: "Ensalada con ingredientes frescos"
  }
],

  colores: {
    verde: "#234c38",
    verdeClaro: "#e5eddf",
    naranja: "#d58a4c"
  }
};

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
