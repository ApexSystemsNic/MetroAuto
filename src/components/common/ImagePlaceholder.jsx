import Icon from './Icon';

// El catálogo PDF exporta cada página como una sola imagen compuesta (no
// contiene fotografías de producto por separado para extraer), así que
// este marcador visual identifica el producto por categoría en fondo claro
// (object-fit: contain, sin recortar el artículo) hasta contar con
// fotografías individuales reales.
export default function ImagePlaceholder({ icon = 'box', label, className = '', showCatalogHint = false }) {
  return (
    <div className={`relative flex flex-col items-center justify-center overflow-hidden bg-bg-light ${className}`}>
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white ring-1 ring-border">
        <Icon name={icon} className="h-8 w-8 text-navy" strokeWidth={1.5} />
      </div>
      {label ? (
        <span className="relative mt-3 px-4 text-center text-xs font-medium text-text-secondary">{label}</span>
      ) : null}
      {showCatalogHint ? (
        <span className="absolute left-2 top-2 rounded bg-white px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-text-secondary ring-1 ring-border">
          Foto en catálogo PDF
        </span>
      ) : null}
    </div>
  );
}
