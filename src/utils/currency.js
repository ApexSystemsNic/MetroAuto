import { currencyConfig } from '../config/currency';

export function nioToUsd(nio) {
  return nio / currencyConfig.nioPerUsd;
}

export function usdToNio(usd) {
  return usd * currencyConfig.nioPerUsd;
}

const nioFormatter = new Intl.NumberFormat('es-NI', {
  style: 'currency',
  currency: 'NIO',
  currencyDisplay: 'narrowSymbol',
  minimumFractionDigits: 2,
});

const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export function formatNio(nio) {
  // Intl usa "C$" para NIO en es-NI; se normaliza por si el runtime da "NIO".
  return nioFormatter.format(nio).replace('NIO', 'C$');
}

export function formatUsd(usd) {
  return usdFormatter.format(usd).replace('$', 'US$');
}
