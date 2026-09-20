import Button from '../../../components/common/Button';
import Container from '../../../components/common/Container';
import Icon from '../../../components/common/Icon';
import { siteInfo, buildWhatsAppUrl } from '../../../data/siteInfo';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-bg">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 55% at 80% 20%, rgba(18,107,255,0.16) 0%, transparent 60%), radial-gradient(50% 45% at 10% 85%, rgba(229,27,35,0.14) 0%, transparent 60%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(120deg, #fff 0px, #fff 1px, transparent 1px, transparent 90px)',
        }}
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
            Managua, Nicaragua
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            METRO<span className="text-blue">AUTOS</span> <span className="block text-white/90">NICARAGUA</span>
          </h1>

          <p className="mt-4 text-lg font-semibold text-red sm:text-xl">
            UTV, REPUESTOS Y MANTENIMIENTO
          </p>

          <p className="mt-5 max-w-lg text-balance text-text-secondary">
            Potencia, repuestos y soluciones para mantener tu vehículo listo para cualquier terreno.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/utv" variant="primary" size="lg">
              Ver UTV
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
            <Button to="/repuestos" variant="accent" size="lg">
              Buscar repuestos
            </Button>
          </div>

          <div className="mt-4">
            <Button
              href={buildWhatsAppUrl(`Hola, me gustaría más información sobre los productos de ${siteInfo.name}.`)}
              variant="whatsapp"
              size="md"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Consultar por WhatsApp
            </Button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <HeroGraphic />
        </div>
      </Container>
    </section>
  );
}

function HeroGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue/20 via-transparent to-red/20 blur-2xl" />
      <svg viewBox="0 0 400 400" className="relative h-full w-full" aria-hidden="true">
        <circle cx="200" cy="200" r="170" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(18,107,255,0.25)" strokeWidth="1.5" />
        {/* Silueta simplificada de un UTV visto de perfil */}
        <g stroke="#126BFF" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M90 250 L120 200 L170 190 L200 165 L260 165 L290 195 L320 200 L320 250" />
          <path d="M320 250 L90 250" stroke="#E51B23" />
        </g>
        <circle cx="140" cy="255" r="26" fill="none" stroke="#fff" strokeWidth="4" />
        <circle cx="290" cy="255" r="26" fill="none" stroke="#fff" strokeWidth="4" />
        <path d="M40 300 Q200 320 360 300" stroke="rgba(255,255,255,0.08)" strokeWidth="10" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
