import Icon from '../common/Icon';
import { businessConfig } from '../../config/business';

// Mapa interactivo de la ubicación oficial. Usa el Google Maps Embed que
// se configure en businessConfig.googleMaps.embedUrl; mientras ese dato no
// esté disponible (ver nota en config/business.js) se muestra un estado
// preparado con el enlace oficial como acción principal, en vez de un
// marcador aproximado o coordenadas inventadas.
export default function LocationMap({ className = '' }) {
  const { googleMaps, name } = businessConfig;

  return (
    <div className={`overflow-hidden rounded-2xl border border-border ${className}`}>
      {googleMaps.embedUrl ? (
        <iframe
          title={`Ubicación de ${name}`}
          src={googleMaps.embedUrl}
          className="h-[300px] w-full border-0 sm:h-[380px] lg:h-[440px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="flex h-[300px] w-full flex-col items-center justify-center gap-3 bg-bg-light px-6 text-center sm:h-[380px] lg:h-[440px]">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/10 text-navy">
            <Icon name="mapPin" className="h-7 w-7" />
          </div>
          <div>
            <p className="font-semibold text-text">{businessConfig.city}</p>
            <p className="mt-1 max-w-xs text-sm text-text-secondary">
              Mapa interactivo disponible próximamente. Usa el enlace oficial de Google Maps para llegar.
            </p>
          </div>
          <a
            href={googleMaps.shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
          >
            Cómo llegar
            <Icon name="externalLink" className="h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  );
}
