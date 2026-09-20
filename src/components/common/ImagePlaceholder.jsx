import Icon from './Icon';

// MetroAutos aún no ha proporcionado fotografías reales para los datos DEMO.
// Este marcador visual evita usar fotos de stock genéricas o engañosas
// mientras se carga el inventario real con sus propias imágenes.
export default function ImagePlaceholder({ icon = 'box', label, className = '', demo = true }) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-bg-secondary via-card to-bg-secondary ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, transparent, transparent 18px, rgba(18,107,255,0.08) 18px, rgba(18,107,255,0.08) 19px)',
        }}
      />
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-red/10 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-blue/10 blur-2xl" />
      <Icon name={icon} className="relative h-10 w-10 text-text-secondary" strokeWidth={1.5} />
      {label ? (
        <span className="relative mt-2 px-3 text-center text-xs font-medium text-text-secondary">
          {label}
        </span>
      ) : null}
      {demo ? (
        <span className="absolute left-2 top-2 rounded bg-black/50 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-text-secondary">
          Imagen referencial
        </span>
      ) : null}
    </div>
  );
}
