// Categorías de mantenimiento. Independiente del catálogo de repuestos.
export const maintenanceCategories = [
  { id: 'aceite-motor', name: 'Aceite de motor' },
  { id: 'aceite-transmision', name: 'Aceite de transmisión' },
  { id: 'filtros-aceite', name: 'Filtros de aceite' },
  { id: 'filtros-aire', name: 'Filtros de aire' },
  { id: 'refrigerantes', name: 'Refrigerantes' },
  { id: 'liquido-frenos', name: 'Líquido de frenos' },
  { id: 'grasas', name: 'Grasas' },
  { id: 'lubricantes', name: 'Lubricantes' },
  { id: 'limpiadores', name: 'Limpiadores' },
  { id: 'aditivos', name: 'Aditivos' },
  { id: 'preventivo', name: 'Mantenimiento preventivo' },
];

export function getMaintenanceCategoryById(id) {
  return maintenanceCategories.find((category) => category.id === id) ?? null;
}
