import Container from '../../../components/common/Container';
import Button from '../../../components/common/Button';
import Icon from '../../../components/common/Icon';
import { businessConfig } from '../../../config/business';

const points = [
  { icon: 'shield', text: 'Compatibilidad correcta por marca y modelo' },
  { icon: 'box', text: 'Catálogo real, actualizado desde nuestra lista de precios 2025' },
  { icon: 'whatsapp', text: 'Atención personalizada por WhatsApp' },
];

export default function AboutPreview() {
  return (
    <section className="border-t border-border bg-navy py-16 sm:py-20">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red">Sobre MetroParts</p>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{businessConfig.name}</h2>
          <p className="mt-1 text-sm font-semibold text-white/60">{businessConfig.slogan}</p>
          <p className="mt-4 text-white/75">
            MetroParts trabaja con repuestos, accesorios, equipamiento y productos de mantenimiento para
            vehículos UTV y off-road.
          </p>
          <Button to="/nosotros" variant="outlineLight" className="mt-6">
            Conocer más
          </Button>
        </div>

        <ul className="space-y-4">
          {points.map((point) => (
            <li key={point.text} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red/15 text-red">
                <Icon name={point.icon} className="h-5 w-5" />
              </div>
              <span className="text-sm text-white">{point.text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
