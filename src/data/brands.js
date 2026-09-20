// Marcas soportadas por el sitio. Para agregar una marca nueva basta con
// añadir un objeto aquí: ningún componente necesita cambios adicionales.
export const brands = [
  { id: 'honda', name: 'Honda' },
  { id: 'polaris', name: 'Polaris' },
  { id: 'can-am', name: 'Can-Am' },
  { id: 'yamaha', name: 'Yamaha' },
  { id: 'kawasaki', name: 'Kawasaki' },
  { id: 'suzuki', name: 'Suzuki' },
];

export function getBrandById(id) {
  return brands.find((brand) => brand.id === id) ?? null;
}
