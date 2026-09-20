import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Container from '../../components/common/Container';
import Breadcrumb from '../../components/common/Breadcrumb';
import Gallery from '../../components/common/Gallery';
import TechnicalSpecs from '../../components/common/TechnicalSpecs';
import PriceDisplay from '../../components/common/PriceDisplay';
import Icon from '../../components/common/Icon';
import UTVGrid from '../../components/utv/UTVGrid';
import { useSeo } from '../../hooks/useSeo';
import { getUTVBySlug, getRelatedUTVs } from '../../services/utvService';
import { getVehicleBrandById } from '../../data/vehicleBrands';
import { whatsAppUrlForUTV } from '../../utils/whatsapp';

const availabilityLabels = {
  disponible: { label: 'Disponible', className: 'bg-green-50 text-green-700 ring-1 ring-green-200' },
  'pocas-unidades': { label: 'Pocas unidades', className: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200' },
  agotado: { label: 'Agotado', className: 'bg-gray-light text-text-secondary ring-1 ring-border' },
};

export default function UTVDetail() {
  const { slug } = useParams();
  const utv = getUTVBySlug(slug);

  useSeo(
    utv ? `${getVehicleBrandById(utv.vehicleBrand)?.name} ${utv.model} | MetroParts Nicaragua` : 'UTV | MetroParts Nicaragua',
    utv?.description
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!utv) return <Navigate to="/utv" replace />;

  const brand = getVehicleBrandById(utv.vehicleBrand);
  const availability = availabilityLabels[utv.availability];
  const related = getRelatedUTVs(utv);

  const specs = {
    Motor: utv.engine,
    Cilindraje: utv.displacement,
    Potencia: utv.power,
    Transmisión: utv.transmission,
    Tracción: utv.drivetrain,
    Suspensión: utv.suspension,
    Capacidad: utv.capacity ? `${utv.capacity} pasajeros` : undefined,
    Combustible: utv.fuel,
    Peso: utv.weight,
    Dimensiones: utv.dimensions,
  };

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumb
        items={[
          { label: 'Inicio', to: '/' },
          { label: 'UTV', to: '/utv' },
          { label: `${brand?.name} ${utv.model}` },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Gallery images={utv.images} icon="truck" title={`${brand?.name} ${utv.model}`} />

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-red">{brand?.name}</span>
            {availability ? (
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${availability.className}`}>
                {availability.label}
              </span>
            ) : null}
            <span className="rounded-full bg-bg-light px-2.5 py-1 text-xs font-semibold text-text-secondary">
              {utv.condition}
            </span>
          </div>

          <h1 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            {utv.model} <span className="text-text-secondary font-semibold">· {utv.year}</span>
          </h1>

          <p className="mt-4 text-text-secondary">{utv.description}</p>

          {utv.features?.length ? (
            <ul className="mt-5 space-y-2">
              {utv.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-text">
                  <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-6">
            <PriceDisplay priceNio={utv.priceNio} size="lg" showRate />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsAppUrlForUTV(utv)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-600"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-lg font-bold text-navy">Ficha técnica</h2>
        <TechnicalSpecs specs={specs} />
      </div>

      {related.length > 0 ? (
        <div className="mt-14">
          <h2 className="mb-5 text-lg font-bold text-navy">UTV relacionados</h2>
          <UTVGrid utvs={related} />
        </div>
      ) : null}
    </Container>
  );
}
