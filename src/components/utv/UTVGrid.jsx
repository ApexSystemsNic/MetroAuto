import UTVCard from './UTVCard';
import EmptyState from '../common/EmptyState';

export default function UTVGrid({ utvs }) {
  if (utvs.length === 0) {
    return (
      <EmptyState
        icon="truck"
        title="No hay UTV con esos filtros"
        description="Prueba con otra combinación de marca, modelo, año o disponibilidad."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {utvs.map((utv) => (
        <UTVCard key={utv.id} utv={utv} />
      ))}
    </div>
  );
}
