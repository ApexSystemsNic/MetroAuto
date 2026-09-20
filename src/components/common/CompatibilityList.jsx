import Icon from './Icon';
import { getVehicleBrandById } from '../../data/vehicleBrands';

// Compatibilidad del producto: puede ser universal, de una sola marca de
// vehículo (vehicle-specific) o de varias (multi-brand). Ver
// compatibilityType en data/products.js.
export default function CompatibilityList({ compatibilityType, compatibility = [] }) {
  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-text-secondary">Compatibilidad</h3>

      {compatibilityType === 'universal' ? (
        <p className="flex items-center gap-2 text-sm font-medium text-text">
          <Icon name="check" className="h-4 w-4 flex-shrink-0 text-green-600" />
          Universal para UTV
        </p>
      ) : (
        <ul className="space-y-3">
          {compatibility.map((entry) => {
            const brandName = getVehicleBrandById(entry.brand)?.name ?? entry.brand;
            return (
              <li key={entry.brand}>
                <p className="flex items-center gap-2 text-sm font-semibold text-text">
                  <Icon name="check" className="h-4 w-4 flex-shrink-0 text-green-600" />
                  {brandName}
                </p>
                {entry.models.length > 0 ? (
                  <p className="ml-6 mt-1 text-xs text-text-secondary">{entry.models.join(', ')}</p>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
