import { Link } from 'react-router-dom';
import ImagePlaceholder from '../common/ImagePlaceholder';
import PriceDisplay from '../common/PriceDisplay';
import Icon from '../common/Icon';
import { getVehicleBrandById } from '../../data/vehicleBrands';
import { whatsAppUrlForUTV } from '../../utils/whatsapp';

const availabilityLabels = {
  disponible: { label: 'Disponible', className: 'bg-green-50 text-green-700 ring-1 ring-green-200' },
  'pocas-unidades': { label: 'Pocas unidades', className: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200' },
  agotado: { label: 'Agotado', className: 'bg-gray-light text-text-secondary ring-1 ring-border' },
};

export default function UTVCard({ utv }) {
  const brand = getVehicleBrandById(utv.vehicleBrand);
  const availability = availabilityLabels[utv.availability];
  const detailPath = `/utv/${utv.slug}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:border-navy/30 hover:shadow-lg">
      <Link to={detailPath} className="block">
        <ImagePlaceholder icon="truck" label={`${brand?.name} ${utv.model}`} className="aspect-[4/3] w-full" showCatalogHint />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-red">{brand?.name}</span>
          {availability ? (
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${availability.className}`}>
              {availability.label}
            </span>
          ) : null}
        </div>

        <Link to={detailPath}>
          <h3 className="text-lg font-bold leading-snug text-text group-hover:text-navy">
            {utv.model} <span className="text-text-secondary font-medium">· {utv.year}</span>
          </h3>
        </Link>

        <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-text-secondary">
          <li>
            Motor: <span className="text-text">{utv.engine}</span>
          </li>
          <li>
            Transmisión: <span className="text-text">{utv.transmission}</span>
          </li>
          <li>
            Condición: <span className="text-text">{utv.condition}</span>
          </li>
        </ul>

        <div className="mt-auto pt-2">
          <PriceDisplay priceNio={utv.priceNio} size="sm" />
        </div>

        <div className="flex gap-2 pt-1">
          <Link
            to={detailPath}
            className="flex-1 rounded-lg border border-border py-2.5 text-center text-xs font-semibold text-navy transition-colors hover:border-navy"
          >
            Ver detalles
          </Link>
          <a
            href={whatsAppUrlForUTV(utv)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-green-500 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-green-600"
          >
            <Icon name="whatsapp" className="h-3.5 w-3.5" />
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}
