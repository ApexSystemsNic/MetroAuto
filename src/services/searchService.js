import { partsService, maintenanceService } from './productService';
import { getUTVs } from './utvService';
import { getBrandById } from '../data/brands';

// Búsqueda global: nombre, SKU, código OEM, marca, modelo o categoría.
export function globalSearch(query) {
  const term = query.trim().toLowerCase();
  if (!term) return { parts: [], maintenance: [], utvs: [] };

  const parts = partsService.search(term);
  const maintenance = maintenanceService.search(term);

  const utvs = getUTVs().filter((utv) => {
    const brandName = getBrandById(utv.brand)?.name ?? '';
    const haystack = [utv.model, brandName, String(utv.year)].join(' ').toLowerCase();
    return haystack.includes(term);
  });

  return { parts, maintenance, utvs };
}
