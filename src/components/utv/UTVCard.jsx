import { Link } from 'react-router-dom';
import ImagePlaceholder from '../common/ImagePlaceholder';
import Icon from '../common/Icon';
import { getBrandById } from '../../data/brands';
import { formatPrice } from '../../utils/format';
import { whatsAppUrlForUTV } from '../../utils/whatsapp';

const availabilityLabels = {
  disponible: { label: 'Disponible', className: 'bg-green-500/10 text-green-400 ring-1 ring-green-500/30' },
  'pocas-unidades': { label: 'Pocas unidades', className: 'bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30' },
  agotado: { label: 'Agotado', className: 'bg-white/5 text-text-secondary ring-1 ring-white/10' },
};

export default function UTVCard({ utv }) {
  const brand = getBrandById(utv.brand);
  const availability = availabilityLabels[utv.availability];

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-red/40 hover:shadow-xl hover:shadow-black/40">
      <Link to={`/utv/${utv.id}`} className="block">
        <ImagePlaceholder icon="truck" label={`${brand?.name} ${utv.model}`} className="aspect-[4/3] w-full" />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-red">{brand?.name}</span>
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${availability?.className}`}>
            {availability?.label}
          </span>
        </div>

        <Link to={`/utv/${utv.id}`}>
          <h3 className="text-lg font-bold leading-snug text-white group-hover:text-red">
            {utv.model} <span className="text-text-secondary font-medium">· {utv.year}</span>
          </h3>
        </Link>

        <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-text-secondary">
          <li>Motor: <span className="text-white/80">{utv.displacement}</span></li>
          <li>Transmisión: <span className="text-white/80">{utv.transmission.split(' ')[0]}</span></li>
          <li>Tracción: <span className="text-white/80">{utv.drivetrain.split(' ')[0]}</span></li>
          <li>Pasajeros: <span className="text-white/80">{utv.capacity}</span></li>
        </ul>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-base font-bold text-white">{formatPrice(utv.price)}</span>
        </div>

        <div className="flex gap-2 pt-1">
          <Link
            to={`/utv/${utv.id}`}
            className="flex-1 rounded-lg border border-white/15 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:border-red hover:text-red"
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
