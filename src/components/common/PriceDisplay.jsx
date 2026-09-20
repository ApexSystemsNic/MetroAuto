import { nioToUsd, formatNio, formatUsd } from '../../utils/currency';
import { currencyConfig } from '../../config/currency';

// Componente único de precio: formatea C$, calcula y muestra US$, y expone
// la tasa utilizada. Ningún otro componente debe convertir moneda por su
// cuenta.
export default function PriceDisplay({ priceNio, size = 'md', showRate = false, className = '' }) {
  if (priceNio === null || priceNio === undefined) {
    return <span className={`font-bold text-navy ${className}`}>Consultar precio</span>;
  }

  const sizes = {
    sm: { primary: 'text-base', secondary: 'text-xs' },
    md: { primary: 'text-xl', secondary: 'text-sm' },
    lg: { primary: 'text-3xl', secondary: 'text-base' },
  };
  const sizing = sizes[size] ?? sizes.md;

  return (
    <div className={className}>
      <p className={`font-extrabold text-navy ${sizing.primary}`}>{formatNio(priceNio)}</p>
      <p className={`font-medium text-text-secondary ${sizing.secondary}`}>{formatUsd(nioToUsd(priceNio))}</p>
      {showRate ? (
        <p className="mt-1 text-xs text-text-secondary">
          Tipo de cambio utilizado: C${currencyConfig.nioPerUsd.toFixed(2)} = US$1
        </p>
      ) : null}
    </div>
  );
}
