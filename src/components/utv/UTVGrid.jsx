import UTVCard from './UTVCard';
import EmptyState from '../common/EmptyState';

export default function UTVGrid({ utvs, emptyTitle, emptyDescription, onClearFilters }) {
  if (utvs.length === 0) {
    return (
      <EmptyState
        icon="truck"
        title={emptyTitle ?? 'Por el momento no tenemos UTV en venta.'}
        description={
          emptyDescription ?? 'Escríbenos por WhatsApp y te avisamos en cuanto tengamos unidades disponibles.'
        }
        onClearFilters={onClearFilters}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {utvs.map((utv) => (
        <UTVCard key={utv.slug} utv={utv} />
      ))}
    </div>
  );
}
