import { getStockStatus, getStockLabel, STOCK_STATUS } from '../../utils/stock';

const styles = {
  [STOCK_STATUS.AVAILABLE]: 'bg-green-500/10 text-green-400 ring-1 ring-green-500/30',
  [STOCK_STATUS.LOW]: 'bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30',
  [STOCK_STATUS.OUT]: 'bg-white/5 text-text-secondary ring-1 ring-white/10',
};

export default function StockBadge({ stock, showCount = true, className = '' }) {
  const status = getStockStatus(stock);
  const label = getStockLabel(stock);

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]} ${className}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status === STOCK_STATUS.AVAILABLE
            ? 'bg-green-400'
            : status === STOCK_STATUS.LOW
              ? 'bg-amber-400'
              : 'bg-text-secondary'
        }`}
      />
      {label}
      {showCount && status !== STOCK_STATUS.OUT ? ` · ${stock} u.` : ''}
    </span>
  );
}
