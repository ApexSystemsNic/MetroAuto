import { buildWhatsAppUrl } from '../config/business';
import { getVehicleBrandById } from '../data/vehicleBrands';

export function whatsAppUrlForProduct(product) {
  const parts = [
    `Hola MetroParts, estoy interesado en ${product.name}`,
    product.productBrand ? `(${product.productBrand})` : null,
    'que vi en su página web.',
  ].filter(Boolean);
  const skuLine = product.sku ? ` SKU: ${product.sku}.` : '';
  const message = `${parts.join(' ')}${skuLine} ¿Me pueden confirmar disponibilidad?`;
  return buildWhatsAppUrl(message);
}

export function whatsAppUrlForUTV(utv) {
  const brandName = getVehicleBrandById(utv.vehicleBrand)?.name ?? '';
  const label = [brandName, utv.model].filter(Boolean).join(' ');
  const message = `Hola MetroParts, estoy interesado en ${label}. ¿Me pueden brindar información sobre disponibilidad y precio?`;
  return buildWhatsAppUrl(message);
}

export function whatsAppUrlGeneric(message) {
  return buildWhatsAppUrl(message);
}
