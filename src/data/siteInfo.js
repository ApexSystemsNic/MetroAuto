// Información general del negocio. Editar aquí cuando se disponga de los
// datos exactos (dirección, horarios, redes, mapa) — el resto del sitio
// ya está preparado para mostrarlos en cuanto se completen.
export const siteInfo = {
  name: 'MetroAutos Nicaragua',
  tagline: 'Partes y Accesorios',
  phone: '+505 8956 8944',
  whatsapp: '50589568944',
  whatsappDisplay: '+505 8956 8944',
  city: 'Managua, Nicaragua',
  address: '', // Pendiente: dirección exacta.
  hours: '', // Pendiente: horarios de atención.
  email: '', // Pendiente: correo de contacto.
  facebook: '', // Pendiente: enlace de Facebook.
  instagram: '', // Pendiente: enlace de Instagram.
  mapsEmbedUrl: '', // Pendiente: URL de Google Maps Embed.
  mapsUrl: '', // Pendiente: enlace "Cómo llegar".
};

export function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteInfo.whatsapp}?text=${encoded}`;
}
