import Icon from './Icon';
import { siteInfo } from '../../data/siteInfo';

export default function LocationCard({ className = '' }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-border bg-card ${className}`}>
      {siteInfo.mapsEmbedUrl ? (
        <iframe
          title="Ubicación de MetroAutos Nicaragua"
          src={siteInfo.mapsEmbedUrl}
          className="h-64 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex h-64 w-full flex-col items-center justify-center gap-3 bg-bg-secondary text-center">
          <Icon name="mapPin" className="h-8 w-8 text-red" />
          <div>
            <p className="font-semibold text-white">{siteInfo.city}</p>
            <p className="text-xs text-text-secondary">Mapa disponible próximamente</p>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">{siteInfo.name}</p>
          <p className="text-sm text-text-secondary">{siteInfo.address || siteInfo.city}</p>
        </div>
        {siteInfo.mapsUrl ? (
          <a
            href={siteInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-white"
          >
            Cómo llegar
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </div>
  );
}
