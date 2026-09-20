import Button from '../../../components/common/Button';
import Container from '../../../components/common/Container';
import Icon from '../../../components/common/Icon';
import { businessConfig, buildWhatsAppUrl } from '../../../config/business';
import heroImage from '../../../assets/images/hero-utv.webp';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <img
        src={heroImage}
        alt="UTV MetroParts en terreno off-road"
        className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(4,11,35,0.97) 0%, rgba(7,21,61,0.9) 35%, rgba(7,21,61,0.55) 60%, rgba(7,21,61,0.25) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(0deg, rgba(4,11,35,0.85) 0%, transparent 35%)' }}
      />

      <Container className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
            {businessConfig.city}
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red">MetroParts Nicaragua</p>

          <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl">
            Repuestos, accesorios y soluciones para tu UTV
          </h1>

          <p className="mt-5 text-balance text-white/75">
            Encuentra repuestos, accesorios, equipamiento y productos especializados para mantener tu vehículo
            listo para cualquier terreno.
          </p>

          <p className="mt-2 text-sm font-semibold text-white/60">{businessConfig.slogan}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/productos" variant="accent" size="lg">
              Explorar productos
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
            <Button to="/utv" variant="outlineLight" size="lg">
              Ver UTV
            </Button>
          </div>

          <div className="mt-4">
            <Button
              href={buildWhatsAppUrl(`Hola ${businessConfig.shortName}, me gustaría más información sobre sus productos.`)}
              variant="whatsapp"
              size="md"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
