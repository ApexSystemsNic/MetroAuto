import Container from '../../../components/common/Container';
import SectionHeading from '../../../components/common/SectionHeading';
import LocationMap from '../../../components/maps/LocationMap';
import Icon from '../../../components/common/Icon';
import WhatsAppButton from '../../../components/common/WhatsAppButton';
import { businessConfig } from '../../../config/business';

export default function LocationPreview() {
  return (
    <section className="border-t border-border bg-bg-light py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="Ubicación" title="Visítanos" className="mb-4" />

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-text">
              <Icon name="mapPin" className="h-4 w-4 flex-shrink-0 text-red" />
              {businessConfig.googleMaps.address ?? businessConfig.city}
            </li>
            <li className="flex items-center gap-2 text-text">
              <Icon name="phone" className="h-4 w-4 flex-shrink-0 text-red" />
              {businessConfig.contact.phoneDisplay}
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={businessConfig.googleMaps.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-dark"
            >
              Cómo llegar
              <Icon name="externalLink" className="h-4 w-4" />
            </a>
            <WhatsAppButton />
          </div>
        </div>
        <LocationMap />
      </Container>
    </section>
  );
}
