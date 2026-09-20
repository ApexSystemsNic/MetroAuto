import Container from '../../components/common/Container';
import Breadcrumb from '../../components/common/Breadcrumb';
import Icon from '../../components/common/Icon';
import LocationMap from '../../components/maps/LocationMap';
import WhatsAppButton from '../../components/common/WhatsAppButton';
import { useSeo } from '../../hooks/useSeo';
import { businessConfig } from '../../config/business';

export default function Location() {
  useSeo(
    'Ubicación | MetroParts Nicaragua',
    'Encuentra a MetroParts Nicaragua. Mapa interactivo y enlace oficial de Google Maps para llegar.'
  );

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumb items={[{ label: 'Inicio', to: '/' }, { label: 'Ubicación' }]} />

      <div className="mt-4 mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red">Visítanos</p>
        <h1 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">{businessConfig.name}</h1>
        <p className="mt-2 max-w-2xl text-text-secondary">
          {businessConfig.googleMaps.address ?? businessConfig.city}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <div className="space-y-5">
          <div className="flex items-center gap-3 rounded-xl border border-border bg-white p-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
              <Icon name="mapPin" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-text-secondary">Ubicación</p>
              <p className="font-semibold text-text">{businessConfig.googleMaps.address ?? businessConfig.city}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-white p-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
              <Icon name="phone" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-text-secondary">Teléfono</p>
              <a href={`tel:${businessConfig.contact.whatsapp}`} className="font-semibold text-text hover:text-navy">
                {businessConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-white p-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red/10 text-red">
              <Icon name="instagram" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-text-secondary">Instagram</p>
              <a
                href={businessConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-text hover:text-navy"
              >
                {businessConfig.instagram.username}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={businessConfig.googleMaps.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-dark"
            >
              Cómo llegar
              <Icon name="externalLink" className="h-4 w-4" />
            </a>
            <WhatsAppButton />
          </div>
        </div>

        <LocationMap />
      </div>
    </Container>
  );
}
