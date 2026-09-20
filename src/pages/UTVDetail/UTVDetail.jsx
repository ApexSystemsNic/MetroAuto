import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Container from '../../components/common/Container';
import Breadcrumb from '../../components/common/Breadcrumb';
import Gallery from '../../components/common/Gallery';
import TechnicalSpecs from '../../components/common/TechnicalSpecs';
import Icon from '../../components/common/Icon';
import Button from '../../components/common/Button';
import UTVGrid from '../../components/utv/UTVGrid';
import { useSeo } from '../../hooks/useSeo';
import { getUTVById, getRelatedUTVs } from '../../services/utvService';
import { getBrandById } from '../../data/brands';
import { formatPrice } from '../../utils/format';
import { whatsAppUrlForUTV } from '../../utils/whatsapp';

const availabilityLabels = {
  disponible: { label: 'Disponible', className: 'bg-green-500/10 text-green-400 ring-1 ring-green-500/30' },
  'pocas-unidades': { label: 'Pocas unidades', className: 'bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30' },
  agotado: { label: 'Agotado', className: 'bg-white/5 text-text-secondary ring-1 ring-white/10' },
};

export default function UTVDetail() {
  const { id } = useParams();
  const utv = getUTVById(id);

  useSeo(
    utv ? `${getBrandById(utv.brand)?.name} ${utv.model} | MetroAutos Nicaragua` : 'UTV | MetroAutos Nicaragua',
    utv ? utv.description : undefined
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!utv) return <Navigate to="/utv" replace />;

  const brand = getBrandById(utv.brand);
  const availability = availabilityLabels[utv.availability];
  const related = getRelatedUTVs(utv);

  const specs = {
    Motor: utv.engine,
    Cilindraje: utv.displacement,
    Potencia: utv.power,
    Transmisión: utv.transmission,
    Tracción: utv.drivetrain,
    Suspensión: utv.suspension,
    Capacidad: `${utv.capacity} pasajeros`,
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
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${availability?.className}`}>
              {availability?.label}
            </span>
            <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-semibold text-text-secondary">
              {utv.condition}
            </span>
          </div>

          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {utv.model} <span className="text-text-secondary font-semibold">· {utv.year}</span>
          </h1>

          <p className="mt-4 text-text-secondary">{utv.description}</p>

          {utv.features?.length ? (
            <ul className="mt-5 space-y-2">
              {utv.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-white">
                  <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                  {feature}
                </li>
              ))}
            </ul>
          ) : null}

          <p className="mt-6 text-2xl font-bold text-white">{formatPrice(utv.price)}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsAppUrlForUTV(utv)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition-colors hover:bg-green-600"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Consultar por WhatsApp
            </a>
            <Button to="/contacto" variant="outline">
              Solicitar información
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-lg font-bold text-white">Ficha técnica</h2>
        <TechnicalSpecs specs={specs} />
      </div>

      {related.length > 0 ? (
        <div className="mt-14">
          <h2 className="mb-5 text-lg font-bold text-white">UTV relacionados</h2>
          <UTVGrid utvs={related} />
        </div>
      ) : null}
    </Container>
  );
}
