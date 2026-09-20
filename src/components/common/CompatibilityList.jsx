import Icon from './Icon';
import { getBrandById } from '../../data/brands';

export default function CompatibilityList({ brand, models = [], years = [] }) {
  const brandName = getBrandById(brand)?.name;

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-text-secondary">Compatibilidad</h3>
      <ul className="space-y-2">
        {models.map((model) => (
          <li key={model} className="flex items-center gap-2 text-sm text-white">
            <Icon name="check" className="h-4 w-4 flex-shrink-0 text-green-400" />
            {brandName} {model}
          </li>
        ))}
      </ul>
      {years.length > 0 ? (
        <p className="mt-3 text-xs text-text-secondary">
          Años: {years.join(', ')}
        </p>
      ) : null}
    </div>
  );
}
