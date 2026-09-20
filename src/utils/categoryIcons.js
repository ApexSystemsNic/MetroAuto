// Ícono representativo por categoría, usado en los marcadores de imagen.
const iconMap = {
  motor: 'cog',
  transmision: 'cog',
  filtros: 'shield',
  frenos: 'gauge',
  suspension: 'wrench',
  direccion: 'wrench',
  electrico: 'gauge',
  rodamientos: 'cog',
  correas: 'cog',
  bujias: 'gauge',
  ejes: 'wrench',
  carroceria: 'box',
  accesorios: 'star',
  'aceite-motor': 'wrench',
  'aceite-transmision': 'wrench',
  'filtros-aceite': 'shield',
  'filtros-aire': 'shield',
  refrigerantes: 'wrench',
  'liquido-frenos': 'gauge',
  grasas: 'wrench',
  lubricantes: 'wrench',
  limpiadores: 'wrench',
  aditivos: 'wrench',
  preventivo: 'shield',
};

export function getCategoryIcon(categoryId) {
  return iconMap[categoryId] ?? 'box';
}
