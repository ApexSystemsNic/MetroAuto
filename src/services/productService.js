import { partProducts } from '../data/partProducts';
import { maintenanceProducts } from '../data/maintenanceProducts';
import { partCategories } from '../data/partCategories';
import { maintenanceCategories } from '../data/maintenanceCategories';
import { createCatalogService } from './catalogService';

// Servicios independientes: Repuestos y Mantenimiento no comparten estado
// ni resultados de filtrado entre sí, aunque reutilicen la misma lógica base.
export const partsService = createCatalogService(partProducts, partCategories);
export const maintenanceService = createCatalogService(maintenanceProducts, maintenanceCategories);

export function getProductById(id) {
  return partsService.getById(id) ?? maintenanceService.getById(id);
}

export function getFeaturedParts(limit = 4) {
  return partProducts.filter((product) => product.stock > 0).slice(0, limit);
}

export function getFeaturedMaintenance(limit = 4) {
  return maintenanceProducts.filter((product) => product.stock > 0).slice(0, limit);
}

// Combina categorías de Repuestos y Mantenimiento disponibles para una marca,
// usado únicamente por el buscador rápido de Inicio para dirigir al catálogo
// correcto (cada catálogo sigue siendo independiente en sus propias páginas).
export function getCombinedAvailableCategories(brand) {
  const parts = partsService
    .getAvailableCategories(brand)
    .map((category) => ({ ...category, source: 'repuestos' }));
  const maintenance = maintenanceService
    .getAvailableCategories(brand)
    .map((category) => ({ ...category, source: 'mantenimiento' }));
  return [...parts, ...maintenance];
}

export function getCombinedAvailableModels(brand, categoryId, source) {
  if (source === 'mantenimiento') return maintenanceService.getAvailableModels(brand, categoryId);
  if (source === 'repuestos') return partsService.getAvailableModels(brand, categoryId);
  const brandOnly = brand
    ? new Set([...partsService.getAvailableModels(brand), ...maintenanceService.getAvailableModels(brand)])
    : new Set();
  return Array.from(brandOnly).sort();
}
