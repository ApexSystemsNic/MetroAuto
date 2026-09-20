import { brands } from '../data/brands';

// Fábrica de servicio de catálogo. Recibe una lista plana de productos
// (repuestos o mantenimiento) y expone getters de filtrado en cascada.
// Los filtros solo devuelven opciones que existen realmente en `products`,
// para que la navegación siempre refleje el inventario disponible.
export function createCatalogService(products, categories) {
  function getAll() {
    return products;
  }

  function getById(id) {
    return products.find((product) => product.id === id) ?? null;
  }

  function filter({ brand, category, model } = {}) {
    return products.filter((product) => {
      if (brand && product.brand !== brand) return false;
      if (category && product.category !== category) return false;
      if (model && !product.models.includes(model)) return false;
      return true;
    });
  }

  // Marcas que tienen al menos un producto registrado.
  function getAvailableBrands() {
    const brandIds = new Set(products.map((product) => product.brand));
    return brands.filter((brand) => brandIds.has(brand.id));
  }

  // Categorías disponibles para una marca dada (o todas si no se indica marca).
  function getAvailableCategories(brand) {
    const scoped = brand ? products.filter((product) => product.brand === brand) : products;
    const categoryIds = new Set(scoped.map((product) => product.category));
    return categories.filter((category) => categoryIds.has(category.id));
  }

  // Modelos disponibles para una marca/categoría dada.
  function getAvailableModels(brand, category) {
    const scoped = products.filter((product) => {
      if (brand && product.brand !== brand) return false;
      if (category && product.category !== category) return false;
      return true;
    });
    const models = new Set();
    scoped.forEach((product) => product.models.forEach((model) => models.add(model)));
    return Array.from(models).sort();
  }

  function getRelated(product, limit = 4) {
    return products
      .filter(
        (item) =>
          item.id !== product.id &&
          (item.brand === product.brand || item.category === product.category)
      )
      .slice(0, limit);
  }

  function search(query) {
    const term = query.trim().toLowerCase();
    if (!term) return [];
    return products.filter((product) => {
      const haystack = [
        product.name,
        product.sku,
        product.oemCode,
        product.brand,
        product.category,
        product.subcategory,
        ...(product.models ?? []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(term);
    });
  }

  return {
    getAll,
    getById,
    filter,
    getAvailableBrands,
    getAvailableCategories,
    getAvailableModels,
    getRelated,
    search,
  };
}
