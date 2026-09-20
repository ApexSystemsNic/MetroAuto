export function formatPrice(price) {
  if (price === null || price === undefined) return 'Consultar precio';
  return new Intl.NumberFormat('es-NI', { style: 'currency', currency: 'USD' }).format(price);
}
