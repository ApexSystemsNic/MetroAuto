import Icon from './Icon';

export default function EmptyState({
  title = 'No hay resultados',
  description = 'Intenta ajustar los filtros o buscar con otros términos.',
  icon = 'box',
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card/50 px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-text-secondary">
        <Icon name={icon} className="h-7 w-7" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-text-secondary">{description}</p>
    </div>
  );
}
