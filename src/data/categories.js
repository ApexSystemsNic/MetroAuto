// Categorías del catálogo, derivadas del contenido real de
// Catalogo2025metroparts.pdf. La subcategoría de cada producto (ver
// products.js) refina esta clasificación y es lo que usa la página de
// Mantenimiento para su propio flujo Marca -> Modelo -> Producto.
export const categories = [
  { id: 'iluminacion', name: 'Iluminación', icon: 'bolt' },
  { id: 'audio', name: 'Audio', icon: 'speaker' },
  { id: 'recuperacion', name: 'Recuperación y Winches', icon: 'winch' },
  { id: 'utv-accesorios', name: 'UTV / Accesorios', icon: 'truck' },
  { id: 'mantenimiento', name: 'Mantenimiento', icon: 'wrench' },
  { id: 'trailer', name: 'Trailer', icon: 'trailer' },
  { id: 'performance', name: 'Performance', icon: 'gauge' },
  { id: 'electrico', name: 'Eléctrico', icon: 'bolt' },
];

export function getCategoryById(id) {
  return categories.find((category) => category.id === id) ?? null;
}
