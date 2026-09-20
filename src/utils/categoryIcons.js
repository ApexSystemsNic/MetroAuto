// Ícono representativo por categoría (y, cuando ayuda, por subcategoría),
// usado en los marcadores de imagen mientras no existan fotografías
// individuales para cada producto.
const categoryIconMap = {
  iluminacion: 'bolt',
  audio: 'speaker',
  recuperacion: 'winch',
  'utv-accesorios': 'truck',
  mantenimiento: 'wrench',
  trailer: 'trailer',
  performance: 'gauge',
  electrico: 'bolt',
};

const subcategoryIconMap = {
  'Filtros de aire': 'shield',
  'Cámaras': 'search',
  Radios: 'speaker',
  Winches: 'winch',
};

export function getCategoryIcon(categoryId, subcategory) {
  return subcategoryIconMap[subcategory] ?? categoryIconMap[categoryId] ?? 'box';
}
