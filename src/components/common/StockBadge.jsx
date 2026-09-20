import { getStockStatus, getStockLabel, STOCK_STATUS } from '../../utils/stock';

const styles = {
  [STOCK_STATUS.AVAILABLE]: 'bg-green-50 text-green-700 ring-1 ring-green-200',
  [STOCK_STATUS.LOW]: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
  [STOCK_STATUS.OUT]: 'bg-gray-light text-text-secondary ring-1 ring-border',
  [STOCK_STATUS.UNKNOWN]: 'bg-navy/5 text-navy ring-1 ring-navy/15',
};

const dotStyles = {
  [STOCK_STATUS.AVAILABLE]: 'bg-green-500',
  [STOCK_STATUS.LOW]: 'bg-amber-500',
  [STOCK_STATUS.OUT]: 'bg-text-secondary',
  [STOCK_STATUS.UNKNOWN]: 'bg-navy',
};

export default function StockBadge({ stock, showCount = true, className = '' }) {
  const status = getStockStatus(stock);
  const label = getStockLabel(stock);

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[status]}`} />
      {label}
      {showCount && (status === STOCK_STATUS.AVAILABLE || status === STOCK_STATUS.LOW) ? ` · ${stock} u.` : ''}
    </span>
  );
}
