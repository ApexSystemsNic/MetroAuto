// Marcas de VEHÍCULO (no confundir con marca de producto/fabricante,
// ver src/data/products.js -> productBrand). Añadir una marca nueva es
// agregar un objeto aquí; los filtros solo muestran las que tengan
// productos reales (ver services/catalogService.getAvailableVehicleBrands).
export const vehicleBrands = [
  { id: 'polaris', name: 'Polaris' },
  { id: 'can-am', name: 'Can-Am' },
  { id: 'honda', name: 'Honda' },
  // Preparadas para cuando exista inventario compatible; no se muestran
  // en la web mientras no tengan productos asociados.
  { id: 'yamaha', name: 'Yamaha' },
  { id: 'kawasaki', name: 'Kawasaki' },
  { id: 'suzuki', name: 'Suzuki' },
  { id: 'cfmoto', name: 'CFMoto' },
  { id: 'segway', name: 'Segway' },
];

export function getVehicleBrandById(id) {
  return vehicleBrands.find((brand) => brand.id === id) ?? null;
}
