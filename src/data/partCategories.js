// Categorías de repuestos. Agregar una categoría nueva es agregar un objeto.
export const partCategories = [
  { id: 'motor', name: 'Motor' },
  { id: 'transmision', name: 'Transmisión' },
  { id: 'filtros', name: 'Filtros' },
  { id: 'frenos', name: 'Frenos' },
  { id: 'suspension', name: 'Suspensión' },
  { id: 'direccion', name: 'Dirección' },
  { id: 'electrico', name: 'Sistema eléctrico' },
  { id: 'rodamientos', name: 'Rodamientos' },
  { id: 'correas', name: 'Correas' },
  { id: 'bujias', name: 'Bujías' },
  { id: 'ejes', name: 'Ejes' },
  { id: 'carroceria', name: 'Partes de carrocería' },
  { id: 'accesorios', name: 'Accesorios' },
];

export function getPartCategoryById(id) {
  return partCategories.find((category) => category.id === id) ?? null;
}
