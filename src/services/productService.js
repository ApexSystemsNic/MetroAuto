import { products } from '../data/products';
import { vehicleBrands } from '../data/vehicleBrands';
import { categories, getCategoryById } from '../data/categories';

// Capa de servicios: toda la lógica de filtrado/búsqueda vive aquí, separada
// de los componentes. Cuando exista un backend, basta con reescribir estas
// funciones para que consulten una API en lugar de `data/products.js` — los
// componentes que las consumen no necesitan cambiar.

function productMatchesVehicle(product, vehicleBrand, model) {
  if (!vehicleBrand) return true;
  if (product.compatibilityType === 'universal') return true;
  const entry = product.compatibility.find((item) => item.brand === vehicleBrand);
  if (!entry) return false;
  if (!model) return true;
  if (entry.models.length === 0) return true;
  return entry.models.includes(model);
}

function scopedProducts(scope = {}) {
  const { category } = scope;
  return category ? products.filter((product) => product.category === category) : products;
}

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug) ?? null;
}

export function getFeaturedProducts(limit = 8) {
  return products.filter((product) => product.featured).slice(0, limit);
}

// Marcas de vehículo con al menos un producto compatible (opcionalmente
// acotado a una categoría, usado por el flujo independiente de Mantenimiento).
export function getAvailableVehicleBrands(scope = {}) {
  const pool = scopedProducts(scope);
  const brandIds = new Set();
  pool.forEach((product) => {
    if (product.compatibilityType === 'universal') return;
    product.compatibility.forEach((entry) => brandIds.add(entry.brand));
  });
  return vehicleBrands.filter((brand) => brandIds.has(brand.id));
}

export function getAvailableVehicleModels(vehicleBrand, scope = {}) {
  if (!vehicleBrand) return [];
  const pool = scopedProducts(scope);
  const models = new Set();
  pool.forEach((product) => {
    const entry = product.compatibility.find((item) => item.brand === vehicleBrand);
    entry?.models.forEach((model) => models.add(model));
  });
  return Array.from(models).sort();
}

export function getAvailableCategories({ vehicleBrand, model } = {}) {
  const categoryIds = new Set();
  products.forEach((product) => {
    if (productMatchesVehicle(product, vehicleBrand, model)) categoryIds.add(product.category);
  });
  return categories.filter((category) => categoryIds.has(category.id));
}

export function getAvailableSubcategories({ category, vehicleBrand, model } = {}) {
  const pool = scopedProducts({ category });
  const subcategories = new Set();
  pool.forEach((product) => {
    if (productMatchesVehicle(product, vehicleBrand, model)) subcategories.add(product.subcategory);
  });
  return Array.from(subcategories).sort();
}

export function getAvailableProductBrands({ vehicleBrand, model, category, subcategory } = {}) {
  const pool = scopedProducts({ category }).filter(
    (product) =>
      productMatchesVehicle(product, vehicleBrand, model) &&
      (!subcategory || product.subcategory === subcategory)
  );
  const brands = new Set();
  pool.forEach((product) => {
    if (product.productBrand) brands.add(product.productBrand);
  });
  return Array.from(brands).sort();
}

export function filterProducts({
  vehicleBrand,
  model,
  category,
  subcategory,
  productBrand,
  priceMin,
  priceMax,
} = {}) {
  return products.filter((product) => {
    if (!productMatchesVehicle(product, vehicleBrand, model)) return false;
    if (category && product.category !== category) return false;
    if (subcategory && product.subcategory !== subcategory) return false;
    if (productBrand && product.productBrand !== productBrand) return false;
    if (priceMin !== undefined && priceMin !== null && product.priceNio < priceMin) return false;
    if (priceMax !== undefined && priceMax !== null && product.priceNio > priceMax) return false;
    return true;
  });
}

export function sortProducts(list, sortKey) {
  const sorted = [...list];
  switch (sortKey) {
    case 'price-asc':
      return sorted.sort((a, b) => a.priceNio - b.priceNio);
    case 'price-desc':
      return sorted.sort((a, b) => b.priceNio - a.priceNio);
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name, 'es'));
    case 'featured':
    default:
      return sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
  }
}

export function searchProducts(query) {
  const term = query.trim().toLowerCase();
  if (!term) return [];
  return products.filter((product) => {
    const categoryName = getCategoryById(product.category)?.name ?? '';
    const compatText = product.compatibility
      .map((entry) => `${entry.brand} ${entry.models.join(' ')}`)
      .join(' ');
    const haystack = [
      product.name,
      product.sku,
      product.oemCode,
      product.productBrand,
      categoryName,
      product.subcategory,
      product.description,
      compatText,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    return haystack.includes(term);
  });
}

// Prioridad: 1) mismo modelo, 2) misma marca de vehículo, 3) misma
// categoría, 4) productos universales relevantes de la misma categoría.
export function getRelatedProducts(product, limit = 4) {
  const candidates = products.filter((item) => item.id !== product.id);

  function score(item) {
    const sharesModel = product.compatibility.some((pEntry) =>
      item.compatibility.some(
        (iEntry) => iEntry.brand === pEntry.brand && iEntry.models.some((m) => pEntry.models.includes(m))
      )
    );
    if (sharesModel) return 3;

    const sharesBrand = product.compatibility.some((pEntry) =>
      item.compatibility.some((iEntry) => iEntry.brand === pEntry.brand)
    );
    if (sharesBrand) return 2;

    if (item.category === product.category) return 1;
    return 0;
  }

  return candidates
    .map((item) => ({ item, score: score(item) }))
    .filter(({ score: s }) => s > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);
}
