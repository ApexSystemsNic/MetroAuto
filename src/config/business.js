// Información oficial de MetroParts Nicaragua. Fuente central: ningún
// componente debe escribir estos datos directamente.
export const businessConfig = {
  name: 'MetroParts Nicaragua',
  shortName: 'MetroParts',
  slogan: '¡Tu auto, nuestro compromiso!',

  contact: {
    phoneDisplay: '+505 8549-7897',
    phone: '50585497897',
    whatsapp: '50585497897',
  },

  instagram: {
    username: '@metroparts_nic',
    url: 'https://www.instagram.com/metroparts_nic',
  },

  // La ubicación oficial es el enlace de Google Maps entregado por el
  // cliente. No fue posible resolverlo automáticamente (Google Maps e
  // Instagram están bloqueados por la política de red de este entorno),
  // así que se usa como botón de navegación mientras no se disponga de
  // dirección/coordenadas verificadas para completar este objeto.
  googleMaps: {
    shortUrl: 'https://maps.app.goo.gl/qZC7yXDd56QdectX6',
    address: null,
    latitude: null,
    longitude: null,
    embedUrl: null,
  },

  city: 'Managua, Nicaragua',
};

export function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${businessConfig.contact.whatsapp}?text=${encoded}`;
}
