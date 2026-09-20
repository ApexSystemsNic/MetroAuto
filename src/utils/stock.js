export const STOCK_STATUS = {
  AVAILABLE: 'disponible',
  LOW: 'pocas-unidades',
  OUT: 'agotado',
  UNKNOWN: 'consultar',
};

export function getStockStatus(stock) {
  if (stock === null || stock === undefined) return STOCK_STATUS.UNKNOWN;
  if (stock > 5) return STOCK_STATUS.AVAILABLE;
  if (stock >= 1) return STOCK_STATUS.LOW;
  return STOCK_STATUS.OUT;
}

export function getStockLabel(stock) {
  const status = getStockStatus(stock);
  if (status === STOCK_STATUS.AVAILABLE) return 'Disponible';
  if (status === STOCK_STATUS.LOW) return 'Pocas unidades';
  if (status === STOCK_STATUS.OUT) return 'Agotado';
  return 'Consultar disponibilidad';
}
