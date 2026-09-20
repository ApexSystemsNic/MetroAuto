import Icon from './Icon';
import Button from './Button';
import WhatsAppButton from './WhatsAppButton';

export default function EmptyState({
  title = 'No encontramos productos con estos filtros.',
  description = 'Intenta ajustar los filtros o buscar con otros términos.',
  icon = 'box',
  onClearFilters,
  showWhatsApp = true,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-bg-light px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-text-secondary ring-1 ring-border">
        <Icon name={icon} className="h-7 w-7" />
      </div>
      <h3 className="text-lg font-semibold text-text">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-text-secondary">{description}</p>
      {(onClearFilters || showWhatsApp) ? (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {onClearFilters ? (
            <Button variant="outline" size="sm" onClick={onClearFilters}>
              Limpiar filtros
            </Button>
          ) : null}
          {showWhatsApp ? <WhatsAppButton className="!px-5 !py-2.5 !text-sm" /> : null}
        </div>
      ) : null}
    </div>
  );
}
