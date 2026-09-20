import { buildWhatsAppUrl } from '../data/siteInfo';
import { getBrandById } from '../data/brands';

export function whatsAppUrlForProduct(product) {
  const message = `Hola, vi el producto ${product.name} en la página de MetroAutos Nicaragua. ¿Me pueden confirmar disponibilidad y precio?`;
  return buildWhatsAppUrl(message);
}

export function whatsAppUrlForUTV(utv) {
  const brandName = getBrandById(utv.brand)?.name ?? '';
  const label = [brandName, utv.model].filter(Boolean).join(' ');
  const message = `Hola, estoy interesado en el ${label} publicado en MetroAutos Nicaragua. ¿Me pueden brindar más información?`;
  return buildWhatsAppUrl(message);
}

export function whatsAppUrlGeneric(message) {
  return buildWhatsAppUrl(message);
}
